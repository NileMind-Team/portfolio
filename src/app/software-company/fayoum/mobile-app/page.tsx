import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'تطوير تطبيقات في الفيوم | تطبيقات iOS و Android | DoGether Tech',
  description:
    'تطوير تطبيقات جوال في الفيوم بتقنية Flutter لنظامَي iOS وAndroid. تطبيقات لمطاعم ومتاجر ومشاريع الفيوم بتصميم عصري وأداء عالٍ. تواصل: 01062485133',
  alternates: { canonical: 'https://dogethertech.com/software-company/fayoum/mobile-app' },
  openGraph: {
    title: 'تطوير تطبيقات في الفيوم | DoGether Tech',
    description: 'تطوير تطبيقات جوال Flutter في الفيوم لنظامَي iOS وAndroid',
    url: 'https://dogethertech.com/software-company/fayoum/mobile-app',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://dogethertech.com' },
    { '@type': 'ListItem', position: 2, name: 'شركة برمجة في مصر', item: 'https://dogethertech.com/software-company' },
    { '@type': 'ListItem', position: 3, name: 'الفيوم', item: 'https://dogethertech.com/software-company/fayoum' },
    { '@type': 'ListItem', position: 4, name: 'تطوير تطبيقات', item: 'https://dogethertech.com/software-company/fayoum/mobile-app' },
  ],
}

const faqs = [
  {
    q: 'كم تكلفة تطوير تطبيق جوال لمشروع في الفيوم؟',
    a: 'تبدأ تكلفة التطبيقات البسيطة من حوالي 15,000 جنيه وترتفع حسب التعقيد والمتطلبات. نستخدم Flutter لبناء تطبيق واحد يعمل على iOS وAndroid معاً بتكلفة أقل من تطوير تطبيقَين منفصلَين.',
  },
  {
    q: 'هل التطبيق هيشتغل على الآيفون والأندرويد؟',
    a: 'نعم. بتقنية Flutter ننتج تطبيقاً واحداً يعمل بكفاءة على iOS وAndroid بتجربة مستخدم متسقة، ونتولى نشره على Google Play وApple App Store نيابةً عنك.',
  },
  {
    q: 'إيه نوع التطبيقات اللي بتناسب مشاريع الفيوم؟',
    a: 'تطبيقات الطلب والتوصيل للمطاعم، تطبيقات المتاجر، تطبيقات الحجز للأنشطة السياحية حول قارون ووادي الريان، وتطبيقات الولاء والنقاط للمحلات. نصمم حسب فكرتك ونشاطك.',
  },
  {
    q: 'كم يستغرق تطوير التطبيق؟',
    a: 'التطبيقات البسيطة من 3 إلى 6 أسابيع، المتوسطة (متجر أو حجوزات) من 6 إلى 10 أسابيع، والمنصات الأكبر مع لوحة تحكم تحتاج وقتاً أطول نتفق عليه ونلتزم به.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Mobile App Development',
  name: 'تطوير تطبيقات في الفيوم',
  description: 'تطوير تطبيقات جوال بـ Flutter لأصحاب الأعمال في محافظة الفيوم.',
  provider: { '@type': 'Organization', name: 'DoGether Tech', '@id': 'https://dogethertech.com/#business', url: 'https://dogethertech.com', telephone: '+201062485133' },
  areaServed: { '@type': 'City', name: 'Fayoum' },
  url: 'https://dogethertech.com/software-company/fayoum/mobile-app',
}

export default function FayoumMobileAppPage() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <header className="bg-gradient-to-l from-[#193F94] to-[#1DC7E0] text-white py-4 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">DoGether Tech</Link>
          <a href="https://wa.me/201062485133" className="bg-white text-[#1E6DB2] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">احصل على عرض سعر</a>
        </div>
      </header>

      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 border-b border-blue-100">
        <div className="container mx-auto px-6 text-center">
          <nav className="text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-[#1E6DB2] transition-colors">الرئيسية</Link>
            <span className="mx-2">›</span>
            <Link href="/software-company" className="hover:text-[#1E6DB2] transition-colors">شركة برمجة في مصر</Link>
            <span className="mx-2">›</span>
            <Link href="/software-company/fayoum" className="hover:text-[#1E6DB2] transition-colors">الفيوم</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700">تطوير تطبيقات</span>
          </nav>
          <div className="text-5xl mb-6">📱</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">تطوير تطبيقات في الفيوم</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-8">تطبيق جوال لمشروعك في الفيوم يعمل على iOS وAndroid بتقنية Flutter وتصميم عصري</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/201062485133" className="bg-[#1E6DB2] text-white px-7 py-3 rounded-xl font-bold hover:bg-[#193F94] transition-colors shadow">ابدأ تطبيقك الآن</a>
            <Link href="/software-company/fayoum" className="border-2 border-[#1E6DB2] text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">كل خدمات الفيوم</Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-4xl">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">تطبيق جوال يقرّب مشروعك في الفيوم من عملائه</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            التطبيق على جوال العميل يعني أنك حاضر معه طوال الوقت — أيقونة على شاشته وإشعارات تصله مباشرة. لمطعم في الفيوم يعني طلبات أسهل وأسرع، ولمتجر يعني ولاء أكبر ومبيعات متكررة، ولنشاط سياحي حول بحيرة قارون يعني حجوزات مباشرة من السائح.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            نستخدم Flutter — إطار Google الأسرع نمواً — لبناء تطبيق واحد يعمل على iOS وAndroid بأداء يقارب التطبيقات الأصلية وبتكلفة أوفر. تطبيقاتنا تدعم العربية RTL بشكل احترافي، وتأتي بلوحة تحكم تدير منها المحتوى والطلبات، وننشرها لك على المتجرَين.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">أفكار تطبيقات لمشاريع الفيوم</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { t: 'تطبيق مطعم / طلبات', d: 'قائمة، سلة، طلب وتوصيل، وإشعارات بحالة الطلب.' },
              { t: 'تطبيق متجر', d: 'تصفح المنتجات، شراء، ودفع إلكتروني مع تتبع الطلب.' },
              { t: 'تطبيق حجوزات سياحية', d: 'لأنشطة قارون ووادي الريان — حجز ودفع بعدة لغات.' },
              { t: 'تطبيق ولاء ونقاط', d: 'يكافئ عملاءك الدائمين ويشجّع على تكرار الشراء.' },
            ].map((x) => (
              <div key={x.t} className="p-5 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-bold text-slate-800 mb-2">{x.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">أسئلة شائعة عن تطوير التطبيقات في الفيوم</h2>
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

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">خدمات أخرى في الفيوم</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/software-company/fayoum/web-design" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🌐 تصميم مواقع في الفيوم</Link>
            <Link href="/software-company/fayoum/online-store" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🛒 متجر إلكتروني في الفيوم</Link>
            <Link href="/software-company/fayoum/pos" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🏪 برنامج كاشير في الفيوم</Link>
            <Link href="/services/mobile-app" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">📱 تفاصيل خدمة تطوير التطبيقات</Link>
          </div>
        </section>

        <div className="bg-gradient-to-l from-[#193F94] to-[#1E6DB2] rounded-2xl p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-3">فكرة تطبيقك في الفيوم تبدأ من هنا</h2>
          <p className="mb-8 text-blue-200 text-lg">استشارة مجانية وعرض سعر خلال 24 ساعة</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/201062485133" className="bg-white text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow">واتساب: 01062485133</a>
            <a href="mailto:dogethertech@gmail.com" className="border-2 border-white text-white px-7 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">dogethertech@gmail.com</a>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-6 text-center text-sm mt-8">
        <p className="text-slate-400">© 2025 DoGether Tech — جميع الحقوق محفوظة | <a href="https://dogethertech.com" className="text-[#1DC7E0] hover:underline">dogethertech.com</a> | هاتف: <a href="tel:+201062485133" className="text-[#1DC7E0]">01062485133</a></p>
      </footer>
    </div>
  )
}
