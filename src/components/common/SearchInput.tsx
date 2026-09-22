import React, { useState } from 'react';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearchChange?: (val: string) => void;
  shortcut?: string;
  onClear?: () => void;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onSearchChange, shortcut, onClear, value, onChange, className = '', ...props }, ref) => {
    const [internalVal, setInternalVal] = useState('');
    const currentVal = value !== undefined ? String(value) : internalVal;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInternalVal(e.target.value);
      onChange?.(e);
      onSearchChange?.(e.target.value);
    };

    const handleClear = () => {
      setInternalVal('');
      onSearchChange?.('');
      onClear?.();
    };

    return (
      <div className="relative rounded-xl shadow-xs w-full group">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-violet-600 transition-colors">
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={handleChange}
          className={`block w-full pl-9 pr-12 py-2 border border-slate-200 rounded-xl leading-5 bg-white placeholder-slate-400 text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all ${className}`}
          {...props}
        />
        <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center gap-1.5">
          {currentVal && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
              title="Clear search"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          {shortcut && !currentVal && (
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono font-medium text-slate-400 bg-slate-100 border border-slate-200 rounded shadow-2xs">
              {shortcut}
            </kbd>
          )}
        </div>
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';

