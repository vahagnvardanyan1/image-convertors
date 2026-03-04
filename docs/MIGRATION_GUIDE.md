# Migration Guide: Type-Safe Translations

This guide helps you migrate existing code to use the new type-safe translation system.

## 📋 Migration Checklist

- [ ] Update import statements
- [ ] Fix any translation key errors reported by TypeScript
- [ ] Test all pages/components
- [ ] Run validation scripts

## 🔄 Step-by-Step Migration

### Step 1: Update Imports

**Before:**

```tsx
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
```

**After:**

```tsx
import { useTranslations } from '@/lib/translations';
import { getTranslations } from '@/lib/translations';
```

### Step 2: Generate Types

Run the type generator to create TypeScript definitions:

```bash
npm run generate:types
```

### Step 3: Fix TypeScript Errors

TypeScript will now show errors for invalid translation keys:

```tsx
// ❌ Before (runtime error)
const t = useTranslations('converterPage');
const title = t('step3Convert'); // This key doesn't exist

// ✅ After (compile-time error caught and fixed)
const t = useTranslations('converterPage');
const title = t('step3Title'); // Correct key
```

### Step 4: Validate All Translations

Ensure all locale files are in sync:

```bash
npm run validate:translations
```

## 🐛 Common Issues and Fixes

### Issue 1: Translation Key Doesn't Exist

**Error:**

```
Property 'step3Convert' does not exist on type...
```

**Solution:**

1. Check `messages/en.json` for the correct key name
2. Update your code to use the correct key
3. If the key should exist, add it to all locale files

**Example Fix:**

```tsx
// ❌ Wrong key
t('step3Convert');

// ✅ Correct key (found in en.json)
t('step3Title');
```

### Issue 2: Namespace Doesn't Exist

**Error:**

```
Argument of type '"wrongNamespace"' is not assignable to parameter of type 'TranslationNamespace'
```

**Solution:**
Check available namespaces in `src/types/translations.generated.ts` or `messages/en.json`

**Example Fix:**

```tsx
// ❌ Wrong namespace
const t = useTranslations('converterPages');

// ✅ Correct namespace
const t = useTranslations('converterPage');
```

### Issue 3: MISSING_MESSAGE Runtime Error

**Error:**

```
IntlError: MISSING_MESSAGE: Could not resolve `converterPage.step3Convert` in messages for locale `ru`.
```

**Root Cause:**
This error means the translation key exists in some locales but not others, or doesn't exist at all.

**Solution:**

1. **Check if the key exists in `en.json`:**

```bash
grep -r "step3Convert" messages/
```

2. **If the key doesn't exist:**
   - You're using the wrong key name
   - Check `messages/en.json` for the correct key
   - Update your code

3. **If the key exists in `en.json` but not in other locales:**

   ```bash
   npm run validate:translations
   ```

   This will show which locales are missing the key. Add it to those files.

4. **Example of the fix applied in this project:**

```tsx
// ❌ Before (caused the error)
<h2>3. {t('step3Convert')}</h2>

// ✅ After (fixed)
<h2>3. {t('step3Title')}</h2>
```

## 📝 Example Migrations

### Example 1: Simple Component

**Before:**

```tsx
'use client';
import { useTranslations } from 'next-intl';

export const MyComponent = () => {
  const t = useTranslations('common');
  return <button>{t('download')}</button>;
};
```

**After:**

```tsx
'use client';
import { useTranslations } from '@/lib/translations';

export const MyComponent = () => {
  const t = useTranslations('common');
  return <button>{t('download')}</button>; // ✅ Now type-safe!
};
```

### Example 2: Multiple Namespaces

**Before:**

```tsx
import { useTranslations } from 'next-intl';

export const ConverterPage = () => {
  const t = useTranslations('converterPage');
  const tCommon = useTranslations('common');
  const tErrors = useTranslations('errors');

  return (
    <div>
      <h1>{t('title')}</h1>
      <button>{tCommon('download')}</button>
      <p>{tErrors('processingFailed')}</p>
    </div>
  );
};
```

**After:**

```tsx
import { useTranslations } from '@/lib/translations';

export const ConverterPage = () => {
  const t = useTranslations('converterPage');
  const tCommon = useTranslations('common');
  const tErrors = useTranslations('errors');

  return (
    <div>
      <h1>{t('title')}</h1> {/* ✅ Type-safe */}
      <button>{tCommon('download')}</button> {/* ✅ Type-safe */}
      <p>{tErrors('processingFailed')}</p> {/* ✅ Type-safe */}
    </div>
  );
};
```

### Example 3: Server Component with Interpolation

**Before:**

```tsx
import { getTranslations } from 'next-intl/server';

export const ServerComponent = async () => {
  const t = await getTranslations('converterPage');

  return <p>{t('step1Description', { format: 'PNG' })}</p>;
};
```

**After:**

```tsx
import { getTranslations } from '@/lib/translations';

export const ServerComponent = async () => {
  const t = await getTranslations('converterPage');

  return (
    <p>{t('step1Description', { format: 'PNG' })}</p> {/* ✅ Type-safe */}
  );
};
```

### Example 4: The Bug That Was Fixed

**Before (caused 500 error):**

```tsx
// src/components/ConverterPage/index.tsx
export const ConverterPage = ({ from, to, title, description }) => {
  const t = useTranslations('converterPage');

  return (
    <Card>
      <h2>3. {t('step3Convert')}</h2> {/* ❌ This key doesn't exist! */}
    </Card>
  );
};
```

**After (fixed):**

```tsx
// src/components/ConverterPage/index.tsx
export const ConverterPage = ({ from, to, title, description }) => {
  const t = useTranslations('converterPage');

  return (
    <Card>
      <h2>3. {t('step3Title')}</h2> {/* ✅ Correct key! */}
    </Card>
  );
};
```

**Result:**

- No more 500 errors
- TypeScript would have caught this error at compile time
- IDE autocomplete suggests correct keys

## 🧪 Testing After Migration

### 1. Build Test

Ensure everything compiles without TypeScript errors:

```bash
npm run build
```

### 2. Validation Test

Ensure all translations are present:

```bash
npm run validate:translations
```

Expected output:

```
✓ en (source)
✓ de - All 1528 keys present
✓ es - All 1528 keys present
✓ ru - All 1528 keys present
✓ hi - All 1528 keys present
✓ zh - All 1528 keys present

✅ All translations are valid!
```

### 3. Runtime Test

Test each page in development mode:

```bash
npm run dev
```

Visit all pages and check the console for any translation errors.

### 4. Locale Test

Test each supported locale to ensure translations load correctly:

```
http://localhost:3000/en/
http://localhost:3000/de/
http://localhost:3000/es/
http://localhost:3000/ru/
http://localhost:3000/hi/
http://localhost:3000/zh/
```

## 📊 Migration Automation

### Find All useTranslations Usages

```bash
# Find all files using useTranslations
grep -r "useTranslations" src/ --include="*.tsx" --include="*.ts"

# Find all files using getTranslations
grep -r "getTranslations" src/ --include="*.tsx" --include="*.ts"
```

### Update All Imports at Once

```bash
# This will show you all the import statements that need updating
grep -r "from 'next-intl'" src/ --include="*.tsx" --include="*.ts"
```

Then update them manually or use a find-and-replace in your IDE:

- Find: `import { useTranslations } from 'next-intl';`
- Replace: `import { useTranslations } from '@/lib/translations';`

- Find: `import { getTranslations } from 'next-intl/server';`
- Replace: `import { getTranslations } from '@/lib/translations';`

## ✅ Migration Complete!

Once you've completed the migration:

1. ✅ All imports updated
2. ✅ TypeScript errors fixed
3. ✅ Validation passes
4. ✅ Build succeeds
5. ✅ All pages tested
6. ✅ All locales work

## 🎉 Benefits You Now Have

1. **No More Runtime Errors** - Translation errors caught at compile time
2. **Better Developer Experience** - Autocomplete for all translation keys
3. **Safer Refactoring** - TypeScript shows all usages when renaming
4. **Consistent Translations** - Validation ensures all locales match
5. **Clear Documentation** - Type definitions document available keys

## 📚 Additional Resources

- [Complete Documentation](./TRANSLATIONS.md)
- [Quick Reference](./QUICK_REFERENCE.md)
- [Main README](./README.md)

---

**Last Updated:** October 2025
