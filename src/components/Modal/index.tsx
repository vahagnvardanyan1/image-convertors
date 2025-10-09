'use client';
import { useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '../ui/button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Modal({ isOpen, onClose, title, children, size = 'md' }: ModalProps) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className={`relative bg-white rounded-2xl shadow-2xl ${sizeClasses[size]} w-full max-h-[90vh] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200`}>
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 pr-2">{title}</h2>
            <Button variant="outline" size="sm" onClick={onClose} className="h-9 w-9 sm:h-8 sm:w-8 p-0 rounded-full hover:bg-gray-100 flex-shrink-0">
              <X size={18} className="sm:size-4" />
            </Button>
          </div>
        )}

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)] sm:max-h-[calc(90vh-120px)]">{children}</div>

        {/* Close button if no title */}
        {!title && (
          <Button variant="outline" size="sm" onClick={onClose} className="absolute top-3 right-3 sm:top-4 sm:right-4 h-9 w-9 sm:h-8 sm:w-8 p-0 rounded-full hover:bg-gray-100 z-10 shadow-md">
            <X size={18} className="sm:size-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
