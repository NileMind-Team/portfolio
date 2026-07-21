import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mobile App Development in Egypt | Flutter iOS & Android | DoGether',
  description:
    'Professional mobile app development in Egypt. We build high-performance Flutter apps for iOS and Android — custom UI/UX, app store publishing, and ongoing support. Contact: +20 106 248 5133',
  alternates: {
    canonical: 'https://dogethertech.com/en/services/mobile-app-development',
    languages: {
      en: 'https://dogethertech.com/en/services/mobile-app-development',
      ar: 'https://dogethertech.com/services/mobile-app',
      'x-default': 'https://dogethertech.com/en/services/mobile-app-development',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Mobile App Development in Egypt | DoGether',
    description: 'High-performance Flutter apps for iOS and Android built in Egypt.',
    url: 'https://dogethertech.com/en/services/mobile-app-development',
  },
}

const faqs = [
  {
    q: 'How much does it cost to develop a mobile app in Egypt?',
    a: 'Simple apps start from around 15,000 EGP and increase with complexity and features. We use Flutter to build one app that runs on both iOS and Android, which is more cost-effective than building two separate native apps. You get a free, detailed quote after we review your full requirements.',
  },
  {
    q: 'Do you build for both iOS and Android at the same time?',
    a: 'Yes. With Flutter we develop a single codebase that runs efficiently on both iOS and Android with a consistent user experience, and we handle publishing to Google Play and the Apple App Store.',
  },
  {
    q: 'How long does mobile app development take?',
    a: 'Simple apps take 3–6 weeks, mid-size apps (stores, bookings) 6–10 weeks, and larger platforms with an admin dashboard need more time. We commit to an agreed timeline from the start.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes. We offer a free post-launch warranty period to fix issues, then monthly support and maintenance packages that include updates and compatibility with new iOS and Android versions.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dogethertech.com' },
    { '@type': 'ListItem', position: 2, name: 'Mobile App Development', item: 'https://dogethertech.com/en/services/mobile-app-development' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Mobile App Development',
  name: 'Mobile App Development in Egypt',
  description: 'Professional Flutter mobile app development for iOS and Android in Egypt.',
  provider: { '@type': 'Organization', name: 'DoGether', '@id': 'https://dogethertech.com/#business', url: 'https://dogethertech.com', telephone: '+201062485133' },
  areaServed: { '@type': 'Country', name: 'Egypt' },
  url: 'https://dogethertech.com/en/services/mobile-app-development',
}

const features = [
  { t: 'Custom UI/UX', d: 'No templates — every app is designed from scratch to reflect your brand identity.' },
  { t: 'Native-like performance', d: 'Flutter compiles to native code for a fast, smooth experience on every device.' },
  { t: 'Full RTL & Arabic support', d: 'Our apps support both Arabic (RTL) and English with professional layouts.' },
  { t: 'Push notifications', d: 'Firebase integration to reach your users at the right moment.' },
  { t: 'Admin dashboard', d: 'A web dashboard to manage app content, users, and orders.' },
  { t: 'Publishing & maintenance', d: 'We publish to both stores and offer maintenance packages for uptime.' },
]

export default function EnMobileAppPage() {
  return (
    <div dir="ltr" lang="en" className="min-h-screen bg-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <header className="bg-gradient-to-r from-[#193F94] to-[#1DC7E0] text-white py-4 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">DoGether</Link>
          <div className="flex items-center gap-3">
            <Link href="/services/mobile-app" className="text-sm text-white/90 hover:text-white transition-colors">العربية</Link>
            <a href="https://wa.me/201062485133" className="bg-white text-[#1E6DB2] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">Get a Quote</a>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 border-b border-blue-100">
        <div className="container mx-auto px-6 text-center">
          <nav className="text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-[#1E6DB2] transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700">Mobile App Development</span>
          </nav>
          <div className="text-5xl mb-6">📱</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">Mobile App Development in Egypt</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-8">Professional Flutter apps for iOS and Android — modern design, high performance, fast delivery</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/201062485133" className="bg-[#1E6DB2] text-white px-7 py-3 rounded-xl font-bold hover:bg-[#193F94] transition-colors shadow">Start Your Project</a>
            <Link href="/services/mobile-app" className="border-2 border-[#1E6DB2] text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">النسخة العربية</Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-4xl">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Why Flutter?</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            Flutter, by Google, is the fastest-growing framework for mobile app development. With a single codebase running on both iOS and Android, it saves time and budget without compromising quality or performance. We have used it in real projects across restaurants, e-commerce, and services.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Our apps never feel &quot;hybrid&quot; — performance rivals native apps, and the design adapts to each platform&apos;s standards. This is what sets DoGether apart from other software companies in Egypt.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">What makes our apps stand out</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.t} className="p-5 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-bold text-slate-800 mb-2">{f.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-slate-800 hover:bg-slate-50 transition-colors list-none">
                  <span>{f.q}</span>
                  <span className="text-[#1DC7E0] text-lg">+</span>
                </summary>
                <div className="px-5 pb-5 text-slate-600 leading-relaxed text-sm">{f.a}</div>
              </details>
            ))}
          </div>
        </section>

        <div className="bg-gradient-to-r from-[#193F94] to-[#1E6DB2] rounded-2xl p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-3">Ready to build your app?</h2>
          <p className="mb-8 text-blue-200 text-lg">Contact us today for a free consultation and a quote within 24 hours</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/201062485133" className="bg-white text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow">WhatsApp: +20 106 248 5133</a>
            <a href="mailto:dogethertech@gmail.com" className="border-2 border-white text-white px-7 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">dogethertech@gmail.com</a>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-6 text-center text-sm mt-8">
        <p className="text-slate-400">© 2025 DoGether — All rights reserved | <a href="https://dogethertech.com" className="text-[#1DC7E0] hover:underline">dogethertech.com</a> | Phone: <a href="tel:+201062485133" className="text-[#1DC7E0]">+20 106 248 5133</a></p>
      </footer>
    </div>
  )
}
