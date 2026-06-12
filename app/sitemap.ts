import airports from '@/data/airports.json';
import airlines from '@/data/airlines.json';

const BASE = 'https://radiospell.com';

function safeCode(code: string): boolean {
  return /^[A-Za-z0-9]+$/.test(code) && code.length >= 2 && code.length <= 4;
}

export async function generateSitemaps() {
  return [
    { id: 'static' },
    { id: 'airports-1' },
    { id: 'airports-2' },
    { id: 'airlines' },
  ];
}

export default function sitemap({ id }: { id: string }) {
  const now = new Date().toISOString();

  if (id === 'static') {
    return [
      '/', '/nato-phonetic-alphabet/', '/military-alphabet/', '/police-alphabet/',
      '/alpha-bravo-charlie/', '/phonetic-alphabet-chart/', '/quiz/', '/spell-my-name/',
      '/metar-decoder/', '/airport-codes/', '/airline-codes/', '/history/',
      '/which-alphabet/', '/aviation-numbers/', '/how-to-spell-over-the-phone/',
      '/phonetic-alphabet-for-call-centers/', '/phonetic-alphabet-for-healthcare/',
      '/german-phonetic-alphabet/', '/french-phonetic-alphabet/', '/spanish-phonetic-alphabet/',
      '/privacy/', '/about/',
    ].map(path => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '/' ? 1.0 : 0.7,
    }));
  }

  if (id === 'airports-1') {
    const safe = (airports as any[]).filter(a => safeCode(a.iata));
    return safe.slice(0, 4000).map(a => ({
      url: `${BASE}/airport/${encodeURIComponent(a.iata)}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    }));
  }

  if (id === 'airports-2') {
    const safe = (airports as any[]).filter(a => safeCode(a.iata));
    return safe.slice(4000).map(a => ({
      url: `${BASE}/airport/${encodeURIComponent(a.iata)}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    }));
  }

  if (id === 'airlines') {
    return (airlines as any[]).filter(a => safeCode(a.iata)).map(a => ({
      url: `${BASE}/airline/${encodeURIComponent(a.iata)}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    }));
  }

  return [];
}
