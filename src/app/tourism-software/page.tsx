import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'تصميم مواقع سياحية وأنظمة حجز فنادق ورحلات في مصر | DoGether',
  description:
    'DoGether تصمم مواقع سياحية احترافية وأنظمة حجز فنادق ورحلات متعددة اللغات في مصر — لشركات السياحة والفنادق ومراكز الغوص. حجز أونلاين، دفع دولي، ولوحة إدارة كاملة. تواصل: 01062485133',
  keywords: [
    'تصميم موقع سياحي', 'تصميم موقع شركة سياحة', 'تصميم موقع فندق', 'نظام حجز فنادق',
    'موقع حجز رحلات', 'برنامج إدارة رحلات', 'تصميم موقع مركز غوص', 'موقع سياحي متعدد اللغات',
    'نظام حجز أونلاين', 'tourism website Egypt', 'hotel booking system Egypt', 'travel agency website',
  ].join(', '),
  alternates: { canonical: 'https://dogethertech.com/tourism-software' },
  openGraph: {
    type: 'website',
    url: 'https://dogethertech.com/tourism-software',
    title: 'تصميم مواقع سياحية وأنظمة حجز في مصر | DoGether',
    description: 'مواقع سياحية وأنظمة حجز فنادق ورحلات متعددة اللغات لشركات السياحة والفنادق ومراكز الغوص في مصر.',
    locale: 'ar_EG',
  },
}

const solutions = [
  { emoji: '🏨', title: 'موقع فندق ونظام حجز', slug: 'website', desc: 'موقع فندق احترافي بنظام حجز مباشر يعرض الغرف والأسعار والتوافر، بلوحة إدارة كاملة ودفع دولي — بدل الاعتماد على منصات وسيطة تأخذ عمولتها.' },
  { emoji: '🧭', title: 'موقع شركة سياحة ورحلات', slug: 'website', desc: 'موقع لشركة سياحة يعرض البرامج والرحلات بالأسعار والمدة، مع طلب حجز وعربون دولي — يظهر في بحث السائح بلغته قبل سفره.' },
  { emoji: '🤿', title: 'موقع مركز غوص', slug: 'website', desc: 'موقع لمركز غوص يعرض نقاط الغوص والمحميات والكورسات وشهادات الاعتماد، بحجز رحلات يومية وإدارة طاقة القوارب.' },
  { emoji: '🌐', title: 'موقع متعدد اللغات', slug: 'website', desc: 'روابط منفصلة لكل لغة (إنجليزي، روسي، ألماني، إيطالي) تظهر في بحث بلد الزائر — لا مجرد زر ترجمة آلي لا يُفهرَس.' },
  { emoji: '💳', title: 'نظام حجز ودفع دولي', slug: 'store', desc: 'حجز أونلاين بطاقة دولية ونظام عربون — يدفع السائح جزءاً لتأكيد الحجز والباقي عند الوصول، مع طاقة استيعابية لكل رحلة.' },
  { emoji: '📱', title: 'تطبيق للنزلاء والرحلات', slug: 'mobile-app', desc: 'تطبيق يعرض برنامج الأنشطة اليومي ويتيح الحجز والدفع من الغرفة، ويرسل إشعارات المواعيد والعروض للمقاعد الشاغرة.' },
  { emoji: '🍽️', title: 'قائمة رقمية متعددة اللغات', slug: 'digital-menu', desc: 'قائمة مطعم/منتجع بـ QR بلغات الزوار مع بيان المكونات والحساسية — مطلب أساسي للسائح الأوروبي.' },
  { emoji: '⚙️', title: 'نظام إدارة سياحي مخصص', slug: 'custom-system', desc: 'نظام يجدول القوارب والمدربين والرحلات، ويدير الوكلاء والعمولات، ويوضح ربحية كل قناة حجز عبر الموسم.' },
]

const destinations = [
  { key: 'south-sinai', name: 'شرم الشيخ' }, { key: 'red-sea', name: 'الغردقة' },
  { key: 'marsa-alam', name: 'مرسى علم' }, { key: 'dahab', name: 'دهب' },
  { key: 'luxor', name: 'الأقصر' }, { key: 'aswan', name: 'أسوان' },
]

const faqs = [
  { q: 'كم تكلفة تصميم موقع سياحي بنظام حجز؟', a: 'يبدأ الموقع السياحي بنظام حجز من حوالي 15,000 جنيه ويختلف حسب عدد اللغات وطريقة الدفع وحجم البرامج. نقدّم عرض سعر مجانياً مفصّلاً بعد فهم احتياجك.' },
  { q: 'هل الموقع يقبل الدفع بالبطاقة الدولية؟', a: 'نعم، نربط الموقع ببوابة دفع تقبل البطاقات الدولية مع نظام العربون — يدفع السائح جزءاً لتأكيد الحجز والباقي عند الوصول.' },
  { q: 'بكم لغة يمكن بناء الموقع؟', a: 'نبني الموقع بأي عدد من اللغات (إنجليزي، روسي، ألماني، إيطالي، فرنسي…) بروابط منفصلة لكل لغة لتظهر في بحث بلد الزائر، لا مجرد ترجمة آلية.' },
  { q: 'هل تربطون الموقع بمنصات الحجز العالمية؟', a: 'نعم، يمكن ربط التوافر والأسعار مع منصات الحجز حتى لا تتضارب الحجوزات بين موقعك والمنصات الوسيطة، مع الاحتفاظ بحجزك المباشر بلا عمولة.' },
  { q: 'هل لديكم خبرة فعلية في السياحة؟', a: 'نعم، بنينا منصة Sharm Kite Surf للرياضات المائية في شرم الشيخ بنظام حجز أونلاين متعدد اللغات وعرض للأنشطة — نفس ما يحتاجه أي فندق أو مركز غوص أو شركة رحلات.' },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'تصميم مواقع وأنظمة حجز سياحية',
  name: 'تصميم مواقع سياحية وأنظمة حجز في مصر',
  description: 'مواقع سياحية وأنظمة حجز فنادق ورحلات متعددة اللغات لشركات السياحة والفنادق ومراكز الغوص في مصر.',
  provider: { '@type': 'Organization', name: 'DoGether', '@id': 'https://dogethertech.com/#business', url: 'https://dogethertech.com', telephone: '+201062485133' },
  areaServed: { '@type': 'Country', name: 'Egypt' },
  url: 'https://dogethertech.com/tourism-software',
}

export default function TourismSoftwarePage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="bg-gradient-to-l from-[#084941] to-[#107060] text-white">
        <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">DoGether</Link>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-blue-200 transition-colors">الرئيسية</Link>
            <Link href="/services" className="hover:text-blue-200 transition-colors">الخدمات</Link>
            <Link href="/work" className="hover:text-blue-200 transition-colors">أعمالنا</Link>
          </div>
        </nav>
        <div className="container mx-auto px-6 pt-10 pb-16 max-w-4xl text-center">
          <span className="inline-block bg-white/15 rounded-full px-4 py-1 text-sm mb-4">حلول رقمية للقطاع السياحي</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-snug">تصميم مواقع سياحية وأنظمة حجز فنادق ورحلات في مصر</h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            نبني للفنادق ومراكز الغوص وشركات السياحة والرحلات مواقع سريعة متعددة اللغات بأنظمة حجز مباشرة ودفع دولي —
            تصل للسائح في بلده قبل سفره، وتحفظ حجزك المباشر بلا عمولة وسطاء.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <a href="https://wa.me/201062485133" className="bg-white text-[#107060] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow">واتساب: 01062485133</a>
            <Link href="/work" className="border-2 border-white text-white px-7 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">شاهد مشروع Sharm Kite Surf</Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-5xl">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">لماذا يختلف الموقع السياحي عن أي موقع آخر؟</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            في السياحة، عميلك يقرر وهو في بلده قبل أن يسافر — لا يمرّ على مكتبك. موقعك ليس كارت تعريف، بل هو
            نقطة البيع الأولى: إن لم يكن بلغة الزائر، ولم يعرض التوافر والسعر بوضوح، ولم يقبل الدفع الدولي،
            ذهب الحجز لمنافس أو لمنصة وسيطة تأخذ عمولتها من هامشك.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            نصر ــ 19 مليون سائح سنوياً وإشغال فنادق يتجاوز 80% ــ سوق ضخم يتنافس رقمياً بالكامل. نبني لك حضوراً
            يجعل السائح يختارك مباشرة، ويمنحك قائمة عملاء تعيد التسويق لها كل موسم بدل الاعتماد الكامل على الوسطاء.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">حلولنا للقطاع السياحي</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {solutions.map((s) => (
              <div key={s.title} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <div className="text-3xl mb-3">{s.emoji}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 bg-blue-50 border border-blue-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">خبرة حقيقية في السياحة</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            بنينا منصة <strong>Sharm Kite Surf</strong> للرياضات المائية في شرم الشيخ: نظام حجز أونلاين، عرض للأنشطة،
            ودعم متعدد اللغات. نفس التحديات التي يواجهها أي فندق أو مركز غوص أو شركة رحلات — نعرفها لأننا حللناها فعلاً.
          </p>
          <Link href="/work" className="inline-block mt-4 text-[#107060] font-bold hover:underline">شاهد المشروع في أعمالنا ←</Link>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">نخدم كل الوجهات السياحية في مصر</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {destinations.map((d) => (
              <Link key={d.key} href={`/software-company/${d.key}/website`} className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#2DBEA1] hover:shadow transition-all text-slate-700 font-medium text-center">
                🏖️ حلول سياحية في {d.name}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">أسئلة شائعة</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-slate-800 hover:bg-slate-50 transition-colors list-none">
                  <span>{f.q}</span><span className="text-[#2DBEA1] text-lg">+</span>
                </summary>
                <div className="px-5 pb-5 text-slate-600 leading-relaxed text-sm">{f.a}</div>
              </details>
            ))}
          </div>
        </section>

        <div className="bg-gradient-to-l from-[#084941] to-[#107060] rounded-2xl p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-3">جاهز لموقع سياحي يجلب حجوزات مباشرة؟</h2>
          <p className="mb-8 text-blue-200 text-lg">تواصل معنا لعرض سعر واستشارة مجانية خلال 24 ساعة</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/201062485133" className="bg-white text-[#107060] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow">واتساب: 01062485133</a>
            <a href="mailto:dogethertech@gmail.com" className="border-2 border-white text-white px-7 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">dogethertech@gmail.com</a>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-6 text-center text-sm">
        <p className="text-slate-400">© 2025 DoGether — جميع الحقوق محفوظة | <a href="https://dogethertech.com" className="text-[#2DBEA1] hover:underline">dogethertech.com</a></p>
      </footer>
    </div>
  )
}
