import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'gray' | 'teal' | 'purple' | 'primary';
  size?: 'sm' | 'md';
  dot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gray',
  size = 'md',
  dot = false,
  className = '',
}) => {
  const colors = {
    primary: 'bg-violet-50 text-violet-700 border-violet-200/80',
    purple: 'bg-violet-50 text-violet-700 border-violet-200/80',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    warning: 'bg-amber-50 text-amber-700 border-amber-200/80',
    danger: 'bg-rose-50 text-rose-700 border-rose-200/80',
    info: 'bg-sky-50 text-sky-700 border-sky-200/80',
    teal: 'bg-teal-50 text-teal-700 border-teal-200/80',
    gray: 'bg-slate-100 text-slate-600 border-slate-200/80',
  };

  const dotColors = {
    primary: 'bg-violet-500',
    purple: 'bg-violet-500',
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    danger: 'bg-rose-500',
    info: 'bg-sky-500',
    teal: 'bg-teal-500',
    gray: 'bg-slate-400',
  };

  const sizes = {
    sm: 'px-1.5 py-0.5 text-[9px] gap-1',
    md: 'px-2.5 py-0.5 text-[10px] gap-1.5',
  };

  return (
    <span className={`inline-flex items-center rounded-full font-bold tracking-wider uppercase border shadow-xs transition-colors ${colors[variant]} ${sizes[size]} ${className}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColors[variant]}`} />}
      <span>{children}</span>
    </span>
  );
};
