import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'أعمالنا | مشاريع ودراسات حالة | DoGether',
  description:
    'دراسات حالة لمشاريع حقيقية نفّذتها DoGether: مواقع، متاجر إلكترونية، أنظمة كاشير، ومنصات حجز لعملاء في مصر. تشيكن ون، الزعوي، فطير وعسل، شرم كايت سيرف وغيرها.',
  alternates: { canonical: 'https://dogethertech.com/work' },
  openGraph: {
    title: 'أعمالنا | مشاريع ودراسات حالة | DoGether',
    description: 'مشاريع حقيقية نفّذتها DoGether لعملاء في مصر',
    url: 'https://dogethertech.com/work',
  },
}

type Project = {
  name: string
  client: string
  category: string
  description: string
  result: string
  duration: string
  link: string
}

const projects: Project[] = [
  {
    name: 'Chicken One — الزعوي',
    client: 'مجموعة الزعوي',
    category: 'موقع شركة',
    description:
      'موقع شركة عصري لعلامة Chicken One التابعة لمجموعة الزعوي، بتصميم متجاوب وتجربة مستخدم سلسة تعرّف بالعلامة ومنتجاتها.',
    result: 'حضور احترافي محسّن للجوال وسهل الاستخدام',
    duration: '3 أسابيع',
    link: 'https://chicken-one.com/',
  },
  {
    name: 'New — الزعوي',
    client: 'متاجر الزعوي',
    category: 'متجر إلكتروني',
    description:
      'منصة تجارة إلكترونية متكاملة لمجموعة الزعوي مع إدارة المنتجات وسلة التسوق والدفع الآمن.',
    result: 'مبيعات أونلاين مع كتالوج منتجات ودفع آمن',
    duration: '5 أسابيع',
    link: 'https://elzawy-new.com/',
  },
  {
    name: 'فطير وعسل',
    client: 'Fateer wi 3asal',
    category: 'منصة طعام وطلبات',
    description:
      'منصة طعام مع نظام طلب أونلاين وإدارة توصيل وإدارة قائمة وتقييمات العملاء لمطعم فطير وعسل.',
    result: 'نظام طلب وتوصيل متكامل مع إدارة قائمة',
    duration: '4 أسابيع',
    link: 'https://fateerwasal.com',
  },
  {
    name: 'نظام كاشير نقاط البيع',
    client: 'Cashier Tech',
    category: 'نظام POS',
    description:
      'نظام نقاط بيع حديث بواجهة بديهية وإدارة مخزون فورية وتحليلات مبيعات وعملية دفع سريعة.',
    result: 'دفع سريع وتتبع مخزون وتحليلات مبيعات',
    duration: '4 أسابيع',
    link: 'https://cashier-vert.vercel.app/',
  },
  {
    name: 'أروقة — حلول عقارية',
    client: 'Aruqah',
    category: 'منصة مخصصة',
    description:
      'منصة عقارية مبتكرة مع إدارة متقدمة للعقارات وقوائم عقارات وتحليلات سوق وبحث ذكي وإدارة عملاء.',
    result: 'قوائم عقارات وبحث ذكي وتحليلات سوق',
    duration: '6 أسابيع',
    link: 'https://aruqah.vercel.app/',
  },
  {
    name: 'متجر مستحضرات تجميل',
    client: 'Cosmetics Brand',
    category: 'متجر إلكتروني',
    description:
      'منصة تجارة إلكترونية أنيقة لمستحضرات التجميل مع عرض المنتجات وسلة تسوق ومدفوعات آمنة وتصميم متجاوب.',
    result: 'كتالوج منتجات وسلة تسوق ودفع آمن',
    duration: '5 أسابيع',
    link: 'https://cosmetics-flame-three.vercel.app/',
  },
  {
    name: 'Sharm Kite Surf',
    client: 'Sharm Kite Surf',
    category: 'منصة حجز سياحي',
    description:
      'منصة رياضات مائية وركوب الطائرة الورقية في شرم الشيخ مع نظام حجز أونلاين وعرض للأنشطة ودعم متعدد اللغات.',
    result: 'نظام حجز أونلاين متعدد اللغات',
    duration: '4 أسابيع',
    link: 'https://sharmkitesurf.com',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://dogethertech.com' },
    { '@type': 'ListItem', position: 2, name: 'أعمالنا', item: 'https://dogethertech.com/work' },
  ],
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'أعمال ومشاريع DoGether',
  itemListElement: projects.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'CreativeWork',
      name: p.name,
      about: p.category,
      url: p.link,
      creator: { '@type': 'Organization', name: 'DoGether', '@id': 'https://dogethertech.com/#business' },
    },
  })),
}

export default function WorkPage() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <header className="bg-gradient-to-l from-[#193F94] to-[#1DC7E0] text-white py-4 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">DoGether</Link>
          <a href="https://wa.me/201062485133" className="bg-white text-[#1E6DB2] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">تواصل معنا</a>
        </div>
      </header>

      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 border-b border-blue-100">
        <div className="container mx-auto px-6 text-center">
          <nav className="text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-[#1E6DB2] transition-colors">الرئيسية</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700">أعمالنا</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">أعمالنا ودراسات الحالة</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            مشاريع حقيقية نفّذناها لعملاء في مصر — كل مشروع منها يعمل فعلياً على الإنترنت. اضغط لزيارته.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-4xl">
        <div className="space-y-6">
          {projects.map((p) => (
            <div key={p.name} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-[#1DC7E0] hover:shadow-lg transition-all">
              <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                <div>
                  <span className="inline-block bg-[#1DC7E0]/10 text-[#1E6DB2] text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {p.category}
                  </span>
                  <h2 className="text-xl font-bold text-slate-800">{p.name}</h2>
                  <p className="text-sm text-slate-400">العميل: {p.client} • مدة التنفيذ: {p.duration}</p>
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1E6DB2] text-white px-5 py-2 rounded-xl font-semibold text-sm hover:bg-[#193F94] transition-colors whitespace-nowrap"
                >
                  زيارة المشروع ↗
                </a>
              </div>
              <p className="text-slate-700 leading-relaxed mb-3">{p.description}</p>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span className="w-2 h-2 bg-[#1DC7E0] rounded-full flex-shrink-0" />
                <span className="font-medium">النتيجة:</span> {p.result}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-l from-[#193F94] to-[#1E6DB2] rounded-2xl p-10 text-white text-center shadow-xl mt-12">
          <h2 className="text-2xl font-bold mb-3">مشروعك القادم يبدأ من هنا</h2>
          <p className="mb-8 text-blue-200 text-lg">تواصل معنا وسنقدم لك استشارة مجانية وعرض سعر خلال 24 ساعة</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/201062485133" className="bg-white text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow">واتساب: 01062485133</a>
            <Link href="/software-company" className="border-2 border-white text-white px-7 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">تعرّف علينا</Link>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-6 text-center text-sm mt-8">
        <p className="text-slate-400">© 2025 DoGether — جميع الحقوق محفوظة | <a href="https://dogethertech.com" className="text-[#1DC7E0] hover:underline">dogethertech.com</a> | هاتف: <a href="tel:+201062485133" className="text-[#1DC7E0]">01062485133</a></p>
      </footer>
    </div>
  )
}
