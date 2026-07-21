import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'متجر إلكتروني في الفيوم | ابدأ البيع أونلاين | DoGether',
  description:
    'إنشاء متجر إلكتروني في الفيوم مع بوابات دفع مصرية وإدارة مخزون وتوصيل. ابدأ بيع منتجاتك أونلاين لعملاء الفيوم ومصر كلها. أسعار من 15,000 جنيه. تواصل: 01062485133',
  alternates: { canonical: 'https://dogethertech.com/software-company/fayoum/online-store' },
  openGraph: {
    title: 'متجر إلكتروني في الفيوم | DoGether',
    description: 'إنشاء متجر إلكتروني في الفيوم — بوابات دفع مصرية، إدارة مخزون، وتوصيل',
    url: 'https://dogethertech.com/software-company/fayoum/online-store',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://dogethertech.com' },
    { '@type': 'ListItem', position: 2, name: 'شركة برمجة في مصر', item: 'https://dogethertech.com/software-company' },
    { '@type': 'ListItem', position: 3, name: 'الفيوم', item: 'https://dogethertech.com/software-company/fayoum' },
    { '@type': 'ListItem', position: 4, name: 'متجر إلكتروني', item: 'https://dogethertech.com/software-company/fayoum/online-store' },
  ],
}

const faqs = [
  {
    q: 'كم تكلفة إنشاء متجر إلكتروني في الفيوم؟',
    a: 'تبدأ أسعار المتاجر الإلكترونية من حوالي 15,000 جنيه لمتجر أساسي ببوابة دفع وإدارة منتجات، وتزيد مع الوظائف الإضافية مثل الشحن وبرامج الولاء وتعدد الفروع. عرض السعر مجاني بعد تحديد احتياجك.',
  },
  {
    q: 'إزاي هستقبل مدفوعات العملاء؟',
    a: 'ندمج بوابات الدفع المصرية Paymob وFawry التي تدعم الفيزا والماستركارد وMeeza والدفع عند الاستلام — مناسبة لعملاء الفيوم الذين يفضّل بعضهم الدفع كاش عند التوصيل.',
  },
  {
    q: 'هل أقدر أبيع لعملاء خارج الفيوم؟',
    a: 'بالتأكيد. المتجر الإلكتروني يفتح لك السوق المصري كله — تستقبل طلبات من أي محافظة وتربطها بشركات شحن مثل Bosta لتوصيلها. المتجر يكسر حدود الموقع الجغرافي لنشاطك.',
  },
  {
    q: 'هل المتجر سهل الإدارة من غير خبرة تقنية؟',
    a: 'نعم. نسلّمك لوحة تحكم بسيطة بالعربية تضيف منها المنتجات والأسعار والصور وتتابع الطلبات — بدون أي خبرة برمجية. ونوفّر تدريباً وباقة دعم عند الحاجة.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'E-commerce Development',
  name: 'إنشاء متجر إلكتروني في الفيوم',
  description: 'إنشاء متاجر إلكترونية متكاملة لأصحاب الأعمال في محافظة الفيوم مع بوابات دفع مصرية.',
  provider: { '@type': 'Organization', name: 'DoGether', '@id': 'https://dogethertech.com/#business', url: 'https://dogethertech.com', telephone: '+201062485133' },
  areaServed: { '@type': 'City', name: 'Fayoum' },
  url: 'https://dogethertech.com/software-company/fayoum/online-store',
}

export default function FayoumOnlineStorePage() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <header className="bg-gradient-to-l from-[#193F94] to-[#1DC7E0] text-white py-4 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">DoGether</Link>
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
            <Link href="/software-company/fayoum" className="hover:text-[#1E6DB2] transition-colors">الفيوم</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700">متجر إلكتروني</span>
          </nav>
          <div className="text-5xl mb-6">🛒</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">متجر إلكتروني في الفيوم</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-8">حوّل نشاطك في الفيوم إلى متجر يبيع أونلاين على مدار الساعة — لعملاء المحافظة ومصر كلها</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/201062485133" className="bg-[#1E6DB2] text-white px-7 py-3 rounded-xl font-bold hover:bg-[#193F94] transition-colors shadow">ابدأ متجرك الآن</a>
            <Link href="/software-company/fayoum" className="border-2 border-[#1E6DB2] text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">كل خدمات الفيوم</Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-4xl">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">ليه تفتح متجر إلكتروني وأنت في الفيوم؟</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            المحل التقليدي في الفيوم يخدم من يمرّ بالشارع فقط وفي ساعات العمل. المتجر الإلكتروني يبيع 24 ساعة، ويصل لعميل في القاهرة أو الإسكندرية بنفس سهولة عميل في الفيوم. كثير من منتجات الفيوم — من المنتجات الغذائية والحرف اليدوية إلى الملابس ومستحضرات التجميل — لها طلب خارج المحافظة لا تستطيع الوصول إليه بدون متجر أونلاين.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            في DoGether نبني متجرك بكود تمتلكه أنت — بدون رسوم اشتراك شهرية للمنصة كما في الحلول الجاهزة — ومُهيّأ للسوق المصري من أول يوم: دفع محلي، واجهة عربية سليمة، وسرعة تحميل تحافظ على العميل. خبرتنا الحقيقية تشمل متاجر إلكترونية فعلية مثل متجر مجموعة الزعوي ومتجر مستحضرات تجميل ننفّذها بنفس الجودة لعملاء الفيوم.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">ما الذي يشمله متجرك</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { t: 'بوابات دفع مصرية', d: 'Paymob وFawry — فيزا، ماستركارد، Meeza، والدفع عند الاستلام.' },
              { t: 'لوحة تحكم عربية بسيطة', d: 'أضف منتجات وأسعار وصور وتابع الطلبات بدون خبرة تقنية.' },
              { t: 'إدارة مخزون وطلبات', d: 'خصم تلقائي من المخزون وتتبع كل طلب من الاستلام للتسليم.' },
              { t: 'ربط بالشحن', d: 'تكامل مع شركات شحن مصرية لتوصيل طلباتك لأي محافظة.' },
              { t: 'SEO للمتجر والمنتجات', d: 'كل صفحة منتج مبنية لتظهر في جوجل وتجذب باحثين جدد.' },
              { t: 'كوبونات وعروض', d: 'أنشئ خصومات وكوبونات بشروط مرنة لزيادة المبيعات.' },
            ].map((x) => (
              <div key={x.t} className="p-5 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-bold text-slate-800 mb-2">{x.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">أسعار تقريبية</h2>
          <div className="space-y-3">
            {[
              { p: 'متجر أساسي (بوابة دفع + منتجات)', price: 'من 15,000 جنيه' },
              { p: 'متجر متكامل (شحن + كوبونات + تقارير)', price: 'من 22,000 جنيه' },
              { p: 'متجر بمواصفات خاصة', price: 'حسب المواصفات' },
            ].map((x) => (
              <div key={x.p} className="flex justify-between items-center p-4 bg-white border border-slate-200 rounded-xl">
                <span className="text-slate-700 font-medium">{x.p}</span>
                <span className="text-[#1E6DB2] font-bold">{x.price}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500 mt-3">* الأسعار تقريبية للاسترشاد. عرض السعر النهائي مجاني بعد فهم متطلباتك.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">أسئلة شائعة عن المتاجر الإلكترونية في الفيوم</h2>
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

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">خدمات أخرى في الفيوم</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/software-company/fayoum/web-design" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🌐 تصميم مواقع في الفيوم</Link>
            <Link href="/software-company/fayoum/pos" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🏪 برنامج كاشير في الفيوم</Link>
            <Link href="/software-company/fayoum/mobile-app" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">📱 تطبيق جوال في الفيوم</Link>
            <Link href="/services/store" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🛒 تفاصيل خدمة المتاجر الإلكترونية</Link>
          </div>
        </section>

        <div className="bg-gradient-to-l from-[#193F94] to-[#1E6DB2] rounded-2xl p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-3">حوّل نشاطك في الفيوم إلى متجر يبيع</h2>
          <p className="mb-8 text-blue-200 text-lg">استشارة مجانية وعرض سعر خلال 24 ساعة</p>
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
