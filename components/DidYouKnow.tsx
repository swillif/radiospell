'use client';
import { useState } from 'react';

const FACTS = [
  { letter: 'A', fact: '"Alfa" is intentionally spelled without a "ph" so speakers of languages where "ph" is not pronounced as "f" can read it correctly. The ICAO made this change specifically for international clarity.', link: '/history/', linkText: 'Read the full history' },
  { letter: 'J', fact: '"Juliett" has two T\'s so French speakers won\'t treat the final T as silent, as they would with the name "Juliet." Every spelling choice in the NATO alphabet was tested across 31 nations.', link: '/nato-phonetic-alphabet/', linkText: 'See the full alphabet' },
  { letter: '9', fact: 'Pilots say "niner" instead of "nine" to avoid confusion with the German word "nein" (meaning no). This prevents dangerous misunderstandings in international aviation.', link: '/aviation-numbers/', linkText: 'Learn aviation numbers' },
  { letter: '3', fact: 'In aviation, the number 3 is pronounced "tree" (dropping the "th") so it can\'t be confused with "free" over radio static. Every number has a modified pronunciation.', link: '/aviation-numbers/', linkText: 'See all aviation numbers' },
  { letter: 'F', fact: '"Foxtrot" replaced "Fox" from the earlier Able Baker alphabet because testing showed that single-syllable words were significantly harder to understand over radio static.', link: '/history/', linkText: 'Explore alphabet history' },
  { letter: 'Q', fact: '"Quebec" is the only NATO code word that doesn\'t start with the same sound as its letter in English. It\'s pronounced "keh-BECK" following the standard French pronunciation.', link: '/nato-phonetic-alphabet/', linkText: 'View pronunciation guide' },
  { letter: 'Z', fact: '"Zulu" gives its name to "Zulu time" — the military and aviation term for UTC (Coordinated Universal Time). When pilots say "wheels up at 1400 Zulu," they mean 2:00 PM UTC.', link: '/aviation-numbers/', linkText: 'Learn aviation terminology' },
  { letter: 'W', fact: '"Whiskey" caused diplomatic sensitivities in some Muslim-majority nations, but it was kept for international consistency. Changing any single word would have required re-testing the entire alphabet.', link: '/history/', linkText: 'Read the full history' },
  { letter: 'L', fact: '"Lima" is pronounced "LEE-mah" in ICAO standards, matching the Spanish pronunciation of Peru\'s capital — not "LY-mah" as English speakers might assume.', link: '/spanish-phonetic-alphabet/', linkText: 'See the Spanish alphabet' },
  { letter: 'O', fact: '"Oscar" was chosen over earlier options like "Oboe" because testing across 31 nations showed it had the highest recognition rate across English, French, and Spanish speakers.', link: '/history/', linkText: 'How words were chosen' },
  { letter: 'S', fact: 'The LAPD still uses "Sam" for S instead of NATO\'s "Sierra." Many US police departments kept their 1940s APCO alphabet despite APCO officially switching to NATO in 1974.', link: '/police-alphabet/', linkText: 'Compare police vs NATO' },
  { letter: 'B', fact: 'Letters B, C, D, E, G, P, T, V, and Z all share the "ee" vowel sound — making them the most confused group on phone calls. The phonetic alphabet gives each one a completely different word.', link: '/confusing-letters-phone/', linkText: 'See the worst offenders' },
  { letter: '🌍', fact: 'At least 20 countries have their own spelling alphabets. Germany uses Anton-Berta-Cäsar, France uses Anatole-Berthe-Célestin, and Turkey uses city names like Adana-Bolu-Ceyhan.', link: '/which-alphabet/', linkText: 'Explore world alphabets' },
  { letter: '📅', fact: 'The NATO phonetic alphabet was adopted on March 1, 1956 — and has remained essentially unchanged for nearly 70 years, making it one of the most enduring international standards ever created.', link: '/history/', linkText: 'See the timeline' },
  { letter: '📻', fact: 'Ham radio operators use Q-codes alongside the phonetic alphabet. "QTH" means your location, "QSL" means confirmed, and "QRZ" means "who is calling me?" — all dating from telegraph era.', link: '/phonetic-alphabet-for-ham-radio/', linkText: 'Ham radio guide' },
  { letter: '🚢', fact: 'The shipping industry moves 800+ million containers per year. Every container has an 11-character code that must be communicated phonetically across languages and noisy port environments.', link: '/phonetic-alphabet-for-shipping/', linkText: 'Shipping guide' },
];

export default function DidYouKnow() {
  const [idx, setIdx] = useState(Math.floor(Math.random() * FACTS.length));
  const fact = FACTS[idx];
  const next = () => setIdx(i => (i + 1) % FACTS.length);
  const prev = () => setIdx(i => (i - 1 + FACTS.length) % FACTS.length);

  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">💡 Did You Know?</div>
        <div className="flex gap-1">
          <button onClick={prev} className="w-7 h-7 rounded-full bg-white border border-amber-200 text-amber-600 text-xs hover:bg-amber-100 transition flex items-center justify-center">←</button>
          <button onClick={next} className="w-7 h-7 rounded-full bg-white border border-amber-200 text-amber-600 text-xs hover:bg-amber-100 transition flex items-center justify-center">→</button>
        </div>
      </div>
      <div className="flex gap-3 items-start">
        <div className="text-3xl font-bold font-mono text-amber-500 shrink-0 w-10 text-center">{fact.letter}</div>
        <div>
          <p className="text-sm text-gray-700 leading-relaxed mb-2">{fact.fact}</p>
          <a href={fact.link} className="text-xs font-semibold text-amber-600 hover:underline">{fact.linkText} →</a>
        </div>
      </div>
      <div className="text-right text-[10px] text-amber-400 mt-2">{idx + 1} of {FACTS.length}</div>
    </div>
  );
}
