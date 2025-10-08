'use client';
import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { designTokens } from '@/styles/design-tokens';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Modal({ isOpen, onClose, title, children, size = 'md' }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    // Store previous focus
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Get focusable elements
    const focusableElements = modalRef.current.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    // Focus first element
    firstElement?.focus();

    document.addEventListener('keydown', handleTab);

    return () => {
      document.removeEventListener('keydown', handleTab);
      // Restore focus on close
      previousFocusRef.current?.focus();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className={cn('absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity', designTokens.interaction.transition.base)} onClick={onClose} aria-hidden="true" />

      {/* Modal content */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        className={cn('relative bg-white rounded-2xl shadow-2xl w-full mx-4 max-h-[90vh] overflow-hidden', 'animate-in fade-in-0 zoom-in-95 duration-200', sizeClasses[size])}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 id="modal-title" className={cn(designTokens.typography.h3, 'text-gray-900')}>
              {title}
            </h2>
            <Button variant="outline" size="sm" onClick={onClose} className={cn('h-8 w-8 p-0 rounded-full hover:bg-gray-100', designTokens.interaction.focus.ring)} aria-label="Close dialog">
              <X size={16} />
            </Button>
          </div>
        )}

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">{children}</div>

        {/* Close button if no title */}
        {!title && (
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
            className={cn('absolute top-4 right-4 h-8 w-8 p-0 rounded-full hover:bg-gray-100 z-10', designTokens.interaction.focus.ring)}
            aria-label="Close dialog"
          >
            <X size={16} />
          </Button>
        )}
      </div>
    </div>
  );
}
