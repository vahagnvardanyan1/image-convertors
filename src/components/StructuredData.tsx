'use client';

import { usePathname } from 'next/navigation';
import { generateStructuredData, generateBreadcrumbStructuredData } from '@/lib/metadata';

export function StructuredData() {
  const pathname = usePathname();

  const structuredData = generateStructuredData(pathname);
  const breadcrumbData = generateBreadcrumbStructuredData(pathname);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {pathname !== '/' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbData),
          }}
        />
      )}
    </>
  );
}
