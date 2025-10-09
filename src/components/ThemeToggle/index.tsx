'use client';

import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="relative" aria-label="Toggle theme">
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  const icons = {
    light: <Sun className="h-5 w-5 text-yellow-500" />,
    dark: <Moon className="h-5 w-5 text-blue-400" />,
    system: <Monitor className="h-5 w-5 text-gray-500" />,
  };

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      className="relative hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={`Current theme: ${theme}. Click to cycle through themes.`}
      title={`Theme: ${theme}`}
    >
      <div className="relative">
        {icons[theme]}
      </div>
    </Button>
  );
}


