import type { Metadata } from 'next';
import { NATO, NATO_NUMBERS, MORSE } from '@/data/alphabets';

export const metadata: Metadata = {
  title: 'Phonetic Alphabet Poster — Free Printable Wall Chart',
  description: 'Free printable NATO phonetic alphabet poster for offices, call centers, classrooms, and desks. Print in large format for wall display or small format for desk reference.',
  keywords: 'phonetic alphabet poster, NATO alphabet wall chart, phonetic alphabet printable large, phonetic alphabet office poster, call center alphabet poster',
};

export default function PosterPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">NATO Phonetic Alphabet Poster</h1>
      <p className="text-gray-500 mb-6">Free printable wall chart and desk reference. Print on any printer — works great in A4, Letter, or scale up for a proper wall poster.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <a href="/phonetic-alphabet-chart/" className="block bg-amber-50 border-2 border-amber-400 rounded-xl p-5 text-center hover:bg-amber-100 transition">
          <div className="text-3xl mb-2">🖨️</div>
          <div className="font-bold">Desk Reference</div>
          <div className="text-xs text-gray-600 mt-1">Standard Letter/A4 size. Fits on a desk or monitor frame.</div>
          <div className="text-xs font-semibold text-amber-600 mt-2">Print Now →</div>
        </a>
        <a href="/nato-alphabet-quiz-printable/" className="block bg-green-50 border-2 border-green-400 rounded-xl p-5 text-center hover:bg-green-100 transition">
          <div className="text-3xl mb-2">📝</div>
          <div className="font-bold">Quiz Worksheet</div>
          <div className="text-xs text-gray-600 mt-1">Fill-in-the-blank test for training sessions.</div>
          <div className="text-xs font-semibold text-green-600 mt-2">Print Now →</div>
        </a>
        <a href="/" className="block bg-blue-50 border-2 border-blue-400 rounded-xl p-5 text-center hover:bg-blue-100 transition">
          <div className="text-3xl mb-2">💻</div>
          <div className="font-bold">Interactive Tool</div>
          <div className="text-xs text-gray-600 mt-1">Type any text and convert it instantly online.</div>
          <div className="text-xs font-semibold text-blue-600 mt-2">Use Tool →</div>
        </a>
      </div>

      {/* Visual poster preview */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Poster Preview</h2>
        <div className="bg-gray-900 rounded-xl p-6 border-4 border-amber-500">
          <div className="text-center mb-4">
            <div className="text-amber-500 font-mono text-xs tracking-widest uppercase mb-1">RadioSpell.com</div>
            <div className="text-white text-xl font-bold">NATO / ICAO Phonetic Alphabet</div>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1">
            {Object.entries(NATO).map(([l, w]) => (
              <div key={l} className="flex items-center gap-2 py-0.5 border-b border-gray-700">
                <span className="text-amber-500 font-mono font-bold text-base w-6">{l}</span>
                <span className="text-white text-sm font-medium flex-1">{w}</span>
                <span className="text-gray-500 font-mono text-[10px] tracking-widest">{MORSE[l]}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-700 mt-3 pt-3">
            <div className="text-gray-400 text-xs text-center mb-2">Numbers</div>
            <div className="grid grid-cols-5 gap-1">
              {Object.entries(NATO_NUMBERS).map(([n, w]) => (
                <div key={n} className="text-center">
                  <div className="text-blue-400 font-mono font-bold text-lg">{n}</div>
                  <div className="text-white text-[10px]">{w}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-3 text-gray-600 text-[10px]">radiospell.com · Free phonetic alphabet tools & aviation reference</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Where to Use This Poster</h2>
        <div className="grid grid-cols-2 gap-2">
          {[['📞','Call Centers','Tape next to every phone station for instant reference'],['🏥','Healthcare','Post in nursing stations and pharmacy areas'],['💻','IT Support Desks','Essential for reading serial numbers and license keys'],['🚔','Police Stations','Roll call rooms and dispatch centers'],['✈️','Aviation Offices','FBOs, dispatch, and ground operations'],['🏫','Classrooms','Great for teacher desks and student workspaces'],['🏭','Warehouses','Picking stations where codes are read over radio'],['🚢','Shipping & Ports','Container and cargo tracking areas']].map(([icon,place,tip])=>(
            <div key={place} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1"><span>{icon}</span><span className="font-bold text-sm">{place}</span></div>
              <div className="text-xs text-gray-500">{tip}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/phonetic-alphabet-chart/" className="text-sm bg-amber-500 text-white px-3 py-1.5 rounded hover:bg-amber-600">Print Desk Reference</a>
        <a href="/nato-alphabet-quiz-printable/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Print Quiz Sheet</a>
        <a href="/nato-phonetic-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Full NATO Guide</a>
      </div>
    </article>
  );
}
