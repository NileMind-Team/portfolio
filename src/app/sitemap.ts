import type { MetadataRoute } from 'next'

const cities = ['fayoum', 'cairo', 'giza', 'alexandria', 'beni-suef', 'minya', 'port-said', 'sharqia']
const base = 'https://dogethertech.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const cityPages = cities.map((city) => ({
    url: `${base}/software-company/${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/software-company`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${base}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${base}/services/mobile-app`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    ...cityPages,
  ]
}
