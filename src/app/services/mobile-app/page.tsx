import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'تطوير تطبيقات الجوال في مصر | Flutter iOS & Android | DoGether Tech',
  description:
    'DoGether Tech تطور تطبيقات جوال احترافية بـ Flutter لنظامَي iOS وAndroid في مصر. تصميم UI/UX، نشر على المتاجر، صيانة مستمرة. تواصل: 01062485133',
  alternates: {
    canonical: 'https://dogethertech.com/services/mobile-app',
  },
  openGraph: {
    title: 'تطوير تطبيقات الجوال في مصر | Flutter iOS & Android | DoGether Tech',
    description:
      'تطبيقات جوال Flutter لنظامَي iOS وAndroid — تصميم احترافي، أداء عالٍ، نشر سريع في مصر',
    url: 'https://dogethertech.com/services/mobile-app',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'كم تكلفة تطوير تطبيق جوال في مصر؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'تكلفة تطوير تطبيق الجوال في مصر تبدأ من 15,000 جنيه للتطبيقات البسيطة وترتفع حسب التعقيد والمتطلبات. نقدم عرض سعر مجاني ودقيق بعد استعراض المواصفات الكاملة للمشروع.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل تطورون تطبيقات iOS وAndroid معاً في نفس الوقت؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نعم. نستخدم Flutter لتطوير تطبيق واحد يعمل على iOS وAndroid بكفاءة عالية وبتكلفة أقل من تطوير تطبيقَين منفصلَين. النتيجة: تجربة مستخدم متسقة على كلا النظامَين.',
      },
    },
    {
      '@type': 'Question',
      name: 'كم يستغرق تطوير تطبيق الجوال؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'التطبيقات البسيطة (عرض محتوى، تواصل) تستغرق 3-6 أسابيع. التطبيقات المتوسطة (متجر، حجوزات) 6-10 أسابيع. المنصات المتكاملة مع لوحة تحكم تحتاج 10-16 أسبوعاً. نلتزم بالجدول الزمني المتفق عليه.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل تدعمون التطبيق بعد الإطلاق؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نعم. نقدم فترة ضمان مجانية بعد الإطلاق لإصلاح أي أخطاء، ثم باقات دعم وصيانة شهرية تشمل التحديثات والتوافق مع إصدارات iOS وAndroid الجديدة.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل تنشرون التطبيق على متاجر Google Play وApp Store؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نعم. نتولى كامل عملية النشر على Google Play وApple App Store بما فيها إعداد الحسابات، كتابة الوصف، رفع لقطات الشاشة، والتعامل مع متطلبات المراجعة.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://dogethertech.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'الخدمات',
      item: 'https://dogethertech.com/services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'تطوير تطبيقات الجوال',
      item: 'https://dogethertech.com/services/mobile-app',
    },
  ],
}

const techStack = [
  { name: 'Flutter', desc: 'إطار العمل الأساسي لبناء التطبيقات' },
  { name: 'Dart', desc: 'لغة البرمجة السريعة والآمنة' },
  { name: 'Firebase', desc: 'قاعدة بيانات، مصادقة، إشعارات فورية' },
  { name: 'Node.js', desc: 'Backend قوي وقابل للتوسع' },
  { name: 'REST API', desc: 'تكامل سلس مع أي خدمة خارجية' },
  { name: 'Google Play / App Store', desc: 'نشر ومتابعة على كلا المتجرَين' },
]

const features = [
  { title: 'تصميم UI/UX أصلي', desc: 'لا نستخدم قوالب جاهزة — كل تطبيق يُصمَّم من الصفر ليعكس هوية علامتك التجارية.' },
  { title: 'أداء أصلي Native-like', desc: 'Flutter يولد كوداً أصلياً يعني سرعة استجابة فائقة وتجربة مستخدم سلسة.' },
  { title: 'دعم RTL كامل', desc: 'تطبيقاتنا تدعم العربية والإنجليزية مع تخطيط RTL احترافي من أول تصميم.' },
  { title: 'إشعارات Push', desc: 'تكامل Firebase للإشعارات الفورية — وصل لمستخدمينك في اللحظة الصح.' },
  { title: 'لوحة تحكم Admin', desc: 'نبني لوحة تحكم ويب لإدارة محتوى التطبيق، المستخدمين، والطلبات.' },
  { title: 'نشر وصيانة', desc: 'نتولى النشر على المتجرَين ونوفر باقات صيانة لضمان استمرارية التشغيل.' },
]

const timeline = [
  { week: 'الأسبوع 1-2', phase: 'التحليل والتصميم', desc: 'تحليل المتطلبات، wireframes، و prototype تفاعلي' },
  { week: 'الأسبوع 3-6', phase: 'التطوير الأساسي', desc: 'بناء الشاشات الرئيسية وربطها مع الـ Backend' },
  { week: 'الأسبوع 7-8', phase: 'الاختبار والتحسين', desc: 'اختبار على أجهزة حقيقية وإصلاح الأخطاء' },
  { week: 'الأسبوع 9+', phase: 'النشر والمتابعة', desc: 'رفع على المتاجر وفترة مراقبة ما بعد الإطلاق' },
]

export default function MobileAppPage() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <header className="bg-gradient-to-l from-[#193F94] to-[#1DC7E0] text-white py-4 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            DoGether Tech
          </Link>
          <a
            href="https://wa.me/201062485133"
            className="bg-white text-[#1E6DB2] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
          >
            احصل على عرض سعر
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 border-b border-blue-100">
        <div className="container mx-auto px-6 text-center">
          <nav className="text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-[#1E6DB2] transition-colors">الرئيسية</Link>
            <span className="mx-2">›</span>
            <Link href="/software-company" className="hover:text-[#1E6DB2] transition-colors">شركة برمجة في مصر</Link>
            <span className="mx-2">›</span>
            <Link href="/services" className="hover:text-[#1E6DB2] transition-colors">الخدمات</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700">تطبيقات الجوال</span>
          </nav>
          <div className="text-5xl mb-6">📱</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">
            تطوير تطبيقات الجوال في مصر
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-8">
            تطبيقات Flutter احترافية لنظامَي iOS وAndroid — تصميم عصري، أداء عالٍ، نشر سريع
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/201062485133"
              className="bg-[#1E6DB2] text-white px-7 py-3 rounded-xl font-bold hover:bg-[#193F94] transition-colors shadow"
            >
              ابدأ مشروعك الآن
            </a>
            <Link
              href="/services"
              className="border-2 border-[#1E6DB2] text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
            >
              تصفح كل الخدمات
            </Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-5xl">

        {/* Why Flutter */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">لماذا نختار Flutter؟</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            Flutter من Google هو إطار العمل الأسرع نمواً في تطوير تطبيقات الجوال. بكود واحد يعمل على iOS وAndroid، توفر وقتاً وميزانية دون أي تنازل على الجودة أو الأداء. استخدمناه في مشاريع حقيقية لعملائنا من قطاعات المطاعم والتجارة الإلكترونية والخدمات.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            تطبيقاتنا لا تشعرك بأنها &quot;هايبرد&quot; — الأداء يضاهي التطبيقات الأصلية، والتصميم يتكيف مع معايير كل نظام. هذا ما يميز DoGether Tech عن غيرها من شركات البرمجة في مصر.
          </p>
        </section>

        {/* Features */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">ما يميز تطبيقاتنا</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.title} className="p-5 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-bold text-slate-800 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">التقنيات التي نستخدمها</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] transition-colors"
              >
                <span className="w-2 h-2 bg-[#1DC7E0] rounded-full flex-shrink-0 mt-2" />
                <div>
                  <div className="font-bold text-slate-800 text-sm">{tech.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{tech.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">كيف نعمل — مراحل المشروع</h2>
          <div className="space-y-4">
            {timeline.map((step, i) => (
              <div key={i} className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-[#1E6DB2] text-white rounded-full flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <div>
                  <div className="text-xs text-[#1DC7E0] font-semibold mb-0.5">{step.week}</div>
                  <div className="font-bold text-slate-800">{step.phase}</div>
                  <div className="text-sm text-slate-500 mt-1">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">مشاريع تطبيقات جوال أنجزناها</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            طورنا تطبيقات جوال لعملاء في قطاعات متنوعة: مطعم Chicken One للطلب الأونلاين، منصة إدارة لمشروع سياحي في شرم الشيخ، وتطبيق متجر إلكتروني متكامل. كل مشروع بُني بمواصفات مخصصة وليس قوالب جاهزة.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
            <p className="text-slate-700 text-sm">
              <strong>ملاحظة:</strong> نحترم سرية بيانات عملائنا. التفاصيل الكاملة للمشاريع متاحة عند الطلب بعد توقيع NDA.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">أسئلة شائعة عن تطوير تطبيقات الجوال</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <details
                key={i}
                className="border border-slate-200 rounded-xl overflow-hidden group"
              >
                <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-slate-800 hover:bg-slate-50 transition-colors list-none">
                  <span>{faq.name}</span>
                  <span className="text-[#1DC7E0] text-lg">+</span>
                </summary>
                <div className="px-5 pb-5 text-slate-600 leading-relaxed text-sm">
                  {faq.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">خدمات أخرى قد تهمك</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/services/website"
              className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm"
            >
              🌐 تصميم وتطوير مواقع الويب
            </Link>
            <Link
              href="/services/ecommerce"
              className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm"
            >
              🛒 إنشاء المتاجر الإلكترونية
            </Link>
            <Link
              href="/services/ui-ux"
              className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm"
            >
              🎨 تصميم UI/UX
            </Link>
            <Link
              href="/software-company"
              className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm"
            >
              🏢 شركة برمجة في مصر — الصفحة الرئيسية
            </Link>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-l from-[#193F94] to-[#1E6DB2] rounded-2xl p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-3">جاهز لبناء تطبيقك؟</h2>
          <p className="mb-8 text-blue-200 text-lg">
            تواصل معنا اليوم واحصل على استشارة مجانية وعرض سعر خلال 24 ساعة
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/201062485133"
              className="bg-white text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow"
            >
              واتساب: 01062485133
            </a>
            <a
              href="mailto:dogethertech@gmail.com"
              className="border-2 border-white text-white px-7 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              dogethertech@gmail.com
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-6 text-center text-sm mt-8">
        <p className="text-slate-400">
          © 2025 DoGether Tech — جميع الحقوق محفوظة |{' '}
          <a href="https://dogethertech.com" className="text-[#1DC7E0] hover:underline">
            dogethertech.com
          </a>{' '}
          | هاتف:{' '}
          <a href="tel:+201062485133" className="text-[#1DC7E0]">
            01062485133
          </a>
        </p>
      </footer>
    </div>
  )
}
