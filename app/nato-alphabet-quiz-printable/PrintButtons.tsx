'use client';

import { NATO, MORSE } from '@/data/alphabets';

export function PrintQuizButton() {
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

  return (
    <button onClick={handlePrintQuiz1} className="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-600 transition w-full">
      🖨️ Print Quiz Sheet
    </button>
  );
}

export function PrintAnswerKeyButton() {
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
    <button onClick={handlePrintAnswers} className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition w-full">
      🖨️ Print Answer Key
    </button>
  );
}
