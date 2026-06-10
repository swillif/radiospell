import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Phonetic Alphabet for Call Centers — Training Guide & Best Practices',
  description: 'How call center agents use the NATO phonetic alphabet to reduce errors and repeat calls. Training tips, scripts, and printable desk reference.',
  keywords: 'call center phonetic alphabet, customer service alphabet, call center spelling',
};
export default function CallCenterPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Phonetic Alphabet for Call Centers</h1>
      <p className="text-gray-500 mb-6">Reduce errors, cut repeat calls, and improve customer satisfaction — one alphabet at a time.</p>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Why Call Centers Need a Spelling Alphabet</h2>
        <p className="text-gray-600 leading-relaxed mb-4">A single misheard letter in a customer&apos;s name, address, or order number cascades into wrong deliveries, billing errors, and frustrated callbacks. Industry research shows the average cost of a repeat call is $5-$12, and misheard letters are among the top causes. The most commonly confused pairs — B/D, M/N, F/S, P/T — can be eliminated entirely with phonetic spelling.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Sample Scripts</h2>
        <div className="space-y-3">
          {[
            {scenario:'Verifying a name',script:'"Let me confirm that spelling — that\'s S as in Sierra, M as in Mike, I as in India, T as in Tango, H as in Hotel. Smith. Is that correct?"'},
            {scenario:'Reading back a confirmation code',script:'"Your confirmation code is AB3F9 — that\'s Alfa Bravo Three Foxtrot Niner."'},
            {scenario:'Spelling an email address',script:'"Your email is j-dot-smith at gmail — that\'s Juliett, decimal point, Sierra Mike India Tango Hotel, at Golf Mike Alfa India Lima dot com."'},
          ].map(s=>(
            <div key={s.scenario} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="font-bold text-sm mb-1">{s.scenario}</div>
              <p className="text-sm text-gray-600 italic">{s.script}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Training Your Team</h2>
        <p className="text-gray-600 leading-relaxed mb-4">Start by having every agent spell their own name in the NATO alphabet — this personalizes the learning. Then practice with the five most common customer scenarios. Print the <a href="/phonetic-alphabet-chart/" className="text-amber-600 hover:underline">cheat sheet</a> and post one at every desk. Within a week, most agents will have the common letters memorized. Within a month, it becomes second nature.</p>
      </section>
      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
        <a href="/phonetic-alphabet-chart/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Printable Chart</a>
        <a href="/how-to-spell-over-the-phone/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Phone Spelling Guide</a>
      </div>
    </article>
  );
}
