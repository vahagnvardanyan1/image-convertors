import { BlogIntro } from '@/components/blog/BlogSection';

export const IntroSection = () => {
  return (
    <BlogIntro>
      <p className="text-xl text-gray-700 leading-relaxed mb-6">
        Working with JSON data? Our <strong>free JSON validator</strong> helps you check JSON syntax, find errors, and ensure your data is properly formatted—no software, no signup, instant
        validation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        In this guide, we&apos;ll show you <strong>how to validate JSON</strong>, understand common errors, and write better JSON code.
      </p>
    </BlogIntro>
  );
};
