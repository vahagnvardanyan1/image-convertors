# 🚀 Quick Start Guide - Refactored Architecture

## Overview

This guide helps you quickly understand and work with the newly refactored image-convertor architecture.

---

## 🏗️ Key Concepts

### 1. **ToolShell** - All tools use this
Every tool page wraps content in `ToolShell` for consistent headers:

```typescript
import { ToolShell } from '@/components/tooling/ToolShell';

<ToolShell 
  header={{ 
    title: t('title'), 
    description: t('description'),
    backText: tCommon('backToHome')
  }}
>
  {/* Your tool content */}
</ToolShell>
```

### 2. **useUploadZone** - All uploads use this
Single hook for drag-drop and file selection:

```typescript
import { useUploadZone } from '@/hooks/useUploadZone';

const { isDragOver, selectedFiles, fileInputRef, 
        handleDragOver, handleDragLeave, handleDrop, 
        handleFileSelect, triggerFileInput, clearFiles } = useUploadZone({
  onFilesSelect: (files) => { /* handle files */ },
  accept: 'image/*',
  multiple: false,
});
```

### 3. **FileUploadZone** - All upload UI uses this
Enhanced component with previews and multi-file support:

```typescript
import { FileUploadZone } from '@/components/FileUploadZone';

<FileUploadZone
  isDragOver={isDragOver}
  selectedFiles={selectedFiles}
  onDragOver={handleDragOver}
  onDragLeave={handleDragLeave}
  onDrop={handleDrop}
  onClick={triggerFileInput}
  fileInputRef={fileInputRef}
  onFileSelect={handleFileSelect}
  onClear={clearFiles}
  showPreview
  dragOverText={tCommon('dropFileHere')}
  // ... etc
/>
```

### 4. **useToast** - All errors use this
Toast notifications instead of `alert()`:

```typescript
import { useToast } from '@/components/ui/toast';

const toast = useToast();

// Usage
toast.success('File uploaded!');
toast.error(tErrors('selectValidPdf'));
toast.info('Processing...');
toast.warning('Large file detected');
```

### 5. **generateToolMetadata** - All pages use this
Simplified metadata generation:

```typescript
import { generateToolMetadata } from '@/lib/metadata/toolMetadata';

export const generateMetadata = async ({ params }: Props) => {
  return generateToolMetadata({
    locale: params.locale,
    path: 'tool-path',
    namespace: 'metadata.tool',
  });
};
```

---

## 📁 File Structure

### Where to Find Things

**Tool Components** → `src/components/[ToolName]/index.tsx`  
**Tool Pages** → `src/app/[locale]/[tool-path]/page.tsx`  
**Hooks** → `src/hooks/use[HookName].ts`  
**Utils** → `src/utils/[utilName].ts`  
**Configs** → `src/config/[configName].ts`  
**Translations** → `messages/[locale].json`

### Common Imports

```typescript
// Layout & Structure
import { ToolShell, ToolGrid } from '@/components/tooling/ToolShell';
import { ToolSection, ToolSidebar } from '@/components/tooling/ToolSection';

// Upload
import { FileUploadZone } from '@/components/FileUploadZone';
import { useUploadZone } from '@/hooks/useUploadZone';

// Notifications
import { useToast } from '@/components/ui/toast';

// Translations
import { useTranslations } from 'next-intl';

// Utilities
import { validateImageFile } from '@/utils/fileValidation';
import { formatFileSize } from '@/utils/imageProcessing';
import { downloadResource } from '@/utils/download';

// Configs
import { ASPECT_RATIOS } from '@/config/cropperConfig';
import { QR_CODE_TYPES } from '@/config/qrCodeConfig';
import { AI_TOOLS, getPopularTools } from '@/config/toolCatalog';
```

---

## 🎯 Common Tasks

### Create a New Tool

1. **Create component** (`src/components/MyTool/index.tsx`):
```typescript
export const MyTool = () => {
  const t = useTranslations('myTool');
  const tCommon = useTranslations('common');
  const toast = useToast();
  
  const { isDragOver, selectedFiles, /* ... */ } = useUploadZone({
    onFilesSelect: handleFiles,
  });

  return (
    <ToolShell header={{ title: t('title'), description: t('description') }}>
      <ToolGrid columns={2}>
        <div>
          <ToolSection title="Upload">
            <FileUploadZone {...uploadProps} />
          </ToolSection>
        </div>
        <ToolSidebar>
          <ToolSection title="Info">{/* ... */}</ToolSection>
        </ToolSidebar>
      </ToolGrid>
    </ToolShell>
  );
};
```

2. **Create page** (`src/app/[locale]/my-tool/page.tsx`):
```typescript
import { generateToolMetadata } from '@/lib/metadata/toolMetadata';
import { MyTool } from '@/components/MyTool';

type Props = { params: { locale: string } };

export const generateMetadata = async ({ params }: Props) =>
  generateToolMetadata({
    locale: params.locale,
    path: 'my-tool',
    namespace: 'metadata.myTool',
  });

export default () => <MyTool />;
```

3. **Add to catalog** (`src/config/toolCatalog.ts`):
```typescript
export const IMAGE_TOOLS: Tool[] = [
  // ... existing
  { translationKey: 'myTool', path: '/my-tool', icon: 'Wand2', popular: true, category: 'image' },
];
```

4. **Add translations** (`messages/en.json`):
```json
{
  "header": { "myTool": "My Tool" },
  "myTool": { "title": "My Tool", "description": "..." },
  "metadata": { "myTool": { "title": "...", /* ... */ } }
}
```

### Add Validation Error

1. **Add to translations** (`messages/en.json`):
```json
{
  "errors": {
    "myCustomError": "Custom error message"
  }
}
```

2. **Use in code**:
```typescript
const toast = useToast();
const tErrors = useTranslations('errors');

if (errorCondition) {
  toast.error(tErrors('myCustomError'));
}
```

### Use Object URLs Safely

```typescript
import { useObjectUrl } from '@/hooks/useObjectUrl';

const { url, createUrl, revokeUrl, updateUrl } = useObjectUrl();

// Create
const imageUrl = createUrl(file);

// Update (auto-revokes old)
const newUrl = updateUrl(newFile);

// Auto cleanup on unmount
```

---

## 🔍 Quick Reference

### Hooks

| Hook | Purpose | Usage |
|------|---------|-------|
| `useUploadZone` | File upload + drag-drop | `useUploadZone({ onFilesSelect, accept, multiple })` |
| `useToast` | Show notifications | `toast.success('Message')` |
| `useDropdowns` | Manage dropdowns | `const { isOpen, toggle } = useDropdowns()` |
| `useObjectUrl` | URL lifecycle | `const { url, createUrl } = useObjectUrl()` |
| `useDownloader` | Download files | `const { downloadBlob } = useDownloader()` |
| `useImageCompression` | Compress images | Existing, enhanced |
| `useImageCrop` | Crop images | Existing |
| `useImageResize` | Resize images | Existing |
| `usePDFProcessing` | Process PDFs | Existing |

### Components

| Component | Purpose | Import |
|-----------|---------|--------|
| `ToolShell` | Page wrapper | `@/components/tooling/ToolShell` |
| `ToolSection` | Section wrapper | `@/components/tooling/ToolSection` |
| `ToolSidebar` | Sidebar wrapper | `@/components/tooling/ToolSection` |
| `ToolGrid` | Grid layout | `@/components/tooling/ToolShell` |
| `FileUploadZone` | Upload UI | `@/components/FileUploadZone` |
| `ToastProvider` | Toast context | `@/components/ui/toast` |

### Utilities

| Utility | Purpose | Import |
|---------|---------|--------|
| `downloadResource` | Download blob/URL | `@/utils/download` |
| `validateImageFile` | Validate image | `@/utils/fileValidation` |
| `formatFileSize` | Format bytes | `@/utils/imageProcessing` |
| `getIcon` | Get Lucide icon | `@/utils/iconLookup` |
| `generateToolMetadata` | Page metadata | `@/lib/metadata/toolMetadata` |

### Configs

| Config | Content | Import |
|--------|---------|--------|
| `toolCatalog` | All tools | `@/config/toolCatalog` |
| `cropperConfig` | Aspect ratios | `@/config/cropperConfig` |
| `qrCodeConfig` | QR types | `@/config/qrCodeConfig` |

---

## 🐛 Troubleshooting

### Toast not showing?
Make sure `ToastProvider` wraps your app in layout:
```typescript
<ToastProvider>
  {children}
</ToastProvider>
```

### Translation not found?
Check that the key exists in all language files:
```bash
grep -r "myKey" messages/
```

### Upload not working?
Verify you're using `useUploadZone` and passing all required props to `FileUploadZone`.

### Icon not rendering?
Check that the icon name exists in `src/utils/iconLookup.ts` ICON_MAP.

---

## 📞 Need Help?

Refer to:
- **REFACTORING_ARCHITECTURE_COMPLETE.md** - Complete architecture details
- **REFACTORING_FINAL_REPORT.md** - Full refactoring report
- **REFACTORING_COMPLETE.md** - Patterns and templates

---

**Happy coding with the new architecture!** 🎉

