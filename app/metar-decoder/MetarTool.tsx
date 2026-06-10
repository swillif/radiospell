'use client';
import { useState, useMemo } from 'react';

const CODES: Record<string,string> = {SKC:'Sky clear',CLR:'Clear below 12,000 ft',FEW:'Few clouds (1-2 oktas)',SCT:'Scattered (3-4 oktas)',BKN:'Broken (5-7 oktas)',OVC:'Overcast (8 oktas)',RA:'Rain',SN:'Snow',DZ:'Drizzle',GR:'Hail',TS:'Thunderstorm',FG:'Fog',BR:'Mist',HZ:'Haze',SQ:'Squall',FC:'Funnel cloud/tornado',NOSIG:'No significant change',BECMG:'Becoming',TEMPO:'Temporary',CAVOK:'Ceiling & visibility OK',RMK:'Remarks follow',AUTO:'Automated observation'};

function decode(input: string) {
  if (!input.trim()) return [];
  return input.trim().split(/\s+/).map(t => {
    const u = t.toUpperCase();
    if (CODES[u]) return { token: t, meaning: CODES[u] };
    if (/^\d{6}Z$/.test(u)) return { token: t, meaning: `Observation: day ${u.slice(0,2)}, ${u.slice(2,4)}:${u.slice(4,6)} UTC` };
    if (/^\d{3}\d{1,3}(G\d{2,3})?(KT|MPS)$/.test(u)) return { token: t, meaning: `Wind from ${u.slice(0,3)}° at ${u.slice(3)}` };
    if (/^\d+SM$/.test(u)) return { token: t, meaning: `Visibility: ${u.replace('SM','')} statute miles` };
    if (/^(FEW|SCT|BKN|OVC)\d{3}/.test(u)) return { token: t, meaning: `${CODES[u.slice(0,3)] || u.slice(0,3)} at ${parseInt(u.slice(3))*100} ft` };
    if (/^(M?\d{2})\/(M?\d{2})$/.test(u)) { const [temp,dew] = u.split('/'); return { token: t, meaning: `Temp ${temp.replace('M','-')}°C / Dewpoint ${dew.replace('M','-')}°C` }; }
    if (/^A\d{4}$/.test(u)) return { token: t, meaning: `Altimeter: ${u.slice(1,3)}.${u.slice(3)} inHg` };
    if (/^Q\d{4}$/.test(u)) return { token: t, meaning: `QNH: ${u.slice(1)} hPa` };
    return { token: t, meaning: '—' };
  });
}

export default function MetarTool() {
  const [input, setInput] = useState('');
  const decoded = useMemo(() => decode(input), [input]);
  return (
    <>
      <input type="text" value={input} onChange={e => setInput(e.target.value)}
        placeholder="Paste METAR… e.g. KDEN 081753Z 32010G18KT 10SM FEW120 SCT200 22/M02 A3012"
        className="w-full px-4 py-3 font-mono rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none mb-4" />
      {decoded.length > 0 && (
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b">
              <th className="text-left py-2 px-3 font-semibold">Token</th>
              <th className="text-left py-2 px-3 font-semibold">Meaning</th>
            </tr></thead>
            <tbody>
              {decoded.map((d, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-2 px-3 font-mono font-bold text-green-700">{d.token}</td>
                  <td className="py-2 px-3">{d.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
