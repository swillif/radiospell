import type { Metadata } from 'next';
import airports from '@/data/airports.json';
import airlines from '@/data/airlines.json';
import routes from '@/data/routes.json';
import { NATO, NATO_NUMBERS } from '@/data/alphabets';
import { findNearbyAirports, type AirportLike } from '@/lib/nearby';

type Airport = typeof airports[number];

export async function generateStaticParams() {
  return (airports as Airport[])
    .filter(a => /^[A-Z0-9]{3}$/i.test(a.iata))
    .map(a => ({ iata: a.iata }));
}

export async function generateMetadata({ params }: { params: { iata: string } }): Promise<Metadata> {
  const ap = (airports as Airport[]).find(a => a.iata === params.iata.toUpperCase());
  if (!ap) return { title: 'Airport Not Found' };
  return {
    title: `${ap.iata} — ${ap.name} | Airport Code & Phonetic Spelling`,
    description: `${ap.iata} is the IATA code for ${ap.name} in ${ap.city}, ${ap.country}. NATO phonetic: ${ap.phonetic}. Airlines, nearby airports, location & more.`,
    alternates: { canonical: `https://radiospell.com/airport/${ap.iata}/` },
  };
}

export default function AirportPage({ params }: { params: { iata: string } }) {
  const ap = (airports as Airport[]).find(a => a.iata === params.iata.toUpperCase());
  if (!ap) return <div className="max-w-3xl mx-auto p-8">Airport not found.</div>;

  const rm = routes as Record<string, string[]>;
  const serving = (airlines as any[]).filter(al => rm[al.iata]?.includes(ap.iata)).slice(0, 60);

  const nearby = findNearbyAirports(ap as AirportLike, airports as AirportLike[], 8, 400);

  const spell = ap.iata.split('').map(c => {
    const w = NATO[c] || NATO_NUMBERS[c] || c;
    return `${c} as in ${w}`;
  }).join(', ');

  const mapsUrl = ap.lat != null
    ? `https://www.google.com/maps/search/?api=1&query=${ap.lat},${ap.lon}`
    : null;
  const osmUrl = ap.lat != null
    ? `https://www.openstreetmap.org/?mlat=${ap.lat}&mlon=${ap.lon}#map=13/${ap.lat}/${ap.lon}`
    : null;

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

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-sm font-medium text-blue-800">How to say it on the phone: &quot;{spell}&quot;</p>
      </div>

      {/* MAP LINKS */}
      {mapsUrl && (
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">Location &amp; Maps</h2>
          <div className="flex flex-wrap gap-2">
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-200 rounded-lg text-sm font-semibold hover:border-amber-400 hover:bg-amber-50 transition">
              🗺️ View on Google Maps
            </a>
            <a href={osmUrl!} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-200 rounded-lg text-sm font-semibold hover:border-amber-400 hover:bg-amber-50 transition">
              🌍 View on OpenStreetMap
            </a>
            <a href={`https://www.flightaware.com/live/airport/${ap.icao}`} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-200 rounded-lg text-sm font-semibold hover:border-amber-400 hover:bg-amber-50 transition">
              ✈️ Live Flights (FlightAware)
            </a>
          </div>
        </section>
      )}

      {/* NEARBY AIRPORTS */}
      {nearby.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-1">Nearby Airports</h2>
          <p className="text-sm text-gray-500 mb-3">
            Other airports within {Math.max(...nearby.map(n => n.distanceMi))} miles of {ap.iata}. Tap a code for its details and phonetic spelling.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {nearby.map(n => (
              <a key={n.iata} href={`/airport/${n.iata}/`}
                 className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-amber-400 hover:bg-amber-50 transition group">
                <span className="font-mono font-bold text-base text-amber-700 bg-amber-100 border border-amber-300 rounded px-2 py-1 shrink-0 group-hover:bg-amber-200 transition">
                  {n.iata}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-gray-800 truncate">{n.name}</span>
                  <span className="block text-xs text-gray-500">{n.city} · {n.distanceMi} mi</span>
                </span>
              </a>
            ))}
          </div>
        </section>
      )}

      {serving.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-1">Airlines at {ap.name}</h2>
          <p className="text-sm text-gray-500 mb-3">{serving.length} airlines operate here. Tap a code for callsign and route details.</p>
          <div className="overflow-x-auto border rounded-lg">
            <table className="w-full text-sm">
              <thead><tr className="bg-gray-50 border-b">
                <th className="text-left py-2 px-3 font-semibold">Code</th>
                <th className="text-left py-2 px-3 font-semibold">Airline</th>
                <th className="text-left py-2 px-3 font-semibold">Callsign</th>
              </tr></thead>
              <tbody>
                {serving.map((al: any) => (
                  <tr key={al.iata} className="border-b border-gray-100 hover:bg-amber-50 transition">
                    <td className="py-2 px-3">
                      <a href={`/airline/${al.iata}/`}
                         className="inline-block font-mono font-bold text-amber-700 bg-amber-100 border border-amber-300 rounded px-2 py-0.5 hover:bg-amber-200 transition">
                        {al.iata}
                      </a>
                    </td>
                    <td className="py-2 px-3">
                      <a href={`/airline/${al.iata}/`} className="hover:text-amber-700 hover:underline">{al.name}</a>
                    </td>
                    <td className="py-2 px-3 text-purple-700 font-medium">{al.callsign || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Airport Details</h2>
        <dl className="grid grid-cols-2 gap-y-2 text-sm">
          <dt className="text-gray-400">City</dt><dd>{ap.city}</dd>
          {ap.state && <><dt className="text-gray-400">State/Region</dt><dd>{ap.state}</dd></>}
          <dt className="text-gray-400">Country</dt><dd>{ap.country}</dd>
          {ap.lat != null && <><dt className="text-gray-400">Coordinates</dt><dd className="font-mono text-xs">{ap.lat}, {ap.lon}</dd></>}
          {ap.tz && <><dt className="text-gray-400">Timezone</dt><dd>{ap.tz}</dd></>}
        </dl>
      </section>

      <div className="border-t pt-4 flex flex-wrap gap-2">
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
        <a href="/airport-codes/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">All Airports</a>
        <a href="/airline-codes/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">All Airlines</a>
        <a href="/metar-decoder/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">METAR Decoder</a>
      </div>
    </article>
  );
}
