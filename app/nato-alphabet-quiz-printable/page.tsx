import type { Metadata } from 'next';
import { NATO, MORSE } from '@/data/alphabets';
import { PrintQuizButton, PrintAnswerKeyButton } from './PrintButtons';

export const metadata: Metadata = {
  title: 'NATO Alphabet Quiz — Printable Worksheet for Practice & Training',
  description: 'Free printable NATO phonetic alphabet quiz worksheets. Perfect for call center training, classroom use, military prep, and self-study. Fill-in-the-blank and matching formats.',
  keywords: 'NATO alphabet quiz printable, phonetic alphabet worksheet, NATO alphabet test, call center training quiz, phonetic alphabet practice sheet',
};

export default function PrintableQuizPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">NATO Phonetic Alphabet — Printable Quiz & Worksheets</h1>
      <p className="text-gray-500 mb-6">Free printable quiz worksheets for classroom, call center training, military prep, or self-study. Print the quiz sheet for students and the answer key for instructors.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-center">
          <div className="text-3xl mb-2">📝</div>
          <h2 className="font-bold text-lg mb-1">Student Quiz Sheet</h2>
          <p className="text-sm text-gray-600 mb-4">Fill-in-the-blank. 26 questions, one per letter. Includes name and date fields and a score line.</p>
          <PrintQuizButton />
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
          <div className="text-3xl mb-2">✅</div>
          <h2 className="font-bold text-lg mb-1">Instructor Answer Key</h2>
          <p className="text-sm text-gray-600 mb-4">Complete answers with Morse code. Print separately and keep for grading.</p>
          <PrintAnswerKeyButton />
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
