'use client';
export default function PrintButton() {
  return <button onClick={() => window.print()} className="px-4 py-2 rounded-lg text-sm font-medium bg-amber-500 text-white hover:bg-amber-600 transition">🖨️ Print This Chart</button>;
}
