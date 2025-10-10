import * as React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Text } from '@/components/ui';

interface FooterLink {
  href: string;
  label: string;
}

interface FooterSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  links: FooterLink[];
  className?: string;
}

export function FooterSection({ title, isOpen, onToggle, links, className }: FooterSectionProps) {
  return (
    <div className={`border-b border-gray-800 pb-4 sm:border-b-0 sm:pb-0 ${className || ''}`}>
      <button onClick={onToggle} className="flex items-center justify-between w-full sm:cursor-default sm:pointer-events-none">
        <Text weight="semibold" color="inverse" className="mb-4">
          {title}
        </Text>
        <ChevronDown className={`sm:hidden transition-transform ${isOpen ? 'rotate-180' : ''}`} size={20} />
      </button>
      <ul className={`space-y-2 ${isOpen ? 'block' : 'hidden sm:block'}`}>
        {links.map(link => (
          <li key={link.href}>
            <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
