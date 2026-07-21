import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const viewport: Viewport = {
  themeColor: '#0d47a1',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://dogethertech.com'),
  title: 'DoGether | شركة برمجة - Software Company Egypt',
  description: 'DoGether — أفضل شركة برمجة في مصر. تصميم مواقع احترافية، تطبيقات جوال، متاجر إلكترونية، أنظمة POS وكاشير، تصميم UI/UX. نخدم الفيوم، القاهرة وجميع محافظات مصر. تواصل: 01062485133',
  keywords: [
    'DoGether', 'شركة برمجة في مصر', 'software company Egypt',
    'تصميم مواقع', 'تطوير تطبيقات', 'متجر إلكتروني', 'نظام نقاط البيع POS',
  ].join(', '),
  authors: [{ name: 'DoGether', url: 'https://dogethertech.com' }],
  creator: 'DoGether',
  publisher: 'DoGether',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://dogethertech.com/',
    title: 'DoGether | شركة برمجة',
    description: 'DoGether شركة برمجة محترفة في مصر. مواقع، تطبيقات، متاجر إلكترونية، أنظمة POS وحلول رقمية.',
    siteName: 'DoGether',
    locale: 'ar_EG',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'DoGether — شركة برمجة في مصر',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DoGether | شركة برمجة',
    description: 'شركة برمجة في مصر. مواقع، تطبيقات، متاجر إلكترونية، أنظمة POS وحلول رقمية.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://dogethertech.com/',
  },
  icons: {
    icon: [
      { url: '/DoGehter-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/DoGehter-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/DoGehter-icon.png',
  },
  manifest: '/site.webmanifest',
  category: 'technology',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService', 'Organization'],
  '@id': 'https://dogethertech.com/#business',
  name: 'DoGether',
  alternateName: [
    'DoGether', 'DoGether Egypt', 'DoGether Software', 'DoGether Digital Solutions',
    'دوجيذر تك', 'دوجيذر', 'دوجيزر', 'شركة دوجيذر', 'Dogether', 'dogethertech'
  ],
  legalName: 'DoGether',
  knowsAbout: [
    'Web Development', 'Mobile App Development', 'E-commerce', 'POS Systems',
    'UI/UX Design', 'Custom Software Development', 'Digital Transformation',
    'تطوير مواقع الويب', 'تطوير تطبيقات الجوال', 'التجارة الإلكترونية',
    'أنظمة نقاط البيع', 'تصميم واجهات المستخدم', 'البرمجة المخصصة'
  ],
  url: 'https://dogethertech.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://dogethertech.com/DoGehter-icon.png',
    width: 512,
    height: 512,
  },
  image: 'https://dogethertech.com/DoGehter-icon.png',
  description: 'DoGether شركة برمجة محترفة في مصر — الفيوم، القاهرة، بورسعيد وجميع المحافظات. تطوير مواقع، تطبيقات، متاجر إلكترونية، POS، UI/UX.',
  foundingDate: '2025',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 12 },
  priceRange: '$$',
  telephone: '+201062485133',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Fayoum',
    addressRegion: 'Fayoum Governorate',
    postalCode: '63511',
    addressCountry: 'EG',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 29.3084, longitude: 30.8428 },
  areaServed: [
    { '@type': 'City', name: 'Fayoum' },
    { '@type': 'City', name: 'Cairo' },
    { '@type': 'City', name: 'Port Said' },
    { '@type': 'City', name: 'Alexandria' },
    { '@type': 'City', name: 'Giza' },
    { '@type': 'Country', name: 'Egypt' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+201062485133',
    contactType: 'customer service',
    availableLanguage: ['Arabic', 'English'],
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'خدمات DoGether',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تطوير مواقع الويب', description: 'تصميم وتطوير مواقع احترافية متجاوبة' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'متجر إلكتروني', description: 'منصات تجارة إلكترونية متكاملة' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تطبيقات الجوال', description: 'تطبيقات iOS وAndroid' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'نظام نقاط البيع POS', description: 'أنظمة كاشير وإدارة مبيعات' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تصميم UI/UX', description: 'تصميم واجهات مستخدم جذابة' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DevOps & Cloud', description: 'استضافة وإدارة سيرفرات' } },
    ],
  },
  // sameAs = بطاقة هوية الكيان: بتربط كل حساباتك ببعض للنماذج ومحركات البحث.
  // ⚠️ ضيف الروابط الجديدة هنا أول ما تعملها (LinkedIn / Clutch / GoodFirms / Instagram).
  sameAs: [
    'https://www.facebook.com/Dogethertech',
    'https://maps.google.com/?cid=14895545088197808630',
    'https://wa.me/201062485133',
  ],
  location: [
    {
      '@type': 'Place',
      name: 'DoGether — الفيوم',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Fayoum',
        addressRegion: 'Fayoum Governorate',
        addressCountry: 'EG',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 29.3084, longitude: 30.8428 },
    },
    {
      '@type': 'Place',
      name: 'DoGether — القاهرة',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cairo',
        addressRegion: 'Cairo Governorate',
        addressCountry: 'EG',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 30.0444, longitude: 31.2357 },
    },
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://dogethertech.com/#website',
  name: 'DoGether',
  url: 'https://dogethertech.com',
  description: 'شركة برمجة في مصر - مواقع، تطبيقات، متاجر إلكترونية، POS',
  inLanguage: ['ar', 'en'],
  publisher: { '@id': 'https://dogethertech.com/#business' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta name="geo.region" content="EG-FYM" />
        <meta name="geo.placename" content="Fayoum, Egypt" />
        <meta name="geo.position" content="29.3084;30.8428" />
        <meta name="ICBM" content="29.3084, 30.8428" />
        <meta name="revisit-after" content="3 days" />
        <meta name="rating" content="general" />
        <meta property="fb:pages" content="https://www.facebook.com/Dogethertech" />
        <meta property="article:publisher" content="https://www.facebook.com/Dogethertech" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      {/* suppressHydrationWarning: إضافات المتصفح (زي ColorZilla) بتحقن خصائص
          في <body> قبل ما React يعمل hydrate — ده بيمنع تحذير وهمي في الـ dev
          ومش بيخفي أي أخطاء hydration حقيقية جوه المكوّنات. */}
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
