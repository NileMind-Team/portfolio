import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'دعم فني وصيانة مواقع وتطبيقات في مصر | DoGether Tech',
  description:
    'DoGether Tech تقدم خدمات دعم فني وصيانة دورية لمواقع الويب والتطبيقات والأنظمة في مصر. استجابة سريعة، تحديثات منتظمة، وأداء مستمر. تواصل: 01062485133',
  alternates: { canonical: 'https://dogethertech.com/services/support' },
  openGraph: {
    title: 'دعم فني وصيانة مواقع وتطبيقات في مصر | DoGether Tech',
    description: 'دعم فني وصيانة دورية لمواقعك وتطبيقاتك — استجابة سريعة وأداء مستمر',
    url: 'https://dogethertech.com/services/support',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ما الفرق بين الدعم الفني والصيانة الدورية؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'الدعم الفني هو التعامل مع المشاكل الطارئة — خطأ ظهر، صفحة لا تعمل، أو ميزة توقفت. الصيانة الدورية هي عمل وقائي منتظم: تحديث المكتبات، نسخ احتياطية، مراقبة الأداء، وإصلاح الثغرات الأمنية قبل أن تصبح مشكلة.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل تدعمون مواقع وأنظمة لم تبنوها أنتم؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نعم. نقدم خدمات صيانة لمواقع وتطبيقات بنتها شركات أخرى أو مطورون مستقلون. نبدأ بجلسة مراجعة تقنية للكود والبنية، ثم نقدم خطة صيانة مناسبة.',
      },
    },
    {
      '@type': 'Question',
      name: 'كم وقت الاستجابة عند حدوث عطل طارئ؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'باقات الدعم الطارئ لدينا تضمن الاستجابة الأولية خلال ساعة واحدة في أوقات العمل. للعطلات والأوقات خارج العمل، وقت الاستجابة يختلف حسب باقة الدعم المتفق عليها.',
      },
    },
    {
      '@type': 'Question',
      name: 'ما الذي تشمله باقة الصيانة الشهرية؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'الباقة الأساسية تشمل: نسخ احتياطية أسبوعية، تحديث المكتبات والإضافات، مراقبة وقت التشغيل (Uptime)، وإصلاح الأخطاء البسيطة. الباقات المتقدمة تضيف تقارير أداء شهرية وتحسينات السرعة والأمان.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل يشمل الدعم تحسين سرعة الموقع وأمانه؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نعم. نتضمن تحليل Core Web Vitals دوري، ضغط الصور، تحسين الكاش، وفحص الثغرات الأمنية ضمن باقات الصيانة المتقدمة. موقع سريع وآمن = ترتيب أفضل في Google وتجربة أفضل للزائر.',
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
    { '@type': 'ListItem', position: 3, name: 'الدعم والصيانة', item: 'https://dogethertech.com/services/support' },
  ],
}

const packages = [
  {
    name: 'باقة الأساسية',
    features: ['نسخ احتياطية أسبوعية', 'مراقبة وقت التشغيل', 'تحديث المكتبات', 'إصلاح الأخطاء البسيطة'],
    suitable: 'للمواقع التعريفية والمدونات',
  },
  {
    name: 'باقة الاحترافية',
    features: ['كل مزايا الأساسية', 'تقرير أداء شهري', 'تحسين السرعة والكاش', 'فحص الثغرات الأمنية', 'استجابة خلال ساعة'],
    suitable: 'للمتاجر والمنصات النشطة',
  },
  {
    name: 'باقة الأعمال',
    features: ['كل مزايا الاحترافية', 'دعم طارئ 24/7', 'تحديثات محتوى شهرية', 'تقارير تفصيلية', 'مدير حساب مخصص'],
    suitable: 'للأنظمة الحيوية والشركات الكبيرة',
  },
]

export default function SupportPage() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Technical Support & Maintenance', name: 'الدعم الفني والصيانة', description: 'خدمات دعم فني وصيانة دورية لمواقع الويب والتطبيقات والأنظمة في مصر — استجابة سريعة، تحديثات منتظمة، وأداء مستمر.', provider: { '@type': 'Organization', name: 'DoGether Tech', '@id': 'https://dogethertech.com/#business', url: 'https://dogethertech.com', telephone: '+201062485133' }, areaServed: { '@type': 'Country', name: 'Egypt' }, url: 'https://dogethertech.com/services/support' }) }} />

      <header className="bg-gradient-to-l from-[#193F94] to-[#1DC7E0] text-white py-4 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">DoGether Tech</Link>
          <a href="https://wa.me/201062485133" className="bg-white text-[#1E6DB2] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">تواصل معنا</a>
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
            <span className="text-slate-700">الدعم والصيانة</span>
          </nav>
          <div className="text-5xl mb-6">🛡️</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">دعم فني وصيانة مواقع وأنظمة في مصر</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-8">موقعك وتطبيقك ونظامك بأيدٍ أمينة — استجابة سريعة وصيانة دورية تمنع المشاكل قبل وقوعها</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/201062485133" className="bg-[#1E6DB2] text-white px-7 py-3 rounded-xl font-bold hover:bg-[#193F94] transition-colors shadow">اشترك في الدعم الآن</a>
            <Link href="/services" className="border-2 border-[#1E6DB2] text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">كل الخدمات</Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-5xl">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">موقعك يحتاج رعاية — لا مجرد بناء</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">تطوير الموقع أو التطبيق هو البداية فقط. المكتبات تحتاج تحديثات، الثغرات الأمنية تظهر، الأداء يتراجع مع الوقت، والمحتوى يحتاج تحديثاً. بدون صيانة دورية، موقعك الجميل يتحول لعبء بدلاً من أن يكون أصلاً تجارياً.</p>
          <p className="text-lg text-slate-700 leading-relaxed">DoGether Tech تتولى الصيانة الدورية لمواقعك وتطبيقاتك وأنظمتك — سواء بنتها نحن أو شركة أخرى — بحيث تعمل بأقصى كفاءة دائماً.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">باقات الدعم والصيانة</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {packages.map((pkg) => (
              <div key={pkg.name} className="p-5 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] transition-colors">
                <h3 className="font-bold text-slate-800 mb-1">{pkg.name}</h3>
                <p className="text-xs text-[#1DC7E0] mb-4">{pkg.suitable}</p>
                <ul className="space-y-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-[#1DC7E0] rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500 mt-4 text-center">الأسعار تعتمد على حجم المشروع وتعقيده — تواصل معنا لعرض مخصص.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">أسئلة شائعة عن الدعم والصيانة</h2>
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
            <Link href="/services/website" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🌐 تصميم موقع ويب جديد</Link>
            <Link href="/services/mobile-app" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">📱 تطوير تطبيق جوال جديد</Link>
            <Link href="/services/custom-system" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🔧 نظام مخصص جديد</Link>
            <Link href="/software-company" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🏢 شركة برمجة في مصر</Link>
          </div>
        </section>

        <div className="bg-gradient-to-l from-[#193F94] to-[#1E6DB2] rounded-2xl p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-3">موقعك يستحق رعاية مستمرة</h2>
          <p className="mb-8 text-blue-200 text-lg">تواصل معنا وسنقترح لك الباقة الأنسب لحجم مشروعك</p>
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
