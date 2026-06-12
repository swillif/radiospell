import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'About RadioSpell.com', description: 'About RadioSpell.com — the free phonetic alphabet converter and aviation reference tool.' };
export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About RadioSpell.com</h1>
      <p className="text-gray-600 leading-relaxed mb-4">RadioSpell.com is a free phonetic alphabet converter and aviation reference tool. Our mission is to make the NATO phonetic alphabet accessible and useful for everyone — from call center agents verifying customer names to pilots communicating with air traffic control.</p>
      <p className="text-gray-600 leading-relaxed mb-4">We provide interactive tools (converter, quiz, METAR decoder), comprehensive reference data (7,900+ airport codes, 990+ airline codes with radio callsigns), and educational content (history, industry guides, country-specific alphabets) — all free, no account required.</p>
      <h2 className="text-xl font-bold mt-6 mb-3">Data Sources</h2>
      <p className="text-gray-600 leading-relaxed mb-4">Our airport database is sourced from the open-source mwgg/Airports repository on GitHub (MIT License). Airline data comes from OpenFlights.org (Open Database License). Both are updated quarterly. Phonetic alphabet information is compiled from ICAO, NATO, APCO, and DIN standards documentation.</p>
      <h2 className="text-xl font-bold mt-6 mb-3">Contact</h2>
      <p className="text-gray-600 leading-relaxed mb-4">Questions, suggestions, or corrections? Reach us at <a href="mailto:contact@radiospell.com" className="text-amber-600 hover:underline">contact@radiospell.com</a>.</p>

      <h2 className="text-xl font-bold mt-6 mb-3">Privacy</h2>
      <p className="text-gray-600 leading-relaxed mb-4">Everything you type in our converter is processed in your browser. We never see, store, or transmit your input. Read our full <a href="/privacy/" className="text-amber-600 hover:underline">Privacy Policy</a>.</p>
    </article>
  );
}
