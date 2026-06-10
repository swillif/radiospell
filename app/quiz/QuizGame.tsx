'use client';
import { useState, useCallback, useEffect } from 'react';
import { NATO } from '@/data/alphabets';

const letters = Object.keys(NATO);

export default function QuizGame() {
  const [mode, setMode] = useState<'l2w' | 'w2l'>('l2w');
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);
  const [current, setCurrent] = useState<{ question: string; answer: string; options: string[] } | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  const gen = useCallback(() => {
    const letter = letters[Math.floor(Math.random() * letters.length)];
    const correct = NATO[letter];
    if (mode === 'l2w') {
      const pool = Object.values(NATO).filter(w => w !== correct);
      const wrongs: string[] = [];
      while (wrongs.length < 3) { const w = pool[Math.floor(Math.random() * pool.length)]; if (!wrongs.includes(w)) wrongs.push(w); }
      setCurrent({ question: `What is the NATO code word for "${letter}"?`, answer: correct, options: [correct, ...wrongs].sort(() => Math.random() - 0.5) });
    } else {
      const wl: string[] = [];
      while (wl.length < 3) { const l = letters[Math.floor(Math.random() * letters.length)]; if (l !== letter && !wl.includes(l)) wl.push(l); }
      setCurrent({ question: `Which letter does "${correct}" represent?`, answer: letter, options: [letter, ...wl].sort(() => Math.random() - 0.5) });
    }
    setSelected(null);
  }, [mode]);

  useEffect(() => { gen(); }, [mode, gen]);

  const handleAnswer = (opt: string) => {
    if (selected !== null) return;
    setSelected(opt);
    const ok = opt === current!.answer;
    setScore(s => ({ correct: s.correct + (ok ? 1 : 0), total: s.total + 1 }));
    const ns = ok ? streak + 1 : 0;
    setStreak(ns);
    if (ns > best) setBest(ns);
    setTimeout(() => gen(), 1000);
  };

  const reset = () => { setScore({ correct: 0, total: 0 }); setStreak(0); gen(); };
  const pct = score.total > 0 ? Math.round(score.correct / score.total * 100) : 0;

  return (
    <div>
      <div className="flex gap-2 mb-5 flex-wrap">
        <button onClick={() => { setMode('l2w'); reset(); }} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${mode === 'l2w' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600'}`}>Letter → Word</button>
        <button onClick={() => { setMode('w2l'); reset(); }} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${mode === 'w2l' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600'}`}>Word → Letter</button>
      </div>

      <div className="grid grid-cols-4 gap-3 mb-5">
        <div className="bg-gray-50 rounded-lg p-3 text-center"><div className="text-2xl font-bold text-green-600">{score.correct}</div><div className="text-[10px] text-gray-400 uppercase">Correct</div></div>
        <div className="bg-gray-50 rounded-lg p-3 text-center"><div className="text-2xl font-bold">{score.total}</div><div className="text-[10px] text-gray-400 uppercase">Total</div></div>
        <div className="bg-gray-50 rounded-lg p-3 text-center"><div className="text-2xl font-bold text-amber-600">{pct}%</div><div className="text-[10px] text-gray-400 uppercase">Accuracy</div></div>
        <div className="bg-gray-50 rounded-lg p-3 text-center"><div className="text-2xl font-bold text-purple-600">🔥{streak}</div><div className="text-[10px] text-gray-400 uppercase">Streak (Best: {best})</div></div>
      </div>

      {current && (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
          <div className="text-xl font-semibold mb-5">{current.question}</div>
          <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
            {current.options.map((opt, i) => {
              let cls = 'bg-white border-gray-200 text-gray-800 hover:border-amber-400';
              if (selected !== null) {
                if (opt === current.answer) cls = 'bg-green-50 border-green-500 text-green-700';
                else if (opt === selected) cls = 'bg-red-50 border-red-500 text-red-700';
                else cls = 'bg-white border-gray-200 text-gray-400';
              }
              return (
                <button key={i} onClick={() => handleAnswer(opt)} className={`px-4 py-3 rounded-lg text-base font-semibold border-2 transition ${cls}`} disabled={selected !== null}>{opt}</button>
              );
            })}
          </div>
          {selected !== null && (
            <div className={`mt-4 text-sm font-semibold ${selected === current.answer ? 'text-green-600' : 'text-red-600'}`}>
              {selected === current.answer ? '✓ Correct!' : `✗ It's ${current.answer}`}
            </div>
          )}
        </div>
      )}
      <button onClick={reset} className="mt-4 px-4 py-2 rounded-lg text-sm bg-gray-100 text-gray-600 hover:bg-gray-200">Reset Score</button>
    </div>
  );
}
