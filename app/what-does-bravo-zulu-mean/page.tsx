import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Does Bravo Zulu Mean? Military Phonetic Slang Explained',
  description: 'Bravo Zulu means "Well Done" in military communication. Learn this and other NATO phonetic alphabet slang terms used by the US Navy, Army, and Marines.',
  keywords: 'what does bravo zulu mean, bravo zulu navy, military phonetic slang, Oscar Mike meaning, Lima Charlie meaning, Whiskey Tango Foxtrot, military alphabet slang',
};

export default function BravoZuluPage() {
  const terms = [
    { term: 'Bravo Zulu', abbr: 'BZ', meaning: 'Well done / Excellent work', origin: 'US Navy signal flag code. BZ was the flag signal hoisted to praise another vessel. Transferred directly into radio communication and now used across all military branches and aviation.', example: '"Outstanding work on that mission. Bravo Zulu to the entire team."' },
    { term: 'Oscar Mike', abbr: 'OM', meaning: 'On the Move / Moving out', origin: 'Combines the NATO words for O and M, forming a shorthand for "on the move." Used to report that a unit has departed a position or is traveling between locations.', example: '"Alpha squad is Oscar Mike to checkpoint Delta, ETA fifteen mikes."' },
    { term: 'Charlie Mike', abbr: 'CM', meaning: 'Continue Mission', origin: 'C and M in NATO spelling — "continue mission." An order or acknowledgment that operations should proceed as planned despite obstacles.', example: '"We have a minor equipment issue but Charlie Mike — the objective hasn\'t changed."' },
    { term: 'Lima Charlie', abbr: 'LC', meaning: 'Loud and Clear', origin: 'Radio check response. When someone asks "How do you copy?" the response "Lima Charlie" means the transmission is being received perfectly — both loud AND clear.', example: '"Radio check, over." "Lima Charlie, over."' },
    { term: 'Foxtrot Oscar', abbr: 'FO', meaning: 'F*** Off (polite version)', origin: 'A NATO-alphabet way to express strong displeasure without technically using profanity. Common in informal military communication but not appropriate in formal contexts.', example: 'Used informally among troops — self-explanatory.' },
    { term: 'Whiskey Tango Foxtrot', abbr: 'WTF', meaning: 'What The F*** (expression of disbelief)', origin: 'The NATO alphabet spelling of the acronym WTF. Entered mainstream culture through military usage and is now widely understood in civilian contexts as well.', example: '"Did you just see that? Whiskey Tango Foxtrot."' },
    { term: 'Tango Down', abbr: 'TD', meaning: 'Target/Enemy neutralized', origin: 'T (Tango) represents "target" in military radio. "Tango Down" means the target has been neutralized or eliminated.', example: '"Tango down, sector is clear."' },
    { term: 'Yankee Delta', abbr: 'YD', meaning: 'You\'re Doing (well / poorly)', origin: 'Less formal — a play on BZ (Bravo Zulu). Less standardized than BZ but understood in context.', example: 'Primarily informal usage.' },
    { term: 'November Kilo', abbr: 'NK', meaning: 'No Kidding / Seriously?', origin: 'Informal expression of surprise or sarcasm. Not an official military abbreviation but widely used among troops.', example: '"We have to redo the whole thing?" "November Kilo."' },
    { term: 'Kilo India Alpha', abbr: 'KIA', meaning: 'Killed in Action', origin: 'Official military designation for personnel killed in combat. One of the few acronyms that retains the spelled-out form in formal reporting.', example: 'Used in official casualty reports — treated with solemnity.' },
    { term: 'Mike', abbr: 'M', meaning: 'Minute(s)', origin: 'The NATO word for M used as a time unit shorthand. "Five mikes" means five minutes.', example: '"ETA is thirty mikes." (30 minutes away)' },
    { term: 'Zulu Time', abbr: 'Z', meaning: 'UTC / Coordinated Universal Time', origin: 'Z is the military time zone designator for UTC. "Zulu" (the NATO word for Z) became the standard term for universal military time worldwide.', example: '"Mission launches at 0600 Zulu." (6:00 AM UTC)' },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">What Does &quot;Bravo Zulu&quot; Mean?</h1>
      <p className="text-gray-500 mb-2">And other military phonetic alphabet slang explained.</p>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
        <p className="text-lg font-semibold text-amber-800"><strong>Bravo Zulu</strong> means <strong>&quot;Well Done&quot;</strong> or &quot;Excellent Work.&quot;</p>
        <p className="text-sm text-gray-600 mt-1">Originally a US Navy signal flag code (flag B + flag Z = well done), it transferred into radio communication and is now used across all military branches, law enforcement, and aviation to praise good performance.</p>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Military Phonetic Alphabet Slang — Complete Guide</h2>
        <div className="space-y-4">
          {terms.map(t => (
            <div key={t.term} className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <span className="font-bold text-lg text-amber-700">{t.term}</span>
                  <span className="ml-2 text-xs font-mono bg-amber-100 text-amber-700 px-2 py-0.5 rounded">{t.abbr}</span>
                </div>
                <span className="text-sm font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded shrink-0 ml-2">{t.meaning}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2 leading-relaxed">{t.origin}</p>
              <p className="text-xs font-mono text-gray-500 italic bg-white px-3 py-1.5 rounded border border-gray-200">{t.example}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Why Does Military Slang Use the Phonetic Alphabet?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">Military radio communication must be fast, unambiguous, and usable by speakers of different languages. The NATO phonetic alphabet provides a standardized vocabulary that works across these constraints. When troops began using letter combinations as shorthand (BZ for &quot;well done,&quot; OM for &quot;on the move&quot;), they naturally spoke them as the phonetic words — &quot;Bravo Zulu&quot; rather than &quot;B-Z.&quot; Over time, these phonetic versions became the recognized terms themselves.</p>
        <p className="text-gray-600 leading-relaxed">Many of these terms have crossed into civilian culture through veterans, military-themed media, and law enforcement — particularly &quot;Bravo Zulu,&quot; &quot;Oscar Mike,&quot; and &quot;Whiskey Tango Foxtrot.&quot;</p>
      </section>

      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/military-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Military Alphabet Guide</a>
        <a href="/nato-phonetic-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Full NATO Alphabet</a>
        <a href="/history/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">History</a>
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
      </div>
    </article>
  );
}
