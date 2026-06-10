import type { Metadata } from 'next';
import QuizGame from './QuizGame';

export const metadata: Metadata = {
  title: 'NATO Phonetic Alphabet Quiz — Test Your Knowledge',
  description: 'Practice the NATO phonetic alphabet with interactive flashcards. Two modes: Letter→Word and Word→Letter. Track your score, accuracy, and streak.',
  keywords: 'phonetic alphabet quiz, NATO alphabet test, phonetic alphabet practice, learn NATO alphabet',
};

export default function QuizPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Phonetic Alphabet Quiz</h1>
      <p className="text-gray-500 mb-6">Test your NATO phonetic alphabet knowledge. How fast can you go?</p>
      <QuizGame />
      <section className="border-t mt-10 pt-6">
        <h2 className="text-xl font-bold mb-3">Why Practice?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Knowing the NATO phonetic alphabet by heart saves time on every phone call, radio transmission,
          and customer interaction. Call center agents, pilots, military personnel, police officers, and
          IT support technicians all benefit from instant recall. The difference between having to look
          up each letter and knowing them cold is the difference between a 30-second call and a 3-minute one.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          This quiz uses spaced repetition principles — letters you get wrong will appear more
          frequently. Try to reach a 26-streak (all letters correct in a row) to prove mastery.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Converter</a>
          <a href="/nato-phonetic-alphabet/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Full Alphabet</a>
          <a href="/phonetic-alphabet-chart/" className="text-sm bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200">Printable Chart</a>
        </div>
      </section>
    </article>
  );
}
