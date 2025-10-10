'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container, Heading, Text, Stack, GradientBox } from '@/components/ui';

export function BannerBlock() {
  const t = useTranslations('banner');
  const tCommon = useTranslations('common');

  return (
    <Container size="xl" padding="lg" className="py-16">
      <GradientBox gradient="primary" rounded="3xl" className="overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
          {/* Content */}
          <Stack spacing={6} justify="center">
            <Heading level="h2" as="h2" className="text-white">
              {t('batchProcessing')}
            </Heading>

            <Text size="lg" className="text-blue-100 dark:text-blue-200">
              {t('batchProcessingDesc')}
            </Text>

            <div>
              <Link
                href="/ai-image-generator"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                {tCommon('comingSoon')}
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>

            <Stack spacing={2}>
              <Text size="sm" className="text-blue-100 dark:text-blue-200">
                ✓ {t('clientSideProcessing')}
              </Text>
              <Text size="sm" className="text-blue-100 dark:text-blue-200">
                ✓ {t('noDataCollection')}
              </Text>
              <Text size="sm" className="text-blue-100 dark:text-blue-200">
                ✓ {t('worksOffline')}
              </Text>
            </Stack>
          </Stack>

          {/* Visual */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 flex items-center justify-center rounded-2xl p-8">
                <Image src="/t2i.webp" alt="AI Image Generator" width={400} height={400} className="rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </div>
      </GradientBox>
    </Container>
  );
}
