import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  headerActions?: React.ReactNode;
  variant?: 'default' | 'glass' | 'flat';
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  icon,
  headerActions,
  variant = 'default',
  noPadding = false,
  className = '',
  ...props
}) => {
  const variantStyles = {
    default: 'bg-white border border-slate-200/80 shadow-sm',
    glass: 'bg-white/90 backdrop-blur-md border border-white/40 shadow-sm',
    flat: 'bg-slate-50 border border-slate-200',
  };

  return (
    <div className={`rounded-2xl overflow-hidden transition-all duration-200 ${variantStyles[variant]} ${className}`} {...props}>
      {(title || headerActions) && (
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between gap-4 bg-gradient-to-r from-slate-50/50 to-transparent">
          <div className="flex items-center gap-3 min-w-0">
            {icon && <div className="text-violet-600 shrink-0">{icon}</div>}
            <div className="truncate">
              {title && <h3 className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight truncate">{title}</h3>}
              {subtitle && <p className="text-[11px] text-slate-400 font-normal mt-0.5 truncate">{subtitle}</p>}
            </div>
          </div>
          {headerActions && <div className="shrink-0">{headerActions}</div>}
        </div>
      )}
      <div className={noPadding ? '' : 'px-5 py-5 sm:p-6'}>{children}</div>
    </div>
  );
};

