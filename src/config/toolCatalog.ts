import { FREE_CONVERT_URL } from './constants';

export type ToolCategory = 'ai' | 'image' | 'pdf' | 'color' | 'text' | 'font' | 'json' | 'blog';

// Type-safe translation keys for header namespace
export type HeaderTranslationKey = keyof IntlMessages['header'];

export interface Tool {
  translationKey: HeaderTranslationKey;
  path: string;
  icon: string; // Icon name from lucide-react
  popular?: boolean;
  category: ToolCategory;
  from?: string; // For converters (display name)
  to?: string; // For converters (display name)
}

export interface ToolCategoryItem {
  key: ToolCategory;
  translationKey: HeaderTranslationKey;
  icon: string;
  tools: Tool[];
}

// AI Tools
export const AI_TOOLS: Tool[] = [
  { translationKey: 'aiImageGenerator', path: `${FREE_CONVERT_URL}/ai-image-generator`, icon: 'Wand2', popular: true, category: 'ai' },
  { translationKey: 'removeBackground', path: `${FREE_CONVERT_URL}/remove-background`, icon: 'Eraser', popular: true, category: 'ai' },
];

// Image Tools
export const IMAGE_TOOLS: Tool[] = [
  { translationKey: 'compressImage', path: `${FREE_CONVERT_URL}/compress-image`, icon: 'Maximize2', popular: true, category: 'image' },
  { translationKey: 'cropImage', path: `${FREE_CONVERT_URL}/crop-image`, icon: 'Crop', popular: true, category: 'image' },
  { translationKey: 'resizeImage', path: `${FREE_CONVERT_URL}/resize-image`, icon: 'Maximize', popular: true, category: 'image' },
  { translationKey: 'imageAnalyzer', path: `${FREE_CONVERT_URL}/analyze`, icon: 'ScanSearch', popular: true, category: 'image' },
  { translationKey: 'qrCodeGenerator', path: `${FREE_CONVERT_URL}/qr-code-generator`, icon: 'QrCode', popular: true, category: 'image' },
  { translationKey: 'chartGenerator', path: `${FREE_CONVERT_URL}/chart-generator`, icon: 'BarChart3', popular: true, category: 'image' },
];

// Image Converters
export const IMAGE_CONVERTERS: Tool[] = [
  { translationKey: 'pngToWebp', path: `${FREE_CONVERT_URL}/png-to-webp`, icon: 'Globe', popular: true, category: 'image', from: 'PNG', to: 'WebP' },
  { translationKey: 'jpgToPng', path: `${FREE_CONVERT_URL}/jpg-to-png`, icon: 'ImageIcon', popular: true, category: 'image', from: 'JPG', to: 'PNG' },
  { translationKey: 'jpgToWebp', path: `${FREE_CONVERT_URL}/jpg-to-webp`, icon: 'Globe', popular: true, category: 'image', from: 'JPG', to: 'WebP' },
  { translationKey: 'webpToPng', path: `${FREE_CONVERT_URL}/webp-to-png`, icon: 'FileImage', popular: false, category: 'image', from: 'WebP', to: 'PNG' },
  { translationKey: 'pngToJpg', path: `${FREE_CONVERT_URL}/png-to-jpg`, icon: 'Camera', popular: false, category: 'image', from: 'PNG', to: 'JPG' },
  { translationKey: 'webpToJpg', path: `${FREE_CONVERT_URL}/webp-to-jpg`, icon: 'Camera', popular: false, category: 'image', from: 'WebP', to: 'JPG' },
  { translationKey: 'heicToJpg', path: `${FREE_CONVERT_URL}/heic-to-jpg`, icon: 'Camera', popular: true, category: 'image', from: 'HEIC', to: 'JPG' },
  { translationKey: 'heicToPng', path: `${FREE_CONVERT_URL}/heic-to-png`, icon: 'ImageIcon', popular: false, category: 'image', from: 'HEIC', to: 'PNG' },
  { translationKey: 'heicToWebp', path: `${FREE_CONVERT_URL}/heic-to-webp`, icon: 'Globe', popular: false, category: 'image', from: 'HEIC', to: 'WebP' },
];

// PDF Tools
export const PDF_TOOLS: Tool[] = [
  { translationKey: 'pdfToJpg', path: `${FREE_CONVERT_URL}/pdf-to-jpg`, icon: 'FileText', popular: true, category: 'pdf', from: 'PDF', to: 'JPG' },
  { translationKey: 'pdfToPng', path: `${FREE_CONVERT_URL}/pdf-to-png`, icon: 'FileText', popular: true, category: 'pdf', from: 'PDF', to: 'PNG' },
  { translationKey: 'imagesToPdf', path: `${FREE_CONVERT_URL}/images-to-pdf`, icon: 'FileImage', popular: true, category: 'pdf', from: 'Images', to: 'PDF' },
  { translationKey: 'pngToPdf', path: `${FREE_CONVERT_URL}/png-to-pdf`, icon: 'FileImage', popular: true, category: 'pdf', from: 'PNG', to: 'PDF' },
  { translationKey: 'jpgToPdf', path: `${FREE_CONVERT_URL}/jpg-to-pdf`, icon: 'FileImage', popular: true, category: 'pdf', from: 'JPG', to: 'PDF' },
  { translationKey: 'heicToPdf', path: `${FREE_CONVERT_URL}/heic-to-pdf`, icon: 'FileText', popular: false, category: 'pdf', from: 'HEIC', to: 'PDF' },
  { translationKey: 'webpToPdf', path: `${FREE_CONVERT_URL}/webp-to-pdf`, icon: 'FileImage', popular: false, category: 'pdf', from: 'WebP', to: 'PDF' },
  { translationKey: 'mergePdf', path: `${FREE_CONVERT_URL}/merge-pdf`, icon: 'Merge', popular: false, category: 'pdf', from: 'Merge', to: 'PDF' },
  { translationKey: 'splitPdf', path: `${FREE_CONVERT_URL}/split-pdf`, icon: 'Split', popular: false, category: 'pdf', from: 'Split', to: 'PDF' },
  { translationKey: 'pdfInfo', path: `${FREE_CONVERT_URL}/pdf-info`, icon: 'Info', popular: false, category: 'pdf' },
];

// Color Tools
export const COLOR_TOOLS: Tool[] = [
  { translationKey: 'colorPicker', path: `${FREE_CONVERT_URL}/colors/picker`, icon: 'Palette', popular: true, category: 'color' },
  { translationKey: 'colorPalettes', path: `${FREE_CONVERT_URL}/colors/palettes`, icon: 'Droplet', popular: true, category: 'color' },
  { translationKey: 'gradientGenerator', path: `${FREE_CONVERT_URL}/colors/gradients`, icon: 'Blend', popular: true, category: 'color' },
  { translationKey: 'colorConverter', path: `${FREE_CONVERT_URL}/colors/converter`, icon: 'Shuffle', popular: false, category: 'color' },
];

// Text Tools
export const TEXT_TOOLS: Tool[] = [
  { translationKey: 'emojis', path: `${FREE_CONVERT_URL}/texts/emojis`, icon: 'Smile', popular: true, category: 'text' },
  { translationKey: 'symbols', path: `${FREE_CONVERT_URL}/texts/symbols`, icon: 'Hash', popular: true, category: 'text' },
];

// JSON Tools
export const JSON_TOOLS: Tool[] = [
  { translationKey: 'jsonValidator', path: `${FREE_CONVERT_URL}/texts/json-validator`, icon: 'CheckCircle2', popular: true, category: 'json' },
  { translationKey: 'jsonComparer', path: `${FREE_CONVERT_URL}/texts/json-comparer`, icon: 'GitCompare', popular: true, category: 'json' },
  { translationKey: 'jsonParser', path: `${FREE_CONVERT_URL}/texts/json-parser`, icon: 'Code2', popular: true, category: 'json' },
];

// Font Tools
export const FONT_TOOLS: Tool[] = [
  { translationKey: 'fontPreview', path: `${FREE_CONVERT_URL}/fonts/preview`, icon: 'Type', popular: true, category: 'font' },
  { translationKey: 'fontPairings', path: `${FREE_CONVERT_URL}/fonts/pairings`, icon: 'Columns2', popular: true, category: 'font' },
  { translationKey: 'typographicScale', path: `${FREE_CONVERT_URL}/fonts/scales`, icon: 'Ruler', popular: true, category: 'font' },
];

// Blog Guides
export const BLOG_GUIDES: Tool[] = [
  { translationKey: 'aiImageGeneratorGuide', path: `${FREE_CONVERT_URL}/blog/ai-image-generator-guide`, icon: 'BookOpen', popular: true, category: 'blog' },
  { translationKey: 'qrCodeGeneratorGuide', path: `${FREE_CONVERT_URL}/blog/qr-code-generator-guide`, icon: 'BookOpen', popular: true, category: 'blog' },
  { translationKey: 'cropImageGuide', path: `${FREE_CONVERT_URL}/blog/crop-image-guide`, icon: 'BookOpen', popular: true, category: 'blog' },
  { translationKey: 'resizeImageGuide', path: `${FREE_CONVERT_URL}/blog/resize-image-guide`, icon: 'BookOpen', popular: true, category: 'blog' },
  { translationKey: 'removeBackgroundGuide', path: `${FREE_CONVERT_URL}/blog/remove-background-guide`, icon: 'BookOpen', popular: true, category: 'blog' },
  { translationKey: 'pngToWebpGuide', path: `${FREE_CONVERT_URL}/blog/png-to-webp-guide`, icon: 'BookOpen', popular: true, category: 'blog' },
  { translationKey: 'pngToJpgGuide', path: `${FREE_CONVERT_URL}/blog/png-to-jpg-guide`, icon: 'BookOpen', popular: true, category: 'blog' },
  { translationKey: 'webpToPngGuide', path: `${FREE_CONVERT_URL}/blog/webp-to-png-guide`, icon: 'BookOpen', popular: false, category: 'blog' },
  { translationKey: 'pngToPdfGuide', path: `${FREE_CONVERT_URL}/blog/png-to-pdf-guide`, icon: 'BookOpen', popular: false, category: 'blog' },
  { translationKey: 'jpgToWebpGuide', path: `${FREE_CONVERT_URL}/blog/jpg-to-webp-guide`, icon: 'BookOpen', popular: false, category: 'blog' },
  { translationKey: 'jpgToPdfGuide', path: `${FREE_CONVERT_URL}/blog/jpg-to-pdf-guide`, icon: 'BookOpen', popular: false, category: 'blog' },
  { translationKey: 'pdfToJpgGuide', path: `${FREE_CONVERT_URL}/blog/pdf-to-jpg-guide`, icon: 'BookOpen', popular: false, category: 'blog' },
  { translationKey: 'heicToJpgGuide', path: `${FREE_CONVERT_URL}/blog/heic-to-jpg-guide`, icon: 'BookOpen', popular: false, category: 'blog' },
  { translationKey: 'heicToWebpGuide', path: `${FREE_CONVERT_URL}/blog/heic-to-webp-guide`, icon: 'BookOpen', popular: false, category: 'blog' },
  { translationKey: 'compressImagesGuide', path: `${FREE_CONVERT_URL}/blog/compress-images-guide`, icon: 'BookOpen', popular: false, category: 'blog' },
  { translationKey: 'colorPickerGuide', path: `${FREE_CONVERT_URL}/blog/color-picker-guide`, icon: 'BookOpen', popular: false, category: 'blog' },
  { translationKey: 'colorPaletteGuide', path: `${FREE_CONVERT_URL}/blog/color-palette-guide`, icon: 'BookOpen', popular: false, category: 'blog' },
  { translationKey: 'gradientGeneratorGuide', path: `${FREE_CONVERT_URL}/blog/gradient-generator-guide`, icon: 'BookOpen', popular: false, category: 'blog' },
  { translationKey: 'colorConverterGuide', path: `${FREE_CONVERT_URL}/blog/color-converter-guide`, icon: 'BookOpen', popular: false, category: 'blog' },
  { translationKey: 'fontPreviewGuide', path: `${FREE_CONVERT_URL}/blog/font-preview-guide`, icon: 'BookOpen', popular: false, category: 'blog' },
  { translationKey: 'fontPairingGuide', path: `${FREE_CONVERT_URL}/blog/font-pairing-guide`, icon: 'BookOpen', popular: false, category: 'blog' },
  { translationKey: 'typographicScaleGuide', path: `${FREE_CONVERT_URL}/blog/typographic-scale-guide`, icon: 'BookOpen', popular: false, category: 'blog' },
  { translationKey: 'emojiGuide', path: `${FREE_CONVERT_URL}/blog/emoji-guide`, icon: 'BookOpen', popular: false, category: 'blog' },
  { translationKey: 'symbolGuide', path: `${FREE_CONVERT_URL}/blog/symbol-guide`, icon: 'BookOpen', popular: false, category: 'blog' },
  { translationKey: 'jsonValidatorGuide', path: `${FREE_CONVERT_URL}/blog/json-validator-guide`, icon: 'BookOpen', popular: false, category: 'blog' },
  { translationKey: 'jsonComparerGuide', path: `${FREE_CONVERT_URL}/blog/json-comparer-guide`, icon: 'BookOpen', popular: false, category: 'blog' },
  { translationKey: 'jsonParserGuide', path: `${FREE_CONVERT_URL}/blog/json-parser-guide`, icon: 'BookOpen', popular: false, category: 'blog' },
  { translationKey: 'chartGeneratorGuide', path: `${FREE_CONVERT_URL}/blog/chart-generator-guide`, icon: 'BookOpen', popular: false, category: 'blog' },
];

// All tools combined
export const ALL_TOOLS = [...AI_TOOLS, ...IMAGE_TOOLS, ...IMAGE_CONVERTERS, ...PDF_TOOLS, ...COLOR_TOOLS, ...TEXT_TOOLS, ...JSON_TOOLS, ...FONT_TOOLS];

// Tool categories for navigation
export const TOOL_CATEGORIES: Record<ToolCategory, { translationKey: string; icon: string }> = {
  ai: { translationKey: 'aiTools', icon: 'Sparkles' },
  image: { translationKey: 'imageTools', icon: 'ImageIcon' },
  pdf: { translationKey: 'pdfTools', icon: 'FileText' },
  color: { translationKey: 'colorTools', icon: 'Palette' },
  text: { translationKey: 'textTools', icon: 'Type' },
  font: { translationKey: 'fontTools', icon: 'Type' },
  json: { translationKey: 'jsonTools', icon: 'Code2' },
  blog: { translationKey: 'blog', icon: 'BookOpen' },
};

// Helper functions
export const getToolsByCategory = (category: ToolCategory): Tool[] => {
  return ALL_TOOLS.filter(tool => tool.category === category);
};

export const getPopularTools = (category?: ToolCategory): Tool[] => {
  const tools = category ? getToolsByCategory(category) : ALL_TOOLS;
  return tools.filter(tool => tool.popular);
};

export const getToolByPath = (path: string): Tool | undefined => {
  return ALL_TOOLS.find(tool => tool.path === path || tool.path === `/${path}`);
};
