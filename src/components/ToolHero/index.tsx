import { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Container } from '../Container';
import { cn } from '@/lib/utils';
import { designTokens } from '@/styles/design-tokens';

interface ToolHeroProps {
  title: string;
  description?: string;
  backLink?: { href: string; label: string };
  actions?: ReactNode;
  variant?: 'default' | 'gradient' | 'minimal';
}

export function ToolHero({ title, description, backLink = { href: '/', label: 'Back to Home' }, actions, variant = 'default' }: ToolHeroProps) {
  const bgClasses = {
    default: 'bg-background border-b border-border',
    gradient: cn(designTokens.gradients.brand.primarySubtle, 'border-b border-border'),
    minimal: 'bg-background',
  };

  return (
    <section className={cn(bgClasses[variant], designTokens.elevation.xs)}>
      <Container>
        <div className="py-8 space-y-4">
          <Link href={backLink.href}>
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft size={16} />
              {backLink.label}
            </Button>
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-2">
              <h1 className={designTokens.typography.heading.h1}>{title}</h1>
              {description && <p className={cn(designTokens.typography.body.lg, 'text-muted-foreground')}>{description}</p>}
            </div>

            {actions && <div className="flex gap-3">{actions}</div>}
          </div>
        </div>
      </Container>
    </section>
  );
}
