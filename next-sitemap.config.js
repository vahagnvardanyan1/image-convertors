module.exports = {
  siteUrl: 'https://image-convertors.vercel.app/',
  generateRobotsTxt: true,
  exclude: ['/api/*', '/404', '/500'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
    ],
  },
  // Ensure all routes are included in the sitemap
  additionalPaths: async config => {
    return [
      // Main pages
      await config.transform(config, '/'),

      // Image converter tools
      await config.transform(config, '/png-to-webp'),
      await config.transform(config, '/jpg-to-png'),
      await config.transform(config, '/webp-to-png'),
      await config.transform(config, '/jpg-to-webp'),
      await config.transform(config, '/png-to-jpg'),
      await config.transform(config, '/webp-to-jpg'),

      // Legal pages
      await config.transform(config, '/cookie-policy'),
      await config.transform(config, '/privacy-policy'),
      await config.transform(config, '/terms-of-use'),
    ];
  },
  // Optimize for SEO
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 50000,
};
