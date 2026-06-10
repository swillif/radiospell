import type { Metadata } from 'next';
import airlines from '@/data/airlines.json';
import AirlineSearch from './AirlineSearch';

export const metadata: Metadata = {
  title: 'Airline IATA/ICAO Codes & Radio Callsigns — Search 990+ Airlines',
  description: 'Search airline IATA codes, ICAO codes, and radio callsigns. Discover what pilots say on ATC frequencies for every major airline worldwide.',
};

export default function AirlineCodesPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Airline Codes &amp; Radio Callsigns</h1>
      <p className="text-gray-500 mb-6">Search {airlines.length} active airlines with IATA/ICAO codes and the radio callsigns pilots use on ATC frequencies.</p>
      <AirlineSearch airlines={airlines as any[]} />
    </article>
  );
}
