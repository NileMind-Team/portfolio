import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'خدمات DoGether Tech | برمجة مواقع، تطبيقات، متاجر إلكترونية في مصر',
  description:
    'DoGether Tech تقدم خدمات برمجة احترافية في مصر: تطوير مواقع الويب، تطبيقات الجوال، المتاجر الإلكترونية، أنظمة POS، تصميم UI/UX، وخدمات DevOps.',
  alternates: {
    canonical: 'https://dogethertech.com/services',
  },
  openGraph: {
    title: 'خدمات DoGether Tech | برمجة مواقع، تطبيقات، متاجر إلكترونية في مصر',
    description:
      'خدمات برمجة متكاملة في مصر: مواقع ويب، تطبيقات جوال، متاجر إلكترونية، POS، UI/UX، DevOps',
    url: 'https://dogethertech.com/services',
  },
}

const services = [
  {
    slug: 'mobile-app',
    nameAr: 'تطوير تطبيقات الجوال',
    descAr:
      'تطبيقات Flutter احترافية لنظامَي iOS وAndroid. تصميم عصري، أداء عالٍ، وتسليم سريع.',
    icon: '📱',
  },
  {
    slug: 'website',
    nameAr: 'تصميم وتطوير مواقع الويب',
    descAr:
      'مواقع Next.js سريعة وآمنة وصديقة لمحركات البحث. من المواقع التعريفية إلى المنصات المتكاملة.',
    icon: '🌐',
  },
  {
    slug: 'store',
    nameAr: 'إنشاء المتاجر الإلكترونية',
    descAr:
      'متاجر إلكترونية متكاملة: بوابات دفع مصرية، إدارة مخزون، لوحة تحكم — جاهزة للمبيعات الفورية.',
    icon: '🛒',
  },
  {
    slug: 'pos',
    nameAr: 'أنظمة نقاط البيع POS',
    descAr:
      'أنظمة كاشير مخصصة لمطاعم، صيدليات، ومحلات التجزئة — تعمل أونلاين وأوفلاين.',
    icon: '🏪',
  },
  {
    slug: 'digital-menu',
    nameAr: 'القائمة الرقمية',
    descAr:
      'قائمة رقمية بـ QR Code للمطاعم والمقاهي. تحديث فوري للأسعار بدون طباعة جديدة.',
    icon: '📋',
  },
  {
    slug: 'custom-system',
    nameAr: 'الأنظمة المخصصة',
    descAr:
      'تطوير أنظمة برمجية مخصصة تماماً لاحتياجات شركتك — لا قوالب، لا حلول جاهزة.',
    icon: '🔧',
  },
  {
    slug: 'management-system',
    nameAr: 'أنظمة إدارة الأعمال',
    descAr:
      'إدارة مخزون، موظفين، فواتير، وتقارير من لوحة تحكم واحدة. مخصص لشركتك تماماً.',
    icon: '📊',
  },
  {
    slug: 'support',
    nameAr: 'الدعم الفني والصيانة',
    descAr:
      'صيانة دورية، تحديثات، إصلاح أخطاء، وتحسين أداء — لمواقعك وتطبيقاتك وأنظمتك.',
    icon: '🛡️',
  },
]

export default function ServicesPage() {
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
            <Link href="/software-company" className="hover:text-[#1E6DB2] transition-colors">
              شركة برمجة في مصر
            </Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700">الخدمات</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight">
            خدمات البرمجة وتطوير البرمجيات
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            DoGether Tech — حلول برمجية متكاملة للشركات والمشاريع في مصر
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <main className="container mx-auto px-6 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex gap-4 p-6 bg-white border border-blue-100 rounded-2xl hover:border-[#1DC7E0] hover:shadow-lg transition-all"
            >
              <span className="text-3xl flex-shrink-0">{service.icon}</span>
              <div>
                <h2 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#1E6DB2] transition-colors">
                  {service.nameAr}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed">{service.descAr}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-l from-[#193F94] to-[#1E6DB2] rounded-2xl p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl font-bold mb-3">لا تعرف من أين تبدأ؟</h2>
          <p className="mb-8 text-blue-200 text-lg">
            تواصل معنا الآن واحصل على استشارة مجانية لتحديد أفضل حل لمشروعك
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/201062485133"
              className="bg-white text-[#1E6DB2] px-7 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow"
            >
              واتساب: 01062485133
            </a>
            <Link
              href="/software-company"
              className="border-2 border-white text-white px-7 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              تعرف علينا أكثر
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
