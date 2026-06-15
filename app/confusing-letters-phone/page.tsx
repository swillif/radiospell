import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Most Confusing Letters on Phone Calls — And How to Fix It',
  description: 'B or D? M or N? F or S? The most commonly confused letter pairs on phone calls and how the NATO phonetic alphabet solves each one.',
  keywords: 'confusing letters phone, B D P T sound same, M N confusion phone, letters that sound alike',
};
export default function ConfusingLettersPage() {
  const pairs = [
    {letters:'B / D',why:'Both end in "ee" sound. Over a phone, the initial consonant is often lost in background noise.',fix:'Bravo vs Delta',freq:'Most common'},
    {letters:'M / N',why:'Nearly identical nasal sounds. Even in person these are hard to distinguish; over phone it\'s almost impossible.',fix:'Mike vs November',freq:'Very common'},
    {letters:'F / S',why:'Both are voiceless fricatives. Phone speakers often clip the high frequencies that distinguish them.',fix:'Foxtrot vs Sierra',freq:'Very common'},
    {letters:'P / T',why:'Both are voiceless plosives with similar mouth positions. Phone compression makes them nearly identical.',fix:'Papa vs Tango',freq:'Common'},
    {letters:'B / P',why:'Identical mouth position — the only difference is voicing, which phone mics often fail to capture.',fix:'Bravo vs Papa',freq:'Common'},
    {letters:'D / T',why:'Same as B/P — same position, different voicing. Especially problematic with soft speakers.',fix:'Delta vs Tango',freq:'Common'},
    {letters:'I / Y',why:'"Eye" vs "Why" — both start with similar diphthongs that blur over phone compression.',fix:'India vs Yankee',freq:'Moderate'},
    {letters:'C / Z',why:'"See" vs "Zee" — rhyming sounds that are almost impossible to distinguish in noisy environments.',fix:'Charlie vs Zulu',freq:'Moderate'},
    {letters:'G / J',why:'"Gee" vs "Jay" — similar opening sounds that compress into the same audio profile.',fix:'Golf vs Juliett',freq:'Moderate'},
    {letters:'E / B / C / D / G / P / T / V / Z',why:'All contain the "ee" vowel sound. This is the single biggest source of phone spelling confusion.',fix:'Each gets a unique multi-syllable word',freq:'The root cause'},
  ];
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">The Most Confusing Letters on Phone Calls</h1>
      <p className="text-gray-500 mb-6">&quot;Was that B or D?&quot; &quot;M or N?&quot; &quot;F or S?&quot; Here are the letter pairs that cause the most errors — and the one-word fix for each.</p>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Why Letters Sound Alike on Phones</h2>
        <p className="text-gray-600 leading-relaxed mb-4">Phone audio compresses voice into a narrow frequency band (300-3400 Hz), cutting the high and low frequencies that help distinguish consonants. Add background noise, accents, bad connections, and speaker volume differences, and many letter names become acoustically identical. Nine English letters — B, C, D, E, G, P, T, V, Z — all share the &quot;ee&quot; vowel sound, making them the worst offenders.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">The Worst Offenders</h2>
        <div className="space-y-3">
          {pairs.map(p=>(
            <div key={p.letters} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xl font-bold text-red-500">{p.letters}</span>
                <span className="text-[11px] bg-red-50 text-red-600 px-2 py-0.5 rounded font-medium">{p.freq}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{p.why}</p>
              <div className="text-sm font-mono text-green-700 font-semibold">Fix: {p.fix}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-8 bg-amber-50 border border-amber-200 rounded-lg p-5">
        <h2 className="text-lg font-bold mb-2">The Takeaway</h2>
        <p className="text-gray-700 text-sm leading-relaxed">The NATO phonetic alphabet was specifically engineered to solve this problem. Every code word is multi-syllable, starts with a distinct sound, and was tested across 31 nations to ensure it couldn&apos;t be confused with any other word in the set. You don&apos;t need to memorize all 26 — just learn the words for the letters in your name and the most common confusing pairs above.</p>
      </section>
      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Try the Converter</a>
        <a href="/how-to-spell-over-the-phone/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Phone Spelling Guide</a>
        <a href="/nato-phonetic-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Full NATO Alphabet</a>
      </div>
    </article>
  );
}
