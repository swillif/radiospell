import type { Metadata } from 'next';
import airports from '@/data/airports.json';
import airlines from '@/data/airlines.json';
import routes from '@/data/routes.json';
import { NATO, NATO_NUMBERS } from '@/data/alphabets';

type Airport = typeof airports[number];

export async function generateStaticParams() {
  return (airports as Airport[]).map(a => ({ iata: a.iata }));
}

export async function generateMetadata({ params }: { params: { iata: string } }): Promise<Metadata> {
  const ap = (airports as Airport[]).find(a => a.iata === params.iata.toUpperCase());
  if (!ap) return { title: 'Airport Not Found' };
  return {
    title: `${ap.iata} — ${ap.name} | Airport Code & Phonetic Spelling`,
    description: `${ap.iata} is the IATA code for ${ap.name} in ${ap.city}, ${ap.country}. NATO phonetic: ${ap.phonetic}. Airlines, routes & more.`,
    alternates: { canonical: `https://radiospell.com/airport/${ap.iata}/` },
  };
}

export default function AirportPage({ params }: { params: { iata: string } }) {
  const ap = (airports as Airport[]).find(a => a.iata === params.iata.toUpperCase());
  if (!ap) return <div className="max-w-3xl mx-auto p-8">Airport not found.</div>;

  const rm = routes as Record<string, string[]>;
  const serving = (airlines as any[]).filter(al => rm[al.iata]?.includes(ap.iata)).slice(0, 60);

  const spell = ap.iata.split('').map(c => {
    const w = NATO[c] || NATO_NUMBERS[c] || c;
    return `${c} as in ${w}`;
  }).join(', ');

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-400 mb-6">
        <a href="/" className="hover:underline">Home</a> › <a href="/airport-codes/" className="hover:underline">Airports</a> › {ap.iata}
      </nav>

      <div className="text-5xl font-mono font-bold text-amber-600 mb-1">{ap.iata}</div>
      <h1 className="text-2xl font-bold mb-1">{ap.name}</h1>
      <p className="text-gray-500 mb-6">{ap.city}{ap.state ? `, ${ap.state}` : ''} · {ap.country}</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-[10px] text-gray-400 uppercase tracking-wide font-bold">IATA</div>
          <div className="text-2xl font-mono font-bold">{ap.iata}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-[10px] text-gray-400 uppercase tracking-wide font-bold">ICAO</div>
          <div className="text-2xl font-mono font-bold">{ap.icao}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 col-span-2 md:col-span-1">
          <div className="text-[10px] text-gray-400 uppercase tracking-wide font-bold">Phonetic</div>
          <div className="text-lg font-mono font-semibold text-green-700">{ap.phonetic}</div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <p className="text-sm font-medium text-blue-800">How to say it on the phone: &quot;{spell}&quot;</p>
      </div>

      {serving.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">Airlines at {ap.name} ({serving.length})</h2>
          <div className="overflow-x-auto border rounded-lg">
            <table className="w-full text-sm">
              <thead><tr className="bg-gray-50 border-b">
                <th className="text-left py-2 px-3 font-semibold">Code</th>
                <th className="text-left py-2 px-3 font-semibold">Airline</th>
                <th className="text-left py-2 px-3 font-semibold">Callsign</th>
              </tr></thead>
              <tbody>
                {serving.map((al: any) => (
                  <tr key={al.iata} className="border-b border-gray-100">
                    <td className="py-2 px-3 font-mono font-bold"><a href={`/airline/${al.iata}/`} className="text-amber-600 hover:underline">{al.iata}</a></td>
                    <td className="py-2 px-3">{al.name}</td>
                    <td className="py-2 px-3 text-purple-700 font-medium">{al.callsign || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Location</h2>
        <dl className="grid grid-cols-2 gap-y-2 text-sm">
          <dt className="text-gray-400">City</dt><dd>{ap.city}</dd>
          {ap.state && <><dt className="text-gray-400">State/Region</dt><dd>{ap.state}</dd></>}
          <dt className="text-gray-400">Country</dt><dd>{ap.country}</dd>
          {ap.lat && <><dt className="text-gray-400">Coordinates</dt><dd className="font-mono text-xs">{ap.lat}, {ap.lon}</dd></>}
          {ap.tz && <><dt className="text-gray-400">Timezone</dt><dd>{ap.tz}</dd></>}
        </dl>
      </section>

      <div className="border-t pt-4 flex flex-wrap gap-2">
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
        <a href="/airport-codes/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">All Airports</a>
        <a href="/airline-codes/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">All Airlines</a>
      </div>
    </article>
  );
}
