import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function ColorsLayout({ children }: LayoutProps) {
  return <div className="bg-newBackgroundColor min-h-screen">{children}</div>;
}
