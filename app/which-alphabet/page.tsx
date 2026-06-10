import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Which Phonetic Alphabet Should You Use? A Decision Guide',
  description: 'NATO, police, military, or country-specific? Find out which spelling alphabet is right for your situation — aviation, law enforcement, call centers, and more.',
  keywords: 'which phonetic alphabet, best spelling alphabet, NATO vs police alphabet',
};
export default function WhichAlphabetPage() {
  const scenarios = [
    {who:'Everyday Phone Calls & Customer Service',rec:'NATO',icon:'📞',reason:'The NATO alphabet is universally understood. When spelling your name, email, or confirmation code, words like "Alfa, Bravo, Charlie" are recognized worldwide. If NATO feels too military, using common names ("A as in Apple") works for casual calls — but the NATO version is less ambiguous.'},
    {who:'Aviation (Pilots, ATC, Dispatchers)',rec:'NATO (mandatory)',icon:'✈️',reason:'The NATO/ICAO alphabet is the only legally accepted spelling alphabet in international aviation, codified by ICAO Annex 10. Using any other system on ATC frequencies could create dangerous confusion. Aviation also requires specific number pronunciation (niner, tree, fife).'},
    {who:'US Law Enforcement',rec:'LAPD/APCO or NATO',icon:'🚔',reason:'Many US departments still use the APCO alphabet (Adam, Boy, Charles). LAPD and NYPD use their own variants. However, since APCO adopted NATO in 1974, newer departments and federal agencies (FBI, DEA) use NATO. Check your department SOP.'},
    {who:'Military (All Branches)',rec:'NATO (mandatory)',icon:'🎖️',reason:'All NATO member nations use the same alphabet across all service branches. Non-NATO militaries generally adopt it for coalition operations and international exercises.'},
    {who:'Maritime & Shipping',rec:'NATO',icon:'🚢',reason:'The IMO adopted the NATO alphabet for all ship-to-shore and ship-to-ship communication. Container numbers, port codes, and vessel names all use NATO spelling.'},
    {who:'Ham Radio / Amateur Radio',rec:'NATO (recommended)',icon:'📻',reason:'While not legally required, NATO is strongly recommended by the ITU. Using non-standard words is common but discouraged on international frequencies.'},
    {who:'Non-English Countries (Domestic Use)',rec:'Local alphabet',icon:'🌍',reason:'Many countries have their own spelling alphabets optimized for their language: Germany uses DIN 5009, France has its own, etc. Use your local alphabet domestically and NATO for international communication.'},
  ];
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Which Phonetic Alphabet Should You Use?</h1>
      <p className="text-gray-500 mb-6">The right alphabet depends on your situation. Here&apos;s a quick decision guide.</p>
      <div className="space-y-4 mb-8">
        {scenarios.map(s=>(
          <div key={s.who} className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2"><span className="text-xl">{s.icon}</span><h2 className="font-bold text-base">{s.who}</h2></div>
              <span className="font-mono text-sm text-green-700 font-semibold bg-green-50 px-2 py-0.5 rounded">→ {s.rec}</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{s.reason}</p>
          </div>
        ))}
      </div>
      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
        <a href="/nato-phonetic-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">NATO Alphabet</a>
        <a href="/police-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Police Alphabet</a>
        <a href="/german-phonetic-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">German Alphabet</a>
      </div>
    </article>
  );
}
