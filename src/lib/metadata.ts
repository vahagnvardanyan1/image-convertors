import { Metadata } from 'next';

// Base configuration for the application
export const siteConfig = {
  name: 'ImageConverter',
  title: 'ImageConverter - Free Online Image Format Converter & Analyzer',
  description: 'Convert and analyze images between PNG, JPG, WebP, GIF and more formats instantly. Fast, secure, and completely free online image converter and analyzer tool with advanced features.',
  url: 'https://imageconvertors.com',
  ogImage: '/images/og-image.png',
  twitterImage: '/images/og-image.png',
  keywords: [
    'image converter',
    'image analyzer',
    'PNG to WebP',
    'JPG to PNG',
    'WebP to PNG',
    'image format converter',
    'online image tool',
    'image analysis',
    'image properties',
    'EXIF data',
    'image metadata',
    'free image converter',
    'batch image converter',
    'image optimizer',
    'image quality checker',
  ],
  author: {
    name: 'ImageConverter Team',
    url: 'https://imageconvertors.com',
    twitter: '@imageconverter',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

// Route-specific metadata configuration
export const routeMetadata: Record<string, Partial<Metadata>> = {
  '/': {
    title: 'ImageConverter - Free Online Image Format Converter & Analyzer',
    description: 'Convert and analyze images between PNG, JPG, WebP, GIF and more formats instantly. Fast, secure, and completely free online image converter and analyzer tool.',
    keywords: siteConfig.keywords.join(', '),
  },
  '/analyze': {
    title: 'Image Analyzer - Analyze Image Properties, Size, Format & Quality',
    description:
      'Analyze your images instantly. Get detailed information about image format, dimensions, file size, color depth, compression, EXIF data, and quality metrics. Free online image analysis tool.',
    keywords: 'image analyzer, image analysis, image properties, image metadata, EXIF data, image dimensions, file size analyzer, image quality checker, image format detector, online image inspector',
  },
  '/png-to-webp': {
    title: 'PNG to WebP Converter - Convert PNG Images to WebP Format',
    description: 'Convert PNG images to WebP format online for free. Reduce file size by up to 80% while maintaining quality. Fast, secure PNG to WebP conversion tool.',
    keywords: 'PNG to WebP, PNG converter, WebP converter, image compression, reduce file size, optimize images',
  },
  '/jpg-to-png': {
    title: 'JPG to PNG Converter - Convert JPEG Images to PNG Format',
    description: 'Convert JPG/JPEG images to PNG format online for free. Preserve transparency and quality. Fast, secure JPG to PNG conversion tool.',
    keywords: 'JPG to PNG, JPEG to PNG, JPG converter, PNG converter, image format converter, transparency support',
  },
  '/webp-to-png': {
    title: 'WebP to PNG Converter - Convert WebP Images to PNG Format',
    description: 'Convert WebP images to PNG format online for free. Maintain quality and transparency. Fast, secure WebP to PNG conversion tool.',
    keywords: 'WebP to PNG, WebP converter, PNG converter, image format converter, transparency support',
  },
  '/jpg-to-webp': {
    title: 'JPG to WebP Converter - Convert JPEG Images to WebP Format',
    description: 'Convert JPG/JPEG images to WebP format online for free. Reduce file size significantly while maintaining quality. Fast, secure JPG to WebP conversion tool.',
    keywords: 'JPG to WebP, JPEG to WebP, JPG converter, WebP converter, image compression, optimize images',
  },
  '/png-to-jpg': {
    title: 'PNG to JPG Converter - Convert PNG Images to JPEG Format',
    description: 'Convert PNG images to JPG/JPEG format online for free. Optimize for web use and reduce file size. Fast, secure PNG to JPG conversion tool.',
    keywords: 'PNG to JPG, PNG to JPEG, PNG converter, JPG converter, image optimization, web images',
  },
  '/webp-to-jpg': {
    title: 'WebP to JPG Converter - Convert WebP Images to JPEG Format',
    description: 'Convert WebP images to JPG/JPEG format online for free. Ensure compatibility across all devices and browsers. Fast, secure WebP to JPG conversion tool.',
    keywords: 'WebP to JPG, WebP to JPEG, WebP converter, JPG converter, image compatibility, browser support',
  },
  '/privacy-policy': {
    title: 'Privacy Policy - ImageConverter',
    description: 'Learn how ImageConverter protects your privacy and handles your data. We prioritize user privacy and data security in our image conversion services.',
    keywords: 'privacy policy, data protection, user privacy, image converter privacy',
  },
  '/terms-of-use': {
    title: 'Terms of Use - ImageConverter',
    description: 'Read the terms of use for ImageConverter. Understand your rights and responsibilities when using our free online image conversion services.',
    keywords: 'terms of use, terms of service, user agreement, image converter terms',
  },
  '/cookie-policy': {
    title: 'Cookie Policy - ImageConverter',
    description: 'Learn about how ImageConverter uses cookies to improve your experience. Understand our cookie usage and privacy practices.',
    keywords: 'cookie policy, cookies, website cookies, privacy, data collection',
  },
};

// Generate structured data (JSON-LD) for different page types
export const generateStructuredData = (pathname: string) => {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
  };

  // Add specific structured data based on the route
  if (pathname === '/') {
    return {
      ...baseStructuredData,
      '@type': 'WebApplication',
      featureList: ['PNG to WebP conversion', 'JPG to PNG conversion', 'WebP to PNG conversion', 'Image analysis and metadata extraction', 'Batch image processing', 'Quality optimization'],
    };
  }

  if (pathname === '/analyze') {
    return {
      ...baseStructuredData,
      '@type': 'WebApplication',
      name: 'Image Analyzer',
      description: 'Analyze image properties, format, dimensions, and quality metrics online for free.',
      featureList: ['Image property analysis', 'EXIF data extraction', 'Color depth analysis', 'Compression ratio calculation', 'Quality assessment'],
    };
  }

  if (pathname.includes('to')) {
    const [from, to] = pathname.slice(1).split('-to-');
    return {
      ...baseStructuredData,
      '@type': 'WebApplication',
      name: `${from.toUpperCase()} to ${to.toUpperCase()} Converter`,
      description: `Convert ${from.toUpperCase()} images to ${to.toUpperCase()} format online for free.`,
      featureList: [`${from.toUpperCase()} to ${to.toUpperCase()} conversion`, 'Quality preservation', 'Batch processing', 'Instant download'],
    };
  }

  return baseStructuredData;
};

// Generate dynamic metadata based on pathname
export const generateMetadata = (pathname: string): Metadata => {
  const routeData = routeMetadata[pathname] || routeMetadata['/'];
  const canonicalUrl = `${siteConfig.url}${pathname}`;

  // Generate page-specific Open Graph image if needed
  const ogImage = '/images/og-image.png';

  const twitterImage = '/images/og-image.png';

  return {
    metadataBase: new URL(siteConfig.url),
    title: (routeData.title as string) || siteConfig.title,
    description: routeData.description || siteConfig.description,
    keywords: routeData.keywords || siteConfig.keywords,
    authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
    creator: siteConfig.author.name,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonicalUrl,
      title: (routeData.title as string) || siteConfig.title,
      description: (routeData.description as string) || siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: (routeData.title as string) || siteConfig.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: (routeData.title as string) || siteConfig.title,
      description: (routeData.description as string) || siteConfig.description,
      images: [twitterImage],
      creator: siteConfig.author.twitter,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    verification: siteConfig.verification,
    category: 'technology',
    classification: 'Image Processing Tools',
    other: {
      'msapplication-TileColor': '#2563eb',
      'theme-color': '#ffffff',
    },
  };
};

// Generate breadcrumb structured data
export const generateBreadcrumbStructuredData = (pathname: string) => {
  const pathSegments = pathname.split('/').filter(Boolean);
  const breadcrumbList = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteConfig.url,
    },
  ];

  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const routeData = routeMetadata[currentPath];
    breadcrumbList.push({
      '@type': 'ListItem',
      position: index + 2,
      name: routeData?.title ? String(routeData.title).split(' - ')[0] : segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      item: `${siteConfig.url}${currentPath}`,
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbList,
  };
};
