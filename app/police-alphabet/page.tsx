import type { Metadata } from 'next';
import { NATO, LAPD } from '@/data/alphabets';

export const metadata: Metadata = {
  title: 'Police Phonetic Alphabet — LAPD/APCO vs NATO Comparison',
  description: 'The police phonetic alphabet (APCO/LAPD): Adam Boy Charles David. Side-by-side comparison with NATO. Learn which law enforcement agencies use which system.',
  keywords: 'police alphabet, police phonetic alphabet, LAPD radio alphabet, APCO alphabet, law enforcement spelling',
};

export default function PoliceAlphabetPage() {
  const letters = Object.keys(NATO);
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">The Police Phonetic Alphabet</h1>
      <p className="text-gray-500 mb-6">US law enforcement has its own spelling alphabet — the APCO/LAPD system. Here&apos;s how it compares to NATO and which agencies use which.</p>

      <div className="border rounded-lg overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead><tr className="bg-gray-50 border-b">
            <th className="text-left py-2 px-4 font-semibold w-16">Letter</th>
            <th className="text-left py-2 px-4 font-semibold">Police (LAPD)</th>
            <th className="text-left py-2 px-4 font-semibold">NATO</th>
            <th className="text-left py-2 px-4 font-semibold text-amber-600">Different?</th>
          </tr></thead>
          <tbody>
            {letters.map(l => {
              const diff = NATO[l] !== LAPD[l];
              return (
                <tr key={l} className={`border-b border-gray-100 ${diff ? 'bg-amber-50' : ''}`}>
                  <td className="py-2 px-4 font-mono text-lg font-bold text-amber-600">{l}</td>
                  <td className="py-2 px-4 font-semibold">{LAPD[l]}</td>
                  <td className="py-2 px-4 text-gray-500">{NATO[l]}</td>
                  <td className="py-2 px-4">{diff ? <span className="text-amber-600 font-bold">✦</span> : ''}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-400 mb-6">✦ = Letters where the police and NATO alphabets differ (highlighted rows).</p>

      <h2 className="text-2xl font-bold mb-3">History</h2>
      <p className="text-gray-600 leading-relaxed mb-4">The Association of Public-Safety Communications Officials (APCO) established the police spelling alphabet in 1940 — sixteen years before NATO adopted its own. The APCO system uses common American first names (Adam, Boy, Charles, David) which were familiar to US officers but never designed for international use.</p>
      <p className="text-gray-600 leading-relaxed mb-8">In 1974, APCO officially recommended switching to the NATO alphabet, but many departments — especially the LAPD, NYPD, and Chicago PD — retained their legacy systems. Today, newer departments and federal agencies (FBI, DEA, ATF) generally use NATO, while large legacy departments continue with APCO variants. When agencies from different systems communicate, confusion can arise: &quot;Adam&quot; might be heard as a suspect&apos;s name rather than the letter A.</p>

      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
        <a href="/nato-phonetic-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">NATO Alphabet</a>
        <a href="/military-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Military Alphabet</a>
        <a href="/history/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">History</a>
      </div>
    </article>
  );
}
