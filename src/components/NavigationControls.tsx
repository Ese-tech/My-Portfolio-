import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';

const NavigationControls: React.FC = () => {
  return (
    <div>
      {/* Desktop View - Fixed on left side */}
      <div className='hidden lg:flex flex-col items-center space-y-6 fixed left-4 top-1/2 transform -translate-y-1/2 z-50'>
        <ThemeToggle />
        <LanguageSelector />
      </div>

      {/* Tablet View - Fixed at top right */}
      <div className='hidden md:flex lg:hidden flex-row justify-center space-x-4 fixed top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-slate-200 dark:border-slate-700 z-50'>
        <ThemeToggle />
        <LanguageSelector />
      </div>

      {/* Mobile View - Fixed at top right */}
      <div className='fixed top-4 right-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-2 flex space-x-2 md:hidden z-50 rounded-full'>
        <ThemeToggle />
        <LanguageSelector />
      </div>
    </div>
  );
};

export default NavigationControls;
