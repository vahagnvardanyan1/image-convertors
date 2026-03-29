'use client';

import { Mail, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { FREE_CONVERT_URL } from '@/config/constants';

export function Footer() {
  const t = useTranslations('footer');
  const tHeader = useTranslations('header');
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const renderSection = (title: string, sectionKey: string, links: { href: string; label: string }[]) => (
    <div className="border-b border-gray-800 pb-4 sm:border-b-0 sm:pb-0">
      <button onClick={() => toggleSection(sectionKey)} className="flex items-center justify-between w-full sm:cursor-default sm:pointer-events-none">
        <h3 className="font-semibold mb-4 sm:mb-4">{title}</h3>
        <ChevronDown className={`sm:hidden transition-transform ${openSection === sectionKey ? 'rotate-180' : ''}`} size={20} />
      </button>
      <ul className={`space-y-2 ${openSection === sectionKey ? 'block' : 'hidden sm:block'}`}>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 pb-6 border-b border-gray-800 sm:border-b-0 sm:pb-0">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">IC</span>
              </div>
              <span className="ml-2 text-xl font-bold">{t('brandName')}</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md text-sm">{t('brandDescription')}</p>
            <div className="flex items-center space-x-2">
              <Mail className="text-gray-400" size={16} />
              <a href="mailto:cropimage@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t('email')}
              </a>
            </div>
          </div>

          {/* AI Tools */}
          {renderSection(t('aiTools'), 'ai', [
            { href: `${FREE_CONVERT_URL}/ai-image-generator`, label: t('aiImageGenerator') },
            { href: `${FREE_CONVERT_URL}/remove-background`, label: t('removeBackground') },
          ])}

          {/* Image Converters */}
          {renderSection(t('imageConverters'), 'image', [
            { href: `${FREE_CONVERT_URL}/crop-image`, label: t('cropImage') },
            { href: `${FREE_CONVERT_URL}/resize-image`, label: t('resizeImage') },
            { href: `${FREE_CONVERT_URL}/png-to-webp`, label: t('pngToWebp') },
            { href: `${FREE_CONVERT_URL}/jpg-to-png`, label: t('jpgToPng') },
            { href: `${FREE_CONVERT_URL}/webp-to-png`, label: t('webpToPng') },
            { href: `${FREE_CONVERT_URL}/jpg-to-webp`, label: t('jpgToWebp') },
            { href: `${FREE_CONVERT_URL}/png-to-jpg`, label: t('pngToJpg') },
            { href: `${FREE_CONVERT_URL}/webp-to-jpg`, label: t('webpToJpg') },
            { href: `${FREE_CONVERT_URL}/heic-to-jpg`, label: t('heicToJpg') },
            { href: `${FREE_CONVERT_URL}/heic-to-png`, label: t('heicToPng') },
            { href: `${FREE_CONVERT_URL}/heic-to-webp`, label: t('heicToWebp') },
            { href: `${FREE_CONVERT_URL}/analyze`, label: t('imageAnalyzer') },
            { href: `${FREE_CONVERT_URL}/qr-code-generator`, label: t('qrCodeGenerator') },
            { href: `${FREE_CONVERT_URL}/chart-generator`, label: t('chartGenerator') },
          ])}

          {/* PDF Tools */}
          {renderSection(t('pdfTools'), 'pdf', [
            { href: `${FREE_CONVERT_URL}/pdf-to-jpg`, label: t('pdfToJpg') },
            { href: `${FREE_CONVERT_URL}/pdf-to-png`, label: t('pdfToPng') },
            { href: `${FREE_CONVERT_URL}/images-to-pdf`, label: t('imagesToPdf') },
            { href: `${FREE_CONVERT_URL}/png-to-pdf`, label: t('pngToPdf') },
            { href: `${FREE_CONVERT_URL}/jpg-to-pdf`, label: t('jpgToPdf') },
            { href: `${FREE_CONVERT_URL}/heic-to-pdf`, label: t('heicToPdf') },
            { href: `${FREE_CONVERT_URL}/webp-to-pdf`, label: t('webpToPdf') },
            { href: `${FREE_CONVERT_URL}/merge-pdf`, label: t('mergePdfFiles') },
            { href: `${FREE_CONVERT_URL}/split-pdf`, label: t('splitPdfFiles') },
            { href: `${FREE_CONVERT_URL}/pdf-info`, label: t('pdfInformation') },
          ])}

          {/* Color Tools */}
          {renderSection(t('colorTools'), 'color', [
            { href: `${FREE_CONVERT_URL}/colors`, label: t('allColorTools') },
            { href: `${FREE_CONVERT_URL}/colors/picker`, label: t('colorPicker') },
            { href: `${FREE_CONVERT_URL}/colors/palettes`, label: t('colorPalettes') },
            { href: `${FREE_CONVERT_URL}/colors/gradients`, label: t('gradientGenerator') },
            { href: `${FREE_CONVERT_URL}/colors/converter`, label: t('colorConverter') },
          ])}

          {/* Text Tools */}
          {renderSection(t('textTools'), 'text', [
            { href: `${FREE_CONVERT_URL}/texts`, label: t('allTextTools') },
            { href: `${FREE_CONVERT_URL}/texts/json-validator`, label: t('jsonValidator') },
            { href: `${FREE_CONVERT_URL}/texts/json-comparer`, label: t('jsonComparer') },
            { href: `${FREE_CONVERT_URL}/texts/json-parser`, label: t('jsonParser') },
            { href: `${FREE_CONVERT_URL}/texts/emojis`, label: t('emojiPicker') },
            { href: `${FREE_CONVERT_URL}/texts/symbols`, label: t('symbolLibrary') },
            { href: `${FREE_CONVERT_URL}/texts/fonts/preview`, label: t('fontPreview') },
          ])}

          {/* Blog & Resources */}
          {renderSection(t('blogResources'), 'blog', [
            { href: `${FREE_CONVERT_URL}/blog`, label: t('blogHome') },
            { href: `${FREE_CONVERT_URL}/blog/qr-code-generator-guide`, label: tHeader('qrCodeGeneratorGuide') },
            { href: `${FREE_CONVERT_URL}/blog/crop-image-guide`, label: tHeader('cropImageGuide') },
            { href: `${FREE_CONVERT_URL}/blog/resize-image-guide`, label: tHeader('resizeImageGuide') },
            { href: `${FREE_CONVERT_URL}/blog/remove-background-guide`, label: tHeader('removeBackgroundGuide') },
            { href: `${FREE_CONVERT_URL}/blog/png-to-webp-guide`, label: tHeader('pngToWebpGuide') },
            { href: `${FREE_CONVERT_URL}/blog/png-to-jpg-guide`, label: tHeader('pngToJpgGuide') },
            { href: `${FREE_CONVERT_URL}/blog/webp-to-png-guide`, label: tHeader('webpToPngGuide') },
            { href: `${FREE_CONVERT_URL}/blog/png-to-pdf-guide`, label: tHeader('pngToPdfGuide') },
            { href: `${FREE_CONVERT_URL}/blog/jpg-to-webp-guide`, label: tHeader('jpgToWebpGuide') },
            { href: `${FREE_CONVERT_URL}/blog/jpg-to-pdf-guide`, label: tHeader('jpgToPdfGuide') },
            { href: `${FREE_CONVERT_URL}/blog/pdf-to-jpg-guide`, label: tHeader('pdfToJpgGuide') },
            { href: `${FREE_CONVERT_URL}/blog/heic-to-jpg-guide`, label: tHeader('heicToJpgGuide') },
            { href: `${FREE_CONVERT_URL}/blog/heic-to-webp-guide`, label: tHeader('heicToWebpGuide') },
            { href: `${FREE_CONVERT_URL}/blog/compress-images-guide`, label: tHeader('compressImagesGuide') },
            { href: `${FREE_CONVERT_URL}/blog/color-picker-guide`, label: tHeader('colorPickerGuide') },
            { href: `${FREE_CONVERT_URL}/blog/color-palette-guide`, label: tHeader('colorPaletteGuide') },
            { href: `${FREE_CONVERT_URL}/blog/gradient-generator-guide`, label: tHeader('gradientGeneratorGuide') },
            { href: `${FREE_CONVERT_URL}/blog/color-converter-guide`, label: tHeader('colorConverterGuide') },
            { href: `${FREE_CONVERT_URL}/blog/font-preview-guide`, label: tHeader('fontPreviewGuide') },
            { href: `${FREE_CONVERT_URL}/blog/font-pairing-guide`, label: tHeader('fontPairingGuide') },
            { href: `${FREE_CONVERT_URL}/blog/typographic-scale-guide`, label: tHeader('typographicScaleGuide') },
            { href: `${FREE_CONVERT_URL}/blog/emoji-guide`, label: tHeader('emojiGuide') },
            { href: `${FREE_CONVERT_URL}/blog/symbol-guide`, label: tHeader('symbolGuide') },
            { href: `${FREE_CONVERT_URL}/blog/json-validator-guide`, label: tHeader('jsonValidatorGuide') },
            { href: `${FREE_CONVERT_URL}/blog/json-comparer-guide`, label: tHeader('jsonComparerGuide') },
            { href: `${FREE_CONVERT_URL}/blog/json-parser-guide`, label: tHeader('jsonParserGuide') },
          ])}
        </div>

        {/* Legal Links - Centered */}
        <div className="mt-8 pt-8">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-6">
            <Link href={`${FREE_CONVERT_URL}/privacy-policy`} className="text-gray-400 hover:text-white transition-colors text-sm">
              {t('privacyPolicy')}
            </Link>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <Link href={`${FREE_CONVERT_URL}/terms-of-use`} className="text-gray-400 hover:text-white transition-colors text-sm">
              {t('termsOfUse')}
            </Link>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <Link href={`${FREE_CONVERT_URL}/terms-of-service`} className="text-gray-400 hover:text-white transition-colors text-sm">
              {t('termsOfService')}
            </Link>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <Link href={`${FREE_CONVERT_URL}/cookie-policy`} className="text-gray-400 hover:text-white transition-colors text-sm">
              {t('cookiePolicy')}
            </Link>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-gray-400 text-sm text-center sm:text-left">{t('copyright')}</p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
              <span className="text-gray-400 text-sm">{t('madeWithLove')}</span>
              <span className="text-gray-500 text-xs">{t('clientSideProcessing')}</span>
            </div>
            <div className="flex justify-center sm:justify-end">
              <LanguageSwitcher triggerClassName="bg-gray-800 text-gray-100 border-gray-700 hover:border-gray-500 focus-visible:border-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
