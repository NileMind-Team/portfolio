import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

const cityData: Record<string, { nameAr: string; para1: string; para2: string }> = {
  fayoum: {
    nameAr: 'الفيوم',
    para1:
      'تأسست DoGether Tech في قلب محافظة الفيوم لتصبح شركة البرمجة الأولى التي تقدم حلولاً رقمية احترافية لأبناء المحافظة. نؤمن بأن كل عمل تجاري في الفيوم — سواء كان مطعماً أو محلاً تجارياً أو شركة متوسطة — يستحق موقعاً إلكترونياً مميزاً وتطبيقاً يواكب العصر.',
    para2:
      'عملاؤنا في الفيوم يستفيدون من قربنا الجغرافي وفهمنا العميق لسوق المحافظة واحتياجاتها. نقدم مواقع ويب متجاوبة، متاجر إلكترونية، أنظمة نقاط بيع POS، وتطبيقات جوال — بأسعار مناسبة وإشراف مباشر من فريقنا المتخصص.',
  },
  cairo: {
    nameAr: 'القاهرة',
    para1:
      'توسعت DoGether Tech لتخدم عملاء القاهرة الكبرى بكفاءة واحترافية عالية. في سوق تنافسي كالقاهرة، يحتاج عملك إلى هوية رقمية قوية — موقع سريع وجذاب، متجر إلكتروني متكامل، أو تطبيق جوال يصل لملايين المستخدمين.',
    para2:
      'خدمنا عشرات الشركات في القاهرة عبر قطاعات متنوعة: المطاعم والأغذية، العقارات، التجارة الإلكترونية، والتعليم. فريقنا يعمل عن بُعد بالكامل مع تواصل يومي مضمون وتسليم في الوقت المحدد بلا تأخير.',
  },
  giza: {
    nameAr: 'الجيزة',
    para1:
      'تمثل محافظة الجيزة مركزاً تجارياً وصناعياً متنامياً يضم آلاف الشركات الصغيرة والمتوسطة. تقدم DoGether Tech لعملاء الجيزة حلول برمجية مخصصة تشمل مواقع الويب الاحترافية، منصات التجارة الإلكترونية، وأنظمة إدارة الأعمال.',
    para2:
      'إذا كنت تمتلك مشروعاً في الجيزة وتريد الانطلاق رقمياً، فريقنا جاهز لتحويل فكرتك إلى منتج رقمي متكامل. نصمم، نطور، ونطلق — من الصفر حتى الإطلاق الفعلي على الإنترنت.',
  },
  alexandria: {
    nameAr: 'الإسكندرية',
    para1:
      'الإسكندرية، عروس البحر المتوسط وثاني أكبر مدن مصر، تزخر بفرص تجارية هائلة في قطاعات التجارة والصناعة والسياحة. DoGether Tech تقدم للشركات الإسكندرانية مواقع ويب ومتاجر إلكترونية بمستوى عالمي تواكب حجم وطموح هذه المدينة العريقة.',
    para2:
      'شركاؤنا في الإسكندرية يستفيدون من خبرتنا في إنشاء منصات متعددة اللغات (عربي وإنجليزي) تستهدف العملاء المحليين والأجانب على حد سواء، مما يعزز مكانتهم التنافسية في سوق المدينة الكبيرة.',
  },
  'beni-suef': {
    nameAr: 'بني سويف',
    para1:
      'تشهد محافظة بني سويف نهضة اقتصادية متسارعة بفضل مشاريع التطوير والمناطق الصناعية الجديدة. DoGether Tech ترى في بني سويف فرصة حقيقية لدعم أصحاب الأعمال والشباب رقمياً بمواقع ويب احترافية وتطبيقات جوال متطورة.',
    para2:
      'نفتخر بتقديم خدماتنا لشركات ومشاريع بني سويف بنفس جودة الخدمة التي نقدمها للعاصمة، مع أسعار تناسب حجم السوق المحلي وطبيعة المشاريع الناشئة والمتنامية في المحافظة.',
  },
  minya: {
    nameAr: 'المنيا',
    para1:
      'تتميز محافظة المنيا بموقعها الاستراتيجي في قلب مصر العليا وثرواتها السياحية والزراعية والصناعية. DoGether Tech تمنح شركات المنيا الفرصة للتحول الرقمي الحقيقي عبر مواقع ويب حديثة، متاجر إلكترونية، وأنظمة كاشير ونقاط بيع.',
    para2:
      'أصحاب المشاريع في المنيا الذين يتواصلون معنا يجدون فريقاً يفهم احتياجاتهم ويقدم لهم حلولاً مخصصة لا نماذج جاهزة. من موقع بسيط لمشروع صغير إلى منظومة رقمية متكاملة لشركة كبيرة — نحن معكم في كل خطوة.',
  },
  'port-said': {
    nameAr: 'بورسعيد',
    para1:
      'بورسعيد، مدينة قناة السويس والتجارة الدولية، تضم شركات واردات وتصدير ومحلات تجارية تحتاج إلى حضور رقمي احترافي يعكس مكانتها. DoGether Tech تصمم وتطور لشركات بورسعيد مواقع ومتاجر إلكترونية متعددة اللغات تستهدف الأسواق المحلية والدولية.',
    para2:
      'سواء كنت تعمل في التجارة والاستيراد أو الخدمات أو السياحة في بورسعيد، فريق DoGether Tech يمنحك الأدوات الرقمية التي تحتاجها: موقع احترافي، متجر إلكتروني، تطبيق جوال، أو نظام إدارة متكامل.',
  },
}

const services = [
  'تصميم وتطوير مواقع الويب',
  'إنشاء متاجر إلكترونية',
  'تطوير تطبيقات الجوال',
  'أنظمة نقاط البيع POS',
  'تصميم UI/UX',
  'خدمات DevOps والاستضافة',
]

export function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({ city }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>
}): Promise<Metadata> {
  const { city } = await params
  const data = cityData[city]
  if (!data) return {}

  return {
    title: `شركة برمجة في ${data.nameAr} | DoGether Tech`,
    description: `DoGether Tech شركة برمجة وتصميم مواقع في ${data.nameAr}. تطوير مواقع، تطبيقات جوال، متاجر إلكترونية وأنظمة POS في ${data.nameAr}. تواصل: 01062485133`,
    alternates: {
      canonical: `https://dogethertech.com/software-company/${city}`,
    },
    openGraph: {
      title: `شركة برمجة في ${data.nameAr} | DoGether Tech`,
      description: `حلول برمجية احترافية في ${data.nameAr} — مواقع، تطبيقات، متاجر إلكترونية، POS`,
      url: `https://dogethertech.com/software-company/${city}`,
    },
  }
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params
  const data = cityData[city]
  if (!data) notFound()

  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-white font-sans">
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
            تواصل معنا
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 border-b border-blue-100">
        <div className="container mx-auto px-6 text-center">
          <nav className="text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-[#1E6DB2] transition-colors">
              الرئيسية
            </Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700">{data.nameAr}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">
            شركة برمجة وتصميم مواقع في {data.nameAr}
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            DoGether Tech — حلول برمجية احترافية لعملاء {data.nameAr}
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="container mx-auto px-6 py-14 max-w-4xl">
        <p className="text-lg text-slate-700 leading-relaxed mb-6">{data.para1}</p>
        <p className="text-lg text-slate-700 leading-relaxed mb-14">{data.para2}</p>

        {/* Services Grid */}
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          خدماتنا في {data.nameAr}
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-14">
          {services.map((service) => (
            <div
              key={service}
              className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100"
            >
              <span className="w-2.5 h-2.5 bg-[#1DC7E0] rounded-full flex-shrink-0" />
              <span className="text-slate-700 font-medium">{service}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-l from-[#193F94] to-[#1E6DB2] rounded-2xl p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-3">
            ابدأ مشروعك في {data.nameAr} اليوم
          </h2>
          <p className="mb-8 text-blue-200 text-lg">
            تواصل معنا وسنقدم لك استشارة مجانية خلال 24 ساعة
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/201062485133"
              className="bg-white text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow"
            >
              واتساب: 01062485133
            </a>
            <Link
              href="/"
              className="border-2 border-white text-white px-7 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              زيارة الموقع الرئيسي
            </Link>
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
