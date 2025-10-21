import { BlogIntro } from '@/components/blog/BlogSection';

export const IntroSection = () => {
  return (
    <BlogIntro>
      <p className="text-xl text-gray-700 leading-relaxed mb-6">
        Need to <strong>compare JSON files</strong> and find differences? Our <strong>free JSON comparer</strong> highlights all differences between two JSON objects—perfect for debugging, API
        testing, and code reviews.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        In this guide, we&apos;ll show you <strong>how to compare JSON</strong>, identify differences, and understand changes between JSON files.
      </p>
    </BlogIntro>
  );
};
