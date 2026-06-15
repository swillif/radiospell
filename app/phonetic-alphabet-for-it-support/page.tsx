import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Phonetic Alphabet for IT Support — Serial Numbers, MAC Addresses & Passwords',
  description: 'How IT support technicians use the NATO phonetic alphabet for serial numbers, license keys, MAC addresses, IP addresses, and passwords. Tips for distinguishing 0/O, 1/l/I.',
  keywords: 'IT support phonetic alphabet, serial number phonetic, MAC address spelling, tech support spelling alphabet',
};
export default function ITSupportPage() {
  const scenarios = [
    {title:'Serial Numbers & License Keys',example:'SN: X4K-9BF-2MP',spelled:'X-ray Four Kilo — Niner Bravo Foxtrot — Two Mike Papa',tip:'Always clarify dashes: say "dash" not "minus" or "hyphen." Spell each group separately with a pause between groups.'},
    {title:'MAC Addresses',example:'MAC: 5E:A3:F1:0B:72:D9',spelled:'Five Echo — Alfa Three — Foxtrot One — Zero Bravo — Seven Two — Delta Niner',tip:'For hex digits, clarify that letters are part of the address: "Foxtrot as in the letter F, not the number."'},
    {title:'IP Addresses',example:'IP: 192.168.1.105',spelled:'One Niner Two — dot — One Six Eight — dot — One — dot — One Zero Five',tip:'Say "dot" between octets, never "point" or "period." Read each number group as individual digits for clarity.'},
    {title:'Passwords (case-sensitive)',example:'Pass: Tr0ub4dor',spelled:'CAPITAL Tango, lowercase Romeo, ZERO (not the letter O), lowercase Uniform, lowercase Bravo, the number FOUR (not the letter A), lowercase Delta, lowercase Oscar, lowercase Romeo',tip:'Always specify "capital" or "lowercase" for every letter. Distinguish zero from O and one from lowercase L explicitly.'},
    {title:'Email Addresses',example:'j.smith_2@company.co.uk',spelled:'Juliett dot Sierra Mike India Tango Hotel underscore Two at Charlie Oscar Mike Papa Alfa November Yankee dot Charlie Oscar dot Uniform Kilo',tip:'Spell out every special character: "dot", "underscore", "at sign", "dash." Never assume the listener knows the domain format.'},
  ];
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Phonetic Alphabet for IT Support</h1>
      <p className="text-gray-500 mb-6">The definitive guide to spelling serial numbers, MAC addresses, passwords, and license keys clearly over the phone — without costly errors.</p>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Why IT Support Needs Phonetic Spelling</h2>
        <p className="text-gray-600 leading-relaxed mb-4">A single wrong character in a serial number, license key, or MAC address can mean hours of wasted troubleshooting. IT support handles the most error-prone communication of any industry: random alphanumeric strings with mixed case, where zero looks like O, one looks like lowercase L, and five looks like S in certain fonts. The NATO phonetic alphabet eliminates this ambiguity entirely.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">The Dangerous Pairs</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
          {[['0 / O','Zero vs Oscar'],['1 / l / I','One vs Lima vs India'],['5 / S','Five vs Sierra'],['2 / Z','Two vs Zulu'],['B / 8','Bravo vs Eight'],['G / 6','Golf vs Six']].map(([pair,fix])=>(
            <div key={pair} className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
              <div className="font-bold text-red-600 font-mono text-lg mb-1">{pair}</div>
              <div className="text-xs text-green-700 font-mono">{fix}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Real-World Scenarios</h2>
        <div className="space-y-4">
          {scenarios.map(s=>(
            <div key={s.title} className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <div className="font-bold text-base mb-1">{s.title}</div>
              <div className="font-mono text-sm text-gray-600 mb-2 bg-white px-3 py-1.5 rounded border border-gray-200 inline-block">{s.example}</div>
              <div className="text-sm text-green-700 font-mono mb-2">{s.spelled}</div>
              <div className="text-xs text-amber-700 bg-amber-50 px-3 py-2 rounded"><strong>Pro tip:</strong> {s.tip}</div>
            </div>
          ))}
        </div>
      </section>
      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Try the Converter</a>
        <a href="/phonetic-alphabet-chart/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Printable Chart</a>
        <a href="/phonetic-alphabet-for-call-centers/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">For Call Centers</a>
      </div>
    </article>
  );
}
