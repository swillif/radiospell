'use client';
import { useState, useMemo } from 'react';

export default function AirportSearch({ airports }: { airports: any[] }) {
  const [q, setQ] = useState('');
  const filtered = useMemo(() => {
    if (!q) return airports.slice(0, 50);
    const low = q.toLowerCase();
    return airports.filter(a =>
      a.iata.toLowerCase().includes(low) ||
      a.name.toLowerCase().includes(low) ||
      a.city.toLowerCase().includes(low) ||
      a.country.toLowerCase().includes(low)
    ).slice(0, 100);
  }, [q, airports]);

  return (
    <>
      <input type="text" value={q} onChange={e => setQ(e.target.value)} placeholder="Search… DEN, Denver, Heathrow, UK"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none mb-4" />
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-sm">
          <thead><tr className="bg-gray-50 border-b">
            <th className="text-left py-2 px-3 font-semibold">IATA</th>
            <th className="text-left py-2 px-3 font-semibold">Airport</th>
            <th className="text-left py-2 px-3 font-semibold">City</th>
            <th className="text-left py-2 px-3 font-semibold">Country</th>
            <th className="text-left py-2 px-3 font-semibold">Phonetic</th>
          </tr></thead>
          <tbody>
            {filtered.map((a: any) => (
              <tr key={a.iata} className="border-b border-gray-100 hover:bg-amber-50">
                <td className="py-2 px-3 font-mono font-bold"><a href={`/airport/${a.iata}/`} className="text-amber-600 hover:underline">{a.iata}</a></td>
                <td className="py-2 px-3">{a.name}</td>
                <td className="py-2 px-3">{a.city}</td>
                <td className="py-2 px-3 text-gray-400">{a.country}</td>
                <td className="py-2 px-3 font-mono text-xs text-green-700">{a.phonetic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mt-2">{!q ? `Showing first 50 of ${airports.length.toLocaleString()}. Type to search.` : `${filtered.length} results`}</p>
    </>
  );
}
