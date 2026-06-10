'use client';
import { useState, useMemo } from 'react';
import { toPhoneticArray, NATO } from '@/data/alphabets';
export default function NameCard() {
  const [name, setName] = useState('');
  const converted = useMemo(() => toPhoneticArray(name), [name]);
  const readout = converted.filter(c => c.type !== 'space').map(c => c.word).join(' · ');
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
    </>
  );
}
