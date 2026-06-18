import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Phonetic Alphabet Numbers — How to Say Numbers Clearly Over the Phone',
  description: 'How to say numbers clearly over the phone using the NATO phonetic alphabet system. Avoid confusion between 1/7, 5/9, and zero/oh in customer service and everyday calls.',
  keywords: 'phonetic alphabet numbers, say numbers phone, number pronunciation phone, zero one two three phone call, avoid number confusion',
};

export default function PhoneticNumbersPage() {
  const numbers = [
    { digit: '0', nato: 'Zero', civilian: 'Zero / Oh', tip: 'Always say "Zero" not "Oh" in professional contexts. "Oh" is ambiguous — it sounds like the letter O.' },
    { digit: '1', nato: 'One', civilian: 'One / Wun', tip: 'Avoid "won" — clearly say "ONE" with emphasis. Can be confused with 7 in some accents.' },
    { digit: '2', nato: 'Two', civilian: 'Two', tip: 'Straightforward but confirm it\'s not "too" (the word). Say "the number two."' },
    { digit: '3', nato: 'Three', civilian: 'Three', tip: 'Can sound like "free" or "tree" over static. Aviation uses "tree" to avoid this.' },
    { digit: '4', nato: 'Four', civilian: 'Four', tip: 'Can sound like "for" or "fore." Spell it out if there\'s confusion: "four, F-O-U-R."' },
    { digit: '5', nato: 'Five', civilian: 'Five', tip: 'Occasionally confused with "nine" over poor connections. Aviation uses "fife."' },
    { digit: '6', nato: 'Six', civilian: 'Six', tip: 'Can sound like "sex" in some accents — say it clearly and slowly.' },
    { digit: '7', nato: 'Seven', civilian: 'Seven', tip: 'Europeans often write 7 with a crossbar — if reading back, confirm "seven, no crossbar."' },
    { digit: '8', nato: 'Eight', civilian: 'Eight', tip: 'Rarely confused. Still say it clearly — "ATE" and "eight" sound different to non-native English speakers.' },
    { digit: '9', nato: 'Nine / Niner', civilian: 'Nine', tip: 'Aviation says "niner" to avoid confusion with the German "nein" (no). For civilian calls, "nine" is fine.' },
  ];

  const examples = [
    { scenario: 'Phone number', bad: '8-0-0-5-5-5-1-2-1-2', good: 'Eight, zero, zero, five, five, five, one, two, one, two', tip: 'Say each digit individually — never group them as "eight hundred."' },
    { scenario: 'Credit card', bad: '4-1-1-1 2-2-2-2 3-3-3-3 4-4-4-4', good: 'Four-one-one-one... two-two-two-two... three-three-three-three... four-four-four-four', tip: 'Read in groups of four with a clear pause between groups.' },
    { scenario: 'Date of birth', bad: '01/15/1985', good: 'Zero one, fifteen, nineteen eighty-five', tip: 'Say "zero one" not "oh one" for the month.' },
    { scenario: 'Zip / Postal code', bad: '80301', good: 'Eight, zero, three, zero, one', tip: 'Always individual digits — never "eighty thousand three hundred one."' },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">How to Say Numbers Clearly Over the Phone</h1>
      <p className="text-gray-500 mb-6">Numbers cause just as much confusion as letters on phone calls. Here&apos;s how to say each digit clearly, avoid the most common mix-ups, and read phone numbers, dates, and codes without errors.</p>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">The Number Reference Table</h2>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b">
              <th className="text-left py-2 px-4 font-semibold w-12">Digit</th>
              <th className="text-left py-2 px-4 font-semibold">NATO</th>
              <th className="text-left py-2 px-4 font-semibold">Everyday</th>
              <th className="text-left py-2 px-4 font-semibold">Pro Tip</th>
            </tr></thead>
            <tbody>
              {numbers.map(n => (
                <tr key={n.digit} className="border-b border-gray-100">
                  <td className="py-3 px-4 font-mono text-2xl font-bold text-blue-500">{n.digit}</td>
                  <td className="py-3 px-4 font-semibold text-green-700">{n.nato}</td>
                  <td className="py-3 px-4 text-gray-600">{n.civilian}</td>
                  <td className="py-3 px-4 text-xs text-gray-500">{n.tip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">The Biggest Number Confusion: Zero vs O</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-4">
          <p className="text-sm text-gray-700 leading-relaxed"><strong>The most common mistake:</strong> saying &quot;Oh&quot; for the digit 0. When you say &quot;Oh four seven,&quot; the listener doesn&apos;t know if you mean the number zero or the letter O. In phone numbers, account numbers, and confirmation codes this creates serious errors. <strong>Always say &quot;Zero&quot; for the digit 0.</strong></p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
            <div className="text-red-600 font-bold mb-1">❌ Ambiguous</div>
            <div className="font-mono">&quot;Oh four seven&quot;</div>
            <div className="text-xs text-gray-500 mt-1">Is that 0, 4, 7 or O, 4, 7?</div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
            <div className="text-green-600 font-bold mb-1">✅ Clear</div>
            <div className="font-mono">&quot;Zero four seven&quot;</div>
            <div className="text-xs text-gray-500 mt-1">Unambiguous — it&apos;s the digit 0</div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">How to Read Common Number Strings</h2>
        <div className="space-y-4">
          {examples.map(e => (
            <div key={e.scenario} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="font-bold text-sm mb-2">{e.scenario}</div>
              <div className="grid grid-cols-1 gap-1 mb-2">
                <div className="text-xs text-red-600">❌ &quot;{e.bad}&quot;</div>
                <div className="text-xs text-green-700">✅ &quot;{e.good}&quot;</div>
              </div>
              <div className="text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded">{e.tip}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-blue-800">Need to spell a code with both letters and numbers? <a href="/" className="font-semibold text-amber-600 hover:underline">Use our converter</a> — it handles letters and digits together.</p>
      </div>

      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/aviation-numbers/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Aviation Numbers</a>
        <a href="/how-to-spell-over-the-phone/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Phone Spelling Guide</a>
        <a href="/confusing-letters-phone/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Confusing Letters</a>
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
      </div>
    </article>
  );
}
