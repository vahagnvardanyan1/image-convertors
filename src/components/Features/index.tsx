'use client';

import { Zap, Shield, FileImage, Heart } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Container, Section, Heading, Text, Stack, Card, IconBox, GradientBox } from '@/components/ui';

export function Features() {
  const t = useTranslations('features');

  const features = [
    { icon: Zap, title: t('lightningFast'), description: t('lightningFastDesc') },
    { icon: Shield, title: t('completelySecure'), description: t('completelySecureDesc') },
    { icon: FileImage, title: t('multipleFormats'), description: t('multipleFormatsDesc') },
    { icon: Heart, title: t('free'), description: t('freeDesc') },
  ];

  const stats = [
    { value: '1M+', label: t('imagesConverted') },
    { value: '15+', label: t('supportedFormats') },
    { value: '99.9%', label: t('uptime') },
  ];

  return (
    <Section background="none" padding="lg">
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

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-200 rounded-2xl">
                <Stack spacing={4} align="center">
                  <IconBox icon={feature.icon} size="xl" variant="gradient" rounded="2xl" />
                  <Stack spacing={2} align="center">
                    <Heading level="h5" weight="bold" align="center">
                      {feature.title}
                    </Heading>
                    <Text size="sm" color="muted" align="center" className="leading-relaxed">
                      {feature.description}
                    </Text>
                  </Stack>
                </Stack>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <GradientBox gradient="primary" rounded="2xl" padding="lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <Stack key={index} spacing={2} align="center">
                  <Text size="2xl" weight="bold" color="inverse">
                    {stat.value}
                  </Text>
                  <Text size="base" className="text-blue-100 dark:text-blue-200">
                    {stat.label}
                  </Text>
                </Stack>
              ))}
            </div>
          </GradientBox>
        </Stack>
      </Container>
    </Section>
  );
}
