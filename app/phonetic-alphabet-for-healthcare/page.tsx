import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Phonetic Alphabet for Healthcare — Preventing Communication Errors',
  description: 'How healthcare professionals use phonetic spelling to prevent medication errors and patient misidentification. Critical safety practice.',
  keywords: 'healthcare phonetic alphabet, medical spelling, medication errors phonetic',
};
export default function HealthcarePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Phonetic Alphabet for Healthcare</h1>
      <p className="text-gray-500 mb-6">Preventing communication errors that can endanger patients.</p>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Why Phonetic Spelling Matters in Healthcare</h2>
        <p className="text-gray-600 leading-relaxed mb-4">The Joint Commission identifies miscommunication as a leading cause of medical errors. Look-alike/sound-alike (LASA) medication names are a particular danger: Celebrex vs Cerebyx, Clonidine vs Klonopin, Hydroxyzine vs Hydralazine. A misheard letter in a verbal medication order can lead to the wrong drug being administered. Phonetic spelling eliminates this ambiguity.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Critical Use Cases</h2>
        <div className="space-y-3">
          {[
            {title:'Verbal Medication Orders',desc:'When a physician dictates a medication order over the phone, the nurse spells back the drug name phonetically: "Confirming C-E-L-E-B-R-E-X — Charlie Echo Lima Echo Bravo Romeo Echo X-ray."'},
            {title:'Patient Identification',desc:'Verifying patient names across departments, especially common names or similar-sounding names, prevents wrong-patient errors. "Patient Smith, Sierra Mike India Tango Hotel, date of birth..."'},
            {title:'Lab & Radiology Results',desc:'When communicating specimen IDs, accession numbers, or test codes over the phone, phonetic spelling prevents costly re-draws and repeat imaging.'},
            {title:'Emergency Communication',desc:'In trauma situations, rapid but accurate communication of patient identifiers, allergies, and medications between EMS and receiving hospitals saves critical time.'},
          ].map(s=>(
            <div key={s.title} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="font-bold text-sm mb-1">{s.title}</div>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
        <a href="/nato-phonetic-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">NATO Alphabet</a>
        <a href="/which-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Which Alphabet?</a>
      </div>
    </article>
  );
}
