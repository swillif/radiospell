import type { Metadata } from 'next';
import { NATO, NATO_NUMBERS, MORSE } from '@/data/alphabets';

export const metadata: Metadata = {
  title: 'NATO Phonetic Alphabet — Complete A-Z with Audio & Morse Code',
  description: 'The complete NATO phonetic alphabet from Alfa to Zulu. All 26 code words plus numbers with Morse code, pronunciation guide, and printable chart.',
  keywords: 'NATO phonetic alphabet, NATO alphabet, ICAO alphabet, Alfa Bravo Charlie, military alphabet',
};

export default function NATOPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the NATO phonetic alphabet?', acceptedAnswer: { '@type': 'Answer', text: 'The NATO phonetic alphabet is a spelling alphabet used to clearly communicate letters over radio or phone. Each letter is represented by a code word: A=Alfa, B=Bravo, C=Charlie, etc.' }},
      { '@type': 'Question', name: 'Why is it called Alfa and not Alpha?', acceptedAnswer: { '@type': 'Answer', text: 'Alfa is deliberately spelled without "ph" so speakers of languages where "ph" is not pronounced as "f" can read it correctly.' }},
      { '@type': 'Question', name: 'Why do pilots say niner instead of nine?', acceptedAnswer: { '@type': 'Answer', text: 'Pilots say "niner" to avoid confusion with the German word "nein" (meaning no) during international radio communication.' }},
    ]
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <h1 className="text-3xl font-bold mb-2">The NATO Phonetic Alphabet</h1>
      <p className="text-gray-500 mb-6">The international standard spelling alphabet used by aviation, military, emergency services, and businesses worldwide since 1956.</p>

      <div className="border rounded-lg overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead><tr className="bg-gray-50 border-b">
            <th className="text-left py-2 px-4 font-semibold w-16">Letter</th>
            <th className="text-left py-2 px-4 font-semibold">Code Word</th>
            <th className="text-left py-2 px-4 font-semibold">Pronunciation</th>
            <th className="text-left py-2 px-4 font-semibold">Morse</th>
          </tr></thead>
          <tbody>
            {Object.entries(NATO).map(([letter, word]) => (
              <tr key={letter} className="border-b border-gray-100 hover:bg-amber-50">
                <td className="py-2.5 px-4 font-mono text-xl font-bold text-amber-600">{letter}</td>
                <td className="py-2.5 px-4 font-semibold text-base">{word}</td>
                <td className="py-2.5 px-4 text-gray-500">{word.toUpperCase()}</td>
                <td className="py-2.5 px-4 font-mono text-gray-400 tracking-widest">{MORSE[letter]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-3">Numbers</h2>
      <div className="border rounded-lg overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead><tr className="bg-gray-50 border-b">
            <th className="text-left py-2 px-4 font-semibold w-16">Digit</th>
            <th className="text-left py-2 px-4 font-semibold">Spoken As</th>
            <th className="text-left py-2 px-4 font-semibold">Aviation</th>
            <th className="text-left py-2 px-4 font-semibold">Morse</th>
          </tr></thead>
          <tbody>
            {Object.entries(NATO_NUMBERS).map(([num, word]) => {
              const avPron: Record<string,string> = {'0':'ZE-RO','1':'WUN','2':'TOO','3':'TREE','4':'FOW-ER','5':'FIFE','6':'SIX','7':'SEV-EN','8':'AIT','9':'NIN-ER'};
              return (
                <tr key={num} className="border-b border-gray-100">
                  <td className="py-2.5 px-4 font-mono text-xl font-bold text-blue-500">{num}</td>
                  <td className="py-2.5 px-4 font-semibold">{word}</td>
                  <td className="py-2.5 px-4 font-mono text-green-700">{avPron[num]}</td>
                  <td className="py-2.5 px-4 font-mono text-gray-400 tracking-widest">{MORSE[num]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-3">History</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        The NATO phonetic alphabet was developed by the International Civil Aviation Organization (ICAO) in the early 1950s
        and formally adopted on March 1, 1956. It replaced the earlier &quot;Able Baker&quot; alphabet used during World War II.
        Each code word was extensively tested across speakers of 31 nations to ensure clear recognition in English, French,
        and Spanish — the three working languages of ICAO.
      </p>
      <p className="text-gray-600 leading-relaxed mb-8">
        The alphabet has remained essentially unchanged for nearly 70 years, making it one of the most enduring international
        standards in existence. The only notable spelling change was &quot;Alfa&quot; (instead of &quot;Alpha&quot;) to prevent mispronunciation
        in languages where &quot;ph&quot; is not pronounced as &quot;f.&quot;
      </p>
      <a href="/history/" className="text-amber-600 font-medium hover:underline">Read the full history →</a>

      <div className="border-t mt-8 pt-6 flex flex-wrap gap-3">
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
        <a href="/quiz/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Quiz</a>
        <a href="/military-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Military Alphabet</a>
        <a href="/police-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Police Alphabet</a>
      </div>
    </article>
  );
}
