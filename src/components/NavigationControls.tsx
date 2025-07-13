import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';

const NavigationControls: React.FC = () => {
  return (
    <div>
      {/* Desktop View - Fixed on right side */}
      <div className='hidden lg:flex flex-col items-center space-y-6 fixed right-4 top-1/2 transform -translate-y-1/2 z-50'>
        <ThemeToggle />
        <LanguageSelector />
      </div>

      {/* Tablet View - Fixed at bottom center */}
      <div className='hidden md:flex lg:hidden flex-row justify-center space-x-6 fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-slate-200 dark:border-slate-700 z-50'>
        <ThemeToggle />
        <LanguageSelector />
      </div>

      {/* Mobile View - Fixed at bottom */}
      <div className='fixed bottom-0 left-0 w-full bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-t border-slate-200 dark:border-slate-700 p-4 flex justify-center space-x-6 md:hidden z-50'>
        <ThemeToggle />
        <LanguageSelector />
      </div>
    </div>
  );
};

export default NavigationControls;
