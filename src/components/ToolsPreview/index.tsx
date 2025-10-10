'use client';

import { Palette, Type, FileText, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Container, Section, Heading, Text, Stack } from '@/components/ui';
import { ToolPreviewCard } from '@/components/patterns';

export function ToolsPreview() {
  const t = useTranslations('toolsPreview');

  const tools = [
    { icon: Palette, title: t('colorTools'), description: t('colorToolsDesc'), href: '/colors', gradient: 'primary' as const, popular: true },
    { icon: Type, title: t('fontTools'), description: t('fontToolsDesc'), href: '/texts/fonts', gradient: 'purple' as const, popular: true },
    { icon: FileText, title: t('textTools'), description: t('textToolsDesc'), href: '/texts', gradient: 'green' as const, popular: true },
    { icon: Sparkles, title: t('jsonTools'), description: t('jsonToolsDesc'), href: '/texts/json-validator', gradient: 'orange' as const, popular: false },
  ];

  return (
    <Section background="muted" padding="lg">
      <Container size="xl">
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

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map(tool => (
              <ToolPreviewCard key={tool.href} {...tool} />
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
