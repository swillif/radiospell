import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'How to Read Airline Confirmation Codes Over the Phone',
  description: 'Spell airline booking confirmation codes, PNR numbers, and record locators clearly using the NATO phonetic alphabet. Stop getting "was that B or D?" on every call.',
  keywords: 'airline confirmation code phonetic, PNR phonetic spelling, booking reference spell, record locator phonetic alphabet',
};
export default function AirlineConfPage() {
  const examples = [
    {code:'BK7F9X',spelled:'Bravo Kilo Seven Foxtrot Niner X-ray',context:'Typical 6-character airline PNR/record locator'},
    {code:'LGHTW2',spelled:'Lima Golf Hotel Tango Whiskey Two',context:'American Airlines confirmation format'},
    {code:'3K9DPN',spelled:'Three Kilo Niner Delta Papa November',context:'Delta/United format starting with number'},
    {code:'QR4J8V',spelled:'Quebec Romeo Four Juliett Eight Victor',context:'International carrier format'},
  ];
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">How to Read Airline Confirmation Codes Over the Phone</h1>
      <p className="text-gray-500 mb-6">Airline confirmation codes (PNR, record locator, booking reference) are 6-character alphanumeric strings specifically designed to be hard to guess — which also makes them hard to read over the phone. Here&apos;s how to do it right every time.</p>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">What Is a Confirmation Code?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">When you book a flight, the airline assigns a 6-character Passenger Name Record (PNR) — also called a confirmation code, record locator, or booking reference. It&apos;s a mix of letters and numbers (usually excluding easily confused characters like 0, O, 1, I). You need this code to check in, change flights, or get help from the airline over the phone.</p>
        <p className="text-gray-600 leading-relaxed mb-4">The problem: these codes are random. Unlike your name (which the agent can guess the spelling of), there&apos;s no context to help the listener fill in gaps. Every single character matters. &quot;BK7F9X&quot; and &quot;PK7F9X&quot; are completely different bookings belonging to different passengers.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Examples</h2>
        <div className="space-y-3">
          {examples.map(e=>(
            <div key={e.code} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-2xl font-bold text-amber-600 tracking-wider">{e.code}</span>
                <span className="text-xs text-gray-400">{e.context}</span>
              </div>
              <div className="font-mono text-sm text-green-700">{e.spelled}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Tips for Reading Codes on the Phone</h2>
        <div className="space-y-2">
          {[
            'Say "My confirmation code is..." before you start spelling — this tells the agent what to expect.',
            'Spell one character at a time with a brief pause: "Bravo... Kilo... Seven... Foxtrot... Niner... X-ray."',
            'Use "as in" for the first few characters: "B as in Bravo, K as in Kilo." Once the agent is following along, you can drop the "as in."',
            'Always say "niner" for 9 — agents familiar with phonetic codes expect this and it avoids the German "nein" confusion.',
            'Ask for a read-back: "Can you read that back to me?" This catches errors before they become problems.',
          ].map((tip,i)=>(
            <div key={i} className="flex gap-3 bg-gray-50 border border-gray-200 rounded-lg p-3">
              <span className="text-amber-600 font-bold font-mono shrink-0">{i+1}</span>
              <span className="text-sm text-gray-600">{tip}</span>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-blue-800">Have a confirmation code to spell right now? <a href="/" className="font-semibold text-amber-600 hover:underline">Use our converter</a> — type your code and get the phonetic spelling instantly.</p>
      </div>
      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
        <a href="/how-to-spell-over-the-phone/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Phone Spelling Guide</a>
        <a href="/airline-codes/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Airline Codes</a>
        <a href="/airport-codes/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Airport Codes</a>
      </div>
    </article>
  );
}
