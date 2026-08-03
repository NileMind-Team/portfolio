import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'تصميم موقع عيادة ونظام حجز مواعيد وإدارة مرضى في مصر | DoGether',
  description:
    'DoGether تبني للعيادات والمراكز الطبية مواقع حجز مواعيد أونلاين، أنظمة إدارة مرضى وملفات، وتذكير بالمواعيد — بلوحة تحكم كاملة وخصوصية بيانات. تواصل: 01062485133',
  keywords: [
    'تصميم موقع عيادة', 'نظام حجز مواعيد', 'برنامج إدارة عيادة', 'نظام إدارة مرضى',
    'موقع طبيب', 'حجز دكتور أونلاين', 'نظام مركز طبي', 'clinic booking system Egypt',
  ].join(', '),
  alternates: { canonical: 'https://dogethertech.com/clinic-software' },
  openGraph: {
    type: 'website',
    url: 'https://dogethertech.com/clinic-software',
    title: 'حلول رقمية للعيادات والمراكز الطبية في مصر | DoGether',
    description: 'مواقع حجز مواعيد، أنظمة إدارة مرضى وملفات، وتذكير بالمواعيد للعيادات والمراكز الطبية.',
    locale: 'ar_EG',
  },
}

const solutions = [
  { emoji: '📅', title: 'حجز مواعيد أونلاين', desc: 'يحجز المريض موعده من الموقع حسب المتاح فعلياً، فيقل الزحام والاتصالات، وتنظّم العيادة يومها مسبقاً بلا تعارض في المواعيد.' },
  { emoji: '🗂️', title: 'إدارة مرضى وملفات', desc: 'ملف لكل مريض بتاريخه الطبي، الزيارات، الروشتات والتحاليل — يصل إليه الطبيب بسرعة مع الحفاظ على خصوصية البيانات.' },
  { emoji: '🔔', title: 'تذكير بالمواعيد', desc: 'رسائل تذكير تلقائية عبر واتساب أو SMS تقلّل الغياب عن المواعيد، وتعيد تفعيل المرضى للمتابعات الدورية.' },
  { emoji: '👨‍⚕️', title: 'جدول الأطباء والعيادات', desc: 'إدارة جداول أكثر من طبيب وعيادة وفرع، مع توزيع المواعيد ومنع التعارض وحساب أوقات الكشف والمتابعة.' },
  { emoji: '💳', title: 'دفع ومحاسبة', desc: 'تحصيل رسوم الكشف أونلاين أو بالعيادة، فواتير منظّمة، وتقارير دخل يومية وشهرية واضحة.' },
  { emoji: '🌐', title: 'موقع طبي يظهر في البحث', desc: 'موقع يعرض الخدمات والأطباء وأوقات العمل، مبني ليظهر في بحث المريض عن تخصصك في منطقته.' },
]

const faqs = [
  { q: 'كم تكلفة تصميم موقع عيادة بنظام حجز؟', a: 'يبدأ موقع العيادة بنظام حجز المواعيد من حوالي 12,000 جنيه، ويرتفع مع إضافة إدارة المرضى والملفات وتعدد الأطباء والفروع. نقدّم عرض سعر مجانياً حسب حجم العيادة أو المركز.' },
  { q: 'كيف يقلّل النظام غياب المرضى عن مواعيدهم؟', a: 'يرسل النظام تذكيراً تلقائياً قبل الموعد عبر واتساب أو SMS، ويتيح للمريض إعادة الجدولة بسهولة — ما يقلّل المواعيد الضائعة ويحسّن استغلال وقت الطبيب.' },
  { q: 'هل بيانات المرضى آمنة؟', a: 'نعم، نبني النظام بضوابط وصول حسب الصلاحية، وتشفير للبيانات الحساسة، ونسخ احتياطي منتظم — بحيث تبقى ملفات المرضى محمية ومتاحة للطاقم المصرّح له فقط.' },
  { q: 'هل يدعم النظام أكثر من طبيب وفرع؟', a: 'نعم، يدير جداول عدة أطباء وعيادات وفروع في نظام واحد، مع توزيع المواعيد ومنع التعارض وتقارير موحّدة عبر الفروع.' },
  { q: 'هل يمكن ربط الحجز بصفحة الفيسبوك والإعلانات؟', a: 'نعم، يمكن ربط زر الحجز بصفحاتك وإعلانات Meta بحيث يحجز المريض مباشرة من الإعلان، مع تتبّع مصدر كل حجز لقياس فعالية تسويقك.' },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Clinic software & booking system development',
  name: 'حلول رقمية للعيادات والمراكز الطبية في مصر',
  description: 'مواقع حجز مواعيد أونلاين، أنظمة إدارة مرضى وملفات، وتذكير بالمواعيد للعيادات والمراكز الطبية في مصر.',
  provider: { '@type': 'Organization', name: 'DoGether', '@id': 'https://dogethertech.com/#business', url: 'https://dogethertech.com', telephone: '+201062485133' },
  areaServed: { '@type': 'Country', name: 'Egypt' },
  url: 'https://dogethertech.com/clinic-software',
}

export default function ClinicSoftwarePage() {
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
          <span className="inline-block bg-white/15 rounded-full px-4 py-1 text-sm mb-4">حلول رقمية للعيادات والمراكز الطبية</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-snug">تصميم موقع عيادة ونظام حجز مواعيد وإدارة مرضى</h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            نبني للعيادات والمراكز الطبية مواقع حجز مواعيد أونلاين، أنظمة إدارة مرضى وملفات، وتذكيراً بالمواعيد —
            تنظّم يومك، تقلّل الزحام، وتحسّن تجربة المريض.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <a href="https://wa.me/201062485133" className="bg-white text-[#107060] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow">واتساب: 01062485133</a>
            <Link href="/services" className="border-2 border-white text-white px-7 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">كل الخدمات</Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-5xl">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">لماذا تحتاج عيادتك نظاماً رقمياً؟</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            إدارة العيادة بالورق والمكالمات تعني مواعيد متعارضة، مرضى يغيبون بلا تذكير، وملفات يصعب الرجوع إليها.
            النظام الرقمي يحوّل هذا إلى تجربة منظّمة: المريض يحجز أونلاين حسب المتاح فعلاً، والطاقم يرى الجدول بوضوح،
            وملف كل مريض في متناول الطبيب لحظياً.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            نبني المنظومة كاملة مع الحفاظ على خصوصية بيانات المرضى: حجز، إدارة مرضى، تذكير تلقائي، ومحاسبة —
            في نظام واحد يفهم طبيعة العمل الطبي.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">حلولنا للعيادات والمراكز الطبية</h2>
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
          <h2 className="text-2xl font-bold mb-3">نظّم عيادتك رقمياً</h2>
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
