'use client';

import { usePathname } from 'next/navigation';
import { generateStructuredData, generateBreadcrumbStructuredData, generateFAQStructuredData, generateHowToStructuredData } from '@/lib/metadata';

export function StructuredData() {
  const pathname = usePathname();

  const structuredData = generateStructuredData(pathname);
  const breadcrumbData = generateBreadcrumbStructuredData(pathname);
  const faqData = generateFAQStructuredData(pathname);
  const howToData = generateHowToStructuredData(pathname);

  // Organization schema - appears on all pages
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    url: 'https://imageconvertors.com',
    logo: 'https://imageconvertors.com/logo.png',
  };

  return (
    <>
      {/* Organization structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* Main structured data - handle both single objects and arrays */}
      {Array.isArray(structuredData) ? (
        structuredData.map((schema, index) => (
          <script
            key={`schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))
      ) : (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}

      {/* Breadcrumb structured data */}
      {pathname !== '/' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbData),
          }}
        />
      )}

      {/* FAQ structured data */}
      {faqData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqData),
          }}
        />
      )}

      {/* HowTo structured data */}
      {howToData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(howToData),
          }}
        />
      )}
    </>
  );
}
