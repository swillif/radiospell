import type { Metadata } from 'next';
import { ALL_ALPHABETS, NATO } from '@/data/alphabets';
export const metadata: Metadata = {
  title: 'German Phonetic Alphabet (DIN 5009) — Anton Berta Cäsar',
  description: 'The German spelling alphabet (DIN 5009): Anton, Berta, Cäsar, Dora, Emil. Complete A-Z with NATO comparison and interactive converter.',
  keywords: 'German phonetic alphabet, DIN 5009, Buchstabiertafel, German spelling alphabet',
};
export default function GermanPage() {
  const alpha = ALL_ALPHABETS['GERMAN'];
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">German Phonetic Alphabet (DIN 5009)</h1>
      <p className="text-gray-500 mb-6">Used in Germany, Austria, and German-speaking Switzerland.</p>
      <div className="border rounded-lg overflow-hidden mb-8">
        <table className="w-full text-sm"><thead><tr className="bg-gray-50 border-b"><th className="text-left py-2 px-4 font-semibold w-16">Letter</th><th className="text-left py-2 px-4 font-semibold">German</th><th className="text-left py-2 px-4 font-semibold text-gray-400">NATO</th></tr></thead>
          <tbody>{Object.entries(alpha.letters).map(([l,w])=><tr key={l} className="border-b border-gray-100"><td className="py-2 px-4 font-mono text-lg font-bold text-amber-600">{l}</td><td className="py-2 px-4 font-semibold">{w}</td><td className="py-2 px-4 text-gray-400">{NATO[l]}</td></tr>)}</tbody>
        </table>
      </div>
      <h2 className="text-xl font-bold mb-3">About This Alphabet</h2>
      <p className="text-gray-600 leading-relaxed mb-4">The German spelling alphabet uses personal first names familiar to every German speaker. In 2022, a major DIN revision replaced person names with German city names (Aachen, Berlin, Chemnitz), though the traditional names remain in widespread everyday use. For international or aviation communication, Germany uses the NATO alphabet.</p>
      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
        <a href="/nato-phonetic-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">NATO Alphabet</a>
        <a href="/french-phonetic-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">French Alphabet</a>
        <a href="/which-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Which Alphabet?</a>
      </div>
    </article>
  );
}
