import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Phonetic Alphabet for Travelers — Spell Bookings, Names & Codes Clearly',
  description: 'Essential phonetic alphabet guide for travelers. Spell airline confirmation codes, hotel reservations, passport names, and addresses without confusion.',
  keywords: 'phonetic alphabet travel, spell booking code, hotel reservation phonetic, passport name spelling, travel communication tips',
};
export default function TravelPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Phonetic Alphabet for Travelers</h1>
      <p className="text-gray-500 mb-6">Whether you&apos;re calling an airline, checking into a hotel, or navigating a foreign country — knowing a few phonetic alphabet words makes every interaction smoother.</p>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">When Travelers Need Phonetic Spelling</h2>
        <div className="space-y-3">
          {[
            {icon:'✈️',title:'Calling the airline',desc:'Reading your 6-character confirmation code to a phone agent. "BK7F9X" becomes "Bravo Kilo Seven Foxtrot Niner X-ray" — no repeating, no confusion.'},
            {icon:'🏨',title:'Hotel check-in over the phone',desc:'Spelling your last name for a reservation, especially names with B/D, M/N, or other easily confused letters.'},
            {icon:'🛂',title:'Passport and visa spelling',desc:'Immigration forms, border crossings, and embassy calls all require exact spelling of names. A phonetic approach prevents errors on official documents.'},
            {icon:'🚗',title:'Car rental confirmations',desc:'Reading back a rental confirmation code or spelling your driver\'s license number to an agent.'},
            {icon:'🌍',title:'Communicating in a foreign country',desc:'The NATO alphabet was designed to be understood across all major languages. An agent in Tokyo, Dubai, or São Paulo will recognize "Bravo" and "Charlie" even if their English is limited.'},
            {icon:'🏥',title:'Travel insurance claims',desc:'Policy numbers, claim reference codes, and hospital names all need to be communicated precisely — often under stress.'},
          ].map(s=>(
            <div key={s.title} className="flex gap-3 bg-gray-50 border border-gray-200 rounded-lg p-4">
              <span className="text-2xl shrink-0">{s.icon}</span>
              <div>
                <div className="font-bold text-sm mb-0.5">{s.title}</div>
                <div className="text-sm text-gray-600">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-5">
        <h2 className="text-lg font-bold mb-2">Travel Tip: Pre-Spell Your Info</h2>
        <p className="text-sm text-gray-700 leading-relaxed">Before your trip, use our <a href="/" className="text-amber-600 font-semibold hover:underline">converter</a> to spell out your name, confirmation code, and hotel reservation number. Save the phonetic readout in your phone&apos;s notes app. When you need to call the airline from a noisy airport terminal, you&apos;ll have it ready instantly.</p>
      </section>
      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
        <a href="/how-to-read-airline-confirmation-codes/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Airline Confirmation Codes</a>
        <a href="/airport-codes/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Airport Codes</a>
        <a href="/airline-codes/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Airline Codes</a>
      </div>
    </article>
  );
}
