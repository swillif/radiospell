import type { Metadata } from 'next';
import airlines from '@/data/airlines.json';
import airports from '@/data/airports.json';
import routes from '@/data/routes.json';
import { NATO, NATO_NUMBERS } from '@/data/alphabets';

type Airline = typeof airlines[number];

export async function generateStaticParams() {
  return (airlines as Airline[]).map(a => ({ iata: a.iata }));
}

export async function generateMetadata({ params }: { params: { iata: string } }): Promise<Metadata> {
  const al = (airlines as Airline[]).find(a => a.iata === params.iata.toUpperCase());
  if (!al) return { title: 'Airline Not Found' };
  return {
    title: `${al.name} (${al.iata}/${al.icao}) — Code, Callsign & Routes`,
    description: `${al.name}: IATA ${al.iata}, ICAO ${al.icao}${al.callsign ? `, callsign "${al.callsign}"` : ''}. View destinations and details.`,
    alternates: { canonical: `https://radiospell.com/airline/${al.iata}/` },
  };
}

export default function AirlinePage({ params }: { params: { iata: string } }) {
  const al = (airlines as Airline[]).find(a => a.iata === params.iata.toUpperCase());
  if (!al) return <div className="max-w-3xl mx-auto p-8">Airline not found.</div>;

  const rm = routes as Record<string, string[]>;
  const dests = (rm[al.iata] || []).map(code => (airports as any[]).find(a => a.iata === code)).filter(Boolean).sort((a: any, b: any) => a.city.localeCompare(b.city));

  const phoneticCode = al.iata.split('').map(c => NATO[c.toUpperCase()] || NATO_NUMBERS[c] || c).join(' ');

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-400 mb-6">
        <a href="/" className="hover:underline">Home</a> › <a href="/airline-codes/" className="hover:underline">Airlines</a> › {al.iata}
      </nav>

      <div className="text-5xl font-mono font-bold text-amber-600 mb-1">{al.iata}</div>
      <h1 className="text-2xl font-bold mb-1">{al.name}</h1>
      {al.alias && <p className="text-gray-400 text-sm mb-1">Also known as: {al.alias}</p>}
      <p className="text-gray-500 mb-6">{al.country}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-[10px] text-gray-400 uppercase tracking-wide font-bold">IATA</div>
          <div className="text-2xl font-mono font-bold">{al.iata}</div>
          <div className="text-xs text-green-700 font-mono mt-0.5">{phoneticCode}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-[10px] text-gray-400 uppercase tracking-wide font-bold">ICAO</div>
          <div className="text-2xl font-mono font-bold">{al.icao || '—'}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 col-span-2">
          <div className="text-[10px] text-gray-400 uppercase tracking-wide font-bold">Radio Callsign</div>
          <div className="text-xl font-bold text-purple-700">{al.callsign || 'Not assigned'}</div>
          {al.callsign && <div className="text-xs text-gray-400 mt-0.5">Example: &quot;{al.callsign} One Two Three&quot; for {al.iata}123</div>}
        </div>
      </div>

      {al.callsign && (
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">About the &quot;{al.callsign}&quot; Callsign</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            When {al.name} pilots communicate with air traffic control, they identify themselves
            using the radio callsign &quot;{al.callsign}&quot; followed by the flight number spoken in aviation
            pronunciation. For example, flight 456 would be &quot;{al.callsign} Four Five Six.&quot;
            Radio callsigns are assigned by ICAO and are distinct from the airline&apos;s marketing name.
          </p>
        </section>
      )}

      {dests.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">Destinations ({dests.length})</h2>
          <div className="overflow-x-auto border rounded-lg">
            <table className="w-full text-sm">
              <thead><tr className="bg-gray-50 border-b">
                <th className="text-left py-2 px-3 font-semibold">Code</th>
                <th className="text-left py-2 px-3 font-semibold">Airport</th>
                <th className="text-left py-2 px-3 font-semibold">City</th>
                <th className="text-left py-2 px-3 font-semibold">Country</th>
              </tr></thead>
              <tbody>
                {dests.slice(0, 100).map((ap: any) => (
                  <tr key={ap.iata} className="border-b border-gray-100">
                    <td className="py-2 px-3 font-mono font-bold"><a href={`/airport/${ap.iata}/`} className="text-amber-600 hover:underline">{ap.iata}</a></td>
                    <td className="py-2 px-3">{ap.name}</td>
                    <td className="py-2 px-3">{ap.city}</td>
                    <td className="py-2 px-3 text-gray-400">{ap.country}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {dests.length > 100 && <p className="text-xs text-gray-400 mt-2">Showing 100 of {dests.length}.</p>}
        </section>
      )}

      <div className="border-t pt-4 flex flex-wrap gap-2">
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
        <a href="/airline-codes/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">All Airlines</a>
        <a href="/airport-codes/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Airport Codes</a>
      </div>
    </article>
  );
}
