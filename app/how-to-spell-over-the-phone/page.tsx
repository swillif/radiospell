import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'How to Spell Your Name Over the Phone — A Practical Guide',
  description: 'Stop repeating yourself on phone calls. Learn how to use the NATO phonetic alphabet to spell names, emails, and confirmation codes clearly every time.',
  keywords: 'spell name over phone, how to spell phonetically, phonetic alphabet phone calls',
};
export default function HowToSpellPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">How to Spell Your Name Over the Phone</h1>
      <p className="text-gray-500 mb-6">(Without repeating yourself five times.)</p>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">The Problem Everyone Knows</h2>
        <p className="text-gray-600 leading-relaxed mb-4">&quot;Was that B or D?&quot; &quot;M or N?&quot; &quot;F or S?&quot; If you&apos;ve ever spent two minutes spelling your email address to a customer service agent, you know the frustration. The letters B, C, D, E, G, P, T, and V all rhyme. M and N sound identical over a bad phone connection. F and S blur together. The result: wrong orders, misspelled names, and wasted time for everyone.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">The Solution: Use a Spelling Alphabet</h2>
        <p className="text-gray-600 leading-relaxed mb-4">Instead of saying the letter itself, say a word that starts with that letter. The NATO phonetic alphabet gives you a standardized word for each letter that&apos;s been tested across 31 nations to be unmistakable: A is &quot;Alfa,&quot; B is &quot;Bravo,&quot; C is &quot;Charlie,&quot; and so on. You don&apos;t need to memorize all 26 — just learn the letters in YOUR name and the most common letters you spell regularly.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Step-by-Step: Making It Natural</h2>
        <div className="space-y-3">
          {[
            {step:'1',title:'Learn your name first',desc:'Go to our converter, type your name, and memorize those 5-10 words. That covers 90% of your phone spelling needs.'},
            {step:'2',title:'Use "as in" the first time',desc:'Say "B as in Bravo" the first time — after that you can drop the "as in" and just say the code word.'},
            {step:'3',title:'Go slow — one word at a time',desc:'Pause briefly between each word. The other person needs time to write each letter.'},
            {step:'4',title:'Listen for the read-back',desc:'A good agent will repeat what you spelled. If they don\'t, ask them to read it back.'},
            {step:'5',title:'Spell the tricky parts, not everything',desc:'You don\'t need to spell "Johnson" phonetically — just say "Johnson, J-O-H-N-S-O-N." But DO spell your email domain: "at gmail, that\'s Golf Mike Alfa India Lima."'},
          ].map(s=>(
            <div key={s.step} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-baseline gap-2 mb-1"><span className="text-amber-600 font-bold font-mono">{s.step}</span><span className="font-bold">{s.title}</span></div>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Common Confusing Letter Pairs</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[['B / D','Bravo vs Delta'],['M / N','Mike vs November'],['F / S','Foxtrot vs Sierra'],['P / T','Papa vs Tango'],['C / Z','Charlie vs Zulu'],['I / Y','India vs Yankee']].map(([pair,fix])=>(
            <div key={pair} className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="font-bold text-red-500 mb-1">{pair}</div>
              <div className="text-xs text-green-700 font-mono">{fix}</div>
            </div>
          ))}
        </div>
      </section>
      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Try the Converter</a>
        <a href="/spell-my-name/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Spell My Name</a>
        <a href="/phonetic-alphabet-chart/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Printable Chart</a>
      </div>
    </article>
  );
}
