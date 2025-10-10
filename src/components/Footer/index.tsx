'use client';

import { Mail } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Container, Text, Stack } from '@/components/ui';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { FooterSection } from './FooterSection';

export function Footer() {
  const t = useTranslations('footer');
  const tHeader = useTranslations('header');
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: 'ai',
      title: t('aiTools'),
      links: [
        { href: '/ai-image-generator', label: t('aiImageGenerator') },
        { href: '/remove-background', label: t('removeBackground') },
      ],
    },
    {
      id: 'image',
      title: t('imageConverters'),
      links: [
        { href: '/crop-image', label: t('cropImage') },
        { href: '/resize-image', label: t('resizeImage') },
        { href: '/png-to-webp', label: t('pngToWebp') },
        { href: '/jpg-to-png', label: t('jpgToPng') },
        { href: '/webp-to-png', label: t('webpToPng') },
        { href: '/jpg-to-webp', label: t('jpgToWebp') },
        { href: '/png-to-jpg', label: t('pngToJpg') },
        { href: '/webp-to-jpg', label: t('webpToJpg') },
        { href: '/heic-to-jpg', label: t('heicToJpg') },
        { href: '/heic-to-png', label: t('heicToPng') },
        { href: '/heic-to-webp', label: t('heicToWebp') },
        { href: '/analyze', label: t('imageAnalyzer') },
        { href: '/qr-code-generator', label: t('qrCodeGenerator') },
      ],
    },
    {
      id: 'pdf',
      title: t('pdfTools'),
      links: [
        { href: '/pdf-to-jpg', label: t('pdfToJpg') },
        { href: '/pdf-to-png', label: t('pdfToPng') },
        { href: '/images-to-pdf', label: t('imagesToPdf') },
        { href: '/png-to-pdf', label: t('pngToPdf') },
        { href: '/jpg-to-pdf', label: t('jpgToPdf') },
        { href: '/heic-to-pdf', label: t('heicToPdf') },
        { href: '/webp-to-pdf', label: t('webpToPdf') },
        { href: '/merge-pdf', label: t('mergePdfFiles') },
        { href: '/split-pdf', label: t('splitPdfFiles') },
        { href: '/pdf-info', label: t('pdfInformation') },
      ],
    },
    {
      id: 'color',
      title: t('colorTools'),
      links: [
        { href: '/colors', label: t('allColorTools') },
        { href: '/colors/picker', label: t('colorPicker') },
        { href: '/colors/palettes', label: t('colorPalettes') },
        { href: '/colors/gradients', label: t('gradientGenerator') },
        { href: '/colors/converter', label: t('colorConverter') },
      ],
    },
    {
      id: 'text',
      title: t('textTools'),
      links: [
        { href: '/texts', label: t('allTextTools') },
        { href: '/texts/json-validator', label: t('jsonValidator') },
        { href: '/texts/json-comparer', label: t('jsonComparer') },
        { href: '/texts/json-parser', label: t('jsonParser') },
        { href: '/texts/emojis', label: t('emojiPicker') },
        { href: '/texts/symbols', label: t('symbolLibrary') },
        { href: '/texts/fonts/preview', label: t('fontPreview') },
      ],
    },
    {
      id: 'blog',
      title: t('blogResources'),
      links: [
        { href: '/blog', label: t('blogHome') },
        { href: '/blog/qr-code-generator-guide', label: tHeader('qrCodeGeneratorGuide') },
        { href: '/blog/crop-image-guide', label: tHeader('cropImageGuide') },
        { href: '/blog/resize-image-guide', label: tHeader('resizeImageGuide') },
        { href: '/blog/remove-background-guide', label: tHeader('removeBackgroundGuide') },
        { href: '/blog/png-to-webp-guide', label: tHeader('pngToWebpGuide') },
        { href: '/blog/png-to-jpg-guide', label: tHeader('pngToJpgGuide') },
        { href: '/blog/webp-to-png-guide', label: tHeader('webpToPngGuide') },
        { href: '/blog/png-to-pdf-guide', label: tHeader('pngToPdfGuide') },
        { href: '/blog/jpg-to-webp-guide', label: tHeader('jpgToWebpGuide') },
        { href: '/blog/jpg-to-pdf-guide', label: tHeader('jpgToPdfGuide') },
        { href: '/blog/pdf-to-jpg-guide', label: tHeader('pdfToJpgGuide') },
        { href: '/blog/heic-to-jpg-guide', label: tHeader('heicToJpgGuide') },
        { href: '/blog/heic-to-webp-guide', label: tHeader('heicToWebpGuide') },
        { href: '/blog/compress-images-guide', label: tHeader('compressImagesGuide') },
        { href: '/blog/color-picker-guide', label: tHeader('colorPickerGuide') },
        { href: '/blog/color-palette-guide', label: tHeader('colorPaletteGuide') },
        { href: '/blog/gradient-generator-guide', label: tHeader('gradientGeneratorGuide') },
        { href: '/blog/color-converter-guide', label: tHeader('colorConverterGuide') },
        { href: '/blog/font-preview-guide', label: tHeader('fontPreviewGuide') },
        { href: '/blog/font-pairing-guide', label: tHeader('fontPairingGuide') },
        { href: '/blog/typographic-scale-guide', label: tHeader('typographicScaleGuide') },
        { href: '/blog/emoji-guide', label: tHeader('emojiGuide') },
        { href: '/blog/symbol-guide', label: tHeader('symbolGuide') },
        { href: '/blog/json-validator-guide', label: tHeader('jsonValidatorGuide') },
        { href: '/blog/json-comparer-guide', label: tHeader('jsonComparerGuide') },
        { href: '/blog/json-parser-guide', label: tHeader('jsonParserGuide') },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <Container size="xl" padding="lg" className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 pb-6 border-b border-gray-800 sm:border-b-0 sm:pb-0">
            <Stack spacing={4}>
              <Stack direction="row" spacing={2} align="center">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] flex items-center justify-center">
                  <Text size="sm" weight="bold" color="inverse">
                    IC
                  </Text>
                </div>
                <Text size="xl" weight="bold" color="inverse">
                  {t('brandName')}
                </Text>
              </Stack>
              <Text size="sm" className="text-gray-400 max-w-md">
                {t('brandDescription')}
              </Text>
              <Stack direction="row" spacing={2} align="center">
                <Mail className="text-gray-400" size={16} />
                <a href="mailto:cropimage@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('email')}
                </a>
              </Stack>
            </Stack>
          </div>

          {/* Dynamic Sections */}
          {sections.map(section => (
            <FooterSection
              key={section.id}
              title={section.title}
              isOpen={openSection === section.id}
              onToggle={() => toggleSection(section.id)}
              links={section.links}
              className={section.id === 'blog' ? 'max-h-[400px] overflow-y-auto' : ''}
            />
          ))}
        </div>

        {/* Legal Links */}
        <div className="mt-8 pt-8">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-6">
            {[
              { href: '/privacy-policy', label: t('privacyPolicy') },
              { href: '/terms-of-use', label: t('termsOfUse') },
              { href: '/terms-of-service', label: t('termsOfService') },
              { href: '/cookie-policy', label: t('cookiePolicy') },
            ].map((link, index) => (
              <div key={link.href} className="flex items-center gap-x-6">
                {index > 0 && <span className="text-gray-600 hidden sm:inline">•</span>}
                <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Text size="sm" className="text-gray-400 text-center sm:text-left">
              {t('copyright')}
            </Text>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
              <Text size="sm" className="text-gray-400">
                {t('madeWithLove')}
              </Text>
              <Text size="xs" className="text-gray-500">
                {t('clientSideProcessing')}
              </Text>
            </div>
            <div className="flex justify-center sm:justify-end">
              <LanguageSwitcher triggerClassName="bg-gray-800 text-gray-100 border-gray-700 hover:border-gray-500 focus-visible:border-gray-400" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
