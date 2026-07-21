import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { articles, getArticle } from '../articles'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return {
    title: article.metaTitle,
    description: article.description,
    alternates: { canonical: `https://dogethertech.com/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: article.metaTitle,
      description: article.description,
      url: `https://dogethertech.com/blog/${slug}`,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: 'ar',
    author: { '@type': 'Organization', name: 'DoGether', url: 'https://dogethertech.com' },
    publisher: {
      '@type': 'Organization',
      name: 'DoGether',
      '@id': 'https://dogethertech.com/#business',
      logo: { '@type': 'ImageObject', url: 'https://dogethertech.com/DoGehter-icon.png' },
    },
    mainEntityOfPage: `https://dogethertech.com/blog/${slug}`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://dogethertech.com' },
      { '@type': 'ListItem', position: 2, name: 'المدونة', item: 'https://dogethertech.com/blog' },
      { '@type': 'ListItem', position: 3, name: article.title, item: `https://dogethertech.com/blog/${slug}` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="bg-gradient-to-l from-[#193F94] to-[#1DC7E0] text-white py-4 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">DoGether</Link>
          <a href="https://wa.me/201062485133" className="bg-white text-[#1E6DB2] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">تواصل معنا</a>
        </div>
      </header>

      <article className="container mx-auto px-6 py-14 max-w-3xl">
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-[#1E6DB2] transition-colors">الرئيسية</Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-[#1E6DB2] transition-colors">المدونة</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-700">{article.emoji}</span>
        </nav>

        <div className="text-4xl mb-4">{article.emoji}</div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 leading-tight">{article.title}</h1>
        <div className="flex items-center gap-3 text-sm text-slate-400 mb-8 pb-8 border-b border-slate-200">
          <span>DoGether</span>
          <span>•</span>
          <span>{article.readingTime}</span>
        </div>

        <p className="text-lg text-slate-700 leading-relaxed mb-8 font-medium">{article.intro}</p>

        {article.sections.map((section, i) => (
          <section key={i} className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">{section.h}</h2>
            {section.body.map((p, j) => (
              <p key={j} className="text-lg text-slate-700 leading-relaxed mb-4">{p}</p>
            ))}
          </section>
        ))}

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">أسئلة شائعة</h2>
          <div className="space-y-4">
            {article.faqs.map((f, i) => (
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

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">خدمات ذات صلة</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {article.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm"
              >
                {r.label}
              </Link>
            ))}
          </div>
        </section>

        <div className="bg-gradient-to-l from-[#193F94] to-[#1E6DB2] rounded-2xl p-8 text-white text-center shadow-xl">
          <h2 className="text-xl font-bold mb-3">محتاج مساعدة في مشروعك؟</h2>
          <p className="mb-6 text-blue-200">تواصل معنا لاستشارة مجانية وعرض سعر خلال 24 ساعة</p>
          <a href="https://wa.me/201062485133" className="inline-block bg-white text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow">واتساب: 01062485133</a>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200">
          <Link href="/blog" className="text-[#1E6DB2] font-semibold hover:underline">→ العودة لكل المقالات</Link>
        </div>
      </article>

      <footer className="bg-slate-900 text-white py-6 text-center text-sm mt-8">
        <p className="text-slate-400">© 2025 DoGether — جميع الحقوق محفوظة | <a href="https://dogethertech.com" className="text-[#1DC7E0] hover:underline">dogethertech.com</a> | هاتف: <a href="tel:+201062485133" className="text-[#1DC7E0]">01062485133</a></p>
      </footer>
    </div>
  )
}
