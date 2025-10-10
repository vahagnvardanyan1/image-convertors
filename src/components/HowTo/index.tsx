'use client';

import { useTranslations } from 'next-intl';
import { Container, Section, Heading, Text, Stack } from '@/components/ui';
import { StepAccordion, CTABox, type Step } from '@/components/patterns';

export function HowTo() {
  const t = useTranslations('howTo');
  const tCommon = useTranslations('common');

  const steps: Step[] = [
    { number: 1, title: t('step1Title'), description: t('step1Description') },
    { number: 2, title: t('step2Title'), description: t('step2Description') },
    { number: 3, title: t('step3Title'), description: t('step3Description') },
    { number: 4, title: t('step4Title'), description: t('step4Description') },
  ];

  return (
    <Section id="how-to" background="muted" padding="lg">
      <Container size="lg">
        <Stack spacing={12}>
          {/* Header */}
          <Stack spacing={4} align="center" className="text-center">
            <Heading level="h2" as="h2">
              {t('title')}
            </Heading>
            <Text size="lg" color="muted" className="max-w-2xl">
              {t('description')}
            </Text>
          </Stack>

          {/* Steps */}
          <StepAccordion steps={steps} />

          {/* Call to Action */}
          <CTABox
            title={t('readyToStart')}
            description={t('readyToStartDescription')}
            action={{
              label: tCommon('startConverting'),
              href: '#conversion-tool',
            }}
            gradient="primary"
          />
        </Stack>
      </Container>
    </Section>
  );
}
