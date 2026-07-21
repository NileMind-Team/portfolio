import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'شركة برمجة في الفيوم | تصميم مواقع وتطبيقات | DoGether',
  description:
    'DoGether شركة برمجة مقرها الفيوم — تصميم مواقع، متاجر إلكترونية، تطبيقات جوال، وأنظمة كاشير POS لأصحاب الأعمال في الفيوم. استشارة مجانية: 01062485133',
  alternates: { canonical: 'https://dogethertech.com/software-company/fayoum' },
  openGraph: {
    title: 'شركة برمجة في الفيوم | DoGether',
    description:
      'شركة برمجة مقرها الفيوم — مواقع، متاجر إلكترونية، تطبيقات، وأنظمة كاشير لأصحاب الأعمال في الفيوم',
    url: 'https://dogethertech.com/software-company/fayoum',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://dogethertech.com' },
    { '@type': 'ListItem', position: 2, name: 'شركة برمجة في مصر', item: 'https://dogethertech.com/software-company' },
    { '@type': 'ListItem', position: 3, name: 'الفيوم', item: 'https://dogethertech.com/software-company/fayoum' },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://dogethertech.com/#business',
  name: 'DoGether',
  description: 'شركة برمجة وتصميم مواقع مقرها الفيوم، مصر',
  url: 'https://dogethertech.com/software-company/fayoum',
  telephone: '+201062485133',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Fayoum',
    addressRegion: 'Fayoum Governorate',
    addressCountry: 'EG',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 29.3084, longitude: 30.8428 },
  areaServed: { '@type': 'City', name: 'Fayoum' },
}

const services = [
  {
    href: '/software-company/fayoum/web-design',
    icon: '🌐',
    title: 'تصميم مواقع في الفيوم',
    desc: 'موقع احترافي سريع يظهر عملك لأهل الفيوم وخارجها ويجذب عملاء جدد.',
    kw: 'تصميم مواقع الفيوم',
  },
  {
    href: '/software-company/fayoum/online-store',
    icon: '🛒',
    title: 'متجر إلكتروني في الفيوم',
    desc: 'ابدأ البيع أونلاين مع بوابات دفع مصرية وتوصيل داخل الفيوم وخارجها.',
    kw: 'متجر إلكتروني الفيوم',
  },
  {
    href: '/software-company/fayoum/pos',
    icon: '🏪',
    title: 'برنامج كاشير في الفيوم',
    desc: 'نظام نقاط بيع لمحلات ومطاعم وصيدليات الفيوم — يعمل أونلاين وأوفلاين.',
    kw: 'برنامج كاشير الفيوم',
  },
  {
    href: '/software-company/fayoum/mobile-app',
    icon: '📱',
    title: 'تطبيق جوال في الفيوم',
    desc: 'تطبيق iOS وAndroid لمشروعك في الفيوم بتقنية Flutter وتصميم عصري.',
    kw: 'تطوير تطبيقات الفيوم',
  },
]

const faqs = [
  {
    q: 'هل DoGether شركة برمجة موجودة فعلاً في الفيوم؟',
    a: 'نعم، مقر DoGether الرئيسي في محافظة الفيوم، ومنها نخدم عملاءنا في الفيوم وكل محافظات مصر. القرب الجغرافي من عملاء الفيوم يتيح لنا اجتماعات مباشرة وفهماً أعمق للسوق المحلي.',
  },
  {
    q: 'كم تكلفة تصميم موقع أو تطبيق لمشروع في الفيوم؟',
    a: 'تختلف التكلفة حسب نوع المشروع: المواقع التعريفية تبدأ من حوالي 8,000 جنيه، المتاجر الإلكترونية من 15,000 جنيه، وأنظمة الكاشير والتطبيقات حسب المواصفات. نقدم عرض سعر مجاني ودقيق بعد فهم احتياجك.',
  },
  {
    q: 'هل تقدمون استشارة مجانية لأصحاب المشاريع في الفيوم؟',
    a: 'نعم. نقدم استشارة أولية مجانية نناقش فيها فكرتك ونقترح الحل الأنسب لميزانيتك، سواء كنت صاحب محل، مطعم، مصنع، أو مشروع ناشئ في الفيوم. تواصل عبر واتساب 01062485133.',
  },
  {
    q: 'كم يستغرق تنفيذ المشروع؟',
    a: 'الموقع التعريفي يستغرق عادةً من أسبوعين إلى ثلاثة، المتجر الإلكتروني من 3 إلى 5 أسابيع، والتطبيقات والأنظمة الأكبر تحتاج وقتاً أطول حسب حجمها. نلتزم بجدول زمني واضح متفق عليه من البداية.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function FayoumPage() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
            <Link href="/software-company" className="hover:text-[#1E6DB2] transition-colors">شركة برمجة في مصر</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700">الفيوم</span>
          </nav>
          <div className="inline-block bg-[#1DC7E0]/10 text-[#1E6DB2] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            📍 مقرنا الرئيسي
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">
            شركة برمجة في الفيوم
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-8">
            DoGether — شركة برمجة مقرها الفيوم. نصمم مواقع، متاجر إلكترونية، تطبيقات، وأنظمة كاشير لأصحاب الأعمال في محافظتنا
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/201062485133" className="bg-[#1E6DB2] text-white px-7 py-3 rounded-xl font-bold hover:bg-[#193F94] transition-colors shadow">استشارة مجانية</a>
            <Link href="/software-company" className="border-2 border-[#1E6DB2] text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">من نحن</Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-4xl">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">شركة البرمجة الأقرب لأصحاب الأعمال في الفيوم</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            على عكس معظم شركات البرمجة التي تتركّز في القاهرة، فإن مقر DoGether في قلب محافظة الفيوم. هذا يعني أننا نفهم السوق المحلي عن قرب: طبيعة المحلات في شارع الحرية، احتياجات مطاعم وكافيهات الفيوم، وتحديات المشاريع الزراعية والسياحية المحيطة ببحيرة قارون ووادي الريان. القرب الجغرافي يتيح اجتماعات مباشرة وتواصلاً أسرع بدون حواجز.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            نؤمن أن كل عمل تجاري في الفيوم — من محل صغير إلى شركة متوسطة — يستحق حضوراً رقمياً يضاهي منافسيه في العاصمة. سواء أردت موقعاً يعرّف بنشاطك، متجراً إلكترونياً يفتح لك أسواقاً جديدة، نظام كاشير ينظّم مبيعاتك، أو تطبيق جوال يقرّبك من عملائك — نحن هنا في الفيوم لتنفيذه بجودة احترافية وسعر مناسب.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">خدماتنا في الفيوم</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex gap-4 p-6 bg-white border border-blue-100 rounded-2xl hover:border-[#1DC7E0] hover:shadow-lg transition-all"
              >
                <span className="text-3xl flex-shrink-0">{s.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#1E6DB2] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-2">{s.desc}</p>
                  <span className="text-xs font-semibold text-[#1DC7E0]">اعرف المزيد ←</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">قطاعات نخدمها في الفيوم</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            تعاملنا مع أنشطة متنوعة، ونصمم لكل قطاع ما يناسبه: المطاعم والكافيهات (قوائم رقمية وأنظمة طلبات)، المحلات التجارية (متاجر إلكترونية وأنظمة كاشير)، المشاريع الزراعية (مواقع تعريفية للموزعين)، والأنشطة السياحية حول قارون ووادي الريان (مواقع حجز متعددة اللغات).
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {['مطاعم وكافيهات', 'محلات تجارية', 'صيدليات', 'مشاريع زراعية', 'أنشطة سياحية', 'مشاريع ناشئة'].map((sec) => (
              <div key={sec} className="flex items-center gap-2 p-3 bg-blue-50 rounded-xl border border-blue-100 text-sm text-slate-700 font-medium">
                <span className="w-2 h-2 bg-[#1DC7E0] rounded-full flex-shrink-0" />
                {sec}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">أسئلة شائعة</h2>
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

        <div className="bg-gradient-to-l from-[#193F94] to-[#1E6DB2] rounded-2xl p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-3">مشروعك في الفيوم يبدأ من هنا</h2>
          <p className="mb-8 text-blue-200 text-lg">تواصل معنا وسنقدم لك استشارة مجانية وعرض سعر خلال 24 ساعة</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/201062485133" className="bg-white text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow">واتساب: 01062485133</a>
            <a href="mailto:dogethertech@gmail.com" className="border-2 border-white text-white px-7 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">dogethertech@gmail.com</a>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-6 text-center text-sm mt-8">
        <p className="text-slate-400">© 2025 DoGether — جميع الحقوق محفوظة | <a href="https://dogethertech.com" className="text-[#1DC7E0] hover:underline">dogethertech.com</a> | هاتف: <a href="tel:+201062485133" className="text-[#1DC7E0]">01062485133</a></p>
      </footer>
    </div>
  )
}
