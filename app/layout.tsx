import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://radiospell.com'),
  title: { default: 'RadioSpell — Phonetic Alphabet Converter & Aviation Reference', template: '%s | RadioSpell.com' },
  description: 'Free NATO phonetic alphabet converter, airport codes, airline callsigns, and aviation reference. Spell any text clearly over the phone.',
  keywords: 'phonetic alphabet, NATO alphabet, alpha bravo charlie, airport codes, airline codes',
  openGraph: { type: 'website', locale: 'en_US', url: 'https://radiospell.com', siteName: 'RadioSpell.com' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased font-sans">

        {/* HEADER */}
        <header className="border-b sticky top-0 bg-white/95 backdrop-blur z-50">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="font-mono text-xs tracking-[0.3em] text-amber-600 uppercase font-bold">
              RadioSpell.com
            </a>
            <nav className="hidden md:flex gap-5 text-sm font-medium text-gray-600">
              <a href="/" className="hover:text-amber-600 transition">Converter</a>
              <a href="/nato-phonetic-alphabet/" className="hover:text-amber-600 transition">NATO Alphabet</a>
              <a href="/airport-codes/" className="hover:text-amber-600 transition">Airports</a>
              <a href="/airline-codes/" className="hover:text-amber-600 transition">Airlines</a>
              <a href="/quiz/" className="hover:text-amber-600 transition">Quiz</a>
              <a href="/history/" className="hover:text-amber-600 transition">History</a>
            </nav>
            {/* Mobile menu button - implement with client component */}
            <button className="md:hidden text-gray-600 text-2xl" aria-label="Menu">☰</button>
          </div>
        </header>

        {/* AD SLOT: TOP LEADERBOARD
        <div className="max-w-5xl mx-auto px-4 py-2 text-center">
          <ins className="adsbygoogle" style={{display:'block'}}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="1111111111"
            data-ad-format="auto"
            data-full-width-responsive="true" />
        </div>
        */}

        <main className="min-h-screen">{children}</main>

        {/* AD SLOT: BOTTOM
        <div className="max-w-5xl mx-auto px-4 py-2 text-center">
          <ins className="adsbygoogle" style={{display:'block'}}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="2222222222"
            data-ad-format="auto"
            data-full-width-responsive="true" />
        </div>
        */}

        {/* SEO FOOTER */}
        <footer className="border-t mt-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-sm">
              <div>
                <h3 className="font-bold text-gray-800 mb-3">Tools</h3>
                <ul className="space-y-2 text-gray-500">
                  <li><a href="/" className="hover:text-amber-600">Phonetic Converter</a></li>
                  <li><a href="/quiz/" className="hover:text-amber-600">Practice Quiz</a></li>
                  <li><a href="/phonetic-alphabet-chart/" className="hover:text-amber-600">Printable Chart</a></li>
                  <li><a href="/metar-decoder/" className="hover:text-amber-600">METAR Decoder</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-3">Alphabets</h3>
                <ul className="space-y-2 text-gray-500">
                  <li><a href="/nato-phonetic-alphabet/" className="hover:text-amber-600">NATO / ICAO</a></li>
                  <li><a href="/military-alphabet/" className="hover:text-amber-600">Military</a></li>
                  <li><a href="/police-alphabet/" className="hover:text-amber-600">Police (LAPD)</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-3">Aviation</h3>
                <ul className="space-y-2 text-gray-500">
                  <li><a href="/airport-codes/" className="hover:text-amber-600">Airport Codes (7,900+)</a></li>
                  <li><a href="/airline-codes/" className="hover:text-amber-600">Airlines (990+)</a></li>
                  <li><a href="/aviation-numbers/" className="hover:text-amber-600">Aviation Numbers</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-3">Guides</h3>
                <ul className="space-y-2 text-gray-500">
                  <li><a href="/history/" className="hover:text-amber-600">History</a></li>
                  <li><a href="/which-alphabet/" className="hover:text-amber-600">Which Alphabet?</a></li>
                  <li><a href="/how-to-spell-over-the-phone/" className="hover:text-amber-600">Spelling Over the Phone</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t pt-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-400">
              <p>© 2026 RadioSpell.com — Phonetic Alphabet Tools &amp; Aviation Reference</p>
              <div className="flex gap-4">
                <a href="/privacy/" className="hover:text-amber-600">Privacy Policy</a>
                <a href="/about/" className="hover:text-amber-600">About</a>
              </div>
            </div>
          </div>
        </footer>

        {/* ADSENSE SCRIPT — uncomment after approval
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous" />
        */}
      </body>
    </html>
  );
}
