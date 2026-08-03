import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'تصميم متجر إلكتروني وبرمجة لعملاء الخليج عن بُعد | DoGether',
  description:
    'DoGether تطور مواقع وتطبيقات ومتاجر وأنظمة لعملاء السعودية والإمارات والكويت وقطر وعُمان والبحرين عن بُعد — عربي وإنجليزي وتسليم مرحلي واضح. اطلب دراسة مجانية.',
  keywords: [
    'تصميم متجر إلكتروني السعودية', 'تصميم متجر إلكتروني الخليج', 'شركة برمجة تعمل عن بعد',
    'تصميم موقع السعودية', 'متجر إلكتروني الرياض', 'تصميم متجر إلكتروني الإمارات',
    'شركة برمجة للخليج', 'e-commerce development Gulf', 'ecommerce Saudi Arabia',
  ].join(', '),
  alternates: { canonical: 'https://dogethertech.com/gulf-software' },
  openGraph: {
    type: 'website',
    url: 'https://dogethertech.com/gulf-software',
    title: 'تصميم متجر إلكتروني وبرمجة لعملاء الخليج عن بُعد | DoGether',
    description: 'متاجر إلكترونية وأنظمة ومواقع لعملاء الخليج عن بُعد — دفع دولي، عربي وإنجليزي، تسليم أونلاين.',
    locale: 'ar',
  },
}

const gulfCountries = [
  { slug: 'saudi-arabia', name: 'السعودية', focus: 'الرياض وجدة والدمام — مواقع وتطبيقات ومتاجر عربية أولاً' },
  { slug: 'uae', name: 'الإمارات', focus: 'دبي وأبوظبي والشارقة — حلول ثنائية اللغة لسوق متنوع' },
  { slug: 'kuwait', name: 'الكويت', focus: 'متاجر وحجوزات وأنظمة تشغيل بالدينار الكويتي' },
  { slug: 'qatar', name: 'قطر', focus: 'حلول للضيافة والفعاليات والخدمات والمقاولات' },
  { slug: 'oman', name: 'سلطنة عُمان', focus: 'السياحة واللوجستيات والمشروعات الصغيرة والمتوسطة' },
  { slug: 'bahrain', name: 'البحرين', focus: 'التقنية المالية والتجزئة والضيافة والخدمات' },
]

const solutions = [
  { emoji: '🛒', title: 'متجر إلكتروني للخليج', desc: 'متجر عربي وإنجليزي يدعم العملة المناسبة، مع ربط بوابة دفع متاحة لنشاط العميل وبلده بعد مراجعة شروط مزود الخدمة.' },
  { emoji: '💳', title: 'دفع دولي متعدد العملات', desc: 'عرض الأسعار بالريال والدرهم والدولار، وقبول الدفع بالبطاقة الدولية والمحافظ الرقمية — بلا اعتماد على بوابة محلية واحدة.' },
  { emoji: '🌐', title: 'موقع ثنائي اللغة', desc: 'عربي وإنجليزي بروابط منفصلة تُفهرَس في بحث بلد العميل — لا زر ترجمة آلي، بل محتوى حقيقي لكل لغة.' },
  { emoji: '⚙️', title: 'أنظمة إدارة مخصصة', desc: 'أنظمة حجز، مخزون، وإدارة أعمال تُبنى حسب سير عملك — بلا اشتراكات منصة شهرية، تمتلك كودك بالكامل.' },
  { emoji: '📱', title: 'تطبيقات جوال', desc: 'تطبيقات iOS وAndroid للمتاجر والخدمات، بإشعارات ودفع داخل التطبيق — بجودة تنافس السوق الخليجي.' },
  { emoji: '🤝', title: 'عمل عن بُعد منظّم', desc: 'تواصل يومي عبر واتساب واجتماعات مرئية، تسليم على مراحل واضحة، ومتابعة بعد الإطلاق — نفس جودة الفريق المحلي.' },
]

const faqs = [
  { q: 'هل تعملون فعلاً مع عملاء خارج مصر؟', a: 'نعم، نعمل مع عملاء الخليج والخارج عن بُعد بالكامل. التواصل يومي عبر واتساب والاجتماعات المرئية، والتسليم أونلاين على مراحل متفق عليها. لسنا وكالة محلية في الرياض أو دبي، بل فريق مصري يخدم عملاء المنطقة عن بُعد بأسعار تنافسية.' },
  { q: 'كيف يتم اختيار بوابة الدفع للمتجر؟', a: 'نراجع بلد تسجيل النشاط وحساب التاجر والعملات المطلوبة، ثم نربط بوابة متاحة ومناسبة بعد التأكد من متطلبات مزودها. التوفر والموافقة يختلفان حسب الدولة والنشاط، لذلك لا ندّعي أن بوابة واحدة تعمل للجميع.' },
  { q: 'لماذا أتعامل مع فريق مصري بدل وكالة خليجية؟', a: 'الجودة التقنية نفسها بتكلفة أقل بشكل ملموس، مع مرونة أعلى وسرعة تنفيذ (3–6 أسابيع للمشروع). نبني كوداً مخصصاً تمتلكه أنت بلا اشتراكات منصة، وننفّذ عن بُعد بتواصل منظّم يجعل المسافة غير محسوسة.' },
  { q: 'ما اللغات التي تبنون بها الموقع؟', a: 'نبني عربي وإنجليزي بروابط منفصلة لكل لغة لتُفهرَس في بحث Google، ويمكن إضافة لغات أخرى عند الحاجة. هذا يجعل موقعك يظهر لعميلك بلغته لا بترجمة آلية.' },
  { q: 'كيف نبدأ ونتفق على السعر؟', a: 'تواصل معنا عبر واتساب أو الإيميل بوصف مختصر لمشروعك، ونعطيك استشارة وعرض سعر مفصّلاً مجاناً خلال 24 ساعة، مع خطة تنفيذ ومراحل واضحة.' },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'E-commerce & Software Development for Gulf clients (remote)',
  name: 'تصميم متاجر إلكترونية وبرمجة لعملاء الخليج عن بُعد',
  description: 'متاجر إلكترونية وأنظمة ومواقع لعملاء الخليج عن بُعد — دفع دولي متعدد العملات، عربي وإنجليزي، وتسليم أونلاين.',
  provider: { '@type': 'Organization', name: 'DoGether', '@id': 'https://dogethertech.com/#business', url: 'https://dogethertech.com', telephone: '+201062485133' },
  areaServed: [
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Kuwait' },
    { '@type': 'Country', name: 'Qatar' },
    { '@type': 'Country', name: 'Oman' },
    { '@type': 'Country', name: 'Bahrain' },
  ],
  url: 'https://dogethertech.com/gulf-software',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://dogethertech.com' },
    { '@type': 'ListItem', position: 2, name: 'خدمات البرمجة في الخليج', item: 'https://dogethertech.com/gulf-software' },
  ],
}

export default function GulfSoftwarePage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gradient-to-l from-[#084941] to-[#107060] text-white">
        <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">DoGether</Link>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-blue-200 transition-colors">الرئيسية</Link>
            <Link href="/services/store" className="hover:text-blue-200 transition-colors">المتجر الإلكتروني</Link>
            <Link href="/tourism-software" className="hover:text-blue-200 transition-colors">حلول السياحة</Link>
            <Link href="/work" className="hover:text-blue-200 transition-colors">أعمالنا</Link>
          </div>
        </nav>
        <div className="container mx-auto px-6 pt-10 pb-16 max-w-4xl text-center">
          <span className="inline-block bg-white/15 rounded-full px-4 py-1 text-sm mb-4">نخدم عملاء الخليج عن بُعد</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-snug">متاجر إلكترونية وبرمجة لعملاء الخليج — بجودة عالية وتكلفة أقل</h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            فريق مصري يبني للسعودية والإمارات والكويت وقطر متاجر إلكترونية وأنظمة ومواقع ثنائية اللغة بدفع دولي متعدد العملات —
            عن بُعد بالكامل، بتواصل يومي وتسليم أونلاين منظّم.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <a href="https://wa.me/201062485133" className="bg-white text-[#107060] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow">واتساب: 01062485133</a>
            <Link href="/services/store" className="border-2 border-white text-white px-7 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">تفاصيل المتجر الإلكتروني</Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-5xl">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">اختر السوق الخليجي المستهدف</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">لكل دولة صفحة بمحتوى وقطاعات واعتبارات تشغيل مختلفة، مع توضيح صريح أن التنفيذ يتم عن بُعد من مصر.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gulfCountries.map((country) => (
              <Link key={country.slug} href={`/gulf-software/${country.slug}`} className="rounded-xl border border-slate-200 p-5 hover:border-[#2DBEA1] hover:shadow-md transition-all">
                <h3 className="font-bold text-slate-800 mb-2">شركة برمجة تخدم {country.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{country.focus}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">لماذا فريق مصري لمشروعك الخليجي؟</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            سوق الخليج الرقمي من الأسرع نمواً في العالم، والتجارة الإلكترونية تحديداً في صدارة الطلب. لكن تكلفة التطوير المحلية
            مرتفعة، وكثير من الأنظمة الجاهزة تفرض اشتراكات شهرية وقيوداً. نحن نقدّم البديل: جودة تقنية تنافس السوق الخليجي،
            بتكلفة أقل بشكل ملموس، وكود مخصص تمتلكه أنت بلا اشتراكات منصة.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            نعمل عن بُعد بشفافية: مراحل واضحة، تواصل يومي، ومتابعة بعد الإطلاق. المسافة لا تعني فرقاً في الجودة — بل في السعر لصالحك.
            لدينا خبرة تنفيذ فعلية عبر التجارة الإلكترونية والمطاعم والعقارات والسياحة، وننقلها لمشروعك في الخليج.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">ماذا نبني لعملاء الخليج</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {solutions.map((s) => (
              <div key={s.title} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <div className="text-3xl mb-3">{s.emoji}</div>
                <h3 className="font-bold text-slate-800 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">أسئلة شائعة</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-slate-800 hover:bg-slate-50 transition-colors list-none">
                  <span>{faq.q}</span>
                  <span className="text-[#2DBEA1] text-lg">+</span>
                </summary>
                <div className="px-5 pb-5 text-slate-600 leading-relaxed text-sm">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <div className="bg-gradient-to-l from-[#084941] to-[#107060] rounded-2xl p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-3">ابدأ مشروعك مع فريق يفهم السوق</h2>
          <p className="mb-8 text-blue-200 text-lg">استشارة وعرض سعر مجاني خلال 24 ساعة</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/201062485133" className="bg-white text-[#107060] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow">واتساب: 01062485133</a>
            <a href="mailto:dogethertech@gmail.com" className="border-2 border-white text-white px-7 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">dogethertech@gmail.com</a>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-6 text-center text-sm">
        <p className="text-slate-400">© 2026 DoGether — <a href="https://dogethertech.com" className="text-[#2DBEA1] hover:underline">dogethertech.com</a> | هاتف/واتساب: <a href="tel:+201062485133" className="text-[#2DBEA1]">01062485133</a></p>
      </footer>
    </div>
  )
}
