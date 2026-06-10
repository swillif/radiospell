import type { Metadata } from 'next';
import { ALL_ALPHABETS, NATO } from '@/data/alphabets';
export const metadata: Metadata = {
  title: 'French Phonetic Alphabet — Anatole Berthe Célestin',
  description: 'The French spelling alphabet: Anatole, Berthe, Célestin, Désiré, Eugène. Complete A-Z with NATO comparison.',
  keywords: 'French phonetic alphabet, French spelling alphabet, alphabet phonetique francais',
};
export default function FrenchPage() {
  const alpha = ALL_ALPHABETS['FRENCH'];
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">French Phonetic Alphabet</h1>
      <p className="text-gray-500 mb-6">Used in France and French-speaking countries for domestic communication.</p>
      <div className="border rounded-lg overflow-hidden mb-8">
        <table className="w-full text-sm"><thead><tr className="bg-gray-50 border-b"><th className="text-left py-2 px-4 font-semibold w-16">Letter</th><th className="text-left py-2 px-4 font-semibold">French</th><th className="text-left py-2 px-4 font-semibold text-gray-400">NATO</th></tr></thead>
          <tbody>{Object.entries(alpha.letters).map(([l,w])=><tr key={l} className="border-b border-gray-100"><td className="py-2 px-4 font-mono text-lg font-bold text-amber-600">{l}</td><td className="py-2 px-4 font-semibold">{w}</td><td className="py-2 px-4 text-gray-400">{NATO[l]}</td></tr>)}</tbody>
        </table>
      </div>
      <h2 className="text-xl font-bold mb-3">About This Alphabet</h2>
      <p className="text-gray-600 leading-relaxed mb-4">The French spelling alphabet uses traditional first names reflecting early 20th century French naming conventions. French aviation, military, and maritime operators use the NATO/ICAO alphabet for international communication. French was one of the three languages (alongside English and Spanish) used to test NATO code words for international intelligibility.</p>
      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
        <a href="/german-phonetic-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">German Alphabet</a>
        <a href="/spanish-phonetic-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Spanish Alphabet</a>
      </div>
    </article>
  );
}
