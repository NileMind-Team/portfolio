import type { Metadata } from 'next'
import Link from 'next/link'
import { articles } from './articles'

export const metadata: Metadata = {
  title: 'مدونة DoGether | مقالات عن البرمجة وتصميم المواقع في مصر',
  description:
    'مقالات ونصائح عن تصميم المواقع، المتاجر الإلكترونية، تطبيقات الجوال، وأنظمة الكاشير في مصر. دليلك لاتخاذ قرارات رقمية صحيحة من DoGether.',
  alternates: { canonical: 'https://dogethertech.com/blog' },
  openGraph: {
    title: 'مدونة DoGether',
    description: 'مقالات ونصائح عن البرمجة وتصميم المواقع والتطبيقات في مصر',
    url: 'https://dogethertech.com/blog',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://dogethertech.com' },
    { '@type': 'ListItem', position: 2, name: 'المدونة', item: 'https://dogethertech.com/blog' },
  ],
}

export default function BlogIndexPage() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <header className="bg-gradient-to-l from-[#193F94] to-[#1DC7E0] text-white py-4 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">DoGether</Link>
          <a href="https://wa.me/201062485133" className="bg-white text-[#1E6DB2] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">تواصل معنا</a>
        </div>
      </header>

      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 border-b border-blue-100">
        <div className="container mx-auto px-6 text-center">
          <nav className="text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-[#1E6DB2] transition-colors">الرئيسية</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700">المدونة</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">مدونة DoGether</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            نصائح ومقالات تساعدك تتخذ قرارات رقمية صحيحة لمشروعك — بلغة بسيطة وبدون تعقيد
          </p>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="group flex flex-col p-6 bg-white border border-blue-100 rounded-2xl hover:border-[#1DC7E0] hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-3">{a.emoji}</div>
              <h2 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#1E6DB2] transition-colors leading-snug">
                {a.title}
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-grow">{a.description}</p>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span>{a.readingTime}</span>
                <span>•</span>
                <span className="text-[#1DC7E0] font-semibold">اقرأ المقال ←</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-6 text-center text-sm mt-8">
        <p className="text-slate-400">© 2025 DoGether — جميع الحقوق محفوظة | <a href="https://dogethertech.com" className="text-[#1DC7E0] hover:underline">dogethertech.com</a> | هاتف: <a href="tel:+201062485133" className="text-[#1DC7E0]">01062485133</a></p>
      </footer>
    </div>
  )
}
