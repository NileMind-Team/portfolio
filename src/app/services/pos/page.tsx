import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'نظام نقاط البيع POS والكاشير في مصر | DoGether Tech',
  description:
    'DoGether Tech تطور أنظمة POS مخصصة للمطاعم والصيدليات ومحلات التجزئة في مصر. يعمل أونلاين وأوفلاين، مرتبط بالمخزون، وسهل الاستخدام. تواصل: 01062485133',
  alternates: { canonical: 'https://dogethertech.com/services/pos' },
  openGraph: {
    title: 'نظام نقاط البيع POS والكاشير في مصر | DoGether Tech',
    description: 'أنظمة POS مخصصة للمطاعم والصيدليات والتجزئة — أونلاين وأوفلاين، مرتبط بالمخزون',
    url: 'https://dogethertech.com/services/pos',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ما الفرق بين نظام POS المخصص ونظام POS الجاهز؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'النظام الجاهز (مثل iSoft أو غيره) يأتي بوظائف ثابتة قد لا تناسب طبيعة عملك، ويفرض رسوم اشتراك شهرية دائمة. النظام المخصص من DoGether Tech يُبنى خصيصاً لطريقة عملك — سواء كنت مطعماً أو صيدلية أو سوبرماركت — وتمتلكه بالكامل بدون رسوم متكررة.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل نظام POS يعمل بدون اتصال بالإنترنت؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نعم. نصمم الأنظمة لتعمل في وضع أوفلاين وتحتفظ بالبيانات محلياً، ثم تُزامن تلقائياً مع السيرفر عند عودة الاتصال. لن تتوقف عمليات البيع بسبب انقطاع الإنترنت.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل يمكن ربط نظام POS بنظام إدارة المخزون تلقائياً؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نعم. كل عملية بيع تخصم تلقائياً من المخزون، مع تنبيهات عند وصول المخزون لحد الحد الأدنى. يمكن أيضاً ربطه بنظام محاسبة لمتابعة الإيرادات لحظة بلحظة.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل النظام يدعم الطابعات والباركود وأدراج الكاشير؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نعم. ندعم طابعات الإيصالات الحرارية (Epson، Star)، قارئات الباركود، أدراج الكاشير، وشاشات العرض للزبائن. نقدم الدعم الفني لتركيب وضبط الأجهزة أيضاً.',
      },
    },
    {
      '@type': 'Question',
      name: 'كم فرع يمكن إدارته من نظام POS واحد؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'النظام يدعم إدارة عدة فروع من لوحة تحكم مركزية واحدة — كل فرع بمخزونه وكاشيراته، مع تقارير موحدة تُظهر أداء كل فرع ومقارنته بالآخرين.',
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
    { '@type': 'ListItem', position: 3, name: 'نظام POS', item: 'https://dogethertech.com/services/pos' },
  ],
}

const useCases = [
  { sector: 'المطاعم والكافيهات', points: ['طلبات الطاولات', 'قائمة رقمية مرتبطة', 'تقسيم الفاتورة', 'طلبات التوصيل'] },
  { sector: 'الصيدليات', points: ['تتبع الأدوية والتواريخ', 'وصفات طبية رقمية', 'مخزون متعدد فروع', 'تقارير هيئة الدواء'] },
  { sector: 'محلات التجزئة', points: ['مسح الباركود', 'برامج الولاء والنقاط', 'إرجاع المنتجات', 'فواتير ضريبية'] },
  { sector: 'السوبرماركت', points: ['آلاف المنتجات بالباركود', 'عروض وخصومات مؤقتة', 'دفع متعدد القنوات', 'تحليل المبيعات اليومية'] },
]

export default function POSPage() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'POS System Development', name: 'نظام نقاط البيع POS', description: 'تطوير أنظمة POS وكاشير مخصصة للمطاعم والصيدليات ومحلات التجزئة في مصر — تعمل أونلاين وأوفلاين ومرتبطة بالمخزون.', provider: { '@type': 'Organization', name: 'DoGether Tech', '@id': 'https://dogethertech.com/#business', url: 'https://dogethertech.com', telephone: '+201062485133' }, areaServed: { '@type': 'Country', name: 'Egypt' }, url: 'https://dogethertech.com/services/pos' }) }} />

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
            <span className="text-slate-700">نظام POS</span>
          </nav>
          <div className="text-5xl mb-6">🏪</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">نظام نقاط البيع POS في مصر</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-8">أنظمة كاشير مخصصة للمطاعم والصيدليات والتجزئة — تعمل أونلاين وأوفلاين بلا انقطاع</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/201062485133" className="bg-[#1E6DB2] text-white px-7 py-3 rounded-xl font-bold hover:bg-[#193F94] transition-colors shadow">احصل على ديمو مجاني</a>
            <Link href="/services" className="border-2 border-[#1E6DB2] text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">كل الخدمات</Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-5xl">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">نظام POS مبني لطبيعة عملك — لا عكسه</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">كثير من أصحاب المطاعم والمحلات يشترون أنظمة POS جاهزة لتجد نفسها محاصراً بوظائف لا تحتاجها وناقصاً وظائف أساسية لطبيعة عملك. DoGether Tech تبني نظام نقاط البيع من الصفر ليعكس طريقة عملك الفعلية بالضبط.</p>
          <p className="text-lg text-slate-700 leading-relaxed">طورنا أنظمة POS لمطاعم تحتاج إدارة طاولات وطلبات توصيل، وصيدليات تحتاج تتبع تواريخ الأدوية، ومحلات تجزئة تحتاج مسح باركود سريع وتقارير يومية دقيقة.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">قطاعات نخدمها</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {useCases.map((uc) => (
              <div key={uc.sector} className="p-5 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-bold text-slate-800 mb-3">{uc.sector}</h3>
                <ul className="space-y-1">
                  {uc.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-[#1DC7E0] rounded-full flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">أسئلة شائعة عن أنظمة POS</h2>
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
            <Link href="/services/digital-menu" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">📋 القائمة الرقمية للمطاعم</Link>
            <Link href="/services/management-system" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">📊 أنظمة إدارة الأعمال</Link>
            <Link href="/services/store" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🛒 إنشاء متجر إلكتروني</Link>
            <Link href="/software-company" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🏢 شركة برمجة في مصر</Link>
          </div>
        </section>

        <div className="bg-gradient-to-l from-[#193F94] to-[#1E6DB2] rounded-2xl p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-3">نظام POS يناسب عملك تماماً</h2>
          <p className="mb-8 text-blue-200 text-lg">تواصل معنا لديمو مجاني وعرض سعر خلال 24 ساعة</p>
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
