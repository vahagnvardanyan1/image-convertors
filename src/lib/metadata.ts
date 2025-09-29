import { Metadata } from 'next';

// Type definitions for structured data
interface WebApplicationSchema {
  '@type': 'WebApplication';
  name?: string;
  description?: string;
  featureList?: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface FAQItem {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}

interface HowToStep {
  '@type': 'HowToStep';
  position: number;
  name: string;
  text: string;
  image: string;
}

// Base configuration for the application
export const siteConfig = {
  name: 'ImageConverter',
  title: 'ImageConverter - Free Online Image Format Converter & Analyzer',
  description: 'Convert and analyze images between PNG, JPG, WebP, GIF and more formats instantly. Fast, secure, and completely free online image converter and analyzer tool with advanced features.',
  url: 'https://imageconvertors.com',
  ogImage: '/images/og-image.webp',
  twitterImage: '/images/og-image.webp',
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
  '/png-to-pdf': {
    title: 'PNG to PDF Converter - Convert PNG Images to PDF Online Free',
    description:
      'Convert PNG images to PDF documents instantly. Maintain transparency and high quality. Customize page size, orientation, and margins. Fast, secure, and completely free PNG to PDF conversion tool.',
    keywords: 'PNG to PDF, convert PNG to PDF, PNG PDF converter, PNG to PDF online, PNG to PDF free, PNG transparency PDF',
  },
  '/jpg-to-pdf': {
    title: 'JPG to PDF Converter - Convert JPEG Images to PDF Online Free',
    description:
      'Convert JPG/JPEG images to PDF documents instantly. Maintain high quality and optimize file size. Customize page size, orientation, and margins. Fast, secure, and completely free JPG to PDF conversion tool.',
    keywords: 'JPG to PDF, JPEG to PDF, convert JPG to PDF, convert JPEG to PDF, JPG PDF converter, JPEG PDF converter',
  },
  '/webp-to-pdf': {
    title: 'WebP to PDF Converter - Convert WebP Images to PDF Online Free',
    description:
      'Convert WebP images to PDF documents instantly. Maintain excellent quality and compression. Customize page size, orientation, and margins. Fast, secure, and completely free WebP to PDF conversion tool.',
    keywords: 'WebP to PDF, convert WebP to PDF, WebP PDF converter, WebP to PDF online, WebP to PDF free, WebP compression PDF',
  },
};

// Generate comprehensive structured data (JSON-LD) for different page types
export const generateStructuredData = (pathname: string) => {
  // Get current page URL
  const currentUrl = `${siteConfig.url}${pathname}`;

  // Get page-specific metadata
  const pageMetadata = routeMetadata[pathname] || routeMetadata['/'];
  // Base Organization schema with logo for Google search results
  const organizationSchema = {
    '@type': 'Organization',
    name: siteConfig.author.name,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/favicon-512x512.png`,
      width: 512,
      height: 512,
      caption: 'ImageConverter Logo',
    },
    image: `${siteConfig.url}/favicon-512x512.png`,
    description: siteConfig.description,
    foundingDate: '2024',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    sameAs: [siteConfig.author.url],
  };

  // Website schema - represents the entire site
  const websiteSchema = {
    '@type': 'Website',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: organizationSchema,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  // WebPage schema - page-specific
  const webPageSchema = {
    '@type': 'WebPage',
    name: pageMetadata.title ? String(pageMetadata.title).split(' - ')[0] : siteConfig.name,
    url: currentUrl,
    description: pageMetadata.description || siteConfig.description,
    isPartOf: {
      '@type': 'Website',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: organizationSchema,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    mainEntity: currentUrl,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      '@id': `${currentUrl}#breadcrumb`,
    },
  };

  // Enhanced WebApplication schema
  const baseWebApplicationSchema = {
    '@type': 'WebApplication',
    name: pageMetadata.title ? String(pageMetadata.title).split(' - ')[0] : siteConfig.name,
    url: currentUrl,
    description: pageMetadata.description || siteConfig.description,
    applicationCategory: 'MultimediaApplication',
    applicationSubCategory: 'Image Converter',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    softwareVersion: '1.0',
    releaseNotes: 'Free online image and PDF conversion tool',
    screenshot: `${siteConfig.url}/images/og-image.webp`,
    mainEntityOfPage: currentUrl,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: '2024-01-01',
    },
    author: organizationSchema,
    publisher: organizationSchema,
    creator: organizationSchema,
    maintainer: organizationSchema,
    copyrightHolder: organizationSchema,
    license: 'https://creativecommons.org/licenses/by/4.0/',
    isAccessibleForFree: true,
    usageInfo: 'Free to use for personal and commercial purposes',
  };

  // SoftwareApplication schema for better categorization
  const softwareApplicationSchema = {
    '@type': 'SoftwareApplication',
    name: pageMetadata.title ? String(pageMetadata.title).split(' - ')[0] : siteConfig.name,
    description: pageMetadata.description || siteConfig.description,
    url: currentUrl,
    applicationCategory: 'MultimediaApplication',
    applicationSubCategory: 'Image Processing',
    operatingSystem: 'Web Browser',
    softwareVersion: '1.0',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    author: organizationSchema,
    publisher: organizationSchema,
    downloadUrl: currentUrl,
    installUrl: currentUrl,
    screenshot: `${siteConfig.url}/images/og-image.webp`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  // Return multiple schemas as an array
  const baseStructuredData = [
    {
      '@context': 'https://schema.org',
      ...organizationSchema,
    },
    {
      '@context': 'https://schema.org',
      ...websiteSchema,
    },
    {
      '@context': 'https://schema.org',
      ...webPageSchema,
    },
    {
      '@context': 'https://schema.org',
      ...baseWebApplicationSchema,
    },
    {
      '@context': 'https://schema.org',
      ...softwareApplicationSchema,
    },
  ];

  // Add specific structured data based on the route
  if (pathname === '/') {
    const homePageSchemas = [
      ...baseStructuredData,
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Image Format Conversion Services',
        description: 'Professional image format conversion services including PNG, JPG, WebP, and more.',
        provider: organizationSchema,
        serviceType: 'Image Conversion',
        areaServed: 'Worldwide',
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: currentUrl,
          serviceType: 'Online',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Image Conversion Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'PNG to WebP Conversion',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'JPG to PNG Conversion',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Image Analysis',
              },
            },
          ],
        },
      },
    ];

    // Update the WebPage schema for homepage
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (homePageSchemas[2] as any).name = 'ImageConverter - Free Online Image & PDF Converter';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (homePageSchemas[2] as any).description = 'Convert and analyze images between PNG, JPG, WebP, GIF and more formats instantly. Complete PDF tools included.';

    // Update the main WebApplication with homepage features
    (homePageSchemas[3] as WebApplicationSchema).featureList = [
      'PNG to WebP conversion',
      'JPG to PNG conversion',
      'WebP to PNG conversion',
      'PDF to JPG conversion',
      'PDF to PNG conversion',
      'Images to PDF conversion',
      'Image analysis and metadata extraction',
      'Batch image processing',
      'Quality optimization',
      'PDF merging and splitting',
    ];

    return homePageSchemas;
  }

  if (pathname === '/analyze') {
    const analyzeSchemas = [...baseStructuredData];

    // Update the WebPage schema for analyze page
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (analyzeSchemas[2] as any).name = 'Image Analyzer - Analyze Image Properties & Quality';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (analyzeSchemas[2] as any).description = 'Analyze your images instantly. Get detailed information about format, dimensions, file size, color depth, compression, EXIF data, and quality metrics.';

    (analyzeSchemas[3] as WebApplicationSchema).name = 'Image Analyzer';
    (analyzeSchemas[3] as WebApplicationSchema).description = 'Analyze image properties, format, dimensions, and quality metrics online for free.';
    (analyzeSchemas[3] as WebApplicationSchema).featureList = [
      'Image property analysis',
      'EXIF data extraction',
      'Color depth analysis',
      'Compression ratio calculation',
      'Quality assessment',
      'Format detection',
    ];

    // Add specific Service schema for image analysis
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (analyzeSchemas as any[]).push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Image Analysis Service',
      description: 'Comprehensive image analysis including metadata, properties, and quality assessment.',
      provider: {
        '@type': 'Organization',
        name: organizationSchema.name,
        url: organizationSchema.url,
      },
      serviceType: 'Image Analysis',
      areaServed: 'Worldwide',
      url: currentUrl,
    });

    return analyzeSchemas;
  }

  // Handle conversion tool pages
  if (pathname.includes('to') || pathname.includes('pdf')) {
    const conversionSchemas = [...baseStructuredData];
    let serviceName = '';
    let serviceDescription = '';

    if (pathname.includes('to')) {
      const [from, to] = pathname.slice(1).split('-to-');
      serviceName = `${from.toUpperCase()} to ${to.toUpperCase()} Converter`;
      serviceDescription = `Convert ${from.toUpperCase()} images to ${to.toUpperCase()} format online for free.`;
      (conversionSchemas[3] as WebApplicationSchema).featureList = [
        `${from.toUpperCase()} to ${to.toUpperCase()} conversion`,
        'Quality preservation',
        'Batch processing',
        'Instant download',
        'No file size limits',
      ];
    } else if (pathname.includes('pdf')) {
      if (pathname.includes('pdf-to-jpg')) {
        serviceName = 'PDF to JPG Converter';
        serviceDescription = 'Convert PDF documents to high-quality JPG images.';
      } else if (pathname.includes('pdf-to-png')) {
        serviceName = 'PDF to PNG Converter';
        serviceDescription = 'Convert PDF documents to high-quality PNG images.';
      } else if (pathname.includes('images-to-pdf')) {
        serviceName = 'Images to PDF Converter';
        serviceDescription = 'Combine multiple images into a single PDF document.';
      } else if (pathname.includes('merge-pdf')) {
        serviceName = 'PDF Merger';
        serviceDescription = 'Merge multiple PDF documents into one file.';
      } else if (pathname.includes('split-pdf')) {
        serviceName = 'PDF Splitter';
        serviceDescription = 'Split PDF documents into separate pages or sections.';
      } else if (pathname.includes('pdf-info')) {
        serviceName = 'PDF Info Analyzer';
        serviceDescription = 'Analyze PDF document properties and metadata.';
      } else if (pathname.includes('png-to-pdf')) {
        serviceName = 'PNG to PDF Converter';
        serviceDescription = 'Convert PNG images to PDF documents with transparency support.';
      } else if (pathname.includes('jpg-to-pdf')) {
        serviceName = 'JPG to PDF Converter';
        serviceDescription = 'Convert JPG/JPEG images to PDF documents with optimized quality.';
      } else if (pathname.includes('webp-to-pdf')) {
        serviceName = 'WebP to PDF Converter';
        serviceDescription = 'Convert WebP images to PDF documents with excellent compression.';
      }

      (conversionSchemas[3] as WebApplicationSchema).featureList = ['PDF processing', 'High-quality output', 'Batch processing', 'Secure conversion', 'No watermarks', 'Fast processing'];
    }

    // Update the WebPage schema for conversion pages
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (conversionSchemas[2] as any).name = serviceName;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (conversionSchemas[2] as any).description = serviceDescription;

    (conversionSchemas[3] as WebApplicationSchema).name = serviceName;
    (conversionSchemas[3] as WebApplicationSchema).description = serviceDescription;

    // Add specific Service schema for this conversion type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (conversionSchemas as any[]).push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceName,
      description: serviceDescription,
      provider: {
        '@type': 'Organization',
        name: organizationSchema.name,
        url: organizationSchema.url,
      },
      serviceType: 'File Conversion',
      areaServed: 'Worldwide',
      url: currentUrl,
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: currentUrl,
        serviceType: 'Online',
      },
    });

    return conversionSchemas;
  }

  // For other pages (privacy, terms, etc.)
  return baseStructuredData;
};

// Generate dynamic metadata based on pathname

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

// Generate FAQ structured data
export const generateFAQStructuredData = (pathname: string) => {
  // Only add FAQ schema on homepage and main converter pages
  if (pathname !== '/' && !pathname.includes('to') && !pathname.includes('pdf')) {
    return null;
  }

  const currentUrl = `${siteConfig.url}${pathname}`;
  // const pageMetadata = routeMetadata[pathname] || routeMetadata['/'];

  const commonFAQs = [
    {
      '@type': 'Question',
      name: 'Is ImageConverter free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, ImageConverter is completely free to use. There are no hidden fees, subscriptions, or watermarks on your converted files.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are my files secure when using ImageConverter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, your files are completely secure. All conversions happen in your browser locally, and no files are uploaded to our servers. Your privacy is our priority.',
      },
    },
    {
      '@type': 'Question',
      name: 'What file formats does ImageConverter support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ImageConverter supports all major image formats including PNG, JPG/JPEG, WebP, GIF, and PDF. You can convert between any of these formats quickly and easily.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a file size limit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ImageConverter can handle files of various sizes. Since processing happens in your browser, very large files may take longer to process depending on your device capabilities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to install any software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No installation required! ImageConverter works directly in your web browser. Just visit our website and start converting your images immediately.',
      },
    },
  ];

  let specificFAQs: FAQItem[] = [];

  if (pathname.includes('to')) {
    const [from, to] = pathname.slice(1).split('-to-');
    specificFAQs = [
      {
        '@type': 'Question',
        name: `How do I convert ${from.toUpperCase()} to ${to.toUpperCase()}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Converting ${from.toUpperCase()} to ${to.toUpperCase()} is easy: 1) Upload your ${from.toUpperCase()} file, 2) Click convert, 3) Download your ${to.toUpperCase()} file. The conversion happens instantly in your browser.`,
        },
      },
      {
        '@type': 'Question',
        name: `Will the quality be maintained when converting ${from.toUpperCase()} to ${to.toUpperCase()}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes, our ${from.toUpperCase()} to ${to.toUpperCase()} converter maintains high quality while optimizing file size. You can adjust quality settings if needed.`,
        },
      },
    ];
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: currentUrl,
    mainEntity: [...specificFAQs, ...commonFAQs],
    mainEntityOfPage: currentUrl,
  };
};

// Generate HowTo structured data for conversion processes
export const generateHowToStructuredData = (pathname: string) => {
  if (!pathname.includes('to') && !pathname.includes('pdf')) {
    return null;
  }

  const currentUrl = `${siteConfig.url}${pathname}`;
  // const pageMetadata = routeMetadata[pathname] || routeMetadata['/'];

  let name = '';
  let description = '';
  let steps: HowToStep[] = [];

  if (pathname.includes('to')) {
    const [from, to] = pathname.slice(1).split('-to-');
    name = `How to Convert ${from.toUpperCase()} to ${to.toUpperCase()}`;
    description = `Step-by-step guide to convert ${from.toUpperCase()} images to ${to.toUpperCase()} format online for free.`;

    steps = [
      {
        '@type': 'HowToStep',
        position: 1,
        name: `Upload ${from.toUpperCase()} File`,
        text: `Click the upload button or drag and drop your ${from.toUpperCase()} file into the converter area.`,
        image: `${siteConfig.url}/images/howto/${from}-to-${to}/step-upload.webp`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Start Conversion',
        text: `Click the "Convert" button to begin the ${from.toUpperCase()} to ${to.toUpperCase()} conversion process.`,
        image: `${siteConfig.url}/images/howto/${from}-to-${to}/step-convert.webp`,
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: `Download ${to.toUpperCase()} File`,
        text: `Once conversion is complete, download your converted ${to.toUpperCase()} file instantly.`,
        image: `${siteConfig.url}/images/howto/${from}-to-${to}/step-download.webp`,
      },
    ];
  } else if (pathname.includes('pdf-to-')) {
    const format = pathname.includes('jpg') ? 'JPG' : 'PNG';
    const formatLower = format.toLowerCase();
    name = `How to Convert PDF to ${format}`;
    description = `Step-by-step guide to convert PDF documents to ${format} images online.`;

    steps = [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Upload PDF File',
        text: 'Select and upload the PDF document you want to convert to images.',
        image: `${siteConfig.url}/images/howto/pdf-to-${formatLower}/step-upload-pdf.webp`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Choose Pages',
        text: 'Select which pages you want to convert or convert all pages.',
        image: `${siteConfig.url}/images/howto/pdf-to-${formatLower}/step-select-pages.webp`,
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Convert to Images',
        text: `Click convert to transform your PDF pages into high-quality ${format} images.`,
        image: `${siteConfig.url}/images/howto/pdf-to-${formatLower}/step-convert-pdf.webp`,
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Download Images',
        text: `Download individual ${format} images or get them all in a ZIP file.`,
        image: `${siteConfig.url}/images/howto/pdf-to-${formatLower}/step-download-images.webp`,
      },
    ];
  } else if (pathname.includes('images-to-pdf') || pathname.includes('-to-pdf')) {
    let formatName = '';
    let folderName = '';

    if (pathname.includes('png-to-pdf')) {
      formatName = 'PNG';
      folderName = 'png-to-pdf';
    } else if (pathname.includes('jpg-to-pdf')) {
      formatName = 'JPG';
      folderName = 'jpg-to-pdf';
    } else if (pathname.includes('webp-to-pdf')) {
      formatName = 'WebP';
      folderName = 'webp-to-pdf';
    } else {
      formatName = 'Images';
      folderName = 'images-to-pdf';
    }

    name = `How to Convert ${formatName} to PDF`;
    description = `Step-by-step guide to convert ${formatName} ${formatName === 'Images' ? 'files' : 'images'} into PDF documents.`;

    steps = [
      {
        '@type': 'HowToStep',
        position: 1,
        name: `Select ${formatName} ${formatName === 'Images' ? 'Files' : 'Images'}`,
        text: `Upload ${formatName === 'Images' ? 'multiple images' : `your ${formatName} images`} you want to convert to PDF.`,
        image: `${siteConfig.url}/images/howto/${folderName}/step-select-images.webp`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Arrange Order',
        text: `${formatName === 'Images' ? 'Drag and drop images to arrange them in your preferred order.' : `Arrange your ${formatName} images in the desired order for the PDF.`}`,
        image: `${siteConfig.url}/images/howto/${folderName}/step-arrange-order.webp`,
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Create PDF',
        text: `Click create to convert ${formatName === 'Images' ? 'all images' : `your ${formatName} images`} into a PDF document.`,
        image: `${siteConfig.url}/images/howto/${folderName}/step-create-pdf.webp`,
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Download PDF',
        text: `Download your ${formatName} to PDF converted document instantly.`,
        image: `${siteConfig.url}/images/howto/${folderName}/step-download-pdf.webp`,
      },
    ];
  } else if (pathname.includes('merge-pdf')) {
    name = 'How to Merge PDF Files';
    description = 'Step-by-step guide to merge multiple PDF documents into one file.';

    steps = [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Upload PDF Files',
        text: 'Select and upload multiple PDF files you want to merge.',
        image: `${siteConfig.url}/images/howto/merge-pdf/step-upload-pdfs.webp`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Arrange Order',
        text: 'Drag and drop PDF files to set the order for merging.',
        image: `${siteConfig.url}/images/howto/merge-pdf/step-arrange-order.webp`,
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Merge PDFs',
        text: 'Click merge to combine all PDF files into a single document.',
        image: `${siteConfig.url}/images/howto/merge-pdf/step-merge-pdfs.webp`,
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Download Merged PDF',
        text: 'Download your merged PDF document.',
        image: `${siteConfig.url}/images/howto/merge-pdf/step-download-merged.webp`,
      },
    ];
  } else if (pathname.includes('split-pdf')) {
    name = 'How to Split PDF Files';
    description = 'Step-by-step guide to split PDF documents into separate pages or sections.';

    steps = [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Upload PDF File',
        text: 'Select and upload the PDF document you want to split.',
        image: `${siteConfig.url}/images/howto/split-pdf/step-upload-pdf.webp`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Choose Split Method',
        text: 'Select how you want to split: by pages, by size, or by bookmarks.',
        image: `${siteConfig.url}/images/howto/split-pdf/step-choose-method.webp`,
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Split PDF',
        text: 'Click split to separate your PDF according to your chosen method.',
        image: `${siteConfig.url}/images/howto/split-pdf/step-split-pdf.webp`,
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Download Split Files',
        text: 'Download individual PDF files or get them all in a ZIP archive.',
        image: `${siteConfig.url}/images/howto/split-pdf/step-download-split.webp`,
      },
    ];
  }

  if (steps.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: name,
    description: description,
    url: currentUrl,
    image: `${siteConfig.url}/images/og-image.webp`,
    mainEntityOfPage: currentUrl,
    totalTime: 'PT2M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0',
    },
    supply: [
      {
        '@type': 'HowToSupply',
        name: 'Internet Connection',
      },
      {
        '@type': 'HowToSupply',
        name: 'Web Browser',
      },
    ],
    tool: [
      {
        '@type': 'HowToTool',
        name: 'ImageConverter Online Tool',
      },
    ],
    step: steps,
  };
};
