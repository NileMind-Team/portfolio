import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Web Development in Egypt | Next.js Websites | DoGether',
  description:
    'Professional web development in Egypt. We build fast, secure, SEO-friendly websites with Next.js and React — from corporate sites to full platforms. Contact: +20 106 248 5133',
  alternates: {
    canonical: 'https://dogethertech.com/en/services/web-development',
    languages: {
      en: 'https://dogethertech.com/en/services/web-development',
      ar: 'https://dogethertech.com/services/website',
      'x-default': 'https://dogethertech.com/en/services/web-development',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Web Development in Egypt | DoGether',
    description: 'Fast, secure, SEO-friendly Next.js websites built in Egypt.',
    url: 'https://dogethertech.com/en/services/web-development',
  },
}

const faqs = [
  {
    q: 'How much does professional web development cost in Egypt?',
    a: 'Website prices start from around 8,000 EGP for simple corporate sites and rise with the number of pages and features. We provide a free, detailed quote after understanding your project requirements.',
  },
  {
    q: 'Will my website appear in Google search results?',
    a: 'Yes. We build every site with technical SEO in mind: correct HTML structure, clean metadata, fast loading, and sitemaps. Our sites are ready for immediate indexing by Google.',
  },
  {
    q: 'Which technologies do you use?',
    a: 'We build with Next.js 15, React 19, TypeScript, and Tailwind CSS, deployed via Docker on a VPS for speed and security — not slow shared hosting.',
  },
  {
    q: 'Can I edit my website content myself after delivery?',
    a: 'Yes, if you request a CMS you can edit text, images, and prices without a developer. Without one, we handle any updates within your support package.',
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
    { '@type': 'ListItem', position: 2, name: 'Web Development', item: 'https://dogethertech.com/en/services/web-development' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Development',
  name: 'Web Development in Egypt',
  description: 'Professional Next.js and React web development in Egypt.',
  provider: { '@type': 'Organization', name: 'DoGether', '@id': 'https://dogethertech.com/#business', url: 'https://dogethertech.com', telephone: '+201062485133' },
  areaServed: { '@type': 'Country', name: 'Egypt' },
  url: 'https://dogethertech.com/en/services/web-development',
}

const features = [
  { t: 'High performance (Core Web Vitals)', d: 'Our sites score excellently on Google performance metrics — fast loads on mobile and desktop.' },
  { t: 'SSR + SSG with Next.js', d: 'Server-side rendering makes content instantly visible to search engines and speeds up first load.' },
  { t: '100% responsive design', d: 'Every site works flawlessly on mobile, tablet, and desktop.' },
  { t: 'Full RTL support', d: 'We build sites that support Arabic (RTL) professionally, with optional bilingual setups.' },
  { t: 'SSL & web security', d: 'Every site ships with SSL, secure HTTP headers, and protection against common vulnerabilities.' },
  { t: 'Third-party integrations', d: 'Analytics, maps, payment gateways, WhatsApp API, and more.' },
]

export default function EnWebDevPage() {
  return (
    <div dir="ltr" lang="en" className="min-h-screen bg-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <header className="bg-gradient-to-r from-[#193F94] to-[#1DC7E0] text-white py-4 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">DoGether</Link>
          <div className="flex items-center gap-3">
            <Link href="/services/website" className="text-sm text-white/90 hover:text-white transition-colors">العربية</Link>
            <a href="https://wa.me/201062485133" className="bg-white text-[#1E6DB2] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">Get a Quote</a>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 border-b border-blue-100">
        <div className="container mx-auto px-6 text-center">
          <nav className="text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-[#1E6DB2] transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700">Web Development</span>
          </nav>
          <div className="text-5xl mb-6">🌐</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">Web Development in Egypt</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-8">Fast, responsive, SEO-friendly Next.js websites — built to turn visitors into customers</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/201062485133" className="bg-[#1E6DB2] text-white px-7 py-3 rounded-xl font-bold hover:bg-[#193F94] transition-colors shadow">Request Your Website</a>
            <Link href="/services/website" className="border-2 border-[#1E6DB2] text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">النسخة العربية</Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-4xl">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Why your business needs a website more than ever</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            Customers search online before making any purchase decision. A slow or outdated website means losing potential customers every day without realizing it. Your website is now the first impression of your brand.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            At DoGether, we build websites with Next.js that pick the best Core Web Vitals and automatically improve your Google ranking. Every line of code we write is designed for performance, security, and long-term maintainability.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">What makes our websites stand out</h2>
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
          <h2 className="text-2xl font-bold mb-3">Ready for a website that wins customers?</h2>
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
