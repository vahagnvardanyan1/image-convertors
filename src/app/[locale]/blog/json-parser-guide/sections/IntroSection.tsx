import { BlogIntro } from '@/components/blog/BlogSection';

export const IntroSection = () => {
  return (
    <BlogIntro>
      <p className="text-xl text-gray-700 leading-relaxed mb-6">
        Working with <strong>JSON data</strong>? Our <strong>free JSON parser</strong> helps you parse, format, and visualize JSON instantly—perfect for developers, testers, and anyone working with
        APIs.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        In this guide, we&apos;ll show you <strong>how to parse JSON</strong>, beautify messy JSON, and understand JSON structure easily.
      </p>
    </BlogIntro>
  );
};
