'use client';
import { useState, useMemo } from 'react';

export default function AirlineSearch({ airlines }: { airlines: any[] }) {
  const [q, setQ] = useState('');
  const filtered = useMemo(() => {
    if (!q) return airlines.slice(0, 50);
    const low = q.toLowerCase();
    return airlines.filter((a: any) =>
      a.iata.toLowerCase().includes(low) || a.icao.toLowerCase().includes(low) ||
      a.name.toLowerCase().includes(low) || a.callsign.toLowerCase().includes(low) ||
      a.country.toLowerCase().includes(low)
    ).slice(0, 100);
  }, [q, airlines]);

  return (
    <>
      <input type="text" value={q} onChange={e => setQ(e.target.value)} placeholder="Search… United, BA, Speedbird, Germany"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none mb-3" />

      <div className="flex items-center gap-2 mb-4 text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
        <span>👆</span>
        <span>Tap any <span className="font-mono font-bold text-amber-700 bg-amber-100 border border-amber-300 rounded px-1.5">CODE</span> to see that airline&apos;s radio callsign, destinations, and phonetic spelling.</span>
      </div>

      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-sm">
          <thead><tr className="bg-gray-50 border-b">
            <th className="text-left py-2 px-3 font-semibold">IATA</th>
            <th className="text-left py-2 px-3 font-semibold">ICAO</th>
            <th className="text-left py-2 px-3 font-semibold">Airline</th>
            <th className="text-left py-2 px-3 font-semibold">Callsign</th>
            <th className="text-left py-2 px-3 font-semibold">Country</th>
            <th className="py-2 px-3"></th>
          </tr></thead>
          <tbody>
            {filtered.map((a: any) => (
              <tr key={a.iata} className="border-b border-gray-100 hover:bg-amber-50 transition group">
                <td className="py-2 px-3">
                  <a href={`/airline/${a.iata}/`}
                     className="inline-block font-mono font-bold text-amber-700 bg-amber-100 border border-amber-300 rounded px-2 py-0.5 group-hover:bg-amber-200 transition">
                    {a.iata}
                  </a>
                </td>
                <td className="py-2 px-3 font-mono text-gray-400">{a.icao || '—'}</td>
                <td className="py-2 px-3 font-medium">
                  <a href={`/airline/${a.iata}/`} className="hover:text-amber-700 hover:underline">{a.name}</a>
                </td>
                <td className="py-2 px-3 text-purple-700 font-medium">{a.callsign || '—'}</td>
                <td className="py-2 px-3 text-gray-400">{a.country}</td>
                <td className="py-2 px-3 text-right">
                  <a href={`/airline/${a.iata}/`} className="text-amber-600 opacity-0 group-hover:opacity-100 transition text-xs font-semibold whitespace-nowrap">
                    Details →
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mt-2">{!q ? `Showing first 50 of ${airlines.length}. Type to search.` : `${filtered.length} results`}</p>
    </>
  );
}
