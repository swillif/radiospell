'use client';

import { useRef, useState } from 'react';
import { NATO, NATO_NUMBERS, toPhoneticArray } from '@/data/alphabets';

const ROWS = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

export default function CallMode() {
  const [text, setText] = useState('');
  const [autoSpeak, setAutoSpeak] = useState(true);
  const prevLen = useRef(0);

  const converted = toPhoneticArray(text);
  const last = converted.length ? converted[converted.length - 1] : null;

  const speak = (word: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(word);
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
  };

  const speakAll = () => {
    const word = converted.filter(c => c.type !== 'space' && c.type !== 'symbol').map(c => c.word).join(', ');
    if (word) speak(word);
  };

  const wordFor = (ch: string) => NATO[ch] || NATO_NUMBERS[ch] || ch;

  const tap = (ch: string) => {
    setText(t => t + ch);
    prevLen.current = text.length + 1;
    if (autoSpeak) speak(wordFor(ch));
  };

  const backspace = () => {
    setText(t => t.slice(0, -1));
    prevLen.current = Math.max(0, text.length - 1);
  };

  const clear = () => {
    setText('');
    prevLen.current = 0;
  };

  const handleTyped = (value: string) => {
    const grew = value.length === prevLen.current + 1;
    setText(value);
    prevLen.current = value.length;
    if (grew && autoSpeak) {
      const ch = value[value.length - 1].toUpperCase();
      speak(wordFor(ch));
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-3 py-4">
      {/* Big readout — glanceable from arm's length */}
      <div className="bg-gray-900 text-white rounded-2xl p-4 mb-3 min-h-[92px] flex flex-col justify-center">
        {last ? (
          <>
            <div className="text-4xl font-mono font-bold leading-none">{last.ch}</div>
            <div className="text-2xl font-semibold text-amber-400 mt-1">{last.word}</div>
          </>
        ) : (
          <div className="text-gray-500 text-center text-sm">Tap a letter, or type below — it'll be spoken instantly</div>
        )}
      </div>

      {/* Full sequence readout */}
      {text && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Sequence</span>
            <button onClick={speakAll} className="text-xs font-semibold text-amber-700 hover:text-amber-800">🔊 Read All</button>
          </div>
          <div className="font-mono text-sm text-green-700 break-words">
            {converted.filter(c => c.type !== 'space').map(c => c.word).join(' · ')}
          </div>
        </div>
      )}

      {/* Text input for keyboard typing */}
      <input
        type="text"
        inputMode="text"
        autoCapitalize="characters"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        value={text}
        onChange={e => handleTyped(e.target.value)}
        placeholder="Type here…"
        className="w-full px-4 py-3 text-lg font-mono rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition mb-3"
      />

      <div className="flex items-center gap-3 mb-3">
        <button
          onClick={() => setAutoSpeak(a => !a)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition ${autoSpeak ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-500'}`}
        >
          🔊 Auto-Speak {autoSpeak ? 'ON' : 'OFF'}
        </button>
        <button onClick={backspace} className="ml-auto px-4 py-2 rounded-lg text-sm font-semibold bg-gray-100 text-gray-600 active:bg-gray-200">⌫ Back</button>
        <button onClick={clear} className="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-100 text-gray-600 active:bg-gray-200">Clear</button>
      </div>

      {/* Big tap grid — QWERTY layout for muscle memory */}
      <div className="space-y-1.5">
        {ROWS.map((row, i) => (
          <div key={i} className="flex gap-1.5 justify-center">
            {row.map(ch => (
              <button
                key={ch}
                onClick={() => tap(ch)}
                className="flex-1 max-w-[52px] aspect-square rounded-xl bg-white border-2 border-gray-200 text-lg font-bold text-gray-800 active:bg-amber-100 active:border-amber-400 transition shadow-sm"
              >
                {ch}
              </button>
            ))}
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-gray-400 mt-4">
        Tip: tap the <strong>Share</strong> icon (iPhone) or menu (Android) and choose <strong>Add to Home Screen</strong> to open this instantly next time.
      </p>
    </div>
  );
}
