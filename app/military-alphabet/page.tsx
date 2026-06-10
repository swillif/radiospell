import type { Metadata } from 'next';
import { NATO, NATO_NUMBERS, MORSE } from '@/data/alphabets';

export const metadata: Metadata = {
  title: 'Military Alphabet — A to Z Code Words Used by US Armed Forces',
  description: 'The military alphabet (NATO phonetic alphabet) used by the US Army, Navy, Air Force, Marines, and Coast Guard. Complete A-Z with pronunciation guide.',
  keywords: 'military alphabet, army alphabet, military phonetic alphabet, military code words, Marine alphabet',
};

export default function MilitaryAlphabetPage() {
  const slang = [
    { term: 'Bravo Zulu', meaning: '"Well done" — originated from Navy signal flags', example: '"Bravo Zulu on that landing."' },
    { term: 'Oscar Mike', meaning: '"On the Move" — moving to a new position', example: '"We are Oscar Mike to checkpoint Delta."' },
    { term: 'Charlie Mike', meaning: '"Continue Mission" — keep going', example: '"Charlie Mike, no change to orders."' },
    { term: 'Lima Charlie', meaning: '"Loud and Clear" — good radio reception', example: '"Read you Lima Charlie."' },
    { term: 'Whiskey Tango Foxtrot', meaning: '"WTF" — expressing confusion or disbelief', example: 'Self-explanatory.' },
    { term: 'Tango Down', meaning: 'Target neutralized', example: '"Tango down, sector clear."' },
    { term: 'Foxtrot Oscar', meaning: 'A colorful suggestion to depart (FO)', example: 'Used informally among troops.' },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">The Military Alphabet</h1>
      <p className="text-gray-500 mb-6">The &quot;military alphabet&quot; is the NATO phonetic alphabet — the same system used by all five branches of the US military and all NATO member nations since 1956.</p>

      <div className="border rounded-lg overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead><tr className="bg-gray-50 border-b">
            <th className="text-left py-2 px-4 font-semibold w-16">Letter</th>
            <th className="text-left py-2 px-4 font-semibold">Code Word</th>
            <th className="text-left py-2 px-4 font-semibold">Morse</th>
          </tr></thead>
          <tbody>
            {Object.entries(NATO).map(([l, w]) => (
              <tr key={l} className="border-b border-gray-100">
                <td className="py-2 px-4 font-mono text-lg font-bold text-amber-600">{l}</td>
                <td className="py-2 px-4 font-semibold">{w}</td>
                <td className="py-2 px-4 font-mono text-gray-400 tracking-widest text-xs">{MORSE[l]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-3">Military Slang from the Phonetic Alphabet</h2>
      <p className="text-gray-600 mb-4 leading-relaxed">Beyond spelling, military personnel use phonetic code words as shorthand for common phrases. These terms have become part of everyday military culture and some have crossed into civilian use.</p>
      <div className="space-y-3 mb-8">
        {slang.map(s => (
          <div key={s.term} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="font-bold text-amber-700">{s.term}</div>
            <div className="text-sm text-gray-600">{s.meaning}</div>
            <div className="text-xs text-gray-400 mt-1 italic">{s.example}</div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-3">Which Branches Use It?</h2>
      <p className="text-gray-600 leading-relaxed mb-8">All five branches of the US military — Army, Navy, Air Force, Marines, and Coast Guard — use the identical NATO phonetic alphabet. It is also mandatory for all 31 NATO member nations, ensuring interoperability across international military operations. Non-NATO militaries generally adopt it for joint exercises and coalition operations.</p>

      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
        <a href="/nato-phonetic-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">NATO Alphabet</a>
        <a href="/police-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Police Alphabet</a>
        <a href="/history/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">History</a>
      </div>
    </article>
  );
}
