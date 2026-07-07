import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'قائمة رقمية للمطاعم والمقاهي في مصر | QR Code | DoGether Tech',
  description:
    'قائمة رقمية بـ QR Code لمطعمك أو مقهاك في مصر. تحديث فوري للأسعار، دعم عربي وإنجليزي، بدون تطبيق. DoGether Tech تواصل: 01062485133',
  alternates: { canonical: 'https://dogethertech.com/services/digital-menu' },
  openGraph: {
    title: 'قائمة رقمية للمطاعم والمقاهي في مصر | DoGether Tech',
    description: 'قائمة رقمية QR Code للمطاعم — تحديث فوري للأسعار، عربي وإنجليزي، بدون تطبيق',
    url: 'https://dogethertech.com/services/digital-menu',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ما القائمة الرقمية وكيف تختلف عن القائمة الورقية؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'القائمة الرقمية هي صفحة ويب يصل إليها الزبون بمسح QR Code بكاميرا جواله — بدون تحميل تطبيق. تعرض الأصناف بصور ووصف وأسعار. تُحدَّث فورياً من لوحة تحكم بدون طباعة جديدة — مما يوفر تكلفة الطباعة المتكررة.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل يحتاج الزبون تحميل تطبيق للوصول للقائمة؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'لا على الإطلاق. الزبون يفتح كاميرا جواله، يمسح QR Code على الطاولة أو في المدخل، وتظهر القائمة فوراً في المتصفح. لا تسجيل، لا تحميل، لا حسابات.',
      },
    },
    {
      '@type': 'Question',
      name: 'كيف أحدّث الأسعار والأصناف بعد التسليم؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'من لوحة تحكم بسيطة تفتحها على جوالك أو حاسوبك، تعدّل السعر أو الوصف أو الصورة وتضغط حفظ — يظهر التغيير فوراً في القائمة الرقمية للزبائن. لا حاجة لطلب مطوّر أو إعادة طباعة.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل القائمة الرقمية مناسبة للفنادق والمنتجعات أيضاً؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نعم. نبني قوائم رقمية لمطاعم الفنادق بمتطلباتها الخاصة: قوائم متعددة للوجبات المختلفة (الإفطار، الغداء، العشاء)، دعم لغات متعددة، وتكامل مع نظام الغرف إذا لزم.',
      },
    },
    {
      '@type': 'Question',
      name: 'كم تكلفة القائمة الرقمية وهل هناك رسوم شهرية؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نقدم القائمة الرقمية برسوم تأسيس واحدة ورسوم استضافة سنوية بسيطة — لا رسوم شهرية مفاجئة. التفاصيل تعتمد على عدد الفروع وعمق التخصيص المطلوب.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://dogethertech.com' },
    { '@type': 'ListItem', position: 2, name: 'الخدمات', item: 'https://dogethertech.com/services' },
    { '@type': 'ListItem', position: 3, name: 'القائمة الرقمية', item: 'https://dogethertech.com/services/digital-menu' },
  ],
}

const features = [
  { title: 'QR Code لكل طاولة أو موقع', desc: 'نولّد QR Codes مميزة لكل طاولة أو فرع — تتبع من أين يأتي الزوار ومتى.' },
  { title: 'صور عالية الجودة للأصناف', desc: 'الصورة تبيع أكثر من أي وصف. نصمم القائمة لتُبرز أطباقك بشكل احترافي يفتح الشهية.' },
  { title: 'دعم العربية والإنجليزية', desc: 'زر تبديل اللغة في ثانية — مثالي للمطاعم التي تخدم مصريين وأجانب معاً.' },
  { title: 'تصنيفات وفلاتر', desc: 'المقبلات، الرئيسية، المشروبات، الحلويات — فلاتر تجعل التصفح سريعاً ومريحاً.' },
  { title: 'تحديث فوري بدون طباعة', desc: 'غيّر سعر أو اعرض صنفاً كـ "نفد" في ثوانٍ من الجوال — بلا تكاليف طباعة متكررة.' },
  { title: 'تكامل مع نظام POS', desc: 'يمكن ربط القائمة الرقمية بنظام الطلبات ليصل الطلب مباشرة للمطبخ بدون تدخل النادل.' },
]

export default function DigitalMenuPage() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
            <Link href="/services" className="hover:text-[#1E6DB2] transition-colors">الخدمات</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700">القائمة الرقمية</span>
          </nav>
          <div className="text-5xl mb-6">📋</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">القائمة الرقمية للمطاعم والمقاهي</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-8">قائمة بـ QR Code — يمسحها الزبون فيرى قائمتك كاملة بصور وأسعار، وتحدّثها أنت بدون طباعة جديدة</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/201062485133" className="bg-[#1E6DB2] text-white px-7 py-3 rounded-xl font-bold hover:bg-[#193F94] transition-colors shadow">اطلب قائمتك الرقمية</a>
            <Link href="/services" className="border-2 border-[#1E6DB2] text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">كل الخدمات</Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-5xl">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">لماذا تحتاج مطعمك قائمة رقمية؟</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">القائمة الورقية تتبلى وتتوسّخ وتحتاج طباعة جديدة مع كل تغيير في السعر أو الأصناف. القائمة الرقمية بـ QR Code تُحل هذه المشكلة كلها: تحديث في ثوانٍ من الجوال، لا تكاليف طباعة، وزبون يتصفح قائمة أنيقة بصور جذابة.</p>
          <p className="text-lg text-slate-700 leading-relaxed">DoGether Tech تصمم قوائم رقمية تعكس هوية مطعمك — بألوانك، خطوطك، وصورك — لا قوالب مملة متكررة. بنينا قوائم رقمية لمطاعم وكافيهات في مصر وفهمنا ما يحتاجه السوق المحلي.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">ما يميز قائمتك الرقمية معنا</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.title} className="p-5 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-bold text-slate-800 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">أسئلة شائعة عن القائمة الرقمية</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <details key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-slate-800 hover:bg-slate-50 transition-colors list-none">
                  <span>{faq.name}</span>
                  <span className="text-[#1DC7E0] text-lg">+</span>
                </summary>
                <div className="px-5 pb-5 text-slate-600 leading-relaxed text-sm">{faq.acceptedAnswer.text}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">خدمات ذات صلة</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/services/pos" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🏪 نظام نقاط البيع POS</Link>
            <Link href="/services/website" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🌐 تصميم موقع ويب للمطعم</Link>
            <Link href="/services/store" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🛒 قبول طلبات التوصيل أونلاين</Link>
            <Link href="/software-company" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🏢 شركة برمجة في مصر</Link>
          </div>
        </section>

        <div className="bg-gradient-to-l from-[#193F94] to-[#1E6DB2] rounded-2xl p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-3">وفّر تكاليف الطباعة من اليوم الأول</h2>
          <p className="mb-8 text-blue-200 text-lg">تواصل معنا لرؤية عينة حية من قائمتك الرقمية المستقبلية</p>
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
