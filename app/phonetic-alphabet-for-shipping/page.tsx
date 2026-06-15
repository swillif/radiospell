import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Phonetic Alphabet for Shipping & Logistics — Container Numbers, BOL & Port Codes',
  description: 'How shipping and logistics professionals use the NATO phonetic alphabet for container numbers, bills of lading, port codes, and vessel names.',
  keywords: 'shipping phonetic alphabet, container number spelling, logistics communication, bill of lading phonetic',
};
export default function ShippingPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Phonetic Alphabet for Shipping &amp; Logistics</h1>
      <p className="text-gray-500 mb-6">A misheard character in a container number can send cargo to the wrong continent. Here&apos;s how the shipping industry prevents that.</p>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Why Shipping Depends on Phonetic Spelling</h2>
        <p className="text-gray-600 leading-relaxed mb-4">The global shipping industry moves over 800 million containers per year. Every container has a unique 11-character code (4 letters + 7 digits) that must be communicated accurately across languages, time zones, and noisy port environments. The International Maritime Organization (IMO) mandates NATO alphabet usage for all ship-to-shore and ship-to-ship communication.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Common Shipping Scenarios</h2>
        <div className="space-y-3">
          {[
            {title:'Container Numbers',example:'MSCU 1234567',spelled:'Mike Sierra Charlie Uniform — One Two Tree Four Fife Six Seven',desc:'ISO 6346 standard: 4-letter owner code + 6-digit serial + 1 check digit. Always spell the owner code phonetically.'},
            {title:'Bill of Lading (BOL)',example:'BOL# HLCU-BKG-2024-XK891',spelled:'Hotel Lima Charlie Uniform — Bravo Kilo Golf — Two Zero Two Four — X-ray Kilo Eight Niner One',desc:'BOL numbers vary by carrier. Spell every character group separately with clear pauses between groups.'},
            {title:'Port Codes (UN/LOCODE)',example:'USLAX (Los Angeles)',spelled:'Uniform Sierra Lima Alfa X-ray',desc:'UN/LOCODE uses 5-letter codes: 2-letter country + 3-letter location. Always verify the country prefix.'},
            {title:'Vessel Names',example:'M/V EVER GIVEN',spelled:'Mike Victor — Echo Victor Echo Romeo — Golf India Victor Echo November',desc:'Vessel names are critical for port entry, customs, and insurance. Always spell them out on first communication.'},
          ].map(s=>(
            <div key={s.title} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="font-bold mb-1">{s.title}</div>
              <div className="font-mono text-sm text-gray-600 mb-1">{s.example}</div>
              <div className="font-mono text-sm text-green-700 mb-2">{s.spelled}</div>
              <div className="text-xs text-gray-500">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>
      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
        <a href="/phonetic-alphabet-for-call-centers/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">For Call Centers</a>
        <a href="/airport-codes/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Airport Codes</a>
      </div>
    </article>
  );
}
