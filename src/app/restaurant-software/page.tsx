import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'تصميم موقع مطعم ونظام طلب أونلاين وكاشير في مصر | DoGether',
  description:
    'DoGether تبني للمطاعم والكافيهات مواقع طلب أونلاين، قوائم رقمية QR، أنظمة كاشير POS وإدارة توصيل — بلوحة تحكم كاملة. خبرة فعلية: فطير وعسل وتشيكن ون. تواصل: 01062485133',
  keywords: [
    'تصميم موقع مطعم', 'نظام طلب أونلاين للمطاعم', 'قائمة رقمية QR', 'نظام كاشير مطعم',
    'برنامج إدارة مطعم', 'تطبيق توصيل مطعم', 'موقع كافيه', 'restaurant website Egypt',
  ].join(', '),
  alternates: { canonical: 'https://dogethertech.com/restaurant-software' },
  openGraph: {
    type: 'website',
    url: 'https://dogethertech.com/restaurant-software',
    title: 'حلول رقمية للمطاعم والكافيهات في مصر | DoGether',
    description: 'مواقع طلب أونلاين، قوائم QR، أنظمة كاشير وإدارة توصيل للمطاعم — بخبرة تنفيذ فعلية.',
    locale: 'ar_EG',
  },
}

const solutions = [
  { emoji: '🍽️', title: 'موقع طلب أونلاين', desc: 'موقع للمطعم يعرض القائمة بالصور والأسعار ويستقبل الطلبات مباشرة — بدل الاعتماد الكامل على تطبيقات التوصيل التي تأخذ عمولة من كل طلب.' },
  { emoji: '📱', title: 'قائمة رقمية QR', desc: 'قائمة يفتحها الزبون بمسح كود من الطاولة، محدّثة لحظياً بالأصناف والأسعار والعروض — بلا طباعة متكررة، وبعدة لغات للمناطق السياحية.' },
  { emoji: '🧾', title: 'نظام كاشير POS', desc: 'كاشير يدير الطلبات والطاولات والدليفري، يتابع المخزون والمكونات، ويعطيك تقارير المبيعات اليومية وأكثر الأصناف طلباً.' },
  { emoji: '🛵', title: 'إدارة التوصيل', desc: 'متابعة طلبات الدليفري من الاستلام حتى التسليم، تعيين السائقين، وحساب مناطق التوصيل ورسومها تلقائياً.' },
  { emoji: '💳', title: 'دفع أونلاين', desc: 'استقبال الدفع بالبطاقة وفوري ومحافظ الموبايل عند الطلب أونلاين — يقلّل الطلبات الوهمية ويسرّع التحصيل.' },
  { emoji: '⭐', title: 'ولاء وعروض', desc: 'نظام نقاط وكوبونات وعروض يعيد الزبون مرة أخرى، مع قائمة عملاء تسوّق لها عند إطلاق صنف جديد.' },
]

const faqs = [
  { q: 'كم تكلفة تصميم موقع مطعم بنظام طلب أونلاين؟', a: 'يبدأ موقع المطعم بنظام طلب أونلاين من حوالي 12,000 جنيه ويختلف حسب عدد الفروع وطريقة الدفع وإدارة التوصيل. نقدّم عرض سعر مجانياً بعد فهم احتياجك.' },
  { q: 'لماذا موقع خاص بدل تطبيقات التوصيل؟', a: 'تطبيقات التوصيل تأخذ عمولة كبيرة من كل طلب وتملك بيانات عملائك. موقعك الخاص يجعل الطلب المباشر بلا عمولة، ويبني لك قائمة عملاء تعيد التسويق لها — مع إمكانية الاستمرار في استخدام التطبيقات بالتوازي.' },
  { q: 'هل تبنون قائمة رقمية QR بعدة لغات؟', a: 'نعم، نبني قائمة QR تُحدّث لحظياً وتدعم عدة لغات — مفيدة تحديداً للمطاعم في المناطق السياحية التي تخدم زواراً أجانب.' },
  { q: 'هل يمكن ربط الموقع بنظام الكاشير؟', a: 'نعم، نربط الطلبات الأونلاين بنظام الكاشير POS بحيث تظهر مباشرة للمطبخ، وتُخصم المكونات من المخزون، وتظهر في تقارير المبيعات الموحّدة.' },
  { q: 'هل لديكم خبرة فعلية مع المطاعم؟', a: 'نعم، نفّذنا منصة «فطير وعسل» بنظام طلب أونلاين وإدارة توصيل وقائمة، وموقع «تشيكن ون» لمجموعة الزاوي — نماذج فعلية لما نبنيه لأي مطعم أو كافيه.' },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Restaurant software & website development',
  name: 'حلول رقمية للمطاعم والكافيهات في مصر',
  description: 'مواقع طلب أونلاين، قوائم QR، أنظمة كاشير وإدارة توصيل للمطاعم والكافيهات في مصر.',
  provider: { '@type': 'Organization', name: 'DoGether', '@id': 'https://dogethertech.com/#business', url: 'https://dogethertech.com', telephone: '+201062485133' },
  areaServed: { '@type': 'Country', name: 'Egypt' },
  url: 'https://dogethertech.com/restaurant-software',
}

export default function RestaurantSoftwarePage() {
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
          <span className="inline-block bg-white/15 rounded-full px-4 py-1 text-sm mb-4">حلول رقمية للمطاعم والكافيهات</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-snug">تصميم موقع مطعم ونظام طلب أونلاين وكاشير في مصر</h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            نبني للمطاعم والكافيهات مواقع طلب مباشر، قوائم QR رقمية، أنظمة كاشير وإدارة توصيل —
            تقلّل عمولة الوسطاء، وتبني لك قائمة عملاء تبيع لها كل يوم.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <a href="https://wa.me/201062485133" className="bg-white text-[#107060] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow">واتساب: 01062485133</a>
            <Link href="/work" className="border-2 border-white text-white px-7 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">شاهد مشروع فطير وعسل</Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-5xl">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">لماذا يحتاج مطعمك حضوراً رقمياً خاصاً؟</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            تطبيقات التوصيل فتحت باب الطلبات، لكنها تأخذ عمولة كبيرة من كل طلب، وتملك هي بيانات عملائك لا أنت.
            حين يكون لمطعمك موقع طلب مباشر وقائمة رقمية خاصة، يصبح كل طلب مباشر ربحاً كاملاً بلا عمولة، وتبني قاعدة
            عملاء تعيد التسويق لها عند كل صنف جديد أو عرض.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            نبني هذا الحضور متكاملاً: من القائمة التي يمسحها الزبون على الطاولة، إلى الطلب أونلاين، إلى الكاشير الذي
            يدير المطبخ والمخزون والتقارير — كله في نظام واحد يفهم تشغيل المطاعم فعلاً.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">حلولنا للمطاعم والكافيهات</h2>
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
          <h2 className="text-2xl font-bold mb-3">خلي مطعمك يبيع مباشرة</h2>
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
