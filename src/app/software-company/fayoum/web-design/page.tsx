import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'تصميم مواقع في الفيوم | مواقع احترافية سريعة | DoGether',
  description:
    'تصميم مواقع في الفيوم بأيدي شركة مقرها الفيوم. مواقع احترافية سريعة متجاوبة وصديقة لجوجل لأصحاب الأعمال. أسعار تبدأ من 8,000 جنيه. تواصل: 01062485133',
  alternates: { canonical: 'https://dogethertech.com/software-company/fayoum/web-design' },
  openGraph: {
    title: 'تصميم مواقع في الفيوم | DoGether',
    description: 'تصميم مواقع احترافية في الفيوم — سريعة، متجاوبة، وصديقة لمحركات البحث',
    url: 'https://dogethertech.com/software-company/fayoum/web-design',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://dogethertech.com' },
    { '@type': 'ListItem', position: 2, name: 'شركة برمجة في مصر', item: 'https://dogethertech.com/software-company' },
    { '@type': 'ListItem', position: 3, name: 'الفيوم', item: 'https://dogethertech.com/software-company/fayoum' },
    { '@type': 'ListItem', position: 4, name: 'تصميم مواقع', item: 'https://dogethertech.com/software-company/fayoum/web-design' },
  ],
}

const faqs = [
  {
    q: 'كم تكلفة تصميم موقع في الفيوم؟',
    a: 'تبدأ أسعار المواقع التعريفية في الفيوم من حوالي 8,000 جنيه، وتزيد مع عدد الصفحات والوظائف (نظام حجز، مدونة، متعدد اللغات). نقدّم عرض سعر مجاني ومفصّل بعد فهم متطلبات مشروعك بالضبط.',
  },
  {
    q: 'هل الموقع هيظهر في نتائج جوجل لما حد يبحث عن نشاطي في الفيوم؟',
    a: 'نبني كل موقع بمعايير SEO التقنية (سرعة، بنية سليمة، بيانات منظمة، خرائط موقع) ونضيف بيانات مكانك في الفيوم، مما يساعد ظهورك لمن يبحث عن خدمتك محلياً. الترتيب النهائي يعتمد أيضاً على المنافسة واستمرارية تحديث المحتوى.',
  },
  {
    q: 'كم يستغرق تصميم الموقع؟',
    a: 'الموقع التعريفي البسيط يجهز عادةً خلال أسبوعين إلى ثلاثة أسابيع من استلام المحتوى. المواقع الأكبر (نظام حجز أو متعدد اللغات) قد تحتاج وقتاً أطول نتفق عليه مسبقاً.',
  },
  {
    q: 'هل أقدر أعدّل محتوى الموقع بنفسي بعد التسليم؟',
    a: 'نعم إذا طلبت لوحة تحكم (CMS) — تقدر تعدّل النصوص والصور والأسعار بدون مبرمج. وبدونها نتولى نحن أي تحديثات ضمن باقة الدعم.',
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
  serviceType: 'Web Design',
  name: 'تصميم مواقع في الفيوم',
  description: 'تصميم وتطوير مواقع احترافية لأصحاب الأعمال في محافظة الفيوم.',
  provider: { '@type': 'Organization', name: 'DoGether', '@id': 'https://dogethertech.com/#business', url: 'https://dogethertech.com', telephone: '+201062485133' },
  areaServed: { '@type': 'City', name: 'Fayoum' },
  url: 'https://dogethertech.com/software-company/fayoum/web-design',
}

export default function FayoumWebDesignPage() {
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
            <span className="text-slate-700">تصميم مواقع</span>
          </nav>
          <div className="text-5xl mb-6">🌐</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">تصميم مواقع في الفيوم</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-8">موقع احترافي سريع يعرّف بنشاطك في الفيوم، يظهر في جوجل، ويحوّل الزائر إلى عميل</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/201062485133" className="bg-[#1E6DB2] text-white px-7 py-3 rounded-xl font-bold hover:bg-[#193F94] transition-colors shadow">اطلب موقعك الآن</a>
            <Link href="/software-company/fayoum" className="border-2 border-[#1E6DB2] text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">كل خدمات الفيوم</Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-4xl">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">ليه نشاطك في الفيوم محتاج موقع إلكتروني؟</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            العميل في الفيوم — زي أي مكان — بيبحث في جوجل قبل ما يشتري أو يزور محلاً. لو مالكش موقع، فأنت غير موجود بالنسبة له، والمنافس اللي عنده موقع بيكسبه. الموقع الإلكتروني بقى الواجهة الأولى لأي نشاط: مطعم، محل، عيادة، مكتب، أو مشروع سياحي حول قارون.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            في DoGether، ومقرنا في الفيوم، نصمم مواقع لا تكتفي بأن تكون "موجودة" بل تعمل لصالحك: سريعة التحميل، واضحة، وتوجّه الزائر لاتخاذ خطوة — اتصال، طلب عرض سعر، أو زيارة. نبني بتقنية Next.js الحديثة التي تمنح موقعك سرعة وأماناً وترتيباً أفضل في نتائج البحث.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">أنواع المواقع التي نصممها</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { t: 'موقع تعريفي (Landing / Corporate)', d: 'يعرّف بنشاطك وخدماتك وبيانات التواصل — مثالي للمحلات والمكاتب والعيادات.' },
              { t: 'موقع مطعم / كافيه', d: 'قائمة طعام، صور، وربط بالطلب والتوصيل والقائمة الرقمية بـ QR.' },
              { t: 'موقع سياحي متعدد اللغات', d: 'للأنشطة حول بحيرة قارون ووادي الريان — عربي وإنجليزي مع نظام حجز.' },
              { t: 'موقع بمدوّنة / محتوى', d: 'لبناء ظهورك في جوجل تدريجياً عبر مقالات تستهدف كلمات بحث عملائك.' },
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
              { p: 'موقع تعريفي بسيط', price: 'من 8,000 جنيه' },
              { p: 'موقع متعدد الصفحات + مدوّنة', price: 'من 12,000 جنيه' },
              { p: 'موقع متعدد اللغات + نظام حجز', price: 'حسب المواصفات' },
            ].map((x) => (
              <div key={x.p} className="flex justify-between items-center p-4 bg-white border border-slate-200 rounded-xl">
                <span className="text-slate-700 font-medium">{x.p}</span>
                <span className="text-[#1E6DB2] font-bold">{x.price}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500 mt-3">* الأسعار تقريبية للاسترشاد وتختلف حسب تفاصيل المشروع. عرض السعر النهائي مجاني ودقيق بعد فهم متطلباتك.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">أسئلة شائعة عن تصميم المواقع في الفيوم</h2>
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
            <Link href="/software-company/fayoum/online-store" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🛒 متجر إلكتروني في الفيوم</Link>
            <Link href="/software-company/fayoum/pos" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🏪 برنامج كاشير في الفيوم</Link>
            <Link href="/software-company/fayoum/mobile-app" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">📱 تطبيق جوال في الفيوم</Link>
            <Link href="/services/website" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">🌐 تفاصيل خدمة تصميم المواقع</Link>
          </div>
        </section>

        <div className="bg-gradient-to-l from-[#193F94] to-[#1E6DB2] rounded-2xl p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-3">جاهز لموقع يجذب عملاء الفيوم؟</h2>
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
