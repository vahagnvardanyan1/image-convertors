/**
 * Helper to create standard blog sections
 * Use this to quickly scaffold blog post content
 */

export const createIntroSection = (content: string[]) => `import { BlogIntro } from '@/components/blog/BlogSection';

export const IntroSection = () => {
  return (
    <BlogIntro>
${content.map(p => `      <p className="text-gray-700 leading-relaxed mb-6">\n        ${p}\n      </p>`).join('\n')}
    </BlogIntro>
  );
};`;

export const createFAQSection = (faqs: Array<{ question: string; answer: string }>) => `import { BlogFAQ } from '@/components/blog/BlogFAQ';

export const FAQSection = () => {
  const faqs = [
${faqs.map(faq => `    { question: "${faq.question}", answer: "${faq.answer}" },`).join('\n')}
  ];

  return <BlogFAQ faqs={faqs} />;
};`;

export const createStepsSection = (title: string, steps: Array<{ title: string; description: string }>, iconName: string = 'Upload') => `import { ${iconName} } from 'lucide-react';
import { BlogSteps } from '@/components/blog/BlogSteps';

export const HowToSection = () => {
  const steps = [
${steps.map((step, i) => `    { number: ${i + 1}, title: "${step.title}", description: "${step.description}", icon: ${iconName} },`).join('\n')}
  ];

  return <BlogSteps title="${title}" steps={steps} />;
};`;

