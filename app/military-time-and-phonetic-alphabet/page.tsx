import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Military Time & Phonetic Alphabet — Complete Guide',
  description: 'Learn military time (24-hour clock) and the NATO phonetic alphabet together. Both are essential military communication tools. Includes conversion chart and examples.',
  keywords: 'military time phonetic alphabet, 24 hour clock military, military time chart, military time converter, Zulu time phonetic alphabet',
};

export default function MilitaryTimePage() {
  const timeChart = [
    {civ:'12:00 AM (midnight)',mil:'0000',say:'Zero Zero Zero Zero',note:'Start of day'},
    {civ:'1:00 AM',mil:'0100',say:'Zero One Hundred',note:''},
    {civ:'2:00 AM',mil:'0200',say:'Zero Two Hundred',note:''},
    {civ:'3:00 AM',mil:'0300',say:'Zero Three Hundred',note:''},
    {civ:'6:00 AM',mil:'0600',say:'Zero Six Hundred',note:'Common reveille time'},
    {civ:'9:00 AM',mil:'0900',say:'Zero Niner Hundred',note:''},
    {civ:'12:00 PM (noon)',mil:'1200',say:'Twelve Hundred',note:''},
    {civ:'1:00 PM',mil:'1300',say:'Thirteen Hundred',note:''},
    {civ:'3:00 PM',mil:'1500',say:'Fifteen Hundred',note:''},
    {civ:'5:00 PM',mil:'1700',say:'Seventeen Hundred',note:'Common end of duty'},
    {civ:'6:00 PM',mil:'1800',say:'Eighteen Hundred',note:''},
    {civ:'9:00 PM',mil:'2100',say:'Twenty-One Hundred',note:''},
    {civ:'11:00 PM',mil:'2300',say:'Twenty-Three Hundred',note:''},
    {civ:'11:59 PM',mil:'2359',say:'Twenty-Three Fifty-Nine',note:'End of day'},
  ];

  const timeZones = [
    {letter:'A',word:'Alfa',zone:'UTC+1',name:'Alpha Time Zone'},
    {letter:'B',word:'Bravo',zone:'UTC+2',name:'Bravo Time Zone'},
    {letter:'C',word:'Charlie',zone:'UTC+3',name:'Charlie Time Zone'},
    {letter:'J',word:'Juliett',zone:'Local',name:'Local/Juliet Time (no zone specified)'},
    {letter:'R',word:'Romeo',zone:'UTC-5',name:'Romeo / US Eastern'},
    {letter:'S',word:'Sierra',zone:'UTC-6',name:'Sierra / US Central'},
    {letter:'T',word:'Tango',zone:'UTC-7',name:'Tango / US Mountain'},
    {letter:'U',word:'Uniform',zone:'UTC-8',name:'Uniform / US Pacific'},
    {letter:'Z',word:'Zulu',zone:'UTC±0',name:'Zulu / UTC (most commonly used)'},
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Military Time &amp; the Phonetic Alphabet</h1>
      <p className="text-gray-500 mb-6">Two of the most important tools in military communication — the 24-hour clock and the NATO phonetic alphabet — are almost always used together. Here&apos;s everything you need to know about both.</p>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">How Military Time Works</h2>
        <p className="text-gray-600 leading-relaxed mb-4">Military time uses a 24-hour clock that eliminates AM/PM ambiguity. The day runs from 0000 (midnight) to 2359 (11:59 PM). Hours are always expressed as four digits. There are no colons — just four numbers read as pairs.</p>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
            <div className="font-bold text-red-600 mb-1">❌ Civilian</div>
            <div className="font-mono">&quot;3 PM&quot; or &quot;15:00&quot;</div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
            <div className="font-bold text-green-600 mb-1">✅ Military</div>
            <div className="font-mono">&quot;1500&quot; → &quot;Fifteen Hundred&quot;</div>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm mb-4">
          <strong>Key rule:</strong> When reading military time aloud, say &quot;hundred&quot; for exact hours (1500 = &quot;fifteen hundred&quot;) and state minutes separately for other times (1523 = &quot;fifteen twenty-three&quot;). Use &quot;zero&quot; not &quot;oh&quot; for leading zeros.
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Military Time Conversion Chart</h2>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b"><th className="text-left py-2 px-3 font-semibold">Civilian</th><th className="text-left py-2 px-3 font-semibold">Military</th><th className="text-left py-2 px-3 font-semibold">How to Say It</th></tr></thead>
            <tbody>{timeChart.map(t=><tr key={t.mil} className="border-b border-gray-100"><td className="py-2 px-3 text-gray-500">{t.civ}</td><td className="py-2 px-3 font-mono font-bold text-amber-600">{t.mil}</td><td className="py-2 px-3 text-green-700 font-mono text-xs">{t.say}</td></tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Zulu Time &amp; Military Time Zones</h2>
        <p className="text-gray-600 leading-relaxed mb-4">Military operations often span multiple time zones. To avoid confusion, a single reference time is used — &quot;Zulu time&quot; (UTC). The letter Z (Zulu in NATO alphabet) designates UTC. Each time zone gets a NATO letter designation.</p>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b"><th className="text-left py-2 px-3 font-semibold">Letter</th><th className="text-left py-2 px-3 font-semibold">NATO Word</th><th className="text-left py-2 px-3 font-semibold">Offset</th><th className="text-left py-2 px-3 font-semibold">Zone</th></tr></thead>
            <tbody>{timeZones.map(z=><tr key={z.letter} className={`border-b border-gray-100 ${z.letter==='Z'?'bg-amber-50':''}`}><td className="py-2 px-3 font-mono font-bold text-amber-600">{z.letter}</td><td className="py-2 px-3 font-medium">{z.word}</td><td className="py-2 px-3 font-mono text-blue-600">{z.zone}</td><td className="py-2 px-3 text-gray-500 text-xs">{z.name}</td></tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Using Both Together — Real Examples</h2>
        <div className="space-y-3">
          {[
            {context:'Mission briefing',example:'"Airstrike is scheduled for 0200 Zulu. That\'s zero two hundred Zulu."'},
            {context:'Radio check-in',example:'"Alpha squad checking in at 1347 local, that\'s thirteen forty-seven Sierra time."'},
            {context:'Supply delivery',example:'"Package arrives 1500 Tango, fifteen hundred Tango. Confirm receipt to callsign Foxtrot Delta."'},
            {context:'Medical evacuation',example:'"MEDEVAC requested at 0930 Zulu, grid reference Alfa Bravo Four Seven, zero niner thirty Zulu."'},
          ].map(e=>(
            <div key={e.context} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">{e.context}</div>
              <div className="font-mono text-sm text-gray-700 italic">{e.example}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/military-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Military Alphabet</a>
        <a href="/aviation-numbers/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Aviation Numbers</a>
        <a href="/what-does-bravo-zulu-mean/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Military Slang</a>
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
      </div>
    </article>
  );
}
