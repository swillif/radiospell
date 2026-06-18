import type { Metadata } from 'next';
import { NATO, NATO_NUMBERS, MORSE } from '@/data/alphabets';
import PrintButton from '../phonetic-alphabet-chart/PrintButton';

export const metadata: Metadata = {
  title: 'NATO Alphabet Quiz — Printable Worksheet for Practice & Training',
  description: 'Free printable NATO phonetic alphabet quiz worksheets. Perfect for call center training, classroom use, military prep, and self-study. Fill-in-the-blank and matching formats.',
  keywords: 'NATO alphabet quiz printable, phonetic alphabet worksheet, NATO alphabet test, call center training quiz, phonetic alphabet practice sheet',
};

export default function PrintableQuizPage() {
  const handlePrintQuiz1 = () => {
    const letters = Object.entries(NATO);
    let html = `<!DOCTYPE html><html><head><title>NATO Phonetic Alphabet Quiz — RadioSpell.com</title>
    <style>body{font-family:Arial,sans-serif;padding:20px;color:#111;max-width:700px;margin:0 auto}
    h1{font-size:20px;text-align:center;margin-bottom:4px}.sub{text-align:center;color:#666;font-size:12px;margin-bottom:4px}
    .name-line{border-bottom:1px solid #999;width:200px;display:inline-block;margin-left:8px}
    .instructions{background:#f5f5f5;padding:10px;border-radius:4px;font-size:12px;margin:12px 0}
    table{width:100%;border-collapse:collapse;margin-top:12px}
    td,th{border:1px solid #ccc;padding:8px 10px;font-size:13px}th{background:#f0f0f0;font-weight:700}
    .ans{border-bottom:1px solid #999;width:140px;display:inline-block}
    .footer{text-align:center;font-size:10px;color:#999;margin-top:16px;border-top:1px solid #ddd;padding-top:8px}
    @media print{body{padding:10px}}</style></head><body>
    <h1>NATO Phonetic Alphabet Quiz</h1>
    <div class="sub">Name: <span class="name-line"></span> &nbsp; Date: <span class="name-line" style="width:100px"></span> &nbsp; Score: ___/26</div>
    <div class="instructions"><strong>Instructions:</strong> Write the correct NATO code word for each letter. Example: A = <em>Alfa</em></div>
    <table><thead><tr><th>Letter</th><th>NATO Code Word</th><th>Letter</th><th>NATO Code Word</th></tr></thead><tbody>`;
    const half = Math.ceil(letters.length / 2);
    for (let i = 0; i < half; i++) {
      const left = letters[i];
      const right = letters[i + half] || ['', ''];
      html += `<tr><td style="font-size:18px;font-weight:700;font-family:monospace">${left[0]}</td><td><span class="ans"></span></td>`;
      html += `<td style="font-size:18px;font-weight:700;font-family:monospace">${right[0]}</td><td><span class="ans"></span></td></tr>`;
    }
    html += `</tbody></table><div class="footer">RadioSpell.com — Free phonetic alphabet tools & reference</div></body></html>`;
    const w = window.open('', '_blank'); if (w) { w.document.write(html); w.document.close(); setTimeout(() => w.print(), 400); }
  };

  const handlePrintAnswers = () => {
    const letters = Object.entries(NATO);
    const half = Math.ceil(letters.length / 2);
    let html = `<!DOCTYPE html><html><head><title>NATO Alphabet Quiz — Answer Key</title>
    <style>body{font-family:Arial,sans-serif;padding:20px;color:#111;max-width:700px;margin:0 auto}
    h1{font-size:20px;text-align:center;margin-bottom:4px}.sub{text-align:center;color:#666;font-size:12px;margin-bottom:12px}
    table{width:100%;border-collapse:collapse}td,th{border:1px solid #ccc;padding:8px 10px;font-size:13px}th{background:#f0f0f0;font-weight:700}
    .ans{color:#1a7a3a;font-weight:700}.footer{text-align:center;font-size:10px;color:#999;margin-top:16px;border-top:1px solid #ddd;padding-top:8px}
    </style></head><body><h1>NATO Phonetic Alphabet — Answer Key</h1>
    <div class="sub">Instructor Copy</div>
    <table><thead><tr><th>Letter</th><th>Answer</th><th>Morse</th><th>Letter</th><th>Answer</th><th>Morse</th></tr></thead><tbody>`;
    for (let i = 0; i < half; i++) {
      const left = letters[i]; const right = letters[i + half] || ['', ''];
      html += `<tr><td style="font-size:16px;font-weight:700;font-family:monospace">${left[0]}</td><td class="ans">${left[1]}</td><td style="font-family:monospace;font-size:11px;letter-spacing:2px">${MORSE[left[0]]}</td>`;
      html += `<td style="font-size:16px;font-weight:700;font-family:monospace">${right[0]}</td><td class="ans">${right[1] || ''}</td><td style="font-family:monospace;font-size:11px;letter-spacing:2px">${right[0] ? MORSE[right[0]] : ''}</td></tr>`;
    }
    html += `</tbody></table><div class="footer">RadioSpell.com — Answer Key (Instructor Copy)</div></body></html>`;
    const w = window.open('', '_blank'); if (w) { w.document.write(html); w.document.close(); setTimeout(() => w.print(), 400); }
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">NATO Phonetic Alphabet — Printable Quiz & Worksheets</h1>
      <p className="text-gray-500 mb-6">Free printable quiz worksheets for classroom, call center training, military prep, or self-study. Print the quiz sheet for students and the answer key for instructors.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-center">
          <div className="text-3xl mb-2">📝</div>
          <h2 className="font-bold text-lg mb-1">Student Quiz Sheet</h2>
          <p className="text-sm text-gray-600 mb-4">Fill-in-the-blank. 26 questions, one per letter. Includes name and date fields and a score line.</p>
          <button onClick={handlePrintQuiz1} className="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-600 transition w-full">🖨️ Print Quiz Sheet</button>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
          <div className="text-3xl mb-2">✅</div>
          <h2 className="font-bold text-lg mb-1">Instructor Answer Key</h2>
          <p className="text-sm text-gray-600 mb-4">Complete answers with Morse code. Print separately and keep for grading.</p>
          <button onClick={handlePrintAnswers} className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition w-full">🖨️ Print Answer Key</button>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Preview — The Full Alphabet</h2>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b"><th className="text-left py-2 px-4 font-semibold">Letter</th><th className="text-left py-2 px-4 font-semibold">Answer</th><th className="text-left py-2 px-4 font-semibold text-gray-400">Morse</th></tr></thead>
            <tbody>{Object.entries(NATO).map(([l, w]) => <tr key={l} className="border-b border-gray-100"><td className="py-2 px-4 font-mono text-lg font-bold text-amber-600">{l}</td><td className="py-2 px-4 font-semibold">{w}</td><td className="py-2 px-4 font-mono text-gray-400 text-xs tracking-widest">{MORSE[l]}</td></tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Training Tips for Instructors</h2>
        <div className="space-y-2">
          {[
            'Start with the 5 most commonly confused letters: B, D, M, N, and S — these cause the most errors in real-world use.',
            'Have learners say the word out loud as they write it — speaking reinforces memory faster than writing alone.',
            'After the written quiz, do an oral run-through: say a letter, student responds with the code word within 2 seconds.',
            'For call center training, follow up with role-play scenarios where agents must spell a customer\'s name or confirmation code.',
            'Consider a timed version once basics are learned — 26 letters in under 60 seconds is a good mastery benchmark.',
          ].map((tip, i) => (
            <div key={i} className="flex gap-3 text-sm bg-gray-50 border border-gray-200 rounded-lg p-3">
              <span className="text-amber-600 font-bold shrink-0">{i + 1}</span>
              <span className="text-gray-600">{tip}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t pt-6 flex flex-wrap gap-3">
        <a href="/quiz/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Interactive Online Quiz</a>
        <a href="/phonetic-alphabet-chart/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Printable Reference Chart</a>
        <a href="/phonetic-alphabet-for-call-centers/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Call Center Guide</a>
      </div>
    </article>
  );
}
