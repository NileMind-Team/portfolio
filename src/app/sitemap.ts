import type { MetadataRoute } from 'next'
import { articles } from './blog/articles'

const base = 'https://dogethertech.com'

// Governorate pages served by the dynamic [city] route
const cities = [
  'cairo', 'giza', 'alexandria', 'beni-suef', 'minya', 'port-said',
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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const cityPages = cities.map((city) => ({
    url: `${base}/software-company/${city}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const servicePages = services.map((s) => ({
    url: `${base}/services/${s}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const fayoumServicePages = fayoumServices.map((s) => ({
    url: `${base}/software-company/fayoum/${s}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const blogPages = articles.map((a) => ({
    url: `${base}/blog/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/software-company`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/software-company/fayoum`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/work`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/en/services/mobile-app-development`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/en/services/web-development`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...servicePages,
    ...fayoumServicePages,
    ...cityPages,
    ...blogPages,
  ]
}
