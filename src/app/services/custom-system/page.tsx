import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'تطوير أنظمة برمجية مخصصة في مصر | DoGether Tech',
  description:
    'DoGether Tech تطور أنظمة برمجية مخصصة في مصر لأي قطاع. كود مخصص 100%، تمتلكه بالكامل، قابل للتوسع. تواصل: 01062485133',
  alternates: { canonical: 'https://dogethertech.com/services/custom-system' },
  openGraph: {
    title: 'تطوير أنظمة برمجية مخصصة في مصر | DoGether Tech',
    description: 'أنظمة برمجية مخصصة لاحتياجات شركتك — لا قوالب، لا اشتراكات، تملكه بالكامل',
    url: 'https://dogethertech.com/services/custom-system',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'متى أحتاج نظاماً مخصصاً بدلاً من حل جاهز؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'تحتاج نظاماً مخصصاً عندما: لا يوجد حل جاهز يغطي متطلباتك الكاملة، أو الحلول الجاهزة تفرض قيوداً تعرقل سير عملك، أو تحتاج تكاملاً عميقاً مع أنظمة أخرى، أو حجم استخدامك يجعل الاشتراكات الشهرية أغلى من بناء النظام.',
      },
    },
    {
      '@type': 'Question',
      name: 'ما أنواع الأنظمة المخصصة التي تطورونها؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'طورنا أنظمة لقطاعات متنوعة: أنظمة إدارة حجوزات (مواصلات، فنادق)، منصات تعليمية، أنظمة مزادات إلكترونية، بوابات خدمات حكومية، أنظمة تتبع أسطول سيارات، ومنصات B2B للتجارة بين الشركات.',
      },
    },
    {
      '@type': 'Question',
      name: 'من يمتلك كود المصدر (Source Code) بعد التسليم؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'أنت تمتلك كود المصدر كاملاً فور اكتمال الدفع. نسلمك المستودع (Repository) بكل الملفات والتوثيق. لا قيود، لا استضافة إجبارية معنا، ولا رسوم ترخيص مستقبلية.',
      },
    },
    {
      '@type': 'Question',
      name: 'كيف تضمنون أمان البيانات في الأنظمة التي تطورونها؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نُطبق معايير الأمان من اليوم الأول: تشفير البيانات الحساسة، HTTPS، حماية من SQL Injection وXSS وCSRF، نظام صلاحيات دقيق، وسجل تدقيق (Audit Log) لكل العمليات الحساسة.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل يمكن توسيع النظام وإضافة وظائف جديدة مستقبلاً؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نعم. نبني الأنظمة بهندسة قابلة للتوسع (Scalable Architecture) — يمكن إضافة وظائف جديدة دون إعادة بناء الأساس. لهذا السبب نوثّق الكود ونضع واجهات برمجية واضحة من البداية.',
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
    { '@type': 'ListItem', position: 3, name: 'الأنظمة المخصصة', item: 'https://dogethertech.com/services/custom-system' },
  ],
}

const process = [
  { step: '١', title: 'تحليل المتطلبات', desc: 'جلسة عمل معمقة لفهم كل تفاصيل عملك وتوثيق كل وظيفة مطلوبة.' },
  { step: '٢', title: 'تصميم الهندسة', desc: 'نرسم هندسة النظام (Architecture) قبل بدء الكود ونعرضها عليك للمراجعة.' },
  { step: '٣', title: 'تطوير تدريجي', desc: 'نبني النظام على مراحل — كل مرحلة تُسلَّم وتُختبر قبل الانتقال للتالية.' },
  { step: '٤', title: 'اختبار شامل', desc: 'اختبار وظيفي، اختبار أداء، واختبار أمان قبل الإطلاق الفعلي.' },
  { step: '٥', title: 'التسليم والتدريب', desc: 'نسلمك الكود الكامل مع التوثيق، ونقدم تدريباً لفريقك على استخدام النظام.' },
  { step: '٦', title: 'دعم ما بعد الإطلاق', desc: 'فترة ضمان مجانية بعد الإطلاق، ثم باقات دعم وتطوير مستمر.' },
]

export default function CustomSystemPage() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Custom Software Development', name: 'تطوير أنظمة برمجية مخصصة', description: 'تطوير أنظمة برمجية مخصصة في مصر لأي قطاع — كود مخصص بالكامل تمتلكه أنت، قابل للتوسع، بدون اشتراكات شهرية.', provider: { '@type': 'Organization', name: 'DoGether Tech', '@id': 'https://dogethertech.com/#business', url: 'https://dogethertech.com', telephone: '+201062485133' }, areaServed: { '@type': 'Country', name: 'Egypt' }, url: 'https://dogethertech.com/services/custom-system' }) }} />

      <header className="bg-gradient-to-l from-[#193F94] to-[#1DC7E0] text-white py-4 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">DoGether Tech</Link>
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
            <span className="text-slate-700">أنظمة مخصصة</span>
          </nav>
          <div className="text-5xl mb-6">🔧</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">تطوير أنظمة برمجية مخصصة في مصر</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-8">نبني النظام الذي تحتاجه بالضبط — بدون قيود حلول جاهزة، وبدون اشتراكات شهرية إلى الأبد</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/201062485133" className="bg-[#1E6DB2] text-white px-7 py-3 rounded-xl font-bold hover:bg-[#193F94] transition-colors shadow">ناقش فكرتك معنا</a>
            <Link href="/services" className="border-2 border-[#1E6DB2] text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">كل الخدمات</Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-5xl">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">الحلول الجاهزة تعالج مشاكل الآخرين — لا مشاكلك</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">كل عمل تجاري له آلية عمل خاصة به — طريقة تفكير، تصنيف، متابعة، وإعداد تقارير مختلفة. الحلول الجاهزة تصمم لـ"متوسط" العملاء، وهذا يعني أنك إما ستكيّف عملك ليناسب البرنامج أو ستعيش مع قيود لا نهاية لها.</p>
          <p className="text-lg text-slate-700 leading-relaxed">DoGether Tech تبني النظام الذي يتكيف مع عملك — لا العكس. نبدأ بفهم عميق لكل خطوة في سير عملك، ثم نترجمها إلى نظام برمجي دقيق تمتلكه بالكامل.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">كيف نبني نظامك المخصص</h2>
          <div className="space-y-4">
            {process.map((p) => (
              <div key={p.step} className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-[#1E6DB2] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {p.step}
                </div>
                <div>
                  <div className="font-bold text-slate-800">{p.title}</div>
                  <div className="text-sm text-slate-500 mt-1">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">أسئلة شائعة عن الأنظمة المخصصة</h2>
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
            <Link href="/services/management-system" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">📊 أنظمة إدارة الأعمال</Link>
            <Link href="/services/mobile-app" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">📱 تطوير تطبيقات الجوال</Link>
            <Link href="/services/website" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🌐 تصميم مواقع الويب</Link>
            <Link href="/software-company" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🏢 شركة برمجة في مصر</Link>
          </div>
        </section>

        <div className="bg-gradient-to-l from-[#193F94] to-[#1E6DB2] rounded-2xl p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-3">فكرة في ذهنك؟ ننفذها معك</h2>
          <p className="mb-8 text-blue-200 text-lg">تواصل معنا وأخبرنا بما تحتاجه — نقدر نحوله لنظام حقيقي</p>
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
