import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Guides & Tools — Phonetic Alphabet, Aviation, Industry Guides',
  description: 'Browse all RadioSpell.com tools, guides, and reference pages. Phonetic alphabet converter, quiz, airport codes, airline callsigns, industry guides, and more.',
  keywords: 'phonetic alphabet guides, NATO alphabet resources, aviation reference, spelling alphabet tools',
};

export default function GuidesPage() {
  const sections = [
    {
      title: 'Interactive Tools',
      icon: '🛠️',
      links: [
        { href: '/', label: 'Phonetic Converter', desc: 'Convert any text to NATO phonetic alphabet instantly' },
        { href: '/quiz/', label: 'Practice Quiz', desc: 'Test your knowledge with interactive flashcards' },
        { href: '/spell-my-name/', label: 'Spell My Name', desc: 'Generate a shareable phonetic name card' },
        { href: '/metar-decoder/', label: 'METAR Weather Decoder', desc: 'Decode aviation weather reports' },
        { href: '/phonetic-alphabet-chart/', label: 'Printable Cheat Sheet', desc: 'Free desk reference you can print' },
      ],
    },
    {
      title: 'Phonetic Alphabets',
      icon: '🔤',
      links: [
        { href: '/nato-phonetic-alphabet/', label: 'NATO / ICAO Alphabet', desc: 'The international standard — Alfa to Zulu' },
        { href: '/military-alphabet/', label: 'Military Alphabet', desc: 'Used by all US armed forces & NATO nations' },
        { href: '/police-alphabet/', label: 'Police Alphabet (LAPD)', desc: 'Adam Boy Charles — compared to NATO' },
        { href: '/alpha-bravo-charlie/', label: 'Alpha Bravo Charlie', desc: 'What it means and where it comes from' },
        { href: '/german-phonetic-alphabet/', label: 'German (DIN 5009)', desc: 'Anton Berta Cäsar — the German spelling alphabet' },
        { href: '/french-phonetic-alphabet/', label: 'French', desc: 'Anatole Berthe Célestin — French spelling alphabet' },
        { href: '/spanish-phonetic-alphabet/', label: 'Spanish', desc: 'Antonio Barcelona Carmen — Spanish spelling alphabet' },
      ],
    },
    {
      title: 'Aviation Reference',
      icon: '✈️',
      links: [
        { href: '/airport-codes/', label: 'Airport Codes', desc: 'Search 7,900+ airports with phonetic spelling' },
        { href: '/airline-codes/', label: 'Airline Codes & Callsigns', desc: '990+ airlines with radio callsigns' },
        { href: '/aviation-numbers/', label: 'Aviation Number Pronunciation', desc: 'How pilots say niner, tree, fife' },
        { href: '/metar-decoder/', label: 'METAR/TAF Decoder', desc: 'Decode aviation weather reports' },
      ],
    },
    {
      title: 'Industry Guides',
      icon: '📋',
      links: [
        { href: '/how-to-spell-over-the-phone/', label: 'How to Spell Over the Phone', desc: 'Practical guide for everyday calls' },
        { href: '/how-to-read-airline-confirmation-codes/', label: 'Airline Confirmation Codes', desc: 'Spell PNR and booking references' },
        { href: '/confusing-letters-phone/', label: 'Most Confusing Letters', desc: 'B/D, M/N, F/S — the worst offenders' },
        { href: '/phonetic-alphabet-for-call-centers/', label: 'For Call Centers', desc: 'Training guide with sample scripts' },
        { href: '/phonetic-alphabet-for-healthcare/', label: 'For Healthcare', desc: 'Preventing medication and patient ID errors' },
        { href: '/phonetic-alphabet-for-it-support/', label: 'For IT Support', desc: 'Serial numbers, MAC addresses, passwords' },
        { href: '/phonetic-alphabet-for-shipping/', label: 'For Shipping & Logistics', desc: 'Container numbers, BOL, port codes' },
        { href: '/phonetic-alphabet-for-ham-radio/', label: 'For Ham Radio', desc: 'Callsigns, Q-codes, best practices' },
        { href: '/phonetic-alphabet-for-travel/', label: 'For Travelers', desc: 'Bookings, hotels, passports, car rentals' },
      ],
    },
    {
      title: 'Learn',
      icon: '📚',
      links: [
        { href: '/history/', label: 'History of Spelling Alphabets', desc: 'From WWI to NATO — plus alphabets around the world' },
        { href: '/which-alphabet/', label: 'Which Alphabet Should I Use?', desc: 'Decision guide for every situation' },
      ],
    },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">All Guides &amp; Tools</h1>
      <p className="text-gray-500 mb-8">Everything on RadioSpell.com in one place. Tools, alphabets, aviation reference, industry guides, and more.</p>

      {sections.map(section => (
        <section key={section.title} className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">{section.icon}</span>
            <h2 className="text-xl font-bold">{section.title}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {section.links.map(link => (
              <a key={link.href} href={link.href} className="block p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-amber-400 hover:bg-amber-50 transition">
                <div className="font-semibold text-sm text-gray-800">{link.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{link.desc}</div>
              </a>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}
