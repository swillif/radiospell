import type { Metadata, Viewport } from 'next';
import CallMode from './CallMode';

export const metadata: Metadata = {
  title: 'Call Mode — Fast NATO Phonetic Alphabet for Phone Calls',
  description: 'A one-screen, tap-to-speak NATO phonetic alphabet tool built for use while you\'re on a call. Big keys, instant audio, no scrolling. Add it to your home screen for instant access.',
  alternates: { canonical: 'https://radiospell.com/call-mode/' },
  manifest: '/call-mode/manifest.json',
  icons: {
    icon: '/call-mode/icon-192.png',
    apple: '/call-mode/apple-touch-icon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Call Mode',
  },
};

export const viewport: Viewport = {
  themeColor: '#E8A838',
};

export default function CallModePage() {
  return (
    <article>
      <div className="max-w-2xl mx-auto px-4 pt-6 pb-1 text-center">
        <h1 className="text-2xl font-bold mb-1">📞 Call Mode</h1>
        <p className="text-gray-500 text-sm">Tap a letter — hear it spoken instantly. Built for when you're already on the phone.</p>
      </div>
      <CallMode />
    </article>
  );
}
