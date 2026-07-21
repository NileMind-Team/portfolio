import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'تصميم وتطوير مواقع الويب في مصر | Next.js & React | DoGether',
  description:
    'DoGether تصمم وتطور مواقع ويب احترافية في مصر بتقنية Next.js وReact. مواقع سريعة، متجاوبة، وصديقة لـ SEO. تواصل: 01062485133',
  alternates: {
    canonical: 'https://dogethertech.com/services/website',
    languages: {
      ar: 'https://dogethertech.com/services/website',
      en: 'https://dogethertech.com/en/services/web-development',
    },
  },
  openGraph: {
    title: 'تصميم وتطوير مواقع الويب في مصر | DoGether',
    description: 'مواقع ويب Next.js احترافية في مصر — سريعة، متجاوبة، وصديقة لـ SEO',
    url: 'https://dogethertech.com/services/website',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'كم تكلفة تصميم موقع ويب احترافي في مصر؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'تكلفة تصميم الموقع تبدأ من 8,000 جنيه للمواقع التعريفية البسيطة وترتفع حسب عدد الصفحات والوظائف المطلوبة. نقدم عرض سعر مفصلاً ومجانياً بعد استعراض احتياجات مشروعك.',
      },
    },
    {
      '@type': 'Question',
      name: 'ما الفرق بين الموقع الثابت (Static) والموقع الديناميكي؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'الموقع الثابت يعرض محتوى ثابتاً مناسباً للمواقع التعريفية وصفحات الهبوط — أسرع وأرخص. الموقع الديناميكي يتفاعل مع قواعد بيانات ويتغير محتواه (كالمدونات والمتاجر). نختار الأنسب لاحتياجك.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل الموقع سيظهر في نتائج Google عربياً وإنجليزياً؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نعم. نبني كل موقع بمعايير SEO التقنية: بنية HTML صحيحة، metadata محكم، صفحات سريعة التحميل، وخرائط موقع sitemap. المواقع التي نبنيها قابلة للفهرسة الفورية من Google.',
      },
    },
    {
      '@type': 'Question',
      name: 'هل يمكنني تعديل محتوى موقعي بنفسي بعد التسليم؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نعم حسب طبيعة المشروع. إذا طلبت لوحة تحكم (CMS)، يمكنك تعديل النصوص والصور والأسعار دون الحاجة لمطور. بدونها، يمكنك الاستعانة بنا لأي تحديثات ضمن باقة الدعم.',
      },
    },
    {
      '@type': 'Question',
      name: 'ما مدة الضمان بعد إطلاق الموقع؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'نوفر فترة ضمان مجانية بعد الإطلاق لإصلاح أي خطأ برمجي أو تقني يظهر. بعدها يمكن الانضمام لباقة الدعم الشهري التي تشمل الصيانة والتحديثات وتحسين الأداء.',
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
    { '@type': 'ListItem', position: 3, name: 'تصميم مواقع الويب', item: 'https://dogethertech.com/services/website' },
  ],
}

const features = [
  { title: 'أداء عالٍ (Core Web Vitals)', desc: 'مواقعنا تحقق نتائج ممتازة في مؤشرات Google للأداء — تحميل سريع وتجربة سلسة على الجوال والحاسوب.' },
  { title: 'SSR + SSG بتقنية Next.js', desc: 'Server-Side Rendering يجعل المحتوى مرئياً فوراً لمحركات البحث ويسرّع التحميل الأول للزائر.' },
  { title: 'تصميم متجاوب 100%', desc: 'كل موقع نبنيه يعمل بإتقان على الجوال، التابلت، والحاسوب — بتصميم يتكيف مع كل شاشة.' },
  { title: 'دعم RTL كامل', desc: 'نصمم المواقع لتدعم العربية من اليمين لليسار بشكل احترافي، مع إمكانية الدعم الثنائي للغتين.' },
  { title: 'SSL وأمان المواقع', desc: 'كل موقع يُسلَّم بشهادة SSL مفعلة، رؤوس HTTP آمنة، وحماية من الثغرات الشائعة.' },
  { title: 'تكاملات خارجية', desc: 'نربط موقعك بأي خدمة تحتاجها: Google Analytics، خرائط، بوابات دفع، WhatsApp API، وغيرها.' },
]

const techStack = [
  { name: 'Next.js 15', desc: 'إطار الويب الأسرع للمواقع الاحترافية' },
  { name: 'React 19', desc: 'واجهات تفاعلية بكفاءة عالية' },
  { name: 'TypeScript', desc: 'كود موثوق وأقل أخطاء في الإنتاج' },
  { name: 'Tailwind CSS', desc: 'تصميم سريع وقابل للتخصيص الكامل' },
  { name: 'Node.js / PostgreSQL', desc: 'Backend قوي لمن يحتاج قاعدة بيانات' },
  { name: 'Docker + VPS', desc: 'نشر آمن وسريع بدون اعتماد على استضافة مشتركة بطيئة' },
]

export default function WebsitePage() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Web Development', name: 'تصميم وتطوير مواقع الويب', description: 'تصميم وتطوير مواقع ويب احترافية في مصر بتقنية Next.js وReact — سريعة، متجاوبة، وصديقة لمحركات البحث.', provider: { '@type': 'Organization', name: 'DoGether', '@id': 'https://dogethertech.com/#business', url: 'https://dogethertech.com', telephone: '+201062485133' }, areaServed: { '@type': 'Country', name: 'Egypt' }, url: 'https://dogethertech.com/services/website' }) }} />

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
            <Link href="/services" className="hover:text-[#1E6DB2] transition-colors">الخدمات</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700">تصميم مواقع الويب</span>
          </nav>
          <div className="text-5xl mb-6">🌐</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">تصميم وتطوير مواقع الويب في مصر</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-8">مواقع Next.js سريعة ومتجاوبة وصديقة لـ SEO — مصممة لتحويل الزوار إلى عملاء</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/201062485133" className="bg-[#1E6DB2] text-white px-7 py-3 rounded-xl font-bold hover:bg-[#193F94] transition-colors shadow">اطلب موقعك الآن</a>
            <Link href="/services" className="border-2 border-[#1E6DB2] text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">كل الخدمات</Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-5xl">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">لماذا موقعك الإلكتروني أهم من أي وقت مضى؟</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">في سوق يبحث فيه العملاء عن كل شيء أونلاين قبل اتخاذ أي قرار شراء، الموقع الإلكتروني لم يعد رفاهية — صار ضرورة. الموقع البطيء أو القديم يعني خسارة عملاء محتملين يومياً دون أن تشعر.</p>
          <p className="text-lg text-slate-700 leading-relaxed">DoGether تبني مواقع بتقنية Next.js التي تختار أفضل مؤشرات Core Web Vitals وتُحسن ترتيبك في Google تلقائياً. كل سطر كود نكتبه مُصمَّم للأداء والأمان وسهولة الصيانة على المدى البعيد.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">مزايا مواقعنا</h2>
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
          <h2 className="text-2xl font-bold text-slate-800 mb-6">التقنيات التي نبني بها مواقعك</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] transition-colors">
                <span className="w-2 h-2 bg-[#1DC7E0] rounded-full flex-shrink-0 mt-2" />
                <div>
                  <div className="font-bold text-slate-800 text-sm">{tech.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{tech.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">أسئلة شائعة عن تصميم مواقع الويب</h2>
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
            <Link href="/services/store" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🛒 إنشاء المتاجر الإلكترونية</Link>
            <Link href="/services/mobile-app" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">📱 تطوير تطبيقات الجوال</Link>
            <Link href="/services/support" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🛡️ الدعم الفني والصيانة</Link>
            <Link href="/software-company" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🏢 شركة برمجة في مصر</Link>
          </div>
        </section>

        <div className="bg-gradient-to-l from-[#193F94] to-[#1E6DB2] rounded-2xl p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-3">جاهز لموقع يجذب عملاء جدد؟</h2>
          <p className="mb-8 text-blue-200 text-lg">تواصل معنا اليوم واحصل على استشارة مجانية وعرض سعر خلال 24 ساعة</p>
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
