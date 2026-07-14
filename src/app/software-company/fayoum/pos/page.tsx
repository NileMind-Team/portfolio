import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'برنامج كاشير في الفيوم | نظام نقاط بيع POS | DoGether Tech',
  description:
    'برنامج كاشير ونظام نقاط بيع POS للمحلات والمطاعم والصيدليات في الفيوم. يعمل أونلاين وأوفلاين، مرتبط بالمخزون، وسهل الاستخدام. تواصل: 01062485133',
  alternates: { canonical: 'https://dogethertech.com/software-company/fayoum/pos' },
  openGraph: {
    title: 'برنامج كاشير في الفيوم | DoGether Tech',
    description: 'نظام نقاط بيع POS للمحلات والمطاعم والصيدليات في الفيوم — أونلاين وأوفلاين',
    url: 'https://dogethertech.com/software-company/fayoum/pos',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://dogethertech.com' },
    { '@type': 'ListItem', position: 2, name: 'شركة برمجة في مصر', item: 'https://dogethertech.com/software-company' },
    { '@type': 'ListItem', position: 3, name: 'الفيوم', item: 'https://dogethertech.com/software-company/fayoum' },
    { '@type': 'ListItem', position: 4, name: 'برنامج كاشير', item: 'https://dogethertech.com/software-company/fayoum/pos' },
  ],
}

const faqs = [
  {
    q: 'هل برنامج الكاشير بيشتغل من غير إنترنت؟',
    a: 'نعم. نصمم النظام ليعمل في وضع أوفلاين ويحتفظ بالبيانات محلياً، ثم يتزامن تلقائياً عند عودة الإنترنت. لن تتوقف مبيعاتك في الفيوم بسبب انقطاع الاتصال.',
  },
  {
    q: 'أنواع المحلات اللي بيناسبها البرنامج في الفيوم؟',
    a: 'صممنا أنظمة كاشير لمطاعم وكافيهات (إدارة طاولات وطلبات)، صيدليات (تتبع تواريخ الأدوية)، سوبرماركت ومحلات تجزئة (باركود وعروض). نبني لكل نشاط ما يناسب طريقة عمله.',
  },
  {
    q: 'هل البرنامج بيتربط بالمخزون والتقارير؟',
    a: 'نعم. كل عملية بيع تُخصم من المخزون تلقائياً مع تنبيهات النفاد، ولوحة تقارير تعرض مبيعاتك اليومية والأصناف الأكثر مبيعاً — تساعدك تتخذ قرارات مبنية على أرقام حقيقية.',
  },
  {
    q: 'هل بيدعم الطابعات وقارئ الباركود؟',
    a: 'نعم، ندعم طابعات الإيصالات الحرارية، قارئات الباركود، وأدراج الكاشير، ونساعدك في تركيب وضبط الأجهزة في محلك بالفيوم.',
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
  serviceType: 'POS System Development',
  name: 'برنامج كاشير في الفيوم',
  description: 'أنظمة نقاط بيع وكاشير للمحلات والمطاعم والصيدليات في محافظة الفيوم.',
  provider: { '@type': 'Organization', name: 'DoGether Tech', '@id': 'https://dogethertech.com/#business', url: 'https://dogethertech.com', telephone: '+201062485133' },
  areaServed: { '@type': 'City', name: 'Fayoum' },
  url: 'https://dogethertech.com/software-company/fayoum/pos',
}

export default function FayoumPosPage() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <header className="bg-gradient-to-l from-[#193F94] to-[#1DC7E0] text-white py-4 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">DoGether Tech</Link>
          <a href="https://wa.me/201062485133" className="bg-white text-[#1E6DB2] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">احصل على ديمو</a>
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
            <span className="text-slate-700">برنامج كاشير</span>
          </nav>
          <div className="text-5xl mb-6">🏪</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">برنامج كاشير في الفيوم</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-8">نظام نقاط بيع POS لمحلك أو مطعمك أو صيدليتك في الفيوم — يعمل أونلاين وأوفلاين بلا انقطاع</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/201062485133" className="bg-[#1E6DB2] text-white px-7 py-3 rounded-xl font-bold hover:bg-[#193F94] transition-colors shadow">احصل على ديمو مجاني</a>
            <Link href="/software-company/fayoum" className="border-2 border-[#1E6DB2] text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">كل خدمات الفيوم</Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-4xl">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">نظام كاشير مبني لطريقة عمل محلك في الفيوم</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            كثير من أصحاب المحلات في الفيوم ما زالوا يديرون المبيعات بالورقة والقلم أو ببرامج جاهزة لا تناسب طبيعة نشاطهم. النتيجة: أخطاء في الحساب، مخزون غير معروف، وقرارات بلا أرقام. برنامج الكاشير من DoGether Tech ينظّم كل ذلك في شاشة واحدة سهلة، ويُبنى ليعكس طريقة عمل محلك بالضبط — لا قالباً جاهزاً.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            سواء كنت تدير مطعماً في وسط الفيوم يحتاج إدارة طاولات وطلبات توصيل، صيدلية تحتاج تتبع تواريخ صلاحية الأدوية، أو سوبرماركت يحتاج مسح باركود سريع — نصمم النظام على مقاسك. ولأن مقرنا في الفيوم، نقدر ندعمك عن قرب في التركيب والتدريب.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">قطاعات نخدمها بأنظمة الكاشير</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { t: 'المطاعم والكافيهات', d: 'إدارة طاولات، طلبات توصيل، تقسيم فاتورة، وربط بالقائمة الرقمية.' },
              { t: 'الصيدليات', d: 'تتبع الأدوية وتواريخ الصلاحية، بحث سريع، وتقارير مبيعات.' },
              { t: 'محلات التجزئة والملابس', d: 'باركود، مقاسات وألوان، برامج ولاء ونقاط، وإرجاع منتجات.' },
              { t: 'السوبرماركت', d: 'آلاف المنتجات بالباركود، عروض مؤقتة، ودفع متعدد القنوات.' },
            ].map((x) => (
              <div key={x.t} className="p-5 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-bold text-slate-800 mb-2">{x.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">أسئلة شائعة عن برنامج الكاشير في الفيوم</h2>
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
            <Link href="/software-company/fayoum/online-store" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🛒 متجر إلكتروني في الفيوم</Link>
            <Link href="/software-company/fayoum/mobile-app" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">📱 تطبيق جوال في الفيوم</Link>
            <Link href="/services/pos" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🏪 تفاصيل خدمة أنظمة POS</Link>
          </div>
        </section>

        <div className="bg-gradient-to-l from-[#193F94] to-[#1E6DB2] rounded-2xl p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-3">نظّم مبيعات محلك في الفيوم</h2>
          <p className="mb-8 text-blue-200 text-lg">اطلب ديمو مجاني وعرض سعر خلال 24 ساعة</p>
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
