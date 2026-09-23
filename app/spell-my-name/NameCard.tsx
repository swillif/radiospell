'use client';
import { useState, useMemo, useEffect } from 'react';
import { toPhoneticArray, NATO } from '@/data/alphabets';
import { buildRingtoneBlob, type RingtoneToken } from '@/lib/ringtone';

export default function NameCard() {
  const [name, setName] = useState('');
  const [generating, setGenerating] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const converted = useMemo(() => toPhoneticArray(name), [name]);
  const readout = converted.filter(c => c.type !== 'space').map(c => c.word).join(' · ');

  // Clear any generated audio whenever the name changes
  useEffect(() => {
    setAudioUrl(null);
    setError(null);
  }, [name]);

  const makeRingtone = async () => {
    setGenerating(true);
    setError(null);
    try {
      const tokens: RingtoneToken[] = converted
        .filter(c => c.type === 'letter' || c.type === 'number' || c.type === 'space')
        .map(c => (c.type === 'space' ? { ch: '', isSpace: true } : { ch: c.ch }));
      const blob = await buildRingtoneBlob(tokens);
      if (!blob) { setError('Could not generate audio — try a name with letters or numbers.'); return; }
      setAudioUrl(URL.createObjectURL(blob));
    } catch {
      setError('Something went wrong generating the audio. Please try again.');
    } finally {
      setGenerating(false);
    }
  };

  return (
    <>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name…"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none mb-4 text-lg" autoFocus />
      {name && (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-amber-500 rounded-xl p-8 text-center">
          <div className="text-[10px] font-mono tracking-[0.3em] text-gray-500 uppercase mb-3">RadioSpell.com</div>
          <div className="text-3xl font-bold text-white tracking-wide mb-4">{name.toUpperCase()}</div>
          <div className="flex justify-center gap-3 flex-wrap mb-4">
            {converted.filter(c => c.type === 'letter').map((c, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-lg font-bold font-mono text-amber-500">{c.ch}</span>
                <span className="text-xs text-gray-300">{c.word}</span>
              </div>
            ))}
          </div>
          <div className="font-mono text-xs text-green-400 tracking-wider">{readout}</div>
          <div className="text-[10px] text-gray-600 mt-4">radiospell.com — Never misspell your name again</div>
        </div>
      )}

      {name && (
        <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-5">
          <div className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-2">🎵 New</div>
          <h3 className="font-bold text-gray-800 mb-1">Turn this into a ringtone</h3>
          <p className="text-sm text-gray-600 mb-3">Generate an audio file of your name spelled phonetically — download it and set it as your ringtone or notification sound.</p>

          {!audioUrl && (
            <button
              onClick={makeRingtone}
              disabled={generating}
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-amber-500 text-white hover:bg-amber-600 disabled:opacity-60 transition"
            >
              {generating ? 'Generating…' : '🎵 Generate Audio'}
            </button>
          )}

          {error && <p className="text-sm text-red-600 mt-2">{error}</p>}

          {audioUrl && (
            <div>
              <audio controls src={audioUrl} className="w-full mb-3" />
              <div className="flex flex-wrap gap-2 mb-3">
                <a
                  href={audioUrl}
                  download={`${name.replace(/[^a-z0-9]/gi, '-')}-nato-ringtone.wav`}
                  className="px-4 py-2 rounded-lg text-sm font-semibold bg-amber-500 text-white hover:bg-amber-600 transition"
                >
                  ⬇️ Download WAV
                </a>
                <button onClick={makeRingtone} disabled={generating} className="px-4 py-2 rounded-lg text-sm font-semibold bg-white border border-amber-300 text-amber-700 hover:bg-amber-100 transition">
                  Regenerate
                </button>
              </div>
              <details className="text-xs text-gray-500">
                <summary className="cursor-pointer font-semibold text-gray-600">How do I set this as my ringtone?</summary>
                <p className="mt-2"><strong>Android:</strong> after downloading, go to Settings → Sound → Phone ringtone → browse your Downloads folder and select the file.</p>
                <p className="mt-2"><strong>iPhone:</strong> Safari can't set ringtones directly — Apple requires converting the file to their .m4r format first, typically using GarageBand (free) or a ringtone-maker app, then syncing it in.</p>
              </details>
            </div>
          )}
        </div>
      )}
    </>
  );
}
