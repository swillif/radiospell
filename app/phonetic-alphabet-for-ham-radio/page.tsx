import type { Metadata } from 'next';
import { NATO, NATO_NUMBERS, MORSE } from '@/data/alphabets';
export const metadata: Metadata = {
  title: 'Phonetic Alphabet for Ham Radio — Callsigns, Q-Codes & Best Practices',
  description: 'How amateur radio operators use the NATO phonetic alphabet for callsigns, signal reports, and communication. Includes Q-codes, RST system, and common practices.',
  keywords: 'ham radio phonetic alphabet, amateur radio spelling alphabet, ham radio callsign phonetic, Q codes ham radio',
};
export default function HamRadioPage() {
  const qcodes = [
    {code:'QTH',meaning:'Location / "What is your location?"'},
    {code:'QSL',meaning:'Confirmation / "I confirm receipt"'},
    {code:'QSO',meaning:'Contact / conversation with another station'},
    {code:'QRZ',meaning:'"Who is calling me?"'},
    {code:'QRM',meaning:'Interference from other stations'},
    {code:'QRN',meaning:'Natural interference (static/noise)'},
    {code:'QSY',meaning:'Change frequency'},
    {code:'QRV',meaning:'"I am ready to receive"'},
    {code:'QRP',meaning:'Low power operation (typically 5W or less)'},
    {code:'QRT',meaning:'Closing station / going off air'},
  ];
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Phonetic Alphabet for Ham Radio</h1>
      <p className="text-gray-500 mb-6">Amateur radio operators rely on the NATO phonetic alphabet for callsigns, contest exchanges, and DX communication. Here&apos;s how to use it effectively on the air.</p>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Why Ham Radio Uses the NATO Alphabet</h2>
        <p className="text-gray-600 leading-relaxed mb-4">The ITU (International Telecommunication Union) recommends the NATO/ICAO phonetic alphabet for all amateur radio communication. While not legally mandatory for ham operators (unlike commercial aviation), it&apos;s the universal standard on HF, VHF, and UHF frequencies. Using non-standard words — like &quot;America&quot; for A or &quot;Boston&quot; for B — is common but discouraged, especially on international frequencies where non-English speakers rely on recognizing the standard NATO words.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Spelling Your Callsign</h2>
        <p className="text-gray-600 leading-relaxed mb-4">Your callsign is your identity on the air. Spell it phonetically every time you transmit it, especially during contests, DX pileups, or weak-signal conditions. For example, callsign W1AW (the ARRL headquarters station) would be &quot;Whiskey One Alfa Whiskey.&quot; KG7YDB would be &quot;Kilo Golf Seven Yankee Delta Bravo.&quot;</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Common Q-Codes</h2>
        <p className="text-gray-600 leading-relaxed mb-4">Q-codes are three-letter shorthand codes starting with Q, inherited from maritime telegraph. They&apos;re used alongside the phonetic alphabet in ham radio communication.</p>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b"><th className="text-left py-2 px-4 font-semibold">Q-Code</th><th className="text-left py-2 px-4 font-semibold">Meaning</th></tr></thead>
            <tbody>{qcodes.map(q=><tr key={q.code} className="border-b border-gray-100"><td className="py-2 px-4 font-mono font-bold text-amber-600">{q.code}</td><td className="py-2 px-4 text-gray-600">{q.meaning}</td></tr>)}</tbody>
          </table>
        </div>
      </section>
      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
        <a href="/nato-phonetic-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Full NATO Alphabet</a>
        <a href="/which-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Which Alphabet?</a>
        <a href="/history/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">History</a>
      </div>
    </article>
  );
}
