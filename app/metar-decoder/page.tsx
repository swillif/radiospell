import type { Metadata } from 'next';
import MetarTool from './MetarTool';

export const metadata: Metadata = {
  title: 'METAR Decoder — Decode Aviation Weather Reports Instantly',
  description: 'Paste any METAR or TAF string and decode every element — wind, visibility, clouds, temperature, altimeter. Free tool for pilots and aviation enthusiasts.',
  keywords: 'METAR decoder, decode METAR, aviation weather decoder, TAF decoder, METAR codes explained',
};

export default function MetarPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">METAR / TAF Weather Decoder</h1>
      <p className="text-gray-500 mb-6">Paste a METAR or TAF string and decode each element. Get raw data from <a href="https://aviationweather.gov" className="text-amber-600 hover:underline" target="_blank" rel="noopener noreferrer">aviationweather.gov</a>.</p>
      <MetarTool />
      <section className="border-t mt-8 pt-6">
        <h2 className="text-xl font-bold mb-3">What Is a METAR?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">METAR stands for Meteorological Aerodrome Report — a standardized weather observation format issued every hour by airports worldwide. Pilots, dispatchers, and air traffic controllers use METARs to assess weather conditions for flight planning. Each METAR follows a strict format: station identifier, date/time, wind, visibility, weather phenomena, cloud layers, temperature/dewpoint, and altimeter setting.</p>
        <h2 className="text-xl font-bold mb-3">What Is a TAF?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">TAF stands for Terminal Aerodrome Forecast — a weather forecast (not observation) for a specific airport, typically covering the next 24-30 hours. TAFs use many of the same codes as METARs but include time period markers and change indicators like BECMG (becoming), TEMPO (temporary), and PROB (probability).</p>
      </section>
      <div className="border-t pt-6 mt-6 flex flex-wrap gap-3">
        <a href="/airport-codes/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Airport Codes</a>
        <a href="/aviation-numbers/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Aviation Numbers</a>
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
      </div>
    </article>
  );
}
