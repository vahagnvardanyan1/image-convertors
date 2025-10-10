# Design System Documentation

This document outlines the design system architecture, components, patterns, and conventions for the image converter application.

## Overview

The design system is organized into layers:

1. **Tokens** - Core design values (spacing, typography, colors, etc.)
2. **Primitives** - Basic UI components (Button, Text, Heading, etc.)
3. **Patterns** - Composable feature components (FileDropzone, FormatSelector, etc.)
4. **Hooks** - Reusable business logic
5. **Types** - Type-safe definitions

## Directory Structure

```
src/
├── design-system/
│   └── tokens.ts           # Design tokens (spacing, typography, colors, etc.)
├── components/
│   ├── ui/                 # UI primitives
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── container.tsx
│   │   ├── gradient-button.tsx
│   │   ├── heading.tsx
│   │   ├── icon-button.tsx
│   │   ├── section.tsx
│   │   ├── stack.tsx
│   │   ├── text.tsx
│   │   └── index.ts       # Barrel export
│   └── patterns/          # Composable patterns
│       ├── FileDropzone.tsx
│       ├── FormatSelector.tsx
│       ├── StatList.tsx
│       ├── FeatureGrid.tsx
│       └── index.ts
├── hooks/                 # Custom hooks
│   ├── useConversion.ts
│   ├── useDropzone.ts
│   ├── useFormats.ts
│   └── index.ts
├── types/                 # Type definitions
│   ├── converter.types.ts
│   └── index.ts
└── lib/                   # Utilities and business logic
    └── imageConverter.ts
```

## Design Tokens

Design tokens are defined in `src/design-system/tokens.ts` and provide:

- **Spacing Scale** - Consistent spacing values (0-32)
- **Typography** - Font sizes, weights, line heights, letter spacing
- **Border Radius** - Consistent corner rounding
- **Shadows** - Elevation system
- **Gradients** - Brand gradients
- **Transitions** - Animation durations and easings
- **Container Widths** - Maximum content widths

### Usage

```typescript
import { spacing, typography, radius } from '@/design-system/tokens';

// Access token values
const paddingValue = spacing[4]; // '1rem'
const fontSize = typography.fontSize.lg; // '1.125rem'
```

### CSS Variables

Design tokens are exposed as CSS variables in `globals.css`:

```css
:root {
  --gradient-primary-from: rgb(37, 99, 235);
  --gradient-primary-to: rgb(147, 51, 234);
  /* ... more variables */
}
```

## UI Primitives

### Container

Responsive container with max-width and padding variants.

```tsx
import { Container } from '@/components/ui';

<Container size="xl" padding="lg">
  {children}
</Container>
```

**Props:**
- `size`: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full'
- `padding`: 'none' | 'sm' | 'md' | 'lg'

### Section

Full-width section with consistent vertical padding and background variants.

```tsx
import { Section } from '@/components/ui';

<Section padding="xl" background="accent">
  {children}
</Section>
```

**Props:**
- `padding`: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
- `background`: 'none' | 'muted' | 'card' | 'primary' | 'accent'

### Heading

Typography component for headings with variants.

```tsx
import { Heading } from '@/components/ui';

<Heading level="h1" gradient="primary">
  Title
</Heading>
```

**Props:**
- `level`: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
- `weight`: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'
- `align`: 'left' | 'center' | 'right'
- `gradient`: 'none' | 'primary' | 'secondary'

### Text

Typography component for body text.

```tsx
import { Text } from '@/components/ui';

<Text size="lg" color="muted">
  Description text
</Text>
```

**Props:**
- `size`: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'
- `weight`: 'normal' | 'medium' | 'semibold' | 'bold'
- `color`: 'default' | 'muted' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
- `align`: 'left' | 'center' | 'right'
- `truncate`: boolean

### Badge

Small status/label component.

```tsx
import { Badge } from '@/components/ui';

<Badge variant="success" size="md">
  Active
</Badge>
```

**Props:**
- `variant`: 'default' | 'secondary' | 'outline' | 'muted' | 'success' | 'warning' | 'error'
- `size`: 'sm' | 'md' | 'lg'

### Stack

Flexbox layout component for consistent spacing.

```tsx
import { Stack } from '@/components/ui';

<Stack direction="column" spacing={4} align="center">
  {children}
</Stack>
```

**Props:**
- `direction`: 'row' | 'column' | 'row-reverse' | 'column-reverse'
- `spacing`: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12
- `align`: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
- `justify`: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
- `wrap`: boolean

### GradientButton

Button with gradient background from design tokens.

```tsx
import { GradientButton } from '@/components/ui';

<GradientButton size="lg" gradient="primary" onClick={handleClick}>
  <Upload size={20} />
  Upload File
</GradientButton>
```

**Props:**
- `gradient`: 'primary' | 'secondary'
- `size`: 'default' | 'sm' | 'lg' | 'xl'

## Composable Patterns

### FileDropzone

Reusable drag-and-drop file upload component.

```tsx
import { FileDropzone } from '@/components/patterns';

<FileDropzone
  selectedFile={file}
  onFileSelect={handleFileSelect}
  onError={handleError}
  maxSize={50 * 1024 * 1024}
  messages={{
    dragDrop: 'Drag and drop your file here',
    chooseFile: 'Choose File'
  }}
/>
```

### FormatSelector

Type-safe format selection dropdown.

```tsx
import { FormatSelector } from '@/components/patterns';

<FormatSelector
  value={format}
  onValueChange={setFormat}
  label="Output Format"
  placeholder="Select format"
  showDescription
/>
```

### StatList

Display statistics or features in a list.

```tsx
import { StatList } from '@/components/patterns';

<StatList
  items={[
    { icon: FileImage, label: 'Files', value: '1,234' },
    { icon: Clock, label: 'Processing Time', value: '2.5s' }
  ]}
  orientation="horizontal"
  spacing={4}
/>
```

### FeatureGrid

Grid layout for displaying features.

```tsx
import { FeatureGrid } from '@/components/patterns';

<FeatureGrid
  features={[
    {
      icon: Zap,
      title: 'Fast Conversion',
      description: 'Convert images in seconds'
    }
  ]}
  columns={3}
  spacing="md"
/>
```

## Custom Hooks

### useConversion

Manages image conversion state and logic.

```tsx
import { useConversion } from '@/hooks';

const {
  selectedFile,
  outputFormat,
  quality,
  result,
  error,
  isConverting,
  canConvert,
  setSelectedFile,
  setOutputFormat,
  setQuality,
  convert,
  reset,
} = useConversion({
  onSuccess: (result) => console.log('Converted!', result),
  onError: (error) => console.error('Error:', error),
});
```

### useDropzone

Handles drag-and-drop file selection.

```tsx
import { useDropzone } from '@/hooks';

const {
  isDragOver,
  getRootProps,
  getInputProps,
  openFileDialog,
} = useDropzone({
  onFileSelect: handleFileSelect,
  onError: handleError,
  accept: 'image/*',
  maxSize: 50 * 1024 * 1024,
});
```

### useFormats

Provides format-related utilities.

```tsx
import { useFormats } from '@/hooks';

const {
  formats,
  supportsQuality,
  supportsTransparency,
  formatFileSize,
  calculateCompressionRatio,
} = useFormats();
```

## Type Safety

All domain types are defined in `src/types/`:

```typescript
import type {
  SupportedFormat,
  ConversionOptions,
  ConversionResult,
  ConversionState,
} from '@/types';
```

### Key Types

- `SupportedFormat` - Union type of supported image formats
- `ConversionOptions` - Options for image conversion
- `ConversionResult` - Result of successful conversion
- `ConversionState` - UI state for conversion tool
- `FormatInfo` - Format metadata and capabilities

## Conventions

### File Naming

- **Hooks**: `useSomething.ts`
- **Components**: `Something.tsx` (PascalCase)
- **Types**: `something.types.ts`
- **Utils**: `something.ts`

### Component Structure

Components should ideally stay within ~140 lines (excluding imports and types).

```tsx
// 1. Imports
import { useState } from 'react';
import { Button, Stack } from '@/components/ui';

// 2. Types/Interfaces
interface MyComponentProps {
  title: string;
  onSubmit: () => void;
}

// 3. Component
export function MyComponent({ title, onSubmit }: MyComponentProps) {
  // 4. Hooks
  const [state, setState] = useState(false);

  // 5. Handlers
  const handleClick = () => {
    setState(true);
    onSubmit();
  };

  // 6. Render
  return (
    <Stack spacing={4}>
      <Heading level="h2">{title}</Heading>
      <Button onClick={handleClick}>Submit</Button>
    </Stack>
  );
}
```

### Prop Typing

Always use explicit types for component props:

```tsx
// ✅ Good
interface Props {
  title: string;
  count: number;
}

export function Component({ title, count }: Props) {
  // ...
}

// ❌ Bad
export function Component({ title, count }: any) {
  // ...
}
```

### Avoid Repetition

Use `.map()` instead of manually repeating JSX:

```tsx
// ✅ Good
{items.map(item => (
  <Badge key={item.id}>{item.label}</Badge>
))}

// ❌ Bad
<Badge>Item 1</Badge>
<Badge>Item 2</Badge>
<Badge>Item 3</Badge>
```

## Testing & Quality

### Linting

```bash
npm run lint        # Check for linting errors
npm run lint:fix    # Fix auto-fixable errors
```

### Type Checking

TypeScript strict mode is enabled in `tsconfig.json`:

```bash
npx tsc --noEmit    # Type check without compilation
```

### Build Validation

```bash
npm run build       # Must pass without errors
```

## Contributing

When adding new components:

1. Follow the established file structure
2. Use design tokens instead of hardcoded values
3. Provide TypeScript types for all props
4. Keep components focused and under ~140 lines
5. Extract logic into hooks when appropriate
6. Document new patterns in this file
7. Ensure `npm run lint && npm run build` passes

## Resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Radix UI Primitives](https://www.radix-ui.com/)
- [Class Variance Authority](https://cva.style/)

