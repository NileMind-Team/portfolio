import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'نظام إدارة الأعمال والمخازن في مصر | DoGether',
  description:
    'DoGether تطور أنظمة إدارة أعمال مخصصة في مصر: مخزون، موظفين، فواتير، وتقارير من لوحة تحكم واحدة. تواصل: 01062485133',
  alternates: { canonical: 'https://dogethertech.com/services/management-system' },
  openGraph: {
    title: 'نظام إدارة الأعمال والمخازن في مصر | DoGether',
    description: 'أنظمة إدارة مخصصة: مخزون، موظفين، فواتير، تقارير — كل شيء من مكان واحد',
    url: 'https://dogethertech.com/services/management-system',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ما الفرق بين نظام الإدارة المخصص ونظام ERP الجاهز؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'أنظمة ERP الجاهزة (SAP، Odoo) قوية لكنها معقدة وغالية ومصممة للشركات الكبيرة. نظام الإدارة المخصص من DoGether يركز على ما تحتاجه بالضبط — بدون تعقيدات لا تستخدمها، وبتكلفة مناسبة لحجم مشروعك.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل يمكن إدارة عدة فروع أو مستودعات من النظام؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نعم. النظام يدعم فروع ومستودعات متعددة مع التحكم في الصلاحيات — كل فرع يرى بيانات نفسه، والإدارة المركزية ترى كل شيء. تقارير موحدة وتقارير مفصلة لكل وحدة.',
      },
    },
    {
      '@type': 'Question',
      name: 'ما التقارير التي يمكن استخراجها من النظام؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'حسب المتطلبات، لكن عادةً: تقرير المبيعات اليومي/الشهري/السنوي، تقرير المخزون الحالي والحركة، تقرير ذمم العملاء، تقرير الموردين والمشتريات، وتقرير الأرباح والخسائر. كل تقرير قابل للتصدير كـ Excel أو PDF.',
      },
    },
    {
      '@type': 'Question',
      name: 'كم من الوقت يستغرق تدريب الفريق على النظام الجديد؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'لأن النظام مبني لطبيعة عملك بالضبط، فريقك يجد الواجهة مألوفة. التدريب عادةً جلسة أو جلستان (4-6 ساعات) يمكن عقدهما أونلاين أو حضورياً. نوفر أيضاً دليل مستخدم مكتوب ومصور.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل النظام يعمل على الجوال وليس الحاسوب فقط؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نعم. نبني النظام كتطبيق ويب متجاوب يعمل على الجوال والتابلت والحاسوب دون الحاجة لتثبيت برنامج. البعض يحتاج تطبيق جوال منفصل لوظائف محددة مثل جرد المخزون — نبنيه بناءً على الحاجة.',
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
    { '@type': 'ListItem', position: 3, name: 'نظام إدارة الأعمال', item: 'https://dogethertech.com/services/management-system' },
  ],
}

const modules = [
  { name: 'إدارة المخزون', desc: 'تتبع الكميات، تنبيهات النفاد، حركة الدخول والخروج، وتقييم المخزون.' },
  { name: 'إدارة المبيعات', desc: 'عروض أسعار، فواتير، متابعة العملاء، وتقارير المبيعات التفصيلية.' },
  { name: 'إدارة المشتريات', desc: 'طلبات الشراء، مقارنة الموردين، استلام البضاعة، وسداد الفواتير.' },
  { name: 'إدارة الموظفين', desc: 'بيانات الموظفين، الحضور والانصراف، الإجازات، والرواتب.' },
  { name: 'التقارير والإحصاءات', desc: 'لوحة تحكم بأهم المؤشرات، تقارير قابلة للتصدير، ومقارنات دورية.' },
  { name: 'إدارة العملاء (CRM)', desc: 'سجل تواصل مع كل عميل، متابعة الفرص، وتذكيرات المتابعة.' },
]

export default function ManagementSystemPage() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Business Management System', name: 'نظام إدارة الأعمال والمخازن', description: 'تطوير أنظمة إدارة أعمال مخصصة في مصر: مخزون، موظفين، فواتير، وتقارير من لوحة تحكم واحدة.', provider: { '@type': 'Organization', name: 'DoGether', '@id': 'https://dogethertech.com/#business', url: 'https://dogethertech.com', telephone: '+201062485133' }, areaServed: { '@type': 'Country', name: 'Egypt' }, url: 'https://dogethertech.com/services/management-system' }) }} />

      <header className="bg-gradient-to-l from-[#193F94] to-[#1DC7E0] text-white py-4 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">DoGether</Link>
          <a href="https://wa.me/201062485133" className="bg-white text-[#1E6DB2] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">ناقش مشروعك</a>
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
            <span className="text-slate-700">نظام إدارة الأعمال</span>
          </nav>
          <div className="text-5xl mb-6">📊</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">نظام إدارة الأعمال والمخازن في مصر</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-8">مخزون، موظفين، فواتير، وتقارير — كل شيء في مكان واحد، مخصص لطبيعة شركتك</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/201062485133" className="bg-[#1E6DB2] text-white px-7 py-3 rounded-xl font-bold hover:bg-[#193F94] transition-colors shadow">احصل على استشارة مجانية</a>
            <Link href="/services" className="border-2 border-[#1E6DB2] text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">كل الخدمات</Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-5xl">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">إدارة أعمالك بالكامل من شاشة واحدة</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">كثير من الشركات تدير أعمالها بمزيج من Excel وواتساب ودفاتر ورقية — وهذا يعني بيانات متفرقة، أخطاء متكررة، ووقت ضائع. نظام إدارة الأعمال من DoGether يجمع كل خيوط عملك في لوحة تحكم واحدة تُعطيك رؤية كاملة وقرارات مبنية على بيانات حقيقية.</p>
          <p className="text-lg text-slate-700 leading-relaxed">كل نظام نبنيه يختلف عن الآخر — لأن كل شركة لها طريقة عمل مختلفة. نبدأ بجلسة تحليل مفصلة نفهم فيها كيف تدير عملك الآن، ثم نبني لك النظام الذي يُحسّن ما يعمل ويُصلح ما لا يعمل.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">الوحدات الرئيسية للنظام</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {modules.map((m) => (
              <div key={m.name} className="p-5 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-bold text-slate-800 mb-2">{m.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">أسئلة شائعة عن أنظمة إدارة الأعمال</h2>
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
            <Link href="/services/custom-system" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🔧 الأنظمة البرمجية المخصصة</Link>
            <Link href="/services/pos" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🏪 نظام نقاط البيع POS</Link>
            <Link href="/services/store" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🛒 متجر إلكتروني مع إدارة مخزون</Link>
            <Link href="/software-company" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🏢 شركة برمجة في مصر</Link>
          </div>
        </section>

        <div className="bg-gradient-to-l from-[#193F94] to-[#1E6DB2] rounded-2xl p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-3">نظام يُحكم سيطرتك على أعمالك</h2>
          <p className="mb-8 text-blue-200 text-lg">استشارة مجانية لفهم احتياجك وعرض سعر مفصل خلال 24 ساعة</p>
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
