import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Spell an Email Address Over the Phone — Phonetic Guide',
  description: 'Step-by-step guide to spelling email addresses clearly over the phone using the NATO phonetic alphabet. Handle dots, underscores, hyphens, and domains without confusion.',
  keywords: 'spell email over phone, email address phonetic, how to say email address phone, spell email customer service, email address nato alphabet',
};

export default function SpellEmailPage() {
  const specials = [
    { char: '.', say: '"dot"', example: 'j.smith → "Juliett, dot, Sierra Mike India Tango Hotel"' },
    { char: '@', say: '"at" or "at sign"', example: 'name@gmail → "...at Gmail..."' },
    { char: '_', say: '"underscore"', example: 'john_smith → "John, underscore, Smith"' },
    { char: '-', say: '"hyphen" or "dash"', example: 'john-smith → "John, hyphen, Smith"' },
    { char: '+', say: '"plus sign"', example: 'name+tag → "name, plus sign, tag"' },
    { char: '1', say: '"the number one" (not "el")', example: 'user1 → "user, the number one"' },
    { char: '0', say: '"zero" (not "oh")', example: 'user0 → "user, zero"' },
  ];

  const domains = [
    { domain: 'gmail.com', say: 'Golf Mike Alfa India Lima, dot com' },
    { domain: 'yahoo.com', say: 'Yankee Alfa Hotel Oscar Oscar, dot com' },
    { domain: 'outlook.com', say: 'Oscar Uniform Tango Lima Oscar Oscar Kilo, dot com' },
    { domain: 'icloud.com', say: 'India Charlie Lima Oscar Uniform Delta, dot com' },
    { domain: 'hotmail.com', say: 'Hotel Oscar Tango Mike Alfa India Lima, dot com' },
    { domain: 'me.com', say: 'Mike Echo, dot com' },
    { domain: 'aol.com', say: 'Alfa Oscar Lima, dot com' },
    { domain: 'proton.me', say: 'Papa Romeo Oscar Tango Oscar November, dot Mike Echo' },
  ];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">How to Spell an Email Address Over the Phone</h1>
      <p className="text-gray-500 mb-6">Email addresses are the most error-prone thing to communicate by voice. Dots, underscores, numbers, and similar-sounding letters combine to make a mess. Here&apos;s the foolproof system.</p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
        <h2 className="font-bold mb-2">The 3-Part Email Formula</h2>
        <div className="space-y-1 text-sm">
          <div className="flex gap-2"><span className="font-bold text-amber-700 w-8">1.</span><span>Spell the <strong>username</strong> character by character using NATO</span></div>
          <div className="flex gap-2"><span className="font-bold text-amber-700 w-8">2.</span><span>Say <strong>&quot;at&quot;</strong> for the @ symbol</span></div>
          <div className="flex gap-2"><span className="font-bold text-amber-700 w-8">3.</span><span>Spell the <strong>domain name</strong> if unusual; say it normally if it&apos;s gmail/yahoo/outlook</span></div>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Step-by-Step Examples</h2>
        <div className="space-y-4">
          {[
            { email: 'jsmith@gmail.com', breakdown: [{ part: 'Username', text: 'jsmith', spoken: 'Juliett, Sierra Mike India Tango Hotel' }, { part: 'At sign', text: '@', spoken: '"at"' }, { part: 'Domain', text: 'gmail.com', spoken: '"Gmail dot com" (well-known, just say it)' }] },
            { email: 'j.smith_2@company.co.uk', breakdown: [{ part: 'Username', text: 'j.smith_2', spoken: 'Juliett, dot, Sierra Mike India Tango Hotel, underscore, the number two' }, { part: 'At sign', text: '@', spoken: '"at"' }, { part: 'Domain', text: 'company.co.uk', spoken: 'Charlie Oscar Mike Papa Alfa November Yankee, dot Charlie Oscar, dot Uniform Kilo' }] },
            { email: 'mary.o\'brien@hospital.org', breakdown: [{ part: 'Username', text: "mary.o'brien", spoken: 'Mike Alfa Romeo Yankee, dot, Oscar, apostrophe, Bravo Romeo India Echo November' }, { part: 'At sign', text: '@', spoken: '"at"' }, { part: 'Domain', text: 'hospital.org', spoken: 'Hotel Oscar Sierra Papa India Tango Alfa Lima, dot Oscar Romeo Golf' }] },
          ].map(ex => (
            <div key={ex.email} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="font-mono font-bold text-amber-600 text-lg mb-3">{ex.email}</div>
              <div className="space-y-2">
                {ex.breakdown.map(b => (
                  <div key={b.part} className="flex gap-2 text-sm">
                    <span className="text-gray-400 w-24 shrink-0">{b.part}:</span>
                    <span className="font-mono text-gray-600 shrink-0">{b.text}</span>
                    <span className="text-green-700">→ {b.spoken}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">How to Say Special Characters</h2>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b"><th className="text-left py-2 px-4 font-semibold">Character</th><th className="text-left py-2 px-4 font-semibold">Say</th><th className="text-left py-2 px-4 font-semibold">Example</th></tr></thead>
            <tbody>{specials.map(s => <tr key={s.char} className="border-b border-gray-100"><td className="py-2 px-4 font-mono text-lg font-bold text-purple-600">{s.char}</td><td className="py-2 px-4 font-semibold">{s.say}</td><td className="py-2 px-4 text-xs text-gray-500">{s.example}</td></tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Common Email Domains — Phonetic Pronunciation</h2>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b"><th className="text-left py-2 px-4 font-semibold">Domain</th><th className="text-left py-2 px-4 font-semibold">How to Say It</th></tr></thead>
            <tbody>{domains.map(d => <tr key={d.domain} className="border-b border-gray-100"><td className="py-2 px-4 font-mono font-bold text-blue-600">{d.domain}</td><td className="py-2 px-4 text-xs text-green-700 font-mono">{d.say}</td></tr>)}</tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2">Tip: For very well-known domains (gmail, yahoo), you can just say the name clearly rather than spelling it out. Only spell out unfamiliar or corporate domains.</p>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-blue-800">Want to pre-spell your email? <a href="/" className="font-semibold text-amber-600 hover:underline">Type it in our converter</a> and get the full phonetic readout ready to read over the phone.</p>
      </div>

      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
        <a href="/how-to-spell-over-the-phone/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Phone Spelling Guide</a>
        <a href="/confusing-letters-phone/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Confusing Letters</a>
      </div>
    </article>
  );
}
