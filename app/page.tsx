import type { Metadata } from 'next';
import PhoneticConverter from '@/components/PhoneticConverter';
import DidYouKnow from '@/components/DidYouKnow';

export const metadata: Metadata = {
  title: 'Phonetic Alphabet Converter — Instantly Spell Any Text | RadioSpell.com',
  description: 'Free NATO phonetic alphabet converter. Type any text, name, or confirmation code and instantly see it spelled in the NATO/ICAO phonetic alphabet. Supports 5+ languages and audio.',
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'RadioSpell Phonetic Alphabet Converter',
    url: 'https://radiospell.com',
    description: 'Free NATO phonetic alphabet converter with audio pronunciation and multi-language support.',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="max-w-3xl mx-auto text-center pt-10 pb-6 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Phonetic Alphabet Converter</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Type any text — a name, confirmation code, serial number, or password —
          and instantly see it spelled in the NATO phonetic alphabet.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-8">
        <PhoneticConverter />
      </section>

      {/* DID YOU KNOW */}
      <section className="max-w-3xl mx-auto px-4 pb-6">
        <DidYouKnow />
      </section>

      {/* SEO CONTENT */}
      <section className="max-w-3xl mx-auto px-4 py-8 border-t">
        <h2 className="text-2xl font-bold mb-3">What Is the NATO Phonetic Alphabet?</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          The NATO phonetic alphabet — officially the International Radiotelephony Spelling Alphabet — is a
          standardized set of 26 code words used to spell out letters clearly over voice communication.
          Instead of saying &quot;B&quot; (which sounds like &quot;D&quot;, &quot;P&quot;, or &quot;T&quot;), you say &quot;Bravo.&quot;
          Instead of &quot;M&quot; (easily confused with &quot;N&quot;), you say &quot;Mike.&quot;
        </p>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Developed by the International Civil Aviation Organization (ICAO) in the 1950s and adopted by NATO,
          it is the universal standard for aviation, military, maritime, emergency services, and business
          communication worldwide. Each code word was tested across speakers of 31 nations to ensure
          intelligibility in English, French, and Spanish.
        </p>

        <h2 className="text-2xl font-bold mb-3 mt-8">How to Use This Converter</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Type any text into the input box above. The converter instantly translates each letter and
          number into its NATO phonetic equivalent. Switch between NATO/ICAO, US Police (LAPD), German,
          French, and Spanish alphabets using the dropdown. Click any letter chip to hear its pronunciation,
          or use the Listen button to hear the entire sequence. The Phone Script output gives you a
          ready-to-read format for calls: &quot;B as in Bravo, C as in Charlie.&quot;
        </p>

        <h2 className="text-2xl font-bold mb-3 mt-8">Who Uses the Phonetic Alphabet?</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          While originally developed for military and aviation use, the NATO phonetic alphabet is now
          essential across many industries. Pilots and air traffic controllers use it for all radio
          communication. Police officers use it (or the LAPD variant) for license plates, addresses,
          and names. Call center agents use it to verify customer information. IT support technicians
          rely on it for serial numbers, MAC addresses, and passwords. And everyday people use it
          whenever they need to spell a name or email address clearly over the phone.
        </p>

        <h2 className="text-2xl font-bold mb-3 mt-8">Explore More</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: '/nato-phonetic-alphabet/', title: 'Full NATO Alphabet', desc: 'Complete A-Z reference with Morse code' },
            { href: '/quiz/', title: 'Practice Quiz', desc: 'Test your phonetic alphabet knowledge' },
            { href: '/airport-codes/', title: 'Airport Codes', desc: '7,900+ airports with phonetic spelling' },
            { href: '/airline-codes/', title: 'Airline Codes & Callsigns', desc: '990+ airlines with radio callsigns' },
            { href: '/history/', title: 'History', desc: 'From WWI to the modern NATO standard' },
            { href: '/how-to-spell-over-the-phone/', title: 'Phone Spelling Guide', desc: 'Never repeat yourself on calls again' },
          ].map(link => (
            <a key={link.href} href={link.href} className="block p-4 bg-gray-50 rounded-lg hover:bg-amber-50 hover:border-amber-200 border border-gray-200 transition">
              <strong className="text-gray-800">{link.title}</strong>
              <p className="text-sm text-gray-500 mt-0.5">{link.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
