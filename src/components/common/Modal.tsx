import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  icon,
  children,
  footer,
  maxWidth = 'max-w-lg',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4 text-center">
        {/* Backdrop overlay */}
        <div 
          className="fixed inset-0 transition-opacity bg-slate-900/60 backdrop-blur-sm animate-fadeIn" 
          onClick={onClose}
        />

        {/* Modal content box */}
        <div className={`relative inline-block w-full align-middle transition-all transform bg-white border border-slate-200/80 rounded-2xl shadow-2xl text-left my-8 ${maxWidth} animate-scale-in overflow-hidden`}>
          <div className="px-6 py-4 bg-gradient-to-r from-slate-50 to-white border-b border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-3 min-w-0">
              {icon && <div className="text-violet-600 shrink-0">{icon}</div>}
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-850 tracking-tight leading-snug">{title}</h3>
                {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
              </div>
            </div>
            <button 
              type="button" 
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors cursor-pointer"
              onClick={onClose}
              title="Close dialog (Esc)"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="px-6 py-5 text-sm text-slate-700 max-h-[calc(100vh-200px)] overflow-y-auto">
            {children}
          </div>
          {footer && (
            <div className="px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex flex-row-reverse items-center gap-2.5">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

