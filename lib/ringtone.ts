const SAMPLE_RATE = 22050;
const GAP_SECONDS = 0.12;
const WORD_GAP_SECONDS = 0.35;

export type RingtoneToken = { ch: string; isSpace?: boolean };

const clipCache = new Map<string, AudioBuffer>();

async function loadClip(ctx: BaseAudioContext, key: string): Promise<AudioBuffer | null> {
  if (clipCache.has(key)) return clipCache.get(key)!;
  try {
    const res = await fetch(`/audio/nato/${key}.wav`);
    if (!res.ok) return null;
    const arrayBuffer = await res.arrayBuffer();
    const buffer = await ctx.decodeAudioData(arrayBuffer);
    clipCache.set(key, buffer);
    return buffer;
  } catch {
    return null;
  }
}

export async function buildRingtoneBlob(tokens: RingtoneToken[]): Promise<Blob | null> {
  const AC: typeof AudioContext = (window.AudioContext || (window as any).webkitAudioContext);
  const probeCtx = new AC();

  const uniqueKeys = Array.from(new Set(tokens.filter(t => !t.isSpace).map(t => t.ch)));
  const buffers = new Map<string, AudioBuffer>();
  for (const key of uniqueKeys) {
    const buf = await loadClip(probeCtx, key);
    if (buf) buffers.set(key, buf);
  }
  await probeCtx.close();

  let totalSeconds = 0.15;
  tokens.forEach((t, i) => {
    if (t.isSpace) {
      totalSeconds += WORD_GAP_SECONDS;
      return;
    }
    const buf = buffers.get(t.ch);
    if (buf) totalSeconds += buf.duration;
    if (i < tokens.length - 1) totalSeconds += GAP_SECONDS;
  });
  if (totalSeconds <= 0.15) return null;

  const totalSamples = Math.ceil(totalSeconds * SAMPLE_RATE);
  const offlineCtx = new OfflineAudioContext(1, totalSamples, SAMPLE_RATE);

  let cursor = 0.05;
  tokens.forEach(t => {
    if (t.isSpace) {
      cursor += WORD_GAP_SECONDS;
      return;
    }
    const buf = buffers.get(t.ch);
    if (!buf) return;
    const src = offlineCtx.createBufferSource();
    src.buffer = buf;
    src.connect(offlineCtx.destination);
    src.start(cursor);
    cursor += buf.duration + GAP_SECONDS;
  });

  const rendered = await offlineCtx.startRendering();
  return encodeWav(rendered);
}

function encodeWav(buffer: AudioBuffer): Blob {
  const numChannels = 1;
  const sampleRate = buffer.sampleRate;
  const samples = buffer.getChannelData(0);
  const blockAlign = numChannels * 2;
  const dataSize = samples.length * 2;
  const arrayBuffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(arrayBuffer);

  const writeString = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
  };

  writeString(0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, 16, true);
  writeString(36, 'data');
  view.setUint32(40, dataSize, true);

  let offset = 44;
  for (let i = 0; i < samples.length; i++, offset += 2) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }

  return new Blob([arrayBuffer], { type: 'audio/wav' });
}
