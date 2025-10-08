module.exports = {
  siteUrl: 'https://imageconvertors.com',
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
      await config.transform(config, '/analyze'),

      // Image converter tools
      await config.transform(config, '/png-to-webp'),
      await config.transform(config, '/png-to-jpg'),
      await config.transform(config, '/png-to-pdf'),
      await config.transform(config, '/jpg-to-png'),
      await config.transform(config, '/jpg-to-webp'),
      await config.transform(config, '/jpg-to-pdf'),
      await config.transform(config, '/webp-to-png'),
      await config.transform(config, '/webp-to-jpg'),
      await config.transform(config, '/webp-to-pdf'),
      await config.transform(config, '/crop-image'),

      // HEIC converter tools
      await config.transform(config, '/heic-to-jpg'),
      await config.transform(config, '/heic-to-png'),
      await config.transform(config, '/heic-to-webp'),
      await config.transform(config, '/heic-to-pdf'),

      // PDF tools
      await config.transform(config, '/pdf-to-jpg'),
      await config.transform(config, '/pdf-to-png'),
      await config.transform(config, '/images-to-pdf'),
      await config.transform(config, '/merge-pdf'),
      await config.transform(config, '/split-pdf'),
      await config.transform(config, '/pdf-info'),

      // AI tools
      await config.transform(config, '/remove-background'),

      // Blog pages
      await config.transform(config, '/blog'),
      await config.transform(config, '/blog/compress-images-guide'),
      await config.transform(config, '/blog/heic-to-jpg-guide'),
      await config.transform(config, '/blog/heic-to-webp-guide'),
      await config.transform(config, '/blog/jpg-to-pdf-guide'),
      await config.transform(config, '/blog/jpg-to-webp-guide'),
      await config.transform(config, '/blog/pdf-to-jpg-guide'),
      await config.transform(config, '/blog/color-picker-guide'),
      await config.transform(config, '/blog/color-palette-guide'),
      await config.transform(config, '/blog/gradient-generator-guide'),
      await config.transform(config, '/blog/color-converter-guide'),
      await config.transform(config, '/blog/png-to-jpg-guide'),
      await config.transform(config, '/blog/png-to-pdf-guide'),
      await config.transform(config, '/blog/png-to-webp-guide'),
      await config.transform(config, '/blog/webp-to-png-guide'),
      await config.transform(config, '/blog/font-preview-guide'),
      await config.transform(config, '/blog/font-pairing-guide'),
      await config.transform(config, '/blog/typographic-scale-guide'),
      await config.transform(config, '/blog/emoji-guide'),
      await config.transform(config, '/blog/symbol-guide'),
      await config.transform(config, '/blog/remove-background-guide'),
      await config.transform(config, '/blog/json-validator-guide'),
      await config.transform(config, '/blog/json-comparer-guide'),
      await config.transform(config, '/blog/json-parser-guide'),
      await config.transform(config, '/blog/crop-image-guide'),

      // Color tools
      await config.transform(config, '/colors'),
      await config.transform(config, '/colors/picker'),
      await config.transform(config, '/colors/palettes'),
      await config.transform(config, '/colors/gradients'),
      await config.transform(config, '/colors/converter'),

      // Text tools
      await config.transform(config, '/texts'),
      await config.transform(config, '/texts/fonts'),
      await config.transform(config, '/texts/fonts/preview'),
      await config.transform(config, '/texts/fonts/pairings'),
      await config.transform(config, '/texts/fonts/scales'),
      await config.transform(config, '/texts/emojis'),
      await config.transform(config, '/texts/symbols'),
      await config.transform(config, '/texts/json-validator'),
      await config.transform(config, '/texts/json-comparer'),
      await config.transform(config, '/texts/json-parser'),
    ];
  },
  // Optimize for SEO
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 50000,
};
