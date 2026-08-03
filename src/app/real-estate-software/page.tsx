import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'تصميم موقع عقارات ونظام إدارة عقاري في مصر | DoGether',
  description:
    'DoGether تبني لشركات العقارات والمطوّرين مواقع عرض وحدات، أنظمة إدارة عملاء (CRM)، بحث ذكي وتحليلات. خبرة فعلية: منصة أروقة العقارية. تواصل: 01062485133',
  keywords: [
    'تصميم موقع عقارات', 'نظام إدارة عقارات', 'موقع شركة عقارية', 'CRM عقاري',
    'برنامج إدارة عقارات', 'منصة عقارات', 'تسويق عقاري إلكتروني', 'real estate website Egypt',
  ].join(', '),
  alternates: { canonical: 'https://dogethertech.com/real-estate-software' },
  openGraph: {
    type: 'website',
    url: 'https://dogethertech.com/real-estate-software',
    title: 'حلول رقمية لشركات العقارات في مصر | DoGether',
    description: 'مواقع عرض وحدات، أنظمة إدارة عملاء وبحث ذكي وتحليلات لشركات العقارات — بخبرة تنفيذ فعلية.',
    locale: 'ar_EG',
  },
}

const solutions = [
  { emoji: '🏢', title: 'موقع عرض الوحدات', desc: 'موقع يعرض المشاريع والوحدات بالصور والخرائط والأسعار والمساحات، مع فلترة حسب المنطقة والنوع والميزانية — يظهر في بحث العميل عن عقار في منطقته.' },
  { emoji: '🔎', title: 'بحث ذكي', desc: 'محرك بحث يصفّي الوحدات حسب السعر والمساحة والموقع وطريقة السداد، ويقترح البدائل القريبة — يوصل العميل لما يناسبه بسرعة.' },
  { emoji: '👥', title: 'نظام إدارة عملاء CRM', desc: 'تتبّع كل عميل من أول استفسار حتى التعاقد، توزيع العملاء على المندوبين، ومتابعة مراحل التفاوض والمعاينات في مكان واحد.' },
  { emoji: '📊', title: 'تحليلات ومبيعات', desc: 'لوحة تعرض أكثر المشاريع طلباً، مصادر العملاء الأعلى تحويلاً، وأداء كل مندوب — لقرارات تسويق مبنية على أرقام.' },
  { emoji: '📱', title: 'تطبيق للمندوبين والعملاء', desc: 'تطبيق يعرض الوحدات المتاحة لحظياً للمندوب في الميدان، ويتيح للعميل حفظ المفضلة وطلب معاينة.' },
  { emoji: '💬', title: 'التقاط العملاء (Leads)', desc: 'نماذج تواصل وربط بواتساب وإعلانات Meta لالتقاط بيانات المهتمين مباشرة في النظام بدل ضياعها بين المنصات.' },
]

const faqs = [
  { q: 'كم تكلفة تصميم موقع عقارات بنظام إدارة؟', a: 'يبدأ موقع العقارات بعرض الوحدات من حوالي 15,000 جنيه، ويرتفع مع إضافة نظام إدارة العملاء (CRM) والتحليلات وتطبيق المندوبين. نقدّم عرض سعر مجانياً حسب حجم شركتك.' },
  { q: 'هل يمكن ربط الموقع بإعلانات Facebook لالتقاط العملاء؟', a: 'نعم، نربط نماذج الموقع وإعلانات Meta بحيث تدخل بيانات المهتمين مباشرة إلى نظام إدارة العملاء، فلا يضيع أي Lead بين المنصات، ويصل للمندوب المناسب فوراً.' },
  { q: 'كيف يساعد نظام CRM شركتي العقارية؟', a: 'ينظّم رحلة كل عميل من الاستفسار حتى التعاقد، يوزّع العملاء على المندوبين، يذكّر بالمعاينات والمتابعات، ويعطيك صورة واضحة عن أداء المبيعات ومصادر العملاء الأعلى تحويلاً.' },
  { q: 'هل تدعمون البحث بالخريطة والفلترة المتقدمة؟', a: 'نعم، نبني بحثاً بالخريطة وفلترة حسب المنطقة والسعر والمساحة وطريقة السداد، مع اقتراح وحدات بديلة قريبة — تجربة تقرّب العميل من القرار.' },
  { q: 'هل لديكم خبرة فعلية في العقارات؟', a: 'نعم، بنينا منصة «أروقة» العقارية بإدارة متقدمة للوحدات وبحث ذكي وتحليلات — نموذج فعلي لما نبنيه لأي شركة عقارية أو مطوّر.' },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Real estate software & website development',
  name: 'حلول رقمية لشركات العقارات في مصر',
  description: 'مواقع عرض وحدات، أنظمة إدارة عملاء (CRM)، بحث ذكي وتحليلات لشركات العقارات والمطوّرين في مصر.',
  provider: { '@type': 'Organization', name: 'DoGether', '@id': 'https://dogethertech.com/#business', url: 'https://dogethertech.com', telephone: '+201062485133' },
  areaServed: { '@type': 'Country', name: 'Egypt' },
  url: 'https://dogethertech.com/real-estate-software',
}

export default function RealEstateSoftwarePage() {
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
          <span className="inline-block bg-white/15 rounded-full px-4 py-1 text-sm mb-4">حلول رقمية لقطاع العقارات</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-snug">تصميم موقع عقارات ونظام إدارة عقاري في مصر</h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            نبني لشركات العقارات والمطوّرين مواقع عرض وحدات ببحث ذكي، وأنظمة إدارة عملاء (CRM) وتحليلات —
            تلتقط كل عميل مهتم وتحوّله إلى تعاقد.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <a href="https://wa.me/201062485133" className="bg-white text-[#107060] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow">واتساب: 01062485133</a>
            <Link href="/work" className="border-2 border-white text-white px-7 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">شاهد منصة أروقة</Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-5xl">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">لماذا يختلف الموقع العقاري عن غيره؟</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            في العقارات، العميل يبحث طويلاً ويقارن كثيراً قبل أن يقرّر، وقيمة الصفقة الواحدة كبيرة. لذلك لا يكفي موقع يعرض
            صوراً؛ تحتاج بحثاً ذكياً يقرّب العميل من الوحدة المناسبة بسرعة، ونظاماً يلتقط بيانات المهتم ولا يتركها تضيع.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            نبني منظومة متكاملة: موقع عرض احترافي، بحث وفلترة بالخريطة، ونظام إدارة عملاء يتابع كل Lead من الاستفسار حتى
            التعاقد — مع تحليلات تكشف أي المشاريع والمصادر تجلب أفضل العملاء.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">حلولنا لشركات العقارات</h2>
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
          <h2 className="text-2xl font-bold mb-3">حوّل زوّار موقعك إلى تعاقدات</h2>
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
