import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';

const NavigationControls: React.FC = () => {
  return (
    <div>
      {/* Desktop View - Fixed on right side */}
      <div className='hidden lg:flex flex-col items-center space-y-4 fixed right-6 top-1/2 transform -translate-y-1/2 z-50'>
        <div className="bg-white/10 dark:bg-slate-900/10 backdrop-blur-xl rounded-2xl p-3 border border-white/20 dark:border-slate-700/20 shadow-2xl">
          <div className="flex flex-col space-y-3">
            <ThemeToggle />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
            <LanguageSelector />
          </div>
        </div>
      </div>

      {/* Tablet View - Fixed at top right */}
      <div className='hidden md:flex lg:hidden flex-row justify-center space-x-3 fixed top-6 right-6 bg-white/10 dark:bg-slate-900/10 backdrop-blur-xl rounded-2xl px-4 py-3 shadow-2xl border border-white/20 dark:border-slate-700/20 z-50'>
        <ThemeToggle />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
        <LanguageSelector />
      </div>

      {/* Mobile View - Fixed at top right */}
      <div className='fixed top-4 right-4 bg-white/10 dark:bg-slate-900/10 backdrop-blur-xl border border-white/20 dark:border-slate-700/20 p-2 flex space-x-2 md:hidden z-50 rounded-xl shadow-xl'>
        <ThemeToggle />
        <LanguageSelector />
      </div>
    </div>
  );
};

export default NavigationControls;
