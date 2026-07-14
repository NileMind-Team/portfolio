import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'إنشاء متجر إلكتروني في مصر | Paymob & Fawry | DoGether Tech',
  description:
    'DoGether Tech تبني متاجر إلكترونية احترافية في مصر مع بوابات دفع Paymob وFawry، إدارة مخزون، ولوحة تحكم كاملة. تواصل: 01062485133',
  alternates: { canonical: 'https://dogethertech.com/services/store' },
  openGraph: {
    title: 'إنشاء متجر إلكتروني في مصر | DoGether Tech',
    description: 'متاجر إلكترونية متكاملة في مصر — Paymob، Fawry، إدارة مخزون، جاهزة للمبيعات',
    url: 'https://dogethertech.com/services/store',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'كم تكلفة إنشاء متجر إلكتروني في مصر؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'تكلفة المتجر الإلكتروني تبدأ من 15,000 جنيه للمتاجر الأساسية مع بوابة دفع واحدة وإدارة منتجات، وترتفع حسب عدد المنتجات والوظائف المطلوبة كالشحن والتوصيل وبرامج الولاء.',
      },
    },
    {
      '@type': 'Question',
      name: 'ما بوابات الدفع الإلكتروني التي تدعمونها في مصر؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ندعم Paymob وFawry كبوابات الدفع الرئيسية في السوق المصري. كلاهما يدعم الفيزا والماستركارد وMeeza وFawry Pay والدفع عند الاستلام. يمكن تفعيل بوابة أو أكثر حسب احتياج مشروعك.',
      },
    },
    {
      '@type': 'Question',
      name: 'كيف أدير طلبات الشحن والتوصيل من المتجر؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نبني لوحة تحكم تمكنك من إدارة الطلبات، تتبع حالة الشحن، وتحديث العميل تلقائياً بالرسائل. يمكن الربط بشركات شحن مصرية كـ Bosta وAramex عند الطلب.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل يمكن ربط المتجر بمنصات التواصل الاجتماعي وGoogle Shopping؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نعم. يمكن إضافة Meta Pixel لتتبع الإعلانات على Facebook وInstagram، وتصدير كتالوج المنتجات لـ Google Merchant Center للظهور في Google Shopping.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل المتجر يعمل بكفاءة على الجوال؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نعم تماماً. ٧٠٪+ من مبيعات المتاجر الإلكترونية في مصر تأتي من الجوال، لذلك نضمن تجربة شراء سلسة ومريحة على كل أحجام الشاشات دون الحاجة لتطبيق منفصل.',
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
    { '@type': 'ListItem', position: 3, name: 'إنشاء متجر إلكتروني', item: 'https://dogethertech.com/services/store' },
  ],
}

const features = [
  { title: 'بوابات دفع مصرية موثوقة', desc: 'Paymob وFawry مدمجتان من اليوم الأول — دفع فوري بالبطاقة، Meeza، وFawry Pay.' },
  { title: 'لوحة تحكم المنتجات', desc: 'أضف منتجات، صور، أسعار، ومخزون بضغطة. تعديل مباشر بدون حاجة لمطور.' },
  { title: 'إدارة الطلبات والشحن', desc: 'متابعة كل طلب من لحظة الاستلام حتى التسليم، مع إشعارات تلقائية للعميل.' },
  { title: 'SEO للمتجر', desc: 'كل صفحة منتج تُبنى لتظهر في Google — metadata، schema.org، وعناوين URL نظيفة.' },
  { title: 'كوبونات وخصومات', desc: 'أنشئ كوبونات بشروط مرنة: نسبة مئوية، مبلغ ثابت، حد أدنى للطلب، تواريخ انتهاء.' },
  { title: 'تقارير المبيعات', desc: 'لوحة تحليلات تعرض إيراداتك اليومية، المنتجات الأكثر مبيعاً، وسلوك العملاء.' },
]

export default function StorePage() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'E-commerce Development', name: 'إنشاء متجر إلكتروني', description: 'إنشاء متاجر إلكترونية متكاملة في مصر مع بوابات دفع Paymob وFawry، إدارة مخزون، ولوحة تحكم كاملة.', provider: { '@type': 'Organization', name: 'DoGether Tech', '@id': 'https://dogethertech.com/#business', url: 'https://dogethertech.com', telephone: '+201062485133' }, areaServed: { '@type': 'Country', name: 'Egypt' }, url: 'https://dogethertech.com/services/store' }) }} />

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
            <span className="text-slate-700">متجر إلكتروني</span>
          </nav>
          <div className="text-5xl mb-6">🛒</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">إنشاء متجر إلكتروني في مصر</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-8">متجر إلكتروني متكامل مع Paymob وFawry — جاهز لاستقبال المبيعات من اليوم الأول</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/201062485133" className="bg-[#1E6DB2] text-white px-7 py-3 rounded-xl font-bold hover:bg-[#193F94] transition-colors shadow">ابدأ متجرك الآن</a>
            <Link href="/services" className="border-2 border-[#1E6DB2] text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">كل الخدمات</Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-5xl">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">متجر إلكتروني مصري حقيقي — لا قوالب جاهزة</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">المتجر الإلكتروني الجاهز (Shopify، WooCommerce) يبدو سريعاً في البداية لكنه يفرض عليك رسوم شهرية متراكمة، قيوداً في التخصيص، وأداءً أبطأ. DoGether Tech تبني لك متجراً مخصصاً بكامل كوده تمتلكه أنت — بدون اشتراكات شهرية للمنصة.</p>
          <p className="text-lg text-slate-700 leading-relaxed">متجرنا مُحسَّن للسوق المصري من أول يوم: بوابات دفع محلية (Paymob وFawry)، واجهة عربية RTL سليمة، وسرعة تحميل تُبقي الزبون في الموقع بدلاً من المغادرة.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">ما يميز متجرك معنا</h2>
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
          <h2 className="text-2xl font-bold text-slate-800 mb-6">أسئلة شائعة عن المتاجر الإلكترونية</h2>
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
            <Link href="/services/website" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🌐 تصميم مواقع الويب</Link>
            <Link href="/services/pos" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🏪 أنظمة نقاط البيع POS</Link>
            <Link href="/services/management-system" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">📊 أنظمة إدارة الأعمال</Link>
            <Link href="/software-company" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🏢 شركة برمجة في مصر</Link>
          </div>
        </section>

        <div className="bg-gradient-to-l from-[#193F94] to-[#1E6DB2] rounded-2xl p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-3">حوّل فكرتك إلى متجر يبيع</h2>
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
