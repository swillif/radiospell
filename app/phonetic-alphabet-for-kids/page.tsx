import type { Metadata } from 'next';
import { NATO } from '@/data/alphabets';

export const metadata: Metadata = {
  title: 'Phonetic Alphabet for Kids — Fun Ways to Learn A to Z',
  description: 'Teach kids the NATO phonetic alphabet with fun examples and memory tricks. Perfect for classroom use, scouts, young aviation enthusiasts, and curious children.',
  keywords: 'phonetic alphabet for kids, NATO alphabet kids, teach phonetic alphabet children, alpha bravo charlie kids, phonetic alphabet classroom',
};

export default function KidsPage() {
  const funFacts = [
    { letter: 'A', word: 'Alfa', fun: '🛸 Alfa sounds like it\'s from outer space!', trick: 'Think of "Alpha Centauri" — the nearest star to Earth.' },
    { letter: 'B', word: 'Bravo', fun: '👏 Bravo is what you shout when someone does something great!', trick: 'When someone does something amazing, you clap and yell "Bravo!"' },
    { letter: 'C', word: 'Charlie', fun: '🐕 Charlie is a great name for a dog!', trick: 'Charlie Brown\'s dog was named Snoopy — but Charlie is a great name too!' },
    { letter: 'D', word: 'Delta', fun: '✈️ Delta is an airline — maybe you\'ve flown on it!', trick: 'The Greek letter delta (Δ) is shaped like a triangle — like an airplane wing!' },
    { letter: 'E', word: 'Echo', fun: '🏔️ An echo is when mountains "talk back" to you!', trick: 'Shout in a canyon and hear the ECHO! E-E-E-cho!' },
    { letter: 'F', word: 'Foxtrot', fun: '🦊 A foxtrot is a dance — and a fox dancing is hilarious to imagine!', trick: 'Picture a fox dancing the foxtrot. F = Fox = Foxtrot!' },
    { letter: 'G', word: 'Golf', fun: '⛳ Golf! Like the sport!', trick: 'Imagine a golfer swinging — G for Golf!' },
    { letter: 'H', word: 'Hotel', fun: '🏨 Hotel is where you stay on vacation!', trick: 'H = Hotel. You stay in a Hotel on Holiday!' },
    { letter: 'W', word: 'Whiskey', fun: '🥃 Whiskey is a grown-up drink, but the word is funny to say!', trick: 'WH-ISS-KEY. It almost sounds like you\'re asking "whisk-key?" (Where\'s the key?)' },
    { letter: 'X', word: 'X-ray', fun: '🦴 X-ray is how doctors see your bones!', trick: 'X marks the spot — and X-rays show the spots inside your body!' },
    { letter: 'Y', word: 'Yankee', fun: '⚾ Yankees is a famous baseball team!', trick: 'Y for Yankee — like the New York Yankees!' },
    { letter: 'Z', word: 'Zulu', fun: '🌍 Zulu is a South African nation and language!', trick: 'Z is the LAST letter — just like Zulu is the LAST word in the NATO alphabet!' },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Phonetic Alphabet for Kids</h1>
      <p className="text-gray-500 mb-6">The NATO phonetic alphabet is what pilots, soldiers, police officers, and astronauts use to spell things clearly over the radio. Here&apos;s how to learn it — with fun facts and memory tricks!</p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
        <h2 className="font-bold text-lg mb-2">🎯 Why Learn This?</h2>
        <p className="text-sm text-gray-700 leading-relaxed">When pilots talk to air traffic control, they can&apos;t say &quot;B&quot; because it sounds like &quot;D&quot; or &quot;P&quot; over a radio. So instead of saying the letter, they say a whole word that starts with that letter. That way, there&apos;s no confusion! &quot;Bravo&quot; can only mean B. &quot;Delta&quot; can only mean D.</p>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">The Complete Alphabet</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
          {Object.entries(NATO).map(([l, w]) => (
            <div key={l} className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-center gap-2">
              <span className="text-2xl font-bold font-mono text-amber-600 w-8">{l}</span>
              <span className="font-semibold text-sm">{w}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Fun Facts & Memory Tricks</h2>
        <div className="space-y-3">
          {funFacts.map(f => (
            <div key={f.letter} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl font-bold font-mono text-amber-600 w-8">{f.letter}</span>
                <span className="font-bold">{f.word}</span>
              </div>
              <p className="text-sm text-gray-700 mb-1">{f.fun}</p>
              <p className="text-xs text-blue-700 bg-blue-50 px-2 py-1 rounded">💡 Memory trick: {f.trick}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Practice: Spell Your Name!</h2>
        <p className="text-gray-600 mb-4">Try spelling your name using the NATO alphabet. For example, if your name is SAM:<br/><strong>Sierra · Alfa · Mike</strong></p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-sm font-semibold text-amber-800 mb-2">Try it yourself — <a href="/spell-my-name/" className="underline">type your name here</a> and see it spelled in the NATO alphabet instantly!</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Who Uses the Phonetic Alphabet?</h2>
        <div className="grid grid-cols-2 gap-2">
          {[['✈️','Pilots','Talk to air traffic control'],['🚔','Police officers','Describe license plates'],['🎖️','Soldiers','Communicate on radios'],['🚒','Firefighters','Emergency coordination'],['🌊','Sailors','Ship-to-ship radio'],['📡','Ham radio operators','Talk to people worldwide']].map(([icon,who,why])=>(
            <div key={who} className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">{icon}</div>
              <div className="font-bold text-sm">{who}</div>
              <div className="text-xs text-gray-500">{why}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/quiz/" className="text-sm bg-amber-500 text-white px-3 py-1.5 rounded hover:bg-amber-600">Take the Quiz!</a>
        <a href="/spell-my-name/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Spell My Name</a>
        <a href="/nato-alphabet-quiz-printable/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Printable Worksheet</a>
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
      </div>
    </article>
  );
}
