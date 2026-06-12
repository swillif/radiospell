import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Privacy Policy', description: 'RadioSpell.com privacy policy. How we handle your data.' };
export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 text-gray-600 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
      <p className="mb-4"><strong>Last updated:</strong> June 2026</p>
      <p className="mb-4">RadioSpell.com (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the radiospell.com website. This page informs you of our policies regarding the collection, use, and disclosure of personal information.</p>
      <h2 className="text-xl font-bold mt-6 mb-3 text-gray-900">Information We Collect</h2>
      <p className="mb-4">RadioSpell.com is a free reference tool. We do not require you to create an account, and we do not collect personal information such as names, email addresses, or phone numbers. All converter inputs are processed entirely in your browser — no text you type is sent to our servers.</p>
      <h2 className="text-xl font-bold mt-6 mb-3 text-gray-900">Analytics</h2>
      <p className="mb-4">We use Google Analytics to understand how visitors use our site. Google Analytics collects information such as how often users visit, what pages they view, and what other sites they used before coming to our site. We use this information solely to improve our service. Google Analytics collects the IP address assigned to you on the date you visit our site, but we do not combine this with any personally identifying information.</p>
      <h2 className="text-xl font-bold mt-6 mb-3 text-gray-900">Advertising</h2>
      <p className="mb-4">We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to this or other websites. You can opt out of personalized advertising by visiting Google&apos;s Ads Settings at ads.google.com/settings.</p>
      <h2 className="text-xl font-bold mt-6 mb-3 text-gray-900">Cookies</h2>
      <p className="mb-4">Our site may use cookies for analytics and advertising as described above. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
      <h2 className="text-xl font-bold mt-6 mb-3 text-gray-900">Third-Party Links</h2>
      <p className="mb-4">Our site contains links to external websites (airlines, aviation authorities, etc.). We are not responsible for the privacy practices of these external sites.</p>
      <h2 className="text-xl font-bold mt-6 mb-3 text-gray-900">Changes</h2>
      <p className="mb-4">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated revision date.</p>
      <h2 className="text-xl font-bold mt-6 mb-3 text-gray-900">Contact</h2>
      <p className="mb-4">If you have questions about this Privacy Policy, please contact us at <a href="mailto:contact@radiospell.com" className="text-amber-600 hover:underline">contact@radiospell.com</a>.</p>
    </article>
  );
}
