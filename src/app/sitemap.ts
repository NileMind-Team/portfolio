import type { MetadataRoute } from 'next'
import { articles } from './blog/articles'

const base = 'https://dogethertech.com'

// Governorate pages served by the dynamic [city] route
const cities = [
  'south-sinai', 'red-sea', 'marsa-alam', 'dahab', 'cairo', 'giza', 'alexandria', 'beni-suef', 'minya', 'port-said',
  'sharqia', 'dakahlia', 'gharbia', 'qalyubia', 'monufia',
  'aswan', 'luxor', 'ismailia', 'suez', 'damietta',
]

// Service pages
const services = [
  'mobile-app', 'website', 'store', 'pos',
  'digital-menu', 'custom-system', 'management-system', 'support',
]

// Fayoum service+location pages (static)
const fayoumServices = ['web-design', 'online-store', 'pos', 'mobile-app']

const gulfCountries = ['saudi-arabia', 'uae', 'kuwait', 'qatar', 'oman', 'bahrain']

export default function sitemap(): MetadataRoute.Sitemap {
  const cityPages = cities.map((city) => ({
    url: `${base}/software-company/${city}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const servicePages = services.map((s) => ({
    url: `${base}/services/${s}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const fayoumServicePages = fayoumServices.map((s) => ({
    url: `${base}/software-company/fayoum/${s}`,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  // Service × governorate pages (dynamic [city]/[service] route) — 16 cities × 8 services
  const serviceCityPages = cities.flatMap((city) =>
    services.map((s) => ({
      url: `${base}/software-company/${city}/${s}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )

  const blogPages = articles.map((a) => ({
    url: `${base}/blog/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const gulfCountryPages = gulfCountries.map((country) => ({
    url: `${base}/gulf-software/${country}`,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [
    { url: base, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/software-company`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/software-company/fayoum`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/tourism-software`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/restaurant-software`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/real-estate-software`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/clinic-software`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/gulf-software`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/work`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/en/services/mobile-app-development`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/en/services/web-development`, changeFrequency: 'monthly', priority: 0.7 },
    ...servicePages,
    ...fayoumServicePages,
    ...gulfCountryPages,
    ...serviceCityPages,
    ...cityPages,
    ...blogPages,
  ]
}
