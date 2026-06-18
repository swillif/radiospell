import type { Metadata } from 'next';
import { NATO, NATO_NUMBERS, MORSE } from '@/data/alphabets';

export const metadata: Metadata = {
  title: 'ICAO Phonetic Alphabet — The International Aviation Standard',
  description: 'The ICAO phonetic alphabet (International Civil Aviation Organization) — the same as NATO but officially designated for all international aviation. Complete A-Z with pronunciation.',
  keywords: 'ICAO phonetic alphabet, ICAO alphabet, aviation phonetic alphabet, international civil aviation alphabet, ICAO spelling alphabet',
};

export default function ICAOPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">The ICAO Phonetic Alphabet</h1>
      <p className="text-gray-500 mb-6">The ICAO phonetic alphabet is the official international aviation spelling standard — and it&apos;s identical to the NATO phonetic alphabet. Here&apos;s everything you need to know about the ICAO version specifically.</p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-blue-800"><strong>ICAO vs NATO:</strong> These are the same alphabet. ICAO (International Civil Aviation Organization) adopted it in 1956 for aviation. NATO adopted the same words simultaneously for military use. The words are identical — only the organization that mandates it differs.</p>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">The ICAO/NATO Phonetic Alphabet — Complete Table</h2>
        <div className="border rounded-lg overflow-hidden mb-4">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b">
              <th className="text-left py-2 px-4 font-semibold">Letter</th>
              <th className="text-left py-2 px-4 font-semibold">ICAO Code Word</th>
              <th className="text-left py-2 px-4 font-semibold">Pronunciation</th>
              <th className="text-left py-2 px-4 font-semibold">Morse</th>
            </tr></thead>
            <tbody>{Object.entries(NATO).map(([l, w]) => (
              <tr key={l} className="border-b border-gray-100">
                <td className="py-2 px-4 font-mono text-lg font-bold text-amber-600">{l}</td>
                <td className="py-2 px-4 font-semibold">{w}</td>
                <td className="py-2 px-4 text-gray-500 text-xs uppercase tracking-wide">{w.replace('-',' ')}</td>
                <td className="py-2 px-4 font-mono text-gray-400 tracking-widest text-xs">{MORSE[l]}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">ICAO Number Pronunciation</h2>
        <p className="text-gray-600 leading-relaxed mb-4">ICAO specifies exact pronunciation for numbers — different from everyday speech to prevent misunderstanding over radio in international contexts.</p>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b"><th className="text-left py-2 px-4 font-semibold">Digit</th><th className="text-left py-2 px-4 font-semibold">ICAO Spoken Form</th><th className="text-left py-2 px-4 font-semibold">Why Different?</th></tr></thead>
            <tbody>
              {[['3','TREE','Avoids confusion with "free" over static'],['4','FOW-ER','Clearer across language barriers'],['5','FIFE','Avoids confusion with "fire"'],['9','NIN-ER','Avoids confusion with German "nein" (no)'],['.','DAY-SEE-MAL','Unambiguous decimal point for frequencies']].map(([d,s,w])=>(
                <tr key={d} className="border-b border-gray-100">
                  <td className="py-2 px-4 font-mono text-lg font-bold text-blue-500">{d}</td>
                  <td className="py-2 px-4 font-mono font-bold text-green-700">{s}</td>
                  <td className="py-2 px-4 text-xs text-gray-500">{w}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Where ICAO Alphabet Is Mandatory</h2>
        <div className="space-y-2">
          {[
            {where:'All International Aviation',what:'Every pilot communicating with ATC across national borders must use ICAO spelling. Codified in ICAO Annex 10, Volume II.'},
            {where:'Air Traffic Control (ATC)',what:'Controllers worldwide use ICAO spelling for aircraft callsigns, waypoints, airports, and instructions.'},
            {where:'METAR & TAF Weather Reports',what:'Aviation weather uses ICAO station identifiers (4-letter codes like KDEN, EGLL) pronounced using the ICAO alphabet.'},
            {where:'Flight Plans',what:'All international flight plan submissions use ICAO identifiers, airport codes, and waypoints spelled using the ICAO alphabet.'},
            {where:'Maritime Communication',what:'The IMO adopted the ICAO alphabet for ship radio communication, making it the standard for both air and sea.'},
          ].map(s=>(
            <div key={s.where} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <div className="font-bold text-sm">{s.where}</div>
              <div className="text-xs text-gray-600 mt-0.5">{s.what}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/nato-phonetic-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">NATO Alphabet Guide</a>
        <a href="/aviation-numbers/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Aviation Numbers</a>
        <a href="/metar-decoder/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">METAR Decoder</a>
        <a href="/history/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">History</a>
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
      </div>
    </article>
  );
}
