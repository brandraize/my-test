import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sensingnatures.com'
  
  const routes = [
    '',
    '/about-us',
    '/contact-us',
    '/services',
    '/blog',
    '/faq',
    '/products',
  ]
  
  const languages = ['en', 'ar']
  
  const urls: MetadataRoute.Sitemap = []
  
  languages.forEach(lang => {
    routes.forEach(route => {
      urls.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            ar: `${baseUrl}/ar${route}`,
          },
        },
      })
    })
  })
  
  return urls
}
