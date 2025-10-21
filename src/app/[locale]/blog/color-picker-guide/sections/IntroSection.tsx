import { BlogIntro } from '@/components/blog/BlogSection';

export const IntroSection = () => {
  return (
    <BlogIntro>
      <p className="text-xl text-gray-700 leading-relaxed mb-6">
        Need to <strong>pick colors</strong> for your design project? Our <strong>free color picker</strong> helps you select, adjust, and copy perfect colors in any format—HEX, RGB, HSL, HSV. No
        software needed, completely free.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        In this guide, we&apos;ll show you <strong>how to use a color picker</strong>, understand color formats, and choose the right colors for your designs.
      </p>
    </BlogIntro>
  );
};
