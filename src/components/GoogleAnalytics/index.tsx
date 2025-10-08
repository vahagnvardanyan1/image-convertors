'use client';

import { GoogleAnalytics } from '@next/third-parties/google';

const GA_MEASUREMENT_ID = 'G-1CGMG9N67C';

const Analytics = () => {
  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
};

export default Analytics;
