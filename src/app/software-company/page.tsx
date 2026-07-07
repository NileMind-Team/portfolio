import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'شركة برمجة في مصر | DoGether Tech — حلول رقمية احترافية',
  description:
    'DoGether Tech شركة برمجة احترافية في مصر. تصميم مواقع، تطبيقات جوال، متاجر إلكترونية، أنظمة POS وحلول برمجية مخصصة. نخدم القاهرة، الفيوم، الإسكندرية وجميع محافظات مصر.',
  alternates: { canonical: 'https://dogethertech.com/software-company' },
  openGraph: {
    title: 'شركة برمجة في مصر | DoGether Tech',
    description: 'حلول برمجية احترافية لجميع أحجام الأعمال في مصر',
    url: 'https://dogethertech.com/software-company',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://dogethertech.com' },
    { '@type': 'ListItem', position: 2, name: 'شركة برمجة في مصر', item: 'https://dogethertech.com/software-company' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'كم تكلفة تصميم موقع إلكتروني احترافي في مصر؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'تبدأ أسعار تصميم المواقع في DoGether Tech من 5,000 جنيه للمواقع البسيطة، وتصل إلى 20,000 جنيه أو أكثر للمواقع المتقدمة والمتاجر الإلكترونية. السعر يختلف حسب المتطلبات — تواصل معنا للحصول على عرض سعر مجاني.',
      },
    },
    {
      '@type': 'Question',
      name: 'كم يستغرق تسليم مشروع البرمجة؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'موقع ويب بسيط: 2-3 أسابيع. متجر إلكتروني: 3-5 أسابيع. تطبيق جوال: 6-16 أسبوع حسب التعقيد. نلتزم بالمواعيد ونحدد جدولاً واضحاً من البداية.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل أحتفظ بملكية الكود بعد التسليم؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نعم، الكود المصدري ملكيتك الكاملة بعد التسليم. تحصل على كل الملفات، قواعد البيانات، والوثائق التقنية — بدون أي قيود.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل تقدمون دعماً فنياً بعد إطلاق المشروع؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نعم، نقدم دعماً فنياً مستمراً بعد الإطلاق يشمل إصلاح الأخطاء، التحديثات الأمنية، والتعديلات البسيطة. يمكن الاتفاق على عقد صيانة شهري أو دفع مقابل كل تعديل.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل تعملون مع المشاريع الصغيرة والشركات الناشئة؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'بالطبع. نعمل مع أصحاب المحلات التجارية، المطاعم، الشركات الناشئة، والمشاريع الكبيرة. لكل مشروع نقدم حلاً مناسباً لميزانيته واحتياجاته الفعلية.',
      },
    },
  ],
}

const cities = [
  { slug: 'fayoum', name: 'الفيوم' },
  { slug: 'cairo', name: 'القاهرة' },
  { slug: 'giza', name: 'الجيزة' },
  { slug: 'alexandria', name: 'الإسكندرية' },
  { slug: 'beni-suef', name: 'بني سويف' },
  { slug: 'minya', name: 'المنيا' },
  { slug: 'port-said', name: 'بورسعيد' },
  { slug: 'sharqia', name: 'الشرقية' },
]

const services = [
  { title: 'تصميم وتطوير مواقع الويب', desc: 'مواقع احترافية سريعة ومتجاوبة مع جميع الأجهزة', href: '/services' },
  { title: 'متاجر إلكترونية', desc: 'منصات تجارة إلكترونية متكاملة مع بوابات دفع آمنة', href: '/services' },
  { title: 'تطبيقات الجوال', desc: 'تطبيقات Android وiOS بتقنية Flutter', href: '/services/mobile-app' },
  { title: 'أنظمة نقاط البيع POS', desc: 'حلول كاشير وإدارة مبيعات ومخزون للمحلات', href: '/services' },
  { title: 'المنيو الرقمي QR', desc: 'منيو رقمي للمطاعم والكافيهات بدون طباعة', href: '/services' },
  { title: 'برمجيات مخصصة', desc: 'أنظمة مصممة خصيصاً لاحتياجات عملك الفريدة', href: '/services' },
  { title: 'أنظمة إدارة متكاملة', desc: 'إدارة مدارس، عيادات، مخازن، وموارد بشرية', href: '/services' },
  { title: 'صيانة ودعم فني', desc: 'دعم ما بعد التسليم وصيانة دورية لمشروعك', href: '/services' },
]

const methodology = [
  { step: '01', title: 'تحليل المتطلبات', desc: 'نفهم مشروعك، سوقك، ومنافسيك قبل أي سطر كود.' },
  { step: '02', title: 'التصميم والنمذجة', desc: 'نصمم واجهة المستخدم ونعرض عليك النماذج قبل التطوير.' },
  { step: '03', title: 'التطوير', desc: 'نبني المشروع بكود نظيف وتقنيات حديثة مثبتة في الإنتاج.' },
  { step: '04', title: 'الاختبار والمراجعة', desc: 'اختبار شامل على أجهزة ومتصفحات مختلفة قبل التسليم.' },
  { step: '05', title: 'الإطلاق', desc: 'رفع المشروع على السيرفر أو المتاجر مع إعدادات الأداء.' },
  { step: '06', title: 'الدعم المستمر', desc: 'دعم فني بعد الإطلاق وتحديثات دورية حسب الاتفاق.' },
]

const technologies = [
  { cat: 'الواجهة الأمامية', list: 'Next.js · React · Tailwind CSS · Flutter' },
  { cat: 'الخلفية والـ API', list: 'Node.js · Python · REST API · GraphQL' },
  { cat: 'قواعد البيانات', list: 'PostgreSQL · MongoDB · MySQL · Redis' },
  { cat: 'البنية التحتية', list: 'Docker · Linux · Nginx · VPS Servers' },
  { cat: 'تطبيقات الجوال', list: 'Flutter · React Native · Android · iOS' },
  { cat: 'التصميم', list: 'Figma · Adobe XD · UI/UX Prototyping' },
]

const projects = [
  { name: 'Chicken One — ElZawy', type: 'موقع شركة عصري', url: 'https://chicken-one.com/' },
  { name: 'New ElZawy', type: 'منصة تجارة إلكترونية', url: 'https://elzawy-new.com/' },
  { name: 'Fateer wi 3asal', type: 'منصة طلب طعام وتوصيل', url: 'https://fateerwasal.com' },
  { name: 'Cashier POS System', type: 'نظام نقاط بيع متكامل', url: 'https://cashier-vert.vercel.app/' },
  { name: 'Aruqah Real Estate', type: 'منصة عقارية بتحليلات متقدمة', url: 'https://aruqah.vercel.app/' },
  { name: 'Sharm Kite Surf', type: 'موقع رياضات مائية وحجز', url: 'https://sharmkitesurf.com' },
]

const faqs = faqSchema.mainEntity

export default function SoftwareCompanyHub() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Header ── */}
      <header className="bg-gradient-to-l from-[#193F94] to-[#1DC7E0] text-white py-4 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">DoGether Tech</Link>
          <a
            href="https://wa.me/201062485133"
            className="bg-white text-[#1E6DB2] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
          >
            تواصل معنا
          </a>
        </div>
      </header>

      {/* ── Breadcrumb + Hero ── */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 border-b border-blue-100">
        <div className="container mx-auto px-6 text-center">
          <nav className="text-sm text-slate-500 mb-5">
            <Link href="/" className="hover:text-[#1E6DB2] transition-colors">الرئيسية</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700">شركة برمجة في مصر</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-5 leading-tight">
            شركة برمجة في مصر
            <span className="block text-[#1E6DB2] mt-2">DoGether Tech</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            نحوّل أفكار الأعمال إلى منتجات رقمية ناجحة — مواقع ويب، تطبيقات جوال، متاجر إلكترونية،
            وأنظمة برمجية مخصصة لكل أحجام المشاريع في مصر.
          </p>
          <div className="flex gap-4 justify-center mt-8 flex-wrap">
            <a
              href="https://wa.me/201062485133"
              className="bg-[#1E6DB2] text-white px-7 py-3 rounded-xl font-bold hover:bg-[#193F94] transition-colors shadow-lg"
            >
              احصل على عرض سعر مجاني
            </a>
            <Link
              href="/"
              className="border-2 border-[#1E6DB2] text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
            >
              شاهد أعمالنا
            </Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-5xl">

        {/* ── Services ── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">خدماتنا</h2>
          <p className="text-slate-500 mb-8">حلول رقمية شاملة لكل احتياجات عملك</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="block p-5 bg-white rounded-xl border border-slate-200 hover:border-[#1DC7E0] hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-slate-800 mb-2 group-hover:text-[#1E6DB2] transition-colors text-sm">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/services" className="text-[#1E6DB2] font-semibold hover:underline">
              تعرف على كل خدماتنا بالتفصيل ←
            </Link>
          </div>
        </section>

        {/* ── Methodology ── */}
        <section className="mb-16 bg-slate-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">منهجية عملنا</h2>
          <p className="text-slate-500 mb-8">من الفكرة إلى الإطلاق وما بعده</p>
          <div className="grid md:grid-cols-3 gap-6">
            {methodology.map((m) => (
              <div key={m.step} className="flex gap-4">
                <div className="text-3xl font-black text-[#1DC7E0] opacity-60 leading-none">{m.step}</div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{m.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Technologies ── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">التقنيات التي نستخدمها</h2>
          <p className="text-slate-500 mb-8">أدوات حديثة ومثبتة في الإنتاج</p>
          <div className="grid md:grid-cols-3 gap-4">
            {technologies.map((t) => (
              <div key={t.cat} className="p-4 border border-slate-200 rounded-xl">
                <div className="text-xs font-bold text-[#1E6DB2] uppercase tracking-wider mb-2">{t.cat}</div>
                <div className="text-slate-700 text-sm">{t.list}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Projects ── */}
        <section className="mb-16 bg-slate-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">من أعمالنا</h2>
          <p className="text-slate-500 mb-8">مشاريع حقيقية سُلِّمت لعملاء حقيقيين</p>
          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white rounded-xl border border-slate-200 hover:border-[#1DC7E0] hover:shadow-md transition-all"
              >
                <div className="font-bold text-slate-800 mb-1 text-sm">{p.name}</div>
                <div className="text-slate-500 text-xs">{p.type}</div>
                <div className="text-[#1DC7E0] text-xs mt-2">زيارة المشروع ←</div>
              </a>
            ))}
          </div>
        </section>

        {/* ── Why us ── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">لماذا تختار DoGether Tech؟</h2>
          <p className="text-slate-500 mb-8">تفاصيل حقيقية، مش عبارات عامة</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { t: 'الكود ملكيتك 100٪', d: 'تحصل على كل الملفات والكود المصدري بعد التسليم — بدون أي قيود أو احتجاز.' },
              { t: 'تواصل مباشر مع المطور', d: 'تتكلم مع اللي شايل المشروع فعلاً، مش مع مبيعات أو وسيط.' },
              { t: 'أسعار واضحة من البداية', d: 'بنحدد السعر الكامل قبل البداية بلا مفاجآت في المنتصف.' },
              { t: 'التزام بالمواعيد', d: 'نضع جدولاً زمنياً واضحاً من اليوم الأول ونلتزم به.' },
              { t: 'فهم السوق المصري', d: 'نعرف احتياجات أصحاب المشاريع في مصر لأننا نعيش نفس السوق.' },
              { t: 'دعم حقيقي بعد الإطلاق', d: 'مش بنختفي بعد التسليم. دعم فني مستمر وتحديثات دورية.' },
            ].map((w) => (
              <div key={w.t} className="flex gap-4 p-5 border border-slate-200 rounded-xl">
                <div className="w-2.5 h-2.5 bg-[#1DC7E0] rounded-full flex-shrink-0 mt-1.5" />
                <div>
                  <div className="font-bold text-slate-800 mb-1">{w.t}</div>
                  <div className="text-slate-500 text-sm leading-relaxed">{w.d}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Cities ── */}
        <section className="mb-16 bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">نخدم كل محافظات مصر</h2>
          <p className="text-slate-500 mb-8">
            مقرنا في الفيوم ونعمل عن بُعد بالكامل مع عملاء في كل أنحاء مصر
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/software-company/${c.slug}`}
                className="block text-center py-3 px-4 bg-white rounded-xl border border-blue-200 text-slate-700 font-medium hover:border-[#1E6DB2] hover:text-[#1E6DB2] transition-all text-sm"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">أسئلة شائعة</h2>
          <div className="space-y-4">
            {faqs.map((q) => (
              <div key={q.name} className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-800 mb-2">{q.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{q.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="bg-gradient-to-l from-[#193F94] to-[#1E6DB2] rounded-2xl p-10 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">ابدأ مشروعك اليوم</h2>
          <p className="mb-8 text-blue-200 text-lg">استشارة مجانية وعرض سعر خلال 24 ساعة</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/201062485133"
              className="bg-white text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow"
            >
              واتساب: 01062485133
            </a>
            <Link
              href="/"
              className="border-2 border-white text-white px-7 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              الصفحة الرئيسية
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-6 text-center text-sm mt-8">
        <p className="text-slate-400">
          © 2025 DoGether Tech — جميع الحقوق محفوظة |{' '}
          <a href="https://dogethertech.com" className="text-[#1DC7E0] hover:underline">dogethertech.com</a>{' '}
          |{' '}
          <a href="tel:+201062485133" className="text-[#1DC7E0]">01062485133</a>
        </p>
      </footer>
    </div>
  )
}
