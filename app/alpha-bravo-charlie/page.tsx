import type { Metadata } from 'next';
import { NATO, MORSE } from '@/data/alphabets';
export const metadata: Metadata = {
  title: 'Alpha Bravo Charlie — The NATO Phonetic Alphabet Explained',
  description: 'Alpha Bravo Charlie Delta Echo Foxtrot... Learn the complete NATO phonetic alphabet, what each word means, and use our free converter tool.',
  keywords: 'alpha bravo charlie, alpha bravo charlie delta, phonetic alphabet, ABC military',
};
export default function ABCPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Alpha Bravo Charlie</h1>
      <p className="text-gray-500 mb-6">&quot;Alpha Bravo Charlie&quot; are the first three words of the NATO phonetic alphabet — the international standard for spelling words clearly over radio and phone. Here&apos;s the complete alphabet and what it&apos;s used for.</p>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
        <p className="font-mono text-amber-800 text-sm leading-relaxed">{Object.values(NATO).join(' · ')}</p>
      </div>
      <h2 className="text-xl font-bold mb-3">The Complete Alphabet</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-8">
        {Object.entries(NATO).map(([l,w])=>(
          <div key={l} className="bg-gray-50 rounded-lg p-2.5 text-center">
            <span className="font-mono text-lg font-bold text-amber-600">{l}</span>
            <span className="text-sm text-gray-700 ml-2">{w}</span>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-bold mb-3">Why &quot;Alfa&quot; Not &quot;Alpha&quot;?</h2>
      <p className="text-gray-600 leading-relaxed mb-4">You&apos;ll notice the first word is spelled &quot;Alfa&quot; — not &quot;Alpha.&quot; This is deliberate. The ICAO spelling avoids the &quot;ph&quot; combination because speakers of some languages don&apos;t pronounce &quot;ph&quot; as &quot;f.&quot; By spelling it &quot;Alfa,&quot; the pronunciation is unambiguous in every language.</p>
      <h2 className="text-xl font-bold mb-3">Try It Yourself</h2>
      <p className="text-gray-600 leading-relaxed mb-4">Use our <a href="/" className="text-amber-600 font-medium hover:underline">free converter tool</a> to instantly spell any word, name, or code in the NATO phonetic alphabet. Or <a href="/quiz/" className="text-amber-600 font-medium hover:underline">take the quiz</a> to test your knowledge.</p>
      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
        <a href="/nato-phonetic-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Full Guide</a>
        <a href="/history/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">History</a>
      </div>
    </article>
  );
}
