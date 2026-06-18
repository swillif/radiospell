import type { Metadata } from 'next';
import { NATO, LAPD } from '@/data/alphabets';

export const metadata: Metadata = {
  title: 'Phonetic Alphabet for Police — LAPD, NYPD & Law Enforcement Guide',
  description: 'Complete guide to police phonetic alphabets used by LAPD, NYPD, and law enforcement agencies. Adam Boy Charles vs NATO — when to use each and why.',
  keywords: 'police phonetic alphabet, LAPD alphabet, law enforcement spelling alphabet, police radio alphabet, cop alphabet, 10 codes phonetic',
};

export default function PolicePhoneticPage() {
  const agencies = [
    { agency: 'LAPD / Most US Departments', a: 'Adam', b: 'Boy', c: 'Charles', d: 'David', e: 'Edward', n: 'Nora', o: 'Ocean' },
    { agency: 'NYPD', a: 'Adam', b: 'Boy', c: 'Charlie', d: 'David', e: 'Edward', n: 'Nancy', o: 'Ocean' },
    { agency: 'NATO (Federal / International)', a: 'Alfa', b: 'Bravo', c: 'Charlie', d: 'Delta', e: 'Echo', n: 'November', o: 'Oscar' },
  ];

  const tenCodes = [
    { code: '10-4', meaning: 'Acknowledged / OK' },
    { code: '10-7', meaning: 'Out of service' },
    { code: '10-8', meaning: 'In service' },
    { code: '10-20', meaning: 'Location / "What is your 20?"' },
    { code: '10-33', meaning: 'Emergency — all units stand by' },
    { code: '10-99', meaning: 'Officer needs help — emergency' },
    { code: '10-4', meaning: 'Message received' },
    { code: '10-6', meaning: 'Busy / stand by' },
    { code: '10-21', meaning: 'Call by telephone' },
    { code: '10-76', meaning: 'En route' },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Phonetic Alphabet for Police & Law Enforcement</h1>
      <p className="text-gray-500 mb-6">A complete guide to the spelling alphabets used by police departments across the US — including the LAPD system, NYPD variants, and when federal agencies use NATO instead.</p>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">The Police Phonetic Alphabet (APCO)</h2>
        <p className="text-gray-600 leading-relaxed mb-4">The police phonetic alphabet was developed by the Association of Public-Safety Communications Officials (APCO) in 1940 — sixteen years before NATO adopted its own. The APCO system uses common American names that were familiar to officers but was never designed for international use. While APCO officially recommended switching to NATO in 1974, most large US departments kept their legacy system.</p>
        <div className="border rounded-lg overflow-hidden mb-4">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b">
              <th className="text-left py-2 px-4 font-semibold">Letter</th>
              <th className="text-left py-2 px-4 font-semibold">LAPD / APCO</th>
              <th className="text-left py-2 px-4 font-semibold text-gray-400">NATO</th>
            </tr></thead>
            <tbody>
              {Object.entries(LAPD).map(([l, w]) => (
                <tr key={l} className={`border-b border-gray-100 ${w !== NATO[l] ? 'bg-amber-50' : ''}`}>
                  <td className="py-2 px-4 font-mono text-lg font-bold text-amber-600">{l}</td>
                  <td className="py-2 px-4 font-semibold">{w}</td>
                  <td className="py-2 px-4 text-gray-400">{NATO[l]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400">Highlighted rows show where LAPD and NATO differ.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">How Agencies Differ</h2>
        <div className="space-y-3">
          {agencies.map(a => (
            <div key={a.agency} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="font-bold text-sm mb-2 text-amber-700">{a.agency}</div>
              <div className="font-mono text-sm text-gray-700">{a.a} · {a.b} · {a.c} · {a.d} · {a.e} · ... · {a.n} · {a.o}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">When Police Use NATO vs APCO</h2>
        <div className="space-y-3">
          {[
            { scenario: 'Local radio communication', system: 'APCO/LAPD', reason: 'Officers trained on APCO and expect it. Switching mid-call creates confusion.' },
            { scenario: 'License plates & VINs', system: 'APCO/LAPD', reason: 'Standard practice in most departments. "Adam Boy Charles" is deeply ingrained.' },
            { scenario: 'Multi-agency operations', system: 'NATO', reason: 'When working with FBI, DEA, ATF, or military, NATO is the common language.' },
            { scenario: 'International operations', system: 'NATO (mandatory)', reason: 'Interpol, border agencies, and international law enforcement all use NATO.' },
            { scenario: 'Aviation-related incidents', system: 'NATO (mandatory)', reason: 'Any coordination with FAA, Coast Guard aviation, or military aircraft.' },
          ].map(s => (
            <div key={s.scenario} className="flex gap-3 bg-gray-50 border border-gray-200 rounded-lg p-3">
              <div className="flex-1">
                <div className="text-sm font-bold">{s.scenario}</div>
                <div className="text-xs text-gray-500 mt-0.5">{s.reason}</div>
              </div>
              <div className="shrink-0 text-xs font-mono font-bold text-green-700 bg-green-50 px-2 py-1 rounded self-start">{s.system}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Common Police 10-Codes</h2>
        <p className="text-gray-600 leading-relaxed mb-4">Police use 10-codes alongside the phonetic alphabet for rapid communication. Here are the most universal ones — note that codes vary by department, so always check local SOPs.</p>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b">
              <th className="text-left py-2 px-4 font-semibold">Code</th>
              <th className="text-left py-2 px-4 font-semibold">Meaning</th>
            </tr></thead>
            <tbody>
              {tenCodes.map((c, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-2 px-4 font-mono font-bold text-amber-600">{c.code}</td>
                  <td className="py-2 px-4">{c.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/police-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Police vs NATO Comparison</a>
        <a href="/nato-phonetic-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Full NATO Alphabet</a>
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
      </div>
    </article>
  );
}
