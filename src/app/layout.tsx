// Root layout - delegates to locale-specific layout
export { viewport } from './[locale]/layout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
