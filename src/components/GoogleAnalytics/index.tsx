/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';
import React, { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-1CGMG9N67C';

const GoogleAnalytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    if ((window as any).gtag) {
      (window as any).gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1CGMG9N67C"></Script>
      <Script id="analytics">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', ${GA_MEASUREMENT_ID});`}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
