import type { Metadata } from 'next';
import airports from '@/data/airports.json';
import { NATO } from '@/data/alphabets';
import AirportSearch from './AirportSearch';

export const metadata: Metadata = {
  title: 'Airport IATA Codes — Search 7,900+ Airports with Phonetic Spelling',
  description: 'Search airport IATA codes by name, city, or country. Each code includes NATO phonetic spelling for clear communication on phone calls and radio.',
};

export default function AirportCodesPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Airport IATA Codes</h1>
      <p className="text-gray-500 mb-6">Search {airports.length.toLocaleString()} airports by code, city, country, or airport name. Each includes NATO phonetic spelling.</p>
      <AirportSearch airports={airports as any[]} />
    </article>
  );
}
