/** @type {import('next-sitemap').IConfig} */

const locales = ['en', 'hi'];
const defaultLocale = 'en';

// Define all routes
const routes = [
  '',
  '/analyze',
  '/ai-image-generator',
  '/remove-background',

  // Image converter tools
  '/png-to-webp',
  '/png-to-jpg',
  '/png-to-pdf',
  '/jpg-to-png',
  '/jpg-to-webp',
  '/jpg-to-pdf',
  '/webp-to-png',
  '/webp-to-jpg',
  '/webp-to-pdf',
  '/crop-image',
  '/resize-image',
  '/qr-code-generator',

  // HEIC converter tools
  '/heic-to-jpg',
  '/heic-to-png',
  '/heic-to-webp',
  '/heic-to-pdf',

  // PDF tools
  '/pdf-to-jpg',
  '/pdf-to-png',
  '/images-to-pdf',
  '/merge-pdf',
  '/split-pdf',
  '/pdf-info',

  // Blog pages
  '/blog',
  '/blog/compress-images-guide',
  '/blog/heic-to-jpg-guide',
  '/blog/heic-to-webp-guide',
  '/blog/jpg-to-pdf-guide',
  '/blog/jpg-to-webp-guide',
  '/blog/pdf-to-jpg-guide',
  '/blog/color-picker-guide',
  '/blog/color-palette-guide',
  '/blog/gradient-generator-guide',
  '/blog/color-converter-guide',
  '/blog/png-to-jpg-guide',
  '/blog/png-to-pdf-guide',
  '/blog/png-to-webp-guide',
  '/blog/webp-to-png-guide',
  '/blog/font-preview-guide',
  '/blog/font-pairing-guide',
  '/blog/typographic-scale-guide',
  '/blog/emoji-guide',
  '/blog/symbol-guide',
  '/blog/remove-background-guide',
  '/blog/json-validator-guide',
  '/blog/json-comparer-guide',
  '/blog/json-parser-guide',
  '/blog/crop-image-guide',
  '/blog/resize-image-guide',
  '/blog/qr-code-generator-guide',
  '/blog/ai-image-generator-guide',

  // Color tools
  '/colors',
  '/colors/picker',
  '/colors/palettes',
  '/colors/gradients',
  '/colors/converter',

  // Font tools
  '/fonts',
  '/fonts/preview',
  '/fonts/pairings',
  '/fonts/scales',

  // Text tools
  '/texts',
  '/texts/fonts',
  '/texts/fonts/preview',
  '/texts/fonts/pairings',
  '/texts/fonts/scales',
  '/texts/emojis',
  '/texts/symbols',
  '/texts/json-validator',
  '/texts/json-comparer',
  '/texts/json-parser',

  // Legal pages
  '/privacy-policy',
  '/terms-of-service',
  '/terms-of-use',
  '/cookie-policy',
];

module.exports = {
  siteUrl: 'https://imageconvertors.com',
  generateRobotsTxt: true,
  exclude: ['/api/*', '/404', '/500', '/hi/server-sitemap.xml', '/en/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
    ],
  },

  // Transform function to add hreflang alternates for each URL
  transform: async (config, path) => {
    // Remove locale prefix from path if exists to get the base route
    let baseRoute = path;
    locales.forEach(locale => {
      if (path.startsWith(`/${locale}/`)) {
        baseRoute = path.substring(locale.length + 1);
      } else if (path === `/${locale}`) {
        baseRoute = '';
      }
    });

    // Create alternates object with all language versions
    const alternateRefs = [];
    locales.forEach(locale => {
      const localeCode = locale === 'en' ? 'en-US' : 'hi-IN';
      const href = locale === defaultLocale ? `https://imageconvertors.com${baseRoute}` : `https://imageconvertors.com/${locale}${baseRoute}`;

      alternateRefs.push({
        hreflang: localeCode,
        href: href,
      });
    });

    // Add x-default for the default locale
    alternateRefs.push({
      hreflang: 'x-default',
      href: `https://imageconvertors.com${baseRoute}`,
    });

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: baseRoute === '' ? 1.0 : config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs,
    };
  },

  // Generate additional paths for all locales
  additionalPaths: async config => {
    const paths = [];

    // Generate paths for all routes and all locales
    for (const route of routes) {
      for (const locale of locales) {
        // For default locale (en), don't add locale prefix
        const path = locale === defaultLocale ? route || '/' : `/${locale}${route || ''}`;

        paths.push(await config.transform(config, path));
      }
    }

    return paths;
  },

  // Optimize for SEO
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 50000,
  autoLastmod: true,
};
