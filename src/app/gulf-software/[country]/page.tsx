import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type CountryData = {
  name: string
  nameWithArticle: string
  englishName: string
  currency: string
  cities: string
  sectors: string[]
  marketNeed: string
  localNote: string
}

const countries: Record<string, CountryData> = {
  'saudi-arabia': {
    name: 'السعودية', nameWithArticle: 'السعودية', englishName: 'Saudi Arabia', currency: 'الريال السعودي',
    cities: 'الرياض وجدة والدمام ومختلف مدن المملكة',
    sectors: ['التجارة الإلكترونية والتجزئة', 'المطاعم والتوصيل', 'الخدمات المهنية', 'العقارات وإدارة المنشآت'],
    marketNeed: 'تجربة عربية أولاً مع نسخة إنجليزية، أداء سريع على الجوال، وربط مرن مع أنظمة الدفع والفوترة والتشغيل.',
    localNote: 'عند احتياج المشروع للفوترة الإلكترونية نحدد نطاق التكامل ونجهزه تقنياً وفق متطلبات هيئة الزكاة والضريبة والجمارك السارية على نشاط العميل، بعد مراجعة مزود الحل والمحاسب القانوني.',
  },
  uae: {
    name: 'الإمارات', nameWithArticle: 'الإمارات', englishName: 'United Arab Emirates', currency: 'الدرهم الإماراتي',
    cities: 'دبي وأبوظبي والشارقة وباقي الإمارات',
    sectors: ['العقارات والخدمات', 'السياحة والضيافة', 'اللوجستيات والتوصيل', 'التجارة الإلكترونية'],
    marketNeed: 'واجهة عربية وإنجليزية قابلة لإضافة لغات، سرعة قوية، وتجربة شراء أو حجز تناسب جمهوراً متنوعاً.',
    localNote: 'نربط بوابة الدفع المتاحة لنشاطك وكيانك التجاري في الإمارات بعد التأكد من موافقة المزود ومتطلبات التفعيل؛ لا نفرض بوابة واحدة على كل المشاريع.',
  },
  kuwait: {
    name: 'الكويت', nameWithArticle: 'الكويت', englishName: 'Kuwait', currency: 'الدينار الكويتي',
    cities: 'مدينة الكويت وحولي والفروانية والأحمدي',
    sectors: ['المتاجر والتجزئة', 'المطاعم والمقاهي', 'الحجوزات والخدمات', 'العيادات والأعمال المهنية'],
    marketNeed: 'رحلة استخدام مختصرة بالعربية والإنجليزية، عرض واضح للأسعار، وتواصل سريع يناسب سوقاً مترابطاً يعتمد على الجوال.',
    localNote: 'نجهز الأسعار بالدينار الكويتي ونربط خدمات الدفع أو التوصيل المناسبة بعد مراجعة توفرها وشروط حساب التاجر.',
  },
  qatar: {
    name: 'قطر', nameWithArticle: 'قطر', englishName: 'Qatar', currency: 'الريال القطري',
    cities: 'الدوحة والريان والوكرة ومختلف مناطق قطر',
    sectors: ['الضيافة والفعاليات', 'المقاولات وإدارة المشاريع', 'الخدمات المهنية', 'المتاجر والحجوزات'],
    marketNeed: 'مواقع وأنظمة عربية وإنجليزية سريعة، مع إدارة محتوى سهلة وربط بين الحجز أو الطلب وفريق التشغيل.',
    localNote: 'نصمم دورة العمل حول فريقك ونختار التكاملات المتاحة في قطر وفق نوع النشاط والحسابات المعتمدة لدى مزودي الخدمة.',
  },
  oman: {
    name: 'عُمان', nameWithArticle: 'سلطنة عُمان', englishName: 'Oman', currency: 'الريال العُماني',
    cities: 'مسقط وصلالة وصحار ونزوى ومختلف محافظات السلطنة',
    sectors: ['السياحة والرحلات', 'اللوجستيات والنقل', 'المشروعات الصغيرة والمتوسطة', 'التجارة والخدمات'],
    marketNeed: 'محتوى عربي وإنجليزي واضح، تجربة حجز أو طلب خفيفة، ولوحة تحكم عملية تقلل العمل اليدوي.',
    localNote: 'نجهز العملة والتكاملات المطلوبة وفق الخدمات المتاحة للكيان التجاري في عُمان، ونوثق ما يحتاجه العميل قبل بدء التطوير.',
  },
  bahrain: {
    name: 'البحرين', nameWithArticle: 'البحرين', englishName: 'Bahrain', currency: 'الدينار البحريني',
    cities: 'المنامة والمحرق والرفاع ومختلف مناطق المملكة',
    sectors: ['التقنية المالية والخدمات', 'التجزئة والتجارة الإلكترونية', 'الضيافة والمطاعم', 'الأعمال المهنية'],
    marketNeed: 'تطبيقات ومواقع ثنائية اللغة، تكاملات API موثوقة، ولوحات تشغيل تناسب فرقاً صغيرة وسريعة الحركة.',
    localNote: 'أي تكامل مالي أو دفع يُنفذ بعد مراجعة أهلية حساب التاجر ومتطلبات المزود والجهات التنظيمية ذات الصلة بنشاط العميل.',
  },
}

export function generateStaticParams() {
  return Object.keys(countries).map((country) => ({ country }))
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params
  const data = countries[country]
  if (!data) return {}
  const url = `https://dogethertech.com/gulf-software/${country}`
  const title = `شركة برمجة في ${data.name} عن بُعد | مواقع وتطبيقات | DoGether`
  const description = `تطوير مواقع وتطبيقات ومتاجر إلكترونية لعملاء ${data.nameWithArticle} عن بُعد. عربي وإنجليزي، ${data.currency}، وتسليم مرحلي واضح. اطلب دراسة مجانية لمشروعك.`
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { type: 'website', locale: 'ar', url, title, description },
  }
}

export default async function GulfCountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params
  const data = countries[country]
  if (!data) notFound()
  const url = `https://dogethertech.com/gulf-software/${country}`
  const faqs = [
    { q: `هل لديكم مكتب داخل ${data.name}؟`, a: `لا ندّعي وجود مكتب محلي. DoGether فريق مصري ينفذ مشاريع عملاء ${data.nameWithArticle} عن بُعد، باجتماعات دورية وتسليم على مراحل ودعم بعد الإطلاق.` },
    { q: `هل يدعم المشروع ${data.currency} والعربية والإنجليزية؟`, a: `نعم. نجهز الواجهة العربية RTL والإنجليزية، ونعرض الأسعار بـ${data.currency} عند الحاجة، مع روابط ومحتوى مناسب لكل لغة.` },
    { q: 'هل يمكن ربط الدفع والأنظمة الخارجية؟', a: `نعم بعد دراسة المتطلبات. ${data.localNote}` },
    { q: 'كيف نبدأ المشروع؟', a: 'أرسل وصفاً مختصراً عبر واتساب. نراجع الهدف والمستخدمين والتكاملات، ثم نقدم نطاق عمل ومراحل وتكلفة واضحة قبل التنفيذ.' },
  ]
  const schemas = [
    {
      '@context': 'https://schema.org', '@type': 'Service',
      name: `تطوير مواقع وتطبيقات لعملاء ${data.nameWithArticle} عن بُعد`,
      serviceType: 'Custom software, website and mobile app development',
      provider: { '@type': 'Organization', '@id': 'https://dogethertech.com/#business', name: 'DoGether', url: 'https://dogethertech.com', telephone: '+201062485133' },
      areaServed: { '@type': 'Country', name: data.englishName }, url,
    },
    {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://dogethertech.com' },
        { '@type': 'ListItem', position: 2, name: 'خدمات البرمجة في الخليج', item: 'https://dogethertech.com/gulf-software' },
        { '@type': 'ListItem', position: 3, name: data.name, item: url },
      ],
    },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) },
  ]

  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-white text-slate-800">
      {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
      <header className="bg-gradient-to-l from-[#084941] to-[#107060] text-white">
        <nav className="container mx-auto flex items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-bold">DoGether</Link>
          <Link href="/gulf-software" className="text-sm hover:text-emerald-100">كل أسواق الخليج</Link>
        </nav>
        <div className="container mx-auto max-w-4xl px-6 pb-16 pt-10 text-center">
          <p className="mb-3 text-emerald-100">فريق تطوير مصري يخدم {data.nameWithArticle} عن بُعد</p>
          <h1 className="mb-5 text-3xl font-bold leading-snug md:text-5xl">شركة برمجة تخدم {data.nameWithArticle}: مواقع وتطبيقات وأنظمة مخصصة</h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-emerald-50">نبني حلولاً رقمية لعملاء {data.cities}. {data.marketNeed}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/201062485133" className="rounded-xl bg-white px-7 py-3 font-bold text-[#107060] shadow hover:bg-emerald-50">اطلب دراسة مجانية</a>
            <Link href="/work" className="rounded-xl border-2 border-white px-7 py-3 font-bold hover:bg-white/10">شاهد أعمالنا</Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-5xl px-6 py-14">
        <section className="mb-14">
          <h2 className="mb-4 text-2xl font-bold">حل برمجي يناسب السوق في {data.name}</h2>
          <p className="text-lg leading-8 text-slate-600">لا نغيّر اسم البلد فوق صفحة عامة فقط. نبدأ من رحلة العميل داخل {data.nameWithArticle}، اللغة والعملة وطريقة التشغيل والتكاملات الفعلية، ثم نبني موقعاً أو تطبيقاً أو نظام إدارة مخصصاً يمكن لفريقك امتلاكه وتطويره.</p>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold">قطاعات نخدمها في {data.name}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.sectors.map((sector) => <div key={sector} className="rounded-xl border border-slate-200 bg-slate-50 p-5 font-semibold">{sector}</div>)}
          </div>
        </section>

        <section className="mb-14 rounded-2xl border border-emerald-100 bg-emerald-50 p-7">
          <h2 className="mb-3 text-xl font-bold">العملة والدفع والتكاملات المحلية</h2>
          <p className="leading-7 text-slate-700">{data.localNote}</p>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold">الخدمات المناسبة لمشروعك</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/services/website" className="rounded-xl border p-4 font-semibold hover:border-[#2DBEA1]">تصميم مواقع</Link>
            <Link href="/services/mobile-app" className="rounded-xl border p-4 font-semibold hover:border-[#2DBEA1]">تطبيقات جوال</Link>
            <Link href="/services/store" className="rounded-xl border p-4 font-semibold hover:border-[#2DBEA1]">متاجر إلكترونية</Link>
            <Link href="/services/custom-system" className="rounded-xl border p-4 font-semibold hover:border-[#2DBEA1]">أنظمة مخصصة</Link>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold">أسئلة شائعة</h2>
          <div className="space-y-4">
            {faqs.map((faq) => <details key={faq.q} className="rounded-xl border border-slate-200"><summary className="cursor-pointer p-5 font-semibold">{faq.q}</summary><p className="px-5 pb-5 leading-7 text-slate-600">{faq.a}</p></details>)}
          </div>
        </section>

        <section className="rounded-2xl bg-gradient-to-l from-[#084941] to-[#107060] p-9 text-center text-white">
          <h2 className="mb-3 text-2xl font-bold">هل لديك مشروع في {data.name}؟</h2>
          <p className="mb-7 text-emerald-100">أرسل الفكرة والهدف، وسنرد بنطاق مبدئي وخطوة تالية واضحة.</p>
          <a href="https://wa.me/201062485133" className="inline-block rounded-xl bg-white px-7 py-3 font-bold text-[#107060]">تواصل عبر واتساب</a>
        </section>
      </main>
    </div>
  )
}
