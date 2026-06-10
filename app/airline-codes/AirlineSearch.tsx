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
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none mb-4" />
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-sm">
          <thead><tr className="bg-gray-50 border-b">
            <th className="text-left py-2 px-3 font-semibold">IATA</th>
            <th className="text-left py-2 px-3 font-semibold">ICAO</th>
            <th className="text-left py-2 px-3 font-semibold">Airline</th>
            <th className="text-left py-2 px-3 font-semibold">Callsign</th>
            <th className="text-left py-2 px-3 font-semibold">Country</th>
          </tr></thead>
          <tbody>
            {filtered.map((a: any) => (
              <tr key={a.iata} className="border-b border-gray-100 hover:bg-amber-50">
                <td className="py-2 px-3 font-mono font-bold"><a href={`/airline/${a.iata}/`} className="text-amber-600 hover:underline">{a.iata}</a></td>
                <td className="py-2 px-3 font-mono text-gray-400">{a.icao || '—'}</td>
                <td className="py-2 px-3 font-medium">{a.name}</td>
                <td className="py-2 px-3 text-purple-700 font-medium">{a.callsign || '—'}</td>
                <td className="py-2 px-3 text-gray-400">{a.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mt-2">{!q ? `Showing first 50 of ${airlines.length}. Type to search.` : `${filtered.length} results`}</p>
    </>
  );
}
