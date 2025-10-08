import Script from 'next/script';
import React from 'react';

const GoogleAnalytics = () => {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1CGMG9N67C"></Script>
      <Script id="analytics">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1CGMG9N67C');`}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
