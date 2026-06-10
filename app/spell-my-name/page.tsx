import type { Metadata } from 'next';
import NameCard from './NameCard';
export const metadata: Metadata = {
  title: 'Spell My Name — Generate Your Phonetic Name Card',
  description: 'Type your name and get a phonetic spelling card. Never have someone misspell your name on a phone call again. Share, save, or print.',
  keywords: 'spell my name, phonetic name, name in NATO alphabet, spell name phonetically',
};
export default function SpellMyNamePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Spell My Name</h1>
      <p className="text-gray-500 mb-6">Type your name below and get a phonetic spelling card you can save, share, or print. Never repeat yourself on a phone call again.</p>
      <NameCard />
      <section className="border-t mt-8 pt-6">
        <h2 className="text-xl font-bold mb-3">Why This Matters</h2>
        <p className="text-gray-600 leading-relaxed mb-4">Names get misspelled constantly on phone calls, airline reservations, hotel check-ins, and customer service interactions. Having your name pre-spelled in the NATO phonetic alphabet saves time, prevents errors, and projects confidence. Tape the card to your monitor, save it on your phone, or memorize it — you&apos;ll use it more often than you think.</p>
      </section>
      <div className="border-t pt-6 mt-6 flex flex-wrap gap-3">
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Full Converter</a>
        <a href="/how-to-spell-over-the-phone/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Phone Spelling Guide</a>
      </div>
    </article>
  );
}
