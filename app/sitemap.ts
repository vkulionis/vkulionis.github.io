import { getBlogPosts } from 'app/blog/utils'

export const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://useeio-analysis.vercel.app'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/blog', '/network_full.html', '/linkages.html', '/flow_analysis.html'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
