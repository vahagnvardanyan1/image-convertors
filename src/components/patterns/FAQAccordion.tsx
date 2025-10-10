/**
 * FAQAccordion Pattern
 *
 * Reusable accordion component for displaying FAQs
 */

import * as React from 'react';
import type { LucideIcon } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/Accordion';
import { Text, Stack, IconBox } from '@/components/ui';
import { cn } from '@/lib/utils';

export interface FAQ {
  question: string;
  answer: string;
  icon?: LucideIcon;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  defaultOpen?: string;
  className?: string;
  compact?: boolean;
}

export function FAQAccordion({ faqs, defaultOpen, className, compact = false }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible defaultValue={defaultOpen} className={cn('w-full space-y-4', className)}>
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`faq-${index}`}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 px-6 py-2 data-[state=open]:bg-gradient-to-r data-[state=open]:from-blue-50 data-[state=open]:to-purple-50 dark:data-[state=open]:from-blue-950 dark:data-[state=open]:to-purple-950 data-[state=open]:border-blue-200 dark:data-[state=open]:border-blue-800"
        >
          <AccordionTrigger className="text-left hover:no-underline py-4 [&[data-state=open]>svg]:rotate-180">
            <Stack direction="row" spacing={compact ? 3 : 4} align="center" className="pr-4">
              {faq.icon && <IconBox icon={faq.icon} size={compact ? 'sm' : 'md'} variant="gradient" rounded={compact ? 'lg' : 'xl'} iconSize={compact ? 12 : 16} />}
              <Text weight="bold" size={compact ? 'sm' : 'base'}>
                {faq.question}
              </Text>
            </Stack>
          </AccordionTrigger>
          <AccordionContent className={cn('pb-4', faq.icon ? (compact ? 'ml-11' : 'ml-14') : 'ml-0')}>
            <Text color="muted" size={compact ? 'sm' : 'base'} className="leading-relaxed">
              {faq.answer}
            </Text>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
