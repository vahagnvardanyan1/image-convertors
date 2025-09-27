'use client';
import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export function PageLayout({ children, className = 'min-h-screen bg-white' }: PageLayoutProps) {
  return (
    <div className={className}>
      <main>{children}</main>
    </div>
  );
}
