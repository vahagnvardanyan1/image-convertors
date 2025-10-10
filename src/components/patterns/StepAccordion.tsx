/**
 * StepAccordion Pattern
 *
 * Reusable accordion component for displaying steps
 */

import * as React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/Accordion';
import { Text, Stack, NumberBadge } from '@/components/ui';
import { cn } from '@/lib/utils';

export interface Step {
  number: number;
  title: string;
  description: string;
}

interface StepAccordionProps {
  steps: Step[];
  defaultOpen?: string;
  className?: string;
}

export function StepAccordion({ steps, defaultOpen, className }: StepAccordionProps) {
  return (
    <Accordion type="single" collapsible defaultValue={defaultOpen} className={cn('w-full space-y-4', className)}>
      {steps.map((step, index) => (
        <AccordionItem
          key={index}
          value={`step-${index}`}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 px-6 py-2 data-[state=open]:bg-gradient-to-r data-[state=open]:from-blue-50 data-[state=open]:to-purple-50 dark:data-[state=open]:from-blue-950 dark:data-[state=open]:to-purple-950 data-[state=open]:border-blue-200 dark:data-[state=open]:border-blue-800"
        >
          <AccordionTrigger className="text-left hover:no-underline py-4 [&[data-state=open]>svg]:rotate-180">
            <Stack direction="row" spacing={4} align="center" className="pr-4">
              <NumberBadge number={step.number} size="md" />
              <Text weight="bold">{step.title}</Text>
            </Stack>
          </AccordionTrigger>
          <AccordionContent className="pb-4 ml-14">
            <Text color="muted" className="leading-relaxed">
              {step.description}
            </Text>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
