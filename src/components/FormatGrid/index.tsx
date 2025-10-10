'use client';

import {
  ArrowRight,
  FileImage,
  Image as ImageIcon,
  Globe,
  Camera,
  FileText,
  Merge,
  Split,
  Info,
  Palette,
  Droplet,
  Blend,
  Shuffle,
  Type,
  Sparkles,
  Ruler,
  Smile,
  Hash,
  Eraser,
  Maximize2,
  QrCode,
  Wand2,
} from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Container, Section, Heading, Text, Stack, Badge, Card } from '@/components/ui';

interface Converter {
  from: string;
  to: string;
  route: string;
  icon: typeof ArrowRight;
  description: string;
  popular: boolean;
  category: 'image' | 'pdf' | 'colors' | 'fonts' | 'texts';
}

export function FormatGrid() {
  const t = useTranslations('formatGrid');
  const tTools = useTranslations('tools');
  const tCommon = useTranslations('common');

  const converters: Converter[] = [
    { from: 'AI Image', to: 'Generator', route: '/ai-image-generator', icon: Wand2, description: tTools('aiImageGeneratorDesc'), popular: true, category: 'image' },
    { from: 'Remove', to: 'Background', route: '/remove-background', icon: Eraser, description: tTools('removeBackgroundDesc'), popular: true, category: 'image' },
    { from: 'PNG', to: 'WebP', route: '/png-to-webp', icon: Globe, description: tTools('pngToWebpDesc'), popular: true, category: 'image' },
    { from: 'JPG', to: 'PNG', route: '/jpg-to-png', icon: ImageIcon, description: tTools('jpgToPngDesc'), popular: true, category: 'image' },
    { from: 'WebP', to: 'PNG', route: '/webp-to-png', icon: FileImage, description: tTools('webpToPngDesc'), popular: false, category: 'image' },
    { from: 'JPG', to: 'WebP', route: '/jpg-to-webp', icon: Globe, description: tTools('jpgToWebpDesc'), popular: true, category: 'image' },
    { from: 'PNG', to: 'JPG', route: '/png-to-jpg', icon: Camera, description: tTools('pngToJpgDesc'), popular: false, category: 'image' },
    { from: 'WebP', to: 'JPG', route: '/webp-to-jpg', icon: Camera, description: tTools('webpToJpgDesc'), popular: false, category: 'image' },
    { from: 'HEIC', to: 'JPG', route: '/heic-to-jpg', icon: Camera, description: tTools('heicToJpgDesc'), popular: true, category: 'image' },
    { from: 'HEIC', to: 'PNG', route: '/heic-to-png', icon: ImageIcon, description: tTools('heicToPngDesc'), popular: false, category: 'image' },
    { from: 'HEIC', to: 'WebP', route: '/heic-to-webp', icon: Globe, description: tTools('heicToWebpDesc'), popular: false, category: 'image' },
    { from: 'HEIC', to: 'PDF', route: '/heic-to-pdf', icon: FileText, description: tTools('heicToPdfDesc'), popular: false, category: 'image' },
    { from: 'PDF', to: 'JPG', route: '/pdf-to-jpg', icon: FileText, description: tTools('pdfToJpgDesc'), popular: true, category: 'pdf' },
    { from: 'PDF', to: 'PNG', route: '/pdf-to-png', icon: FileText, description: tTools('pdfToPngDesc'), popular: true, category: 'pdf' },
    { from: 'Images', to: 'PDF', route: '/images-to-pdf', icon: FileImage, description: tTools('imagesToPdfDesc'), popular: true, category: 'pdf' },
    { from: 'PNG', to: 'PDF', route: '/png-to-pdf', icon: FileImage, description: tTools('pngToPdfDesc'), popular: true, category: 'pdf' },
    { from: 'JPG', to: 'PDF', route: '/jpg-to-pdf', icon: FileImage, description: tTools('jpgToPdfDesc'), popular: true, category: 'pdf' },
    { from: 'WebP', to: 'PDF', route: '/webp-to-pdf', icon: FileImage, description: tTools('webpToPdfDesc'), popular: false, category: 'pdf' },
    { from: 'Merge', to: 'PDF', route: '/merge-pdf', icon: Merge, description: tTools('mergePdfDesc'), popular: false, category: 'pdf' },
    { from: 'Split', to: 'PDF', route: '/split-pdf', icon: Split, description: tTools('splitPdfDesc'), popular: false, category: 'pdf' },
    { from: 'Crop', to: 'Image', route: '/crop-image', icon: ImageIcon, description: tTools('cropImageDesc'), popular: true, category: 'image' },
    { from: 'Resize', to: 'Image', route: '/resize-image', icon: Maximize2, description: tTools('resizeImageDesc'), popular: true, category: 'image' },
    { from: 'QR Code', to: 'Generator', route: '/qr-code-generator', icon: QrCode, description: tTools('qrCodeGeneratorDesc'), popular: true, category: 'image' },
    { from: 'Analyze', to: 'PDF', route: '/pdf-info', icon: Info, description: tTools('analyzePdfDesc'), popular: false, category: 'pdf' },
    { from: 'Color', to: 'Picker', route: '/colors/picker', icon: Droplet, description: tTools('colorPickerDesc'), popular: true, category: 'colors' },
    { from: 'Color', to: 'Palettes', route: '/colors/palettes', icon: Palette, description: tTools('colorPalettesDesc'), popular: true, category: 'colors' },
    { from: 'Gradient', to: 'Generator', route: '/colors/gradients', icon: Blend, description: tTools('gradientGeneratorDesc'), popular: true, category: 'colors' },
    { from: 'Color', to: 'Converter', route: '/colors/converter', icon: Shuffle, description: tTools('colorConverterDesc'), popular: false, category: 'colors' },
    { from: 'Font', to: 'Preview', route: '/texts/fonts/preview', icon: Type, description: tTools('fontPreviewDesc'), popular: true, category: 'fonts' },
    { from: 'Font', to: 'Pairings', route: '/texts/fonts/pairings', icon: Sparkles, description: tTools('fontPairingsDesc'), popular: true, category: 'fonts' },
    { from: 'Typographic', to: 'Scale', route: '/texts/fonts/scales', icon: Ruler, description: tTools('typographicScaleDesc'), popular: true, category: 'fonts' },
    { from: 'Emoji', to: 'Browser', route: '/texts/emojis', icon: Smile, description: tTools('emojiBrowserDesc'), popular: true, category: 'texts' },
    { from: 'Symbol', to: 'Browser', route: '/texts/symbols', icon: Hash, description: tTools('symbolBrowserDesc'), popular: true, category: 'texts' },
  ];

  const imageConverters = converters.filter(c => c.category === 'image');
  const pdfConverters = converters.filter(c => c.category === 'pdf');
  const colorTools = converters.filter(c => c.category === 'colors');
  const fontTools = converters.filter(c => c.category === 'fonts');
  const textTools = converters.filter(c => c.category === 'texts');

  const renderConverterCard = (converter: Converter) => {
    const IconComponent = converter.icon;
    return (
      <Link key={`${converter.from}-${converter.to}`} href={converter.route}>
        <Card className="relative p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer group">
          {converter.popular && (
            <div className="absolute -top-3 left-6">
              <Badge variant="default" size="sm" className="bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)]">
                {tCommon('popular')}
              </Badge>
            </div>
          )}

          <Stack spacing={4}>
            <Stack direction="row" justify="between" align="center">
              <Stack direction="row" spacing={3} align="center" className="min-w-0">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[var(--gradient-primary-from)] group-hover:to-[var(--gradient-primary-to)] transition-all duration-200 shrink-0">
                  <IconComponent className="text-gray-600 dark:text-gray-400 group-hover:text-white" size={20} />
                </div>
                <div className="min-w-0">
                  <Stack direction="row" spacing={1} align="center" className="min-w-0">
                    <Text size="sm" weight="bold" truncate className="max-w-[6.5rem] sm:max-w-[8rem]" title={converter.from}>
                      {converter.from}
                    </Text>
                    <Text size="sm" color="muted">
                      →
                    </Text>
                    <Text size="sm" weight="bold" truncate className="max-w-[6.5rem] sm:max-w-[8rem]" title={converter.to}>
                      {converter.to}
                    </Text>
                  </Stack>
                </div>
              </Stack>
              <ArrowRight className="text-gray-400 dark:text-gray-600 group-hover:text-blue-600 transition-colors duration-200 shrink-0" size={20} />
            </Stack>

            <Text size="sm" color="muted" className="leading-relaxed">
              {converter.description}
            </Text>

            <Stack direction="row" justify="between" align="center" className="gap-3">
              <Stack direction="row" spacing={2} align="center" className="min-w-0">
                <Badge variant="outline" size="sm" className="truncate max-w-[6rem] sm:max-w-[7rem]" title={converter.from}>
                  {converter.from}
                </Badge>
                <ArrowRight size={12} className="text-gray-400 dark:text-gray-600 shrink-0" />
                <Badge size="sm" className="bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] truncate max-w-[6rem] sm:max-w-[7rem]" title={converter.to}>
                  {converter.to}
                </Badge>
              </Stack>
              <Text size="xs" color="muted" className="shrink-0">
                {tCommon('clickToConvert')}
              </Text>
            </Stack>
          </Stack>
        </Card>
      </Link>
    );
  };

  const renderSection = (title: string, Icon: typeof ImageIcon, items: Converter[]) => (
    <Stack spacing={6}>
      <Stack direction="row" spacing={2} align="center">
        {Icon && <Icon size={24} />}
        <Heading level="h3" weight="semibold">
          {title}
        </Heading>
      </Stack>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{items.map(renderConverterCard)}</div>
    </Stack>
  );

  return (
    <Section id="format-grid" background="none" padding="lg">
      <Container size="xl">
        <Stack spacing={12}>
          {/* Header */}
          <Stack spacing={4} align="center" className="text-center">
            <Heading level="h1" as="h2" className="text-5xl">
              {t('title')}
            </Heading>
            <Text size="lg" color="muted" className="max-w-2xl">
              {t('description')}
            </Text>
          </Stack>

          {/* Sections */}
          {renderSection(t('imageConverters'), ImageIcon, imageConverters)}
          {renderSection(t('pdfTools'), FileText, pdfConverters)}
          {renderSection(t('colorTools'), Palette, colorTools)}
          {renderSection(t('fontTools'), Type, fontTools)}
          {renderSection(t('textSymbolTools'), Sparkles, textTools)}

          {/* CTA Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: t('exploreColorTools'),
                desc: t('exploreColorDescription'),
                href: '/colors',
                icon: Palette,
                gradient: 'from-purple-600 to-blue-600',
                bg: 'from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950',
                border: 'border-purple-100 dark:border-purple-900',
                label: t('colorTools'),
              },
              {
                title: t('exploreFontTools'),
                desc: t('exploreFontDescription'),
                href: '/texts/fonts',
                icon: Type,
                gradient: 'from-orange-600 to-red-600',
                bg: 'from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950',
                border: 'border-orange-100 dark:border-orange-900',
                label: t('fontTools'),
              },
              {
                title: t('exploreTextTools'),
                desc: t('exploreTextDescription'),
                href: '/texts',
                icon: Sparkles,
                gradient: 'from-green-600 to-teal-600',
                bg: 'from-green-50 to-teal-50 dark:from-green-950 dark:to-teal-950',
                border: 'border-green-100 dark:border-green-900',
                label: t('exploreTextTools'),
              },
            ].map(cta => (
              <div key={cta.href} className={`bg-gradient-to-br ${cta.bg} rounded-2xl p-8 border ${cta.border}`}>
                <Stack spacing={4}>
                  <Stack direction="row" spacing={2} align="center">
                    <cta.icon size={24} />
                    <Heading level="h4" weight="bold">
                      {cta.title}
                    </Heading>
                  </Stack>
                  <Text size="sm" color="muted">
                    {cta.desc}
                  </Text>
                  <Link href={cta.href} className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${cta.gradient} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200`}>
                    {tCommon('viewAll')} {cta.label}
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Stack>
              </div>
            ))}
          </div>

          {/* Learn More */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
            <Stack spacing={4} align="center" className="text-center">
              <Heading level="h4" weight="bold">
                {t('needDifferentFormat')}
              </Heading>
              <Text color="muted">{t('needDifferentFormatDescription')}</Text>
              <button
                onClick={() => {
                  const element = document.getElementById('how-to');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              >
                {tCommon('learnMore')}
                <ArrowRight className="ml-2" size={16} />
              </button>
            </Stack>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
