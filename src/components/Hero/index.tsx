'use client';

import Image from 'next/image';
import { Upload, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Container, Section, Heading, Text, Stack, Badge, GradientButton, Button, GradientText } from '@/components/ui';
import { POPULAR_CONVERSIONS } from '@/types';

export function Hero() {
  const t = useTranslations('hero');
  const tCommon = useTranslations('common');

  const scrollToConverter = () => {
    const element = document.getElementById('format-grid');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHowTo = () => {
    const element = document.getElementById('how-to');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const popularFormats = ['PNG', 'JPG', 'WebP', 'PDF'];

  return (
    <Section padding="xl" background="accent" className="relative overflow-hidden">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <Stack spacing={6} className="text-center lg:text-left">
            <Heading level="h1" as="h1">
              {t('title')} <GradientText gradient="primary">{t('titleHighlight')}</GradientText>
            </Heading>

            <Text size="lg" color="muted" className="max-w-xl lg:text-xl">
              {t('description')}
            </Text>

            <Stack spacing={3}>
              <Text weight="medium" className="text-gray-700 dark:text-gray-300">
                {t('popularConversions')}
              </Text>
              <Stack direction="row" spacing={2} wrap className="justify-center lg:justify-start">
                {POPULAR_CONVERSIONS.slice(0, 6).map(format => (
                  <Badge key={format.label} variant="outline" size="md">
                    {format.label}
                  </Badge>
                ))}
              </Stack>
            </Stack>

            <Stack direction="row" spacing={4} wrap className="justify-center lg:justify-start">
              <GradientButton size="lg" onClick={scrollToConverter}>
                <Upload size={20} />
                {tCommon('uploadYourImage')}
              </GradientButton>

              <Button variant="outline" size="lg" onClick={scrollToHowTo} className="rounded-xl border-2">
                {tCommon('learnHow')}
                <ArrowRight size={20} />
              </Button>
            </Stack>

            <Text size="sm" color="muted">
              ✓ {t('features.noRegistration')} • ✓ {t('features.browserBased')} • ✓ {t('features.secure')}
            </Text>
          </Stack>

          {/* Visual Element */}
          <div className="flex justify-center mt-12 lg:mt-0">
            <div className="relative w-full max-w-xl pb-20">
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl ring-1 ring-blue-200/60 dark:ring-blue-800/60">
                <Image
                  src="/person-with-laptop.webp"
                  alt="Designer converting images on a laptop"
                  width={1024}
                  height={1236}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 1280px) 70vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-white/10 to-transparent dark:from-black/70 dark:via-black/10" />
              </div>

              <div className="absolute left-1/2 -bottom-12 w-full max-w-md -translate-x-1/2">
                <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-xl border border-blue-100/60 dark:border-blue-800/60 p-6">
                  <Text size="xs" weight="semibold" className="uppercase tracking-wider text-blue-500 dark:text-blue-400 mb-3">
                    {t('popularConversions')}
                  </Text>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {popularFormats.map((format, index) => {
                      const colors = ['text-blue-600', 'text-purple-600', 'text-green-600', 'text-red-500'];
                      return (
                        <div key={format} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-700 flex items-center justify-center">
                          <Text size="2xl" weight="bold" className={colors[index]}>
                            {format}
                          </Text>
                        </div>
                      );
                    })}
                  </div>

                  <Stack direction="row" spacing={2} align="center" justify="center">
                    <ArrowRight className="text-blue-500 dark:text-blue-400" size={20} />
                    <Text size="sm" color="muted">
                      {t('instantConversions')}
                    </Text>
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
