import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Aviation Number Pronunciation — How Pilots Say Numbers',
  description: 'Learn how pilots and ATC pronounce numbers: niner for 9, tree for 3, fife for 5. Complete ICAO number pronunciation guide with examples.',
  keywords: 'aviation numbers, pilot number pronunciation, niner, tree three aviation, ICAO numbers',
};
export default function AviationNumbersPage() {
  const nums = [{n:'0',std:'Zero',av:'ZE-RO'},{n:'1',std:'One',av:'WUN'},{n:'2',std:'Two',av:'TOO'},{n:'3',std:'Three',av:'TREE'},{n:'4',std:'Four',av:'FOW-ER'},{n:'5',std:'Five',av:'FIFE'},{n:'6',std:'Six',av:'SIX'},{n:'7',std:'Seven',av:'SEV-EN'},{n:'8',std:'Eight',av:'AIT'},{n:'9',std:'Nine',av:'NIN-ER'},{n:'.',std:'Point',av:'DAY-SEE-MAL'},{n:'00',std:'Hundred',av:'HUN-DRED'},{n:'000',std:'Thousand',av:'TOU-SAND'}];
  const examples = [
    {label:'Altitude 10,000 ft',spoken:'"Flight level wun ze-ro ze-ro"'},
    {label:'Heading 270°',spoken:'"Heading too sev-en ze-ro"'},
    {label:'Frequency 121.5 MHz',spoken:'"Wun too wun day-see-mal fife"'},
    {label:'Runway 27L',spoken:'"Runway too sev-en left"'},
    {label:'Squawk 7700',spoken:'"Squawk sev-en sev-en ze-ro ze-ro"'},
    {label:'Altitude 3,500 ft',spoken:'"Tree tou-sand fife hun-dred"'},
  ];
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">How Pilots Pronounce Numbers</h1>
      <p className="text-gray-500 mb-6">Aviation uses modified number pronunciation to prevent confusion over radio. Here&apos;s the ICAO standard used by pilots and ATC worldwide.</p>
      <div className="border rounded-lg overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead><tr className="bg-gray-50 border-b"><th className="text-left py-2 px-4 font-semibold">Number</th><th className="text-left py-2 px-4 font-semibold">Standard</th><th className="text-left py-2 px-4 font-semibold">Aviation</th></tr></thead>
          <tbody>{nums.map(n=><tr key={n.n} className="border-b border-gray-100"><td className="py-2.5 px-4 font-mono text-xl font-bold text-blue-500">{n.n}</td><td className="py-2.5 px-4 text-gray-500">{n.std}</td><td className="py-2.5 px-4 font-mono font-semibold text-green-700">{n.av}</td></tr>)}</tbody>
        </table>
      </div>
      <h2 className="text-2xl font-bold mb-3">Why Different Pronunciations?</h2>
      <p className="text-gray-600 leading-relaxed mb-4">&quot;Three&quot; becomes &quot;tree&quot; to avoid confusion with &quot;free.&quot; &quot;Five&quot; becomes &quot;fife&quot; so it can&apos;t be confused with &quot;fire.&quot; &quot;Nine&quot; becomes &quot;niner&quot; to avoid the German word &quot;nein&quot; (no). These distinctions save lives when a pilot needs to read back an altitude or heading clearly through radio static on a frequency shared by speakers from dozens of countries.</p>
      <h2 className="text-2xl font-bold mb-3">Real-World Examples</h2>
      <div className="space-y-2 mb-8">{examples.map(e=><div key={e.label} className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex justify-between items-center"><span className="text-sm font-medium">{e.label}</span><span className="font-mono text-sm text-green-700">{e.spoken}</span></div>)}</div>
      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/nato-phonetic-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">NATO Alphabet</a>
        <a href="/metar-decoder/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">METAR Decoder</a>
        <a href="/airport-codes/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Airport Codes</a>
      </div>
    </article>
  );
}
