import type { Metadata } from 'next';
import { NATO, NATO_NUMBERS, MORSE } from '@/data/alphabets';
import PrintButton from './PrintButton';
export const metadata: Metadata = {
  title: 'Phonetic Alphabet Chart — Free Printable Cheat Sheet',
  description: 'Download a free printable NATO phonetic alphabet chart. Perfect for your desk, cubicle wall, or team. Includes Morse code and aviation numbers.',
  keywords: 'phonetic alphabet chart, printable phonetic alphabet, NATO alphabet PDF, phonetic alphabet poster',
};
export default function ChartPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Phonetic Alphabet Chart</h1>
      <p className="text-gray-500 mb-4">Free printable reference. Tape it to your desk, monitor, or cubicle wall.</p>
      <PrintButton />
      <div className="border rounded-lg overflow-hidden mb-6 mt-4">
        <table className="w-full text-sm">
          <thead><tr className="bg-gray-50 border-b"><th className="text-left py-2 px-4 font-semibold">Letter</th><th className="text-left py-2 px-4 font-semibold">Code Word</th><th className="text-left py-2 px-4 font-semibold">Morse</th></tr></thead>
          <tbody>
            {Object.entries(NATO).map(([l,w])=><tr key={l} className="border-b border-gray-100"><td className="py-2 px-4 font-mono text-lg font-bold text-amber-600">{l}</td><td className="py-2 px-4 font-semibold">{w}</td><td className="py-2 px-4 font-mono text-gray-400 tracking-widest text-xs">{MORSE[l]}</td></tr>)}
          </tbody>
        </table>
      </div>
      <h2 className="text-xl font-bold mb-2">Numbers</h2>
      <div className="border rounded-lg overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead><tr className="bg-gray-50 border-b"><th className="text-left py-2 px-4 font-semibold">Digit</th><th className="text-left py-2 px-4 font-semibold">Spoken</th><th className="text-left py-2 px-4 font-semibold">Morse</th></tr></thead>
          <tbody>
            {Object.entries(NATO_NUMBERS).map(([n,w])=><tr key={n} className="border-b border-gray-100"><td className="py-2 px-4 font-mono text-lg font-bold text-blue-500">{n}</td><td className="py-2 px-4 font-semibold">{w}</td><td className="py-2 px-4 font-mono text-gray-400 tracking-widest text-xs">{MORSE[n]}</td></tr>)}
          </tbody>
        </table>
      </div>
      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
        <a href="/quiz/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Quiz</a>
        <a href="/nato-phonetic-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Full Guide</a>
      </div>
    </article>
  );
}
