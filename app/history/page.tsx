import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'History of the Phonetic Alphabet — From WWI to NATO',
  description: 'The complete history of spelling alphabets from WWI signal flags through the WWII Able Baker alphabet to the modern NATO/ICAO standard adopted in 1956.',
  keywords: 'history phonetic alphabet, Able Baker alphabet, NATO alphabet history, when was phonetic alphabet created',
};

export default function HistoryPage() {
  const jsonLd = { '@context':'https://schema.org','@type':'Article',headline:'History of the Phonetic Alphabet',description:'From WWI radio to the modern NATO standard',author:{'@type':'Organization',name:'RadioSpell.com'},datePublished:'2026-01-15' };
  const sections = [
    { era: '1910s–1920s', title: 'World War I & Early Radio', content: 'The earliest radio spelling alphabets emerged alongside the first military radio systems. The Royal Navy and British Army developed ad-hoc word lists to spell messages over unreliable early equipment. These were informal — operators often improvised their own words, leading to confusion between units. The fundamental problem was clear: letters like B, D, P, and T sounded nearly identical over the crackling static of early voice radio, and miscommunication could cost lives.' },
    { era: '1920s–1930s', title: 'The RAF Alphabet', content: 'The Royal Air Force formalized the first widely-used military spelling alphabet: Ace, Beer, Charlie, Don, Edward, Freddie, George, Harry, In, Johnnie, King, London, Monkey, Nuts, Orange, Pip, Queen, Robert, Sugar, Toc, Uncle, Vic, William, X-ray, Yorker, Zebra. This was used throughout the British Empire and influenced early civilian aviation. The choice of common English words and names made it easy for native speakers but created problems in international communication.' },
    { era: '1941–1956', title: 'The "Able Baker" Joint Army/Navy Alphabet', content: 'During World War II, the US and UK adopted a joint alphabet: Able, Baker, Charlie, Dog, Easy, Fox, George, How, Item, Jig, King, Love, Mike, Nan, Oboe, Peter, Queen, Roger, Sugar, Tare, Uncle, Victor, William, X-ray, Yoke, Zebra. This "Able Baker" alphabet became iconic through war films and was the standard for 15 years. However, extensive post-war testing revealed it was problematic for non-English speakers — many code words were difficult to pronounce in French, Spanish, and other languages spoken by ICAO member nations.' },
    { era: '1956–Present', title: 'The ICAO/NATO Alphabet', content: 'In the early 1950s, ICAO set out to create a truly international alphabet. Professor Jean-Paul Vinay of the Université de Montréal led testing of hundreds of candidate words across speakers of 31 nations. Each word was evaluated for intelligibility in English, French, and Spanish — the three working languages of ICAO. Words had to be distinct from each other, easy to pronounce across languages, and recognizable through heavy radio static. The result was formally adopted on March 1, 1956. NATO adopted it simultaneously, giving it the popular name "NATO phonetic alphabet." The only spelling change since adoption was "Alfa" (from "Alpha") to prevent mispronunciation in languages where "ph" isn\'t pronounced as "f." It has remained essentially unchanged for nearly 70 years — one of the most enduring international standards ever created.' },
    { era: '1940–Present', title: 'The Police/APCO Alphabet', content: 'In parallel with military development, US law enforcement created its own alphabet through the Association of Public-Safety Communications Officials (APCO) in 1940: Adam, Boy, Charles, David, Edward, Frank, George, Henry, Ida, John, King, Lincoln, Mary, Nora, Ocean, Paul, Queen, Robert, Sam, Tom, Union, Victor, William, X-ray, Young, Zebra. Many US police departments, especially the LAPD and NYPD, still use variants of this system today, despite APCO officially adopting the NATO alphabet in 1974. Regional differences persist — the LAPD says "Adam" while some East Coast departments say "Abel."' },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-3xl font-bold mb-2">The History of Spelling Alphabets</h1>
      <p className="text-gray-500 mb-8">From World War I radio operators to the modern NATO standard — how the alphabet we use today was forged across decades of conflict and international cooperation.</p>

      {sections.map((s, i) => (
        <section key={i} className="mb-8">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">{s.era}</span>
            <h2 className="text-xl font-bold">{s.title}</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">{s.content}</p>
        </section>
      ))}

      <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-bold mb-3">Timeline Summary</h2>
        <div className="space-y-2 text-sm">
          {[
            ['1913','Royal Navy issues first informal radio spelling guidelines'],
            ['1927','RAF standardizes Ace-Beer-Charlie alphabet for British Empire'],
            ['1938','International Telecommunication Union publishes first civilian alphabet'],
            ['1941','US/UK adopt joint Able-Baker-Charlie alphabet for WWII'],
            ['1947','ICAO publishes first international aviation alphabet (Able Baker based)'],
            ['1951','ICAO begins testing new words across 31 nations'],
            ['1956','Modern NATO/ICAO alphabet adopted (March 1) — still in use today'],
            ['1974','APCO officially adopts NATO alphabet for US law enforcement'],
          ].map(([year, event]) => (
            <div key={year} className="flex gap-3">
              <span className="font-mono font-bold text-amber-600 w-12 shrink-0">{year}</span>
              <span className="text-gray-600">{event}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/nato-phonetic-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Full NATO Alphabet</a>
        <a href="/police-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Police Alphabet</a>
        <a href="/which-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Which Alphabet?</a>
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
      </div>
    </article>
  );
}
