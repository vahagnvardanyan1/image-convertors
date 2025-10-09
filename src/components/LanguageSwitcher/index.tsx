'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { locales, localeNames, type Locale } from '@/i18n/config';
import { Globe } from 'lucide-react';
import { useParams } from 'next/navigation';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const handleLanguageChange = (newLocale: Locale) => {
    // Use next-intl's router which handles locale switching automatically
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known params are used
      { pathname, params },
      { locale: newLocale },
    );
  };

  return (
    <div className="relative inline-block">
      <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm border border-gray-200">
        <Globe className="h-4 w-4 text-gray-600" />
        <select value={locale} onChange={e => handleLanguageChange(e.target.value as Locale)} className="bg-transparent border-none outline-none cursor-pointer text-sm font-medium text-gray-700">
          {locales.map(loc => (
            <option key={loc} value={loc}>
              {localeNames[loc]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
