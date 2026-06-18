'use client';

import { useState, useMemo } from 'react';
import { ALL_ALPHABETS, NATO, NATO_NUMBERS, MORSE, toPhoneticArray, reverseNATO } from '@/data/alphabets';

export default function PhoneticConverter() {
  const [input, setInput] = useState('');
  const [alphaKey, setAlphaKey] = useState('NATO');
  const [showMorse, setShowMorse] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [revInput, setRevInput] = useState('');

  const alphabet = ALL_ALPHABETS[alphaKey]?.letters || NATO;
  const converted = useMemo(() => toPhoneticArray(input, alphabet), [input, alphaKey]);
  const revResult = useMemo(() => reverseNATO(revInput), [revInput]);
  const readout = converted.filter(c => c.type !== 'space').map(c => c.word).join(' · ');

  const speak = (text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.85;
    window.speechSynthesis.speak(u);
  };

  const speakAll = () => {
    const text = converted.filter(c => c.type !== 'space' && c.type !== 'symbol').map(c => c.word).join(', ');
    speak(text);
  };

  const handlePrint = () => {
    const letters = Object.entries(NATO);
    const half = Math.ceil(letters.length / 2);
    let html = `<!DOCTYPE html><html><head><title>NATO Phonetic Alphabet — RadioSpell.com</title>
    <style>body{font-family:Arial,sans-serif;padding:20px;color:#111;max-width:800px;margin:0 auto}
    h1{font-size:22px;text-align:center;margin-bottom:4px}.sub{text-align:center;color:#666;font-size:13px;margin-bottom:16px}
    table{width:100%;border-collapse:collapse}th,td{border:1px solid #ccc;padding:8px 12px;text-align:left;font-size:14px}
    th{background:#f0f0f0;font-weight:700}.l{font-size:18px;font-weight:700;font-family:monospace;width:40px}
    .cols{display:flex;gap:20px}.cols>div{flex:1}.ft{text-align:center;color:#999;font-size:11px;margin-top:12px;border-top:1px solid #ddd;padding-top:8px}
    </style></head><body><h1>NATO / ICAO Phonetic Alphabet</h1>
    <div class="sub">RadioSpell.com — Quick Reference Cheat Sheet</div><div class="cols"><div><table>
    <tr><th>Letter</th><th>Code Word</th><th>Morse</th></tr>`;
    letters.slice(0, half).forEach(([l, w]) => { html += `<tr><td class="l">${l}</td><td>${w}</td><td style="font-family:monospace;letter-spacing:2px">${MORSE[l]}</td></tr>`; });
    html += `</table></div><div><table><tr><th>Letter</th><th>Code Word</th><th>Morse</th></tr>`;
    letters.slice(half).forEach(([l, w]) => { html += `<tr><td class="l">${l}</td><td>${w}</td><td style="font-family:monospace;letter-spacing:2px">${MORSE[l]}</td></tr>`; });
    html += `</table><table><tr><th>Num</th><th>Spoken As</th></tr>`;
    Object.entries(NATO_NUMBERS).forEach(([n, w]) => { html += `<tr><td class="l">${n}</td><td>${w}</td></tr>`; });
    html += `</table></div></div>
    <div class="ft">RadioSpell.com — Print this and tape it to your desk!</div></body></html>`;
    const w = window.open('', '_blank');
    if (w) { w.document.write(html); w.document.close(); setTimeout(() => w.print(), 400); }
  };

  const colors: Record<string, string> = { letter: 'text-amber-600', number: 'text-blue-500', space: 'text-gray-400', symbol: 'text-gray-400' };

  return (
    <div>
      {/* Mode toggle + print */}
      <div className="flex flex-wrap gap-2 mb-4 items-center">
        <button onClick={() => setReverse(false)} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${!reverse ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
          Text → Phonetic
        </button>
        <button onClick={() => setReverse(true)} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${reverse ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
          Phonetic → Text
        </button>
        <button onClick={handlePrint} className="ml-auto px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
          🖨️ Print Cheat Sheet
        </button>
      </div>

      {!reverse ? (
        <>
          {/* Forward converter */}
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type anything… UA1234, your name, a confirmation code"
            className="w-full px-4 py-3 text-lg font-mono rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition mb-3"
            autoFocus
          />
          <div className="flex flex-wrap gap-2 items-center mb-5">
            <select value={alphaKey} onChange={e => setAlphaKey(e.target.value)} className="px-3 py-2 rounded-lg border border-gray-300 text-sm bg-white">
              {Object.entries(ALL_ALPHABETS).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
            </select>
            <button onClick={() => setShowMorse(!showMorse)} className={`px-3 py-2 rounded-lg text-sm font-medium transition ${showMorse ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600'}`}>
              Morse {showMorse ? 'ON' : 'OFF'}
            </button>
            {input && <button onClick={speakAll} className="px-3 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200">🔊 Listen</button>}
            {input && <button onClick={() => setInput('')} className="ml-auto px-3 py-2 rounded-lg text-sm bg-gray-100 text-gray-600 hover:bg-gray-200">Clear</button>}
          </div>

          {input ? (
            <>
              <div className="flex flex-wrap gap-2 mb-5">
                {converted.map((c, i) => (
                  <button key={i} onClick={() => speak(c.word)} className="flex flex-col items-center px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg min-w-[70px] hover:border-amber-400 transition cursor-pointer">
                    <span className={`text-xl font-bold font-mono ${colors[c.type]}`}>{c.ch}</span>
                    <span className="text-xs text-gray-700 mt-0.5 font-medium">{c.word}</span>
                    {showMorse && MORSE[c.ch] && <span className="text-[10px] text-gray-400 mt-0.5 font-mono tracking-wider">{MORSE[c.ch]}</span>}
                  </button>
                ))}
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-3">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Readout</div>
                <div className="font-mono text-sm text-green-700 leading-relaxed">{readout}</div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-5">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Phone Script</div>
                <div className="text-sm text-gray-700 leading-relaxed">
                  {converted.filter(c => c.type !== 'space' && c.type !== 'symbol').map(c => `${c.ch} as in ${c.word}`).join(', ')}
                </div>
              </div>

              {/* You might also like */}
              <div className="border-t pt-5">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">You might also like</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <a href="/metar-decoder/" className="relative block p-3 bg-amber-50 border-2 border-amber-300 rounded-lg hover:border-amber-400 hover:bg-amber-100 transition text-center">
                    <span className="absolute -top-2 -right-2 text-[9px] font-bold bg-amber-500 text-white px-1.5 py-0.5 rounded-full">NEW</span>
                    <div className="text-lg mb-0.5">🌦️</div>
                    <div className="text-sm font-semibold text-gray-800">METAR Decoder</div>
                    <div className="text-[11px] text-gray-500">Decode weather reports</div>
                  </a>
                  <a href="/quiz/" className="block p-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-amber-400 hover:bg-amber-50 transition text-center">
                    <div className="text-lg mb-0.5">🧠</div>
                    <div className="text-sm font-semibold text-gray-800">Take the Quiz</div>
                    <div className="text-[11px] text-gray-500">Test your knowledge</div>
                  </a>
                  <a href="/spell-my-name/" className="block p-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-amber-400 hover:bg-amber-50 transition text-center">
                    <div className="text-lg mb-0.5">🪪</div>
                    <div className="text-sm font-semibold text-gray-800">Spell My Name</div>
                    <div className="text-[11px] text-gray-500">Shareable name card</div>
                  </a>
                  <a href="/phonetic-alphabet-chart/" className="block p-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-amber-400 hover:bg-amber-50 transition text-center">
                    <div className="text-lg mb-0.5">🖨️</div>
                    <div className="text-sm font-semibold text-gray-800">Print Chart</div>
                    <div className="text-[11px] text-gray-500">Free desk reference</div>
                  </a>
                  <a href="/airport-codes/" className="block p-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-amber-400 hover:bg-amber-50 transition text-center">
                    <div className="text-lg mb-0.5">✈️</div>
                    <div className="text-sm font-semibold text-gray-800">Airport Codes</div>
                    <div className="text-[11px] text-gray-500">7,900+ airports</div>
                  </a>
                  <a href="/airline-codes/" className="block p-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-amber-400 hover:bg-amber-50 transition text-center">
                    <div className="text-lg mb-0.5">🛫</div>
                    <div className="text-sm font-semibold text-gray-800">Airline Callsigns</div>
                    <div className="text-[11px] text-gray-500">990+ airlines</div>
                  </a>
                  <a href="/nato-phonetic-alphabet/" className="block p-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-amber-400 hover:bg-amber-50 transition text-center">
                    <div className="text-lg mb-0.5">📋</div>
                    <div className="text-sm font-semibold text-gray-800">Full A-Z Table</div>
                    <div className="text-[11px] text-gray-500">Complete reference</div>
                  </a>
                </div>
              </div>
            </>
          ) : (
            <div className="py-6">
              <div className="text-center text-gray-400 mb-6">
                <div className="text-5xl mb-2">✈</div>
                <p className="text-base">Type anything above, or try an example:</p>
              </div>
              {/* Clickable examples */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                {[
                  { label: 'Airline Code', example: 'UA1234', icon: '✈️' },
                  { label: 'Confirmation', example: 'BK7F9X', icon: '🎫' },
                  { label: 'Spell a Name', example: 'Johnson', icon: '👤' },
                  { label: 'Email Address', example: 'jsmith@gmail.com', icon: '📧' },
                  { label: 'License Plate', example: 'ABC 1234', icon: '🚗' },
                  { label: 'Serial Number', example: 'SN48X2KP', icon: '🔧' },
                ].map(ex => (
                  <button key={ex.example} onClick={() => setInput(ex.example)}
                    className="flex items-center gap-2.5 p-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-amber-400 hover:bg-amber-50 transition text-left">
                    <span className="text-lg">{ex.icon}</span>
                    <div>
                      <div className="text-xs text-gray-500">{ex.label}</div>
                      <div className="text-sm font-mono font-semibold text-gray-800">{ex.example}</div>
                    </div>
                  </button>
                ))}
              </div>
              <p className="text-center text-xs text-gray-400">Click any example to see it converted instantly</p>
            </div>
          )}
        </>
      ) : (
        <>
          {/* Reverse converter */}
          <input
            type="text"
            value={revInput}
            onChange={e => setRevInput(e.target.value)}
            placeholder="Paste NATO words… Alfa Bravo Charlie Delta"
            className="w-full px-4 py-3 text-lg font-mono rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition mb-3"
            autoFocus
          />
          <p className="text-sm text-gray-500 mb-4">Enter NATO code words separated by spaces.</p>
          {revInput && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Decoded Text</div>
              <div className="font-mono text-2xl text-green-700 tracking-widest">{revResult}</div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
