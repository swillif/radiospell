const BASE = 'https://radiospell.com';

export default function sitemap() {
  const now = new Date().toISOString();

  const staticPages = [
    '/', '/nato-phonetic-alphabet/', '/military-alphabet/', '/police-alphabet/',
    '/alpha-bravo-charlie/', '/phonetic-alphabet-chart/', '/quiz/', '/spell-my-name/',
    '/metar-decoder/', '/airport-codes/', '/airline-codes/', '/history/',
    '/which-alphabet/', '/aviation-numbers/', '/how-to-spell-over-the-phone/',
    '/phonetic-alphabet-for-call-centers/', '/phonetic-alphabet-for-healthcare/',
    '/phonetic-alphabet-for-it-support/', '/phonetic-alphabet-for-shipping/',
    '/phonetic-alphabet-for-ham-radio/', '/phonetic-alphabet-for-travel/',
    '/phonetic-alphabet-for-police/', '/phonetic-alphabet-for-kids/',
    '/phonetic-alphabet-numbers/', '/phonetic-alphabet-poster/',
    '/nato-alphabet-quiz-printable/', '/icao-phonetic-alphabet/',
    '/what-does-bravo-zulu-mean/', '/spell-email-phonetically/',
    '/military-time-and-phonetic-alphabet/',
    '/how-to-read-airline-confirmation-codes/', '/confusing-letters-phone/',
    '/german-phonetic-alphabet/', '/french-phonetic-alphabet/', '/spanish-phonetic-alphabet/',
    '/guides/', '/privacy/', '/about/',
  ].map(path => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1.0 : 0.7,
  }));

  // Airport and airline detail pages are noindexed (thin/templated content) and
  // intentionally excluded from the sitemap — see app/airport/[iata]/page.tsx
  // and app/airline/[iata]/page.tsx.
  return staticPages;
}
