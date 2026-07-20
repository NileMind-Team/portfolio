import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

type Service = {
  nameAr: string
  metaService: string
  emoji: string
  intro: string
  what: string
  features: string[]
  faqs: { q: string; a: string }[]
}

type City = {
  nameAr: string
  economy: string
  sectors: string[]
}

// 8 services — aligned with /services/* slugs
const services: Record<string, Service> = {
  website: {
    nameAr: 'تصميم وتطوير المواقع',
    metaService: 'تصميم مواقع',
    emoji: '🌐',
    intro: 'نصمم ونطوّر مواقع ويب احترافية سريعة ومتجاوبة ومحسّنة لمحركات البحث',
    what: 'الموقع الاحترافي هو واجهتك الرقمية التي تبني الثقة وتجلب العملاء. نبني مواقع بتصميم عصري وسرعة تحميل عالية وتحسين كامل لمحركات البحث (SEO) لتظهر في جوجل وتحوّل الزائر إلى عميل.',
    features: ['تصميم متجاوب مع كل الأجهزة', 'سرعة تحميل عالية', 'تحسين محركات البحث SEO', 'لوحة تحكم لإدارة المحتوى', 'دعم العربية والإنجليزية'],
    faqs: [
      { q: 'كم تكلفة تصميم موقع؟', a: 'تبدأ المواقع التعريفية من حوالي 8,000 جنيه وتختلف حسب عدد الصفحات والوظائف. نقدّم عرض سعر مجانياً مفصّلاً بعد فهم متطلباتك.' },
      { q: 'هل الموقع يظهر في جوجل؟', a: 'نعم، نبني كل مواقعنا بمعايير SEO من الأساس — سرعة، بيانات منظمة، ومحتوى مستهدف — لتظهر في نتائج البحث وتجلب زيارات مجانية.' },
    ],
  },
  store: {
    nameAr: 'إنشاء متجر إلكتروني',
    metaService: 'متجر إلكتروني',
    emoji: '🛒',
    intro: 'نبني متاجر إلكترونية متكاملة مع بوابات دفع وإدارة منتجات وطلبات',
    what: 'المتجر الإلكتروني يتيح لك البيع أونلاين على مدار الساعة. نبني متجراً سريعاً وآمناً مع بوابات دفع محلية والدفع عند الاستلام، وإدارة كاملة للمنتجات والمخزون والطلبات، ومحسّناً لمحركات البحث ليظهر منتجك في جوجل.',
    features: ['بوابات دفع محلية + الدفع عند الاستلام', 'إدارة منتجات ومخزون وطلبات', 'تصميم متجاوب سريع', 'تحسين لمحركات البحث', 'ربط بنظام الكاشير POS'],
    faqs: [
      { q: 'هل المتجر يدعم الدفع عند الاستلام؟', a: 'نعم، ندمج بوابات الدفع (فيزا/محافظ) مع خيار الدفع عند الاستلام الأكثر طلباً في السوق المصري، لتناسب كل عملائك.' },
      { q: 'كم مدة إنشاء المتجر؟', a: 'المتجر القياسي عادةً من 3 إلى 5 أسابيع حسب عدد المنتجات والتكاملات المطلوبة.' },
    ],
  },
  pos: {
    nameAr: 'أنظمة نقاط البيع POS',
    metaService: 'نظام كاشير POS',
    emoji: '🏪',
    intro: 'نطوّر أنظمة كاشير POS مخصصة للمطاعم والصيدليات والتجزئة',
    what: 'نظام نقاط البيع المخصص يُبنى ليعكس طريقة عملك بالضبط. يعمل أونلاين وأوفلاين، مرتبط بالمخزون، يدعم الطابعات والباركود وأدراج الكاشير، ويعطيك تقارير مبيعات لحظية — وتمتلكه بالكامل بدون رسوم شهرية.',
    features: ['يعمل أونلاين وأوفلاين', 'تتبع مخزون لحظي', 'إدارة عدة فروع مركزياً', 'دعم الطابعات والباركود', 'تقارير مبيعات تفصيلية'],
    faqs: [
      { q: 'هل النظام يعمل بدون إنترنت؟', a: 'نعم، يعمل أوفلاين ويحفظ البيانات محلياً ثم يتزامن تلقائياً عند عودة الاتصال، فلا تتوقف مبيعاتك بانقطاع الإنترنت.' },
      { q: 'هل يدير أكثر من فرع؟', a: 'نعم، يدير عدة فروع من لوحة تحكم مركزية، كل فرع بمخزونه وكاشيراته مع تقارير موحّدة تقارن الأداء.' },
    ],
  },
  'mobile-app': {
    nameAr: 'تطوير تطبيقات الجوال',
    metaService: 'تطوير تطبيقات',
    emoji: '📱',
    intro: 'نطوّر تطبيقات جوال لنظامي iOS وAndroid بتقنية Flutter',
    what: 'التطبيق حضور دائم لعلامتك على جوال عميلك. نطوّر تطبيقات بتقنية Flutter تعمل على iOS وAndroid من كود واحد — أداء عالٍ وتكلفة أقل — بتصميم UI/UX احترافي وتجربة سلسة على كل الأجهزة.',
    features: ['تطبيق واحد لـ iOS وAndroid', 'أداء عالٍ بتقنية Flutter', 'تصميم UI/UX احترافي', 'ربط بلوحة تحكم وAPI', 'نشر على المتاجر ودعم بعد الإطلاق'],
    faqs: [
      { q: 'كم تكلفة تطوير تطبيق؟', a: 'تبدأ التطبيقات البسيطة من حوالي 15,000 جنيه وترتفع حسب التعقيد. نحدّد السعر بدقة بعد توثيق مواصفات التطبيق.' },
      { q: 'هل تنشرون التطبيق على المتاجر؟', a: 'نعم، نساعدك في إعداد حسابات المطوّر وننشر التطبيق على Google Play وApp Store نيابةً عنك.' },
    ],
  },
  'digital-menu': {
    nameAr: 'القائمة الرقمية QR',
    metaService: 'قائمة رقمية QR',
    emoji: '📋',
    intro: 'نصمم قوائم رقمية QR للمطاعم والكافيهات مع إمكانية الطلب',
    what: 'القائمة الرقمية بـ QR تتيح لعميلك تصفّح قائمتك بالصور والأسعار من هاتفه بمسح كود واحد — بدون تطبيق. تحدّثها فوراً، تبرز الأصناف الأعلى ربحاً، وتربطها بالكاشير ليصل الطلب للمطبخ مباشرة.',
    features: ['مسح QR بدون تطبيق', 'تحديث فوري للأسعار والأصناف', 'صور شهية تزيد المبيعات', 'الطلب المباشر من الطاولة', 'ربط بنظام الكاشير'],
    faqs: [
      { q: 'هل تحتاج القائمة تطبيقاً؟', a: 'لا، تفتح في متصفح الهاتف مباشرة بمسح كود QR بدون تحميل أو تسجيل — تجربة في ثوانٍ.' },
      { q: 'هل يمكن ربطها بالكاشير؟', a: 'نعم، نربطها بنظام POS ليصل الطلب من الطاولة للمطبخ والكاشير بدون إدخال يدوي.' },
    ],
  },
  'custom-system': {
    nameAr: 'البرمجيات المخصصة',
    metaService: 'برمجة مخصصة',
    emoji: '⚙️',
    intro: 'نبني حلولاً برمجية مخصصة تعكس سير عمل نشاطك بالضبط',
    what: 'البرمجيات المخصصة تُبنى خصيصاً لطريقة عملك — لا تفرض عليك نظاماً جاهزاً ولا رسوماً شهرية. نؤتمت عملياتك المتكررة، ونربط أنظمتك، ونبني ما لا تجده جاهزاً في السوق، وتمتلكه بالكامل ويتوسّع مع نموّك.',
    features: ['حلول مبنية على قياس عملك', 'أتمتة العمليات المتكررة', 'تكامل مع أنظمتك الحالية (API)', 'ملكية كاملة بلا رسوم شهرية', 'قابلية توسّع مع نموّك'],
    faqs: [
      { q: 'ليه أختار المخصص بدل الجاهز؟', a: 'لأنه يناسب عملك بالضبط، وتمتلكه للأبد بدون اشتراكات، ويعطيك ميزة تنافسية لا يملكها منافسوك. على المدى الطويل غالباً أوفر.' },
      { q: 'أقدر أبدأ صغير وأوسّع؟', a: 'نعم، نبدأ بأهم الوظائف ونضيف الباقي على مراحل حسب نموّك وميزانيتك بدون إعادة بناء.' },
    ],
  },
  'management-system': {
    nameAr: 'أنظمة إدارة الأعمال',
    metaService: 'نظام إدارة أعمال ERP',
    emoji: '📊',
    intro: 'نطوّر أنظمة إدارة أعمال موحّدة تجمع عملياتك في مكان واحد',
    what: 'نظام إدارة الأعمال يجمع المبيعات والمشتريات والمخزون والحسابات والموظفين في منصة واحدة محدّثة لحظياً. بدل الملفات المتناثرة والبيانات المتضاربة، تحصل على رؤية واضحة وتقارير دقيقة لاتخاذ قرارات أفضل.',
    features: ['منصة موحّدة لكل الأقسام', 'تقارير لحظية دقيقة', 'إدارة مخزون ومشتريات وحسابات', 'صلاحيات وأدوار للموظفين', 'ربط بالكاشير والمتجر'],
    faqs: [
      { q: 'هل مناسب للشركات الصغيرة؟', a: 'نعم، نبدأ بالوحدات التي تحتاجها فعلاً ونضيف الباقي مع نموّك، فلا تدفع مقابل تعقيد لا تحتاجه الآن.' },
      { q: 'هل يُربط بالكاشير والمتجر؟', a: 'نعم، يُربط بنظام POS والمتجر الإلكتروني ليتحدّث المخزون والمبيعات تلقائياً من مصدر واحد.' },
    ],
  },
  support: {
    nameAr: 'الدعم الفني والاستضافة',
    metaService: 'دعم فني واستضافة',
    emoji: '🛠️',
    intro: 'نوفّر استضافة سحابية موثوقة ودعماً فنياً وصيانة مستمرة',
    what: 'موقعك أو نظامك يحتاج بيئة موثوقة ودعماً مستمراً. نوفّر استضافة سحابية سريعة وآمنة، مراقبة على مدار الساعة، نسخ احتياطي منتظم، وتحديثات وصيانة دورية تبقي مشروعك يعمل بسلاسة بلا انقطاع.',
    features: ['استضافة سحابية سريعة وآمنة', 'مراقبة على مدار الساعة', 'نسخ احتياطي منتظم', 'شهادات SSL وحماية', 'تحديثات وصيانة دورية'],
    faqs: [
      { q: 'هل تديرون الاستضافة نيابة عني؟', a: 'نعم، نتولّى إعداد وإدارة الاستضافة والنطاق والشهادات والنسخ الاحتياطي، فتتفرّغ أنت لعملك بينما نحن نضمن استقرار مشروعك.' },
      { q: 'ماذا لو حدثت مشكلة تقنية؟', a: 'فريق الدعم متاح للتعامل مع أي مشكلة بسرعة، مع مراقبة استباقية تكتشف الأعطال وتعالجها غالباً قبل أن تلاحظها.' },
    ],
  },
}

// 16 governorates — unique economic context per city
const cities: Record<string, City> = {
  cairo: { nameAr: 'القاهرة', economy: 'العاصمة وأكبر سوق تنافسي في مصر، تزخر بالشركات والمطاعم والعقارات والشركات الناشئة، حيث يصنع الحضور الرقمي القوي الفارق بين النجاح والاندثار.', sectors: ['الشركات والخدمات', 'المطاعم والكافيهات', 'العقارات', 'التجارة الإلكترونية'] },
  giza: { nameAr: 'الجيزة', economy: 'مركز صناعي وسياحي يجمع مصانع السادس من أكتوبر والقطاع السياحي حول الأهرامات، بآلاف الشركات الصغيرة والمتوسطة الباحثة عن التحول الرقمي.', sectors: ['مصانع أكتوبر', 'السياحة', 'التجارة والتوزيع', 'العقارات'] },
  alexandria: { nameAr: 'الإسكندرية', economy: 'ثاني أكبر مدن مصر وميناؤها الرئيسي، تزخر بفرص التجارة والاستيراد والتصدير والسياحة، وتحتاج شركاتها حضوراً رقمياً بمعايير عالمية.', sectors: ['الاستيراد والتصدير', 'السياحة', 'المطاعم البحرية', 'التجارة'] },
  'beni-suef': { nameAr: 'بني سويف', economy: 'محافظة صاعدة في صعيد مصر بنشاط صناعي (الأسمنت) وزراعي وتجاري متنامٍ، وأعمالها بحاجة متزايدة للحلول الرقمية لتنافس.', sectors: ['الصناعة', 'الزراعة', 'التجارة', 'الخدمات'] },
  minya: { nameAr: 'المنيا', economy: 'من أكبر محافظات الصعيد بنشاط زراعي وتجاري وجامعة كبيرة، وسوق واعد للمشاريع الرقمية التي تخدم قطاعاتها المتنوعة.', sectors: ['الزراعة', 'التجارة', 'التعليم', 'الخدمات'] },
  'port-said': { nameAr: 'بورسعيد', economy: 'مدينة الميناء والمنطقة الحرة، مركز تجاري نشط للاستيراد والتجارة، وأعمالها تحتاج مواقع وأنظمة تواكب حركتها التجارية السريعة.', sectors: ['التجارة والمنطقة الحرة', 'الاستيراد', 'الخدمات اللوجستية', 'المطاعم'] },
  sharqia: { nameAr: 'الشرقية', economy: 'محافظة زراعية وصناعية كبرى تضم مدينة العاشر من رمضان الصناعية، بآلاف المصانع والشركات الباحثة عن حضور رقمي وأنظمة إدارة.', sectors: ['مصانع العاشر من رمضان', 'الزراعة', 'التجارة', 'الصناعات الغذائية'] },
  dakahlia: { nameAr: 'الدقهلية', economy: 'عاصمتها المنصورة مركز تجاري وطبي وتعليمي نشط في الدلتا، بسوق واسع للمواقع والمتاجر وأنظمة إدارة العيادات والمحلات.', sectors: ['التجارة', 'القطاع الطبي', 'التعليم', 'الزراعة'] },
  gharbia: { nameAr: 'الغربية', economy: 'قلب صناعة الغزل والنسيج في مصر (المحلة الكبرى) مع نشاط تجاري وصناعي واسع، وأعمالها تحتاج حلولاً رقمية تنقلها للأسواق الأوسع.', sectors: ['الغزل والنسيج', 'الصناعة', 'التجارة', 'الخدمات'] },
  qalyubia: { nameAr: 'القليوبية', economy: 'محافظة صناعية قريبة من القاهرة (بنها وقليوب) بكثافة سكانية وتجارية عالية، وسوق نشط للمشاريع الرقمية وأنظمة الأعمال.', sectors: ['الصناعة', 'التجارة', 'الزراعة', 'الخدمات'] },
  monufia: { nameAr: 'المنوفية', economy: 'محافظة دلتاوية بنشاط زراعي وصناعي متنامٍ وكثافة من المشاريع الصغيرة والمتوسطة الباحثة عن التحول الرقمي والانتشار.', sectors: ['الزراعة', 'الصناعة', 'التجارة', 'الخدمات'] },
  aswan: { nameAr: 'أسوان', economy: 'مدينة سياحية عالمية وبوابة تجارية جنوبية، بقطاع سياحي وفندقي نشط يحتاج مواقع حجز متعددة اللغات تستهدف السائح الأجنبي.', sectors: ['السياحة والفنادق', 'التجارة الحدودية', 'الزراعة', 'الخدمات'] },
  luxor: { nameAr: 'الأقصر', economy: 'أكبر متحف مفتوح في العالم ووجهة سياحية عالمية، بقطاع سياحي وفندقي كثيف يحتاج مواقع وأنظمة حجز احترافية بلغات متعددة.', sectors: ['السياحة الأثرية', 'الفنادق والمراكب', 'المطاعم', 'الحرف والتجارة'] },
  ismailia: { nameAr: 'الإسماعيلية', economy: 'مدينة قناة السويس بنشاط زراعي وتقني ولوجستي متنامٍ، وسوق واعد للمشاريع الرقمية التي تخدم قطاعاتها المتنوعة.', sectors: ['قناة السويس والخدمات', 'الزراعة', 'التقنية', 'التجارة'] },
  suez: { nameAr: 'السويس', economy: 'مدينة الموانئ والبتروكيماويات والصناعة ضمن المنطقة الاقتصادية SCZONE، وشركاتها الكبرى تحتاج مواقع وأنظمة بمعايير دولية.', sectors: ['الموانئ', 'البتروكيماويات', 'الصناعة', 'الخدمات اللوجستية'] },
  damietta: { nameAr: 'دمياط', economy: 'عاصمة صناعة الأثاث في العالم العربي، تصدّر لعشرات الدول، وورشها ومصانعها تحتاج كتالوجات ومواقع دولية تفتح باب التصدير.', sectors: ['صناعة الأثاث', 'التصدير', 'الديكور', 'التجارة'] },
}

const serviceKeys = Object.keys(services)
const cityKeys = Object.keys(cities)

export function generateStaticParams() {
  return cityKeys.flatMap((city) => serviceKeys.map((service) => ({ city, service })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; service: string }>
}): Promise<Metadata> {
  const { city, service } = await params
  const c = cities[city]
  const s = services[service]
  if (!c || !s) return {}
  const url = `https://dogethertech.com/software-company/${city}/${service}`
  const title = `${s.metaService} في ${c.nameAr} | DoGether Tech`
  const description = `${s.nameAr} في ${c.nameAr} مع DoGether Tech — ${s.intro}. خدمة احترافية لعملاء ${c.nameAr}. تواصل: 01062485133`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  }
}

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ city: string; service: string }>
}) {
  const { city, service } = await params
  const c = cities[city]
  const s = services[service]
  if (!c || !s) notFound()

  const canonical = `https://dogethertech.com/software-company/${city}/${service}`

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://dogethertech.com' },
      { '@type': 'ListItem', position: 2, name: 'شركة برمجة في مصر', item: 'https://dogethertech.com/software-company' },
      { '@type': 'ListItem', position: 3, name: `${s.metaService} في ${c.nameAr}`, item: canonical },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: s.nameAr,
    name: `${s.nameAr} في ${c.nameAr}`,
    description: `${s.what}`,
    provider: {
      '@type': 'Organization',
      name: 'DoGether Tech',
      '@id': 'https://dogethertech.com/#business',
      url: 'https://dogethertech.com',
      telephone: '+201062485133',
    },
    areaServed: { '@type': 'City', name: c.nameAr },
    url: canonical,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: s.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const otherServices = serviceKeys.filter((k) => k !== service).slice(0, 4)

  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
            <Link href={`/software-company/${city}`} className="hover:text-[#1E6DB2] transition-colors">{c.nameAr}</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700">{s.metaService}</span>
          </nav>
          <div className="text-5xl mb-6">{s.emoji}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">{s.nameAr} في {c.nameAr}</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-8">{s.intro} — خدمة احترافية لعملاء {c.nameAr}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/201062485133" className="bg-[#1E6DB2] text-white px-7 py-3 rounded-xl font-bold hover:bg-[#193F94] transition-colors shadow">احصل على عرض سعر مجاني</a>
            <Link href={`/software-company/${city}`} className="border-2 border-[#1E6DB2] text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">كل خدماتنا في {c.nameAr}</Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-14 max-w-4xl">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">{s.nameAr} لعملاء {c.nameAr}</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">{s.what}</p>
          <p className="text-lg text-slate-700 leading-relaxed">{c.economy} توفّر DoGether Tech {s.nameAr} لأصحاب الأعمال في {c.nameAr} بجودة احترافية وأسعار تنافسية، مع تواصل يومي وتسليم في الموعد — نعمل عن بُعد بكفاءة كاملة مع عملاء {c.nameAr} وكل محافظات مصر.</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">ماذا تشمل الخدمة؟</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {s.features.map((f) => (
              <div key={f} className="flex items-center gap-2 p-4 bg-blue-50 rounded-xl border border-blue-100 text-slate-700 font-medium">
                <span className="w-2 h-2 bg-[#1DC7E0] rounded-full flex-shrink-0" />
                {f}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">قطاعات نخدمها في {c.nameAr}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {c.sectors.map((sec) => (
              <div key={sec} className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-200 text-sm text-slate-700 font-medium">
                <span className="w-2 h-2 bg-[#1DC7E0] rounded-full flex-shrink-0" />
                {sec}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">أسئلة شائعة</h2>
          <div className="space-y-4">
            {s.faqs.map((f, i) => (
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

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">خدمات أخرى في {c.nameAr}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {otherServices.map((k) => (
              <Link key={k} href={`/software-company/${city}/${k}`} className="p-4 bg-white border border-slate-200 rounded-xl hover:border-[#1DC7E0] hover:shadow transition-all text-slate-700 font-medium text-sm">
                {services[k].emoji} {services[k].nameAr} في {c.nameAr}
              </Link>
            ))}
          </div>
        </section>

        <div className="bg-gradient-to-l from-[#193F94] to-[#1E6DB2] rounded-2xl p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-3">{s.metaService} في {c.nameAr}؟ ابدأ اليوم</h2>
          <p className="mb-8 text-blue-200 text-lg">تواصل معنا لعرض سعر واستشارة مجانية خلال 24 ساعة</p>
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
