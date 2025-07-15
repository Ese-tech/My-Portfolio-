import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faChevronDown, faSearch, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../contexts/translations';

const languageOptions = [
  { code: 'en' as Language, name: 'English', flag: '🇺🇸', nativeName: 'English' },
  { code: 'de' as Language, name: 'German', flag: '🇩🇪', nativeName: 'Deutsch' },
  { code: 'fr' as Language, name: 'French', flag: '🇫🇷', nativeName: 'Français' },
  { code: 'es' as Language, name: 'Spanish', flag: '🇪🇸', nativeName: 'Español' },
  { code: 'zh' as Language, name: 'Chinese', flag: '🇨🇳', nativeName: '中文' },
  { code: 'ja' as Language, name: 'Japanese', flag: '🇯🇵', nativeName: '日本語' },
];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const currentLanguage = languageOptions.find(lang => lang.code === language);

  // Filter languages based on search term
  const filteredLanguages = languageOptions.filter(option =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    option.nativeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setSearchTerm('');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Focus search input when dropdown opens
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === 'Escape') {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Determine dropdown position
  const getDropdownPosition = () => {
    if (!buttonRef.current) return {};
    
    const rect = buttonRef.current.getBoundingClientRect();
    const isInSidebar = rect.left < 300; // Sidebar ist etwa 256px breit
    
    if (isInSidebar) {
      // In der Sidebar: Dropdown nach rechts öffnen
      return {
        left: '100%',
        marginLeft: '8px',
        bottom: '0',
        top: 'auto'
      };
    } else {
      // Normal: Dropdown nach unten und rechts öffnen
      return {
        top: '100%',
        marginTop: '8px',
        right: '0',
        left: 'auto'
      };
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={handleToggle}
        className="group flex items-center space-x-2 p-3 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <div className="relative">
          <FontAwesomeIcon 
            icon={faGlobe} 
            className="text-teal-500 dark:text-teal-400 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-200" 
          />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-lg" role="img" aria-label={currentLanguage?.name}>
            {currentLanguage?.flag}
          </span>
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200 hidden md:inline">
              {currentLanguage?.name}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 hidden lg:inline">
              {currentLanguage?.nativeName}
            </span>
          </div>
        </div>

        <FontAwesomeIcon 
          icon={faChevronDown} 
          className={`text-slate-500 dark:text-slate-400 text-xs transition-all duration-300 group-hover:text-slate-600 dark:group-hover:text-slate-300 ${
            isOpen ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
          }`}
        />
      </button>

      {/* Dropdown with dynamic positioning */}
      <div 
        className={`absolute w-80 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm overflow-hidden transition-all duration-300 transform-gpu ${
          isOpen 
            ? 'opacity-100 translate-y-0 scale-100 visible z-[100]' 
            : 'opacity-0 translate-y-2 scale-95 invisible z-[-1]'
        }`}
        style={getDropdownPosition()}
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-slate-800 dark:to-slate-700">
          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3 flex items-center">
            <FontAwesomeIcon icon={faGlobe} className="mr-2 text-teal-500" />
            Choose Language
          </h3>
          
          {/* Search Input */}
          <div className="relative">
            <FontAwesomeIcon 
              icon={faSearch} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 text-sm"
            />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search languages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
            />
          </div>
        </div>

        {/* Language Options */}
        <div className="max-h-64 overflow-y-auto custom-scrollbar">
          {filteredLanguages.length > 0 ? (
            filteredLanguages.map((option, index) => (
              <button
                key={option.code}
                onClick={() => handleLanguageChange(option.code)}
                className={`w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-200 group ${
                  language === option.code 
                    ? 'bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 text-teal-700 dark:text-teal-300' 
                    : 'text-slate-700 dark:text-slate-200'
                } ${index === 0 ? '' : 'border-t border-slate-100 dark:border-slate-700'}`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl transition-transform duration-200 group-hover:scale-110" role="img" aria-label={option.name}>
                    {option.flag}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{option.name}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{option.nativeName}</span>
                  </div>
                </div>
                
                {language === option.code && (
                  <div className="flex items-center">
                    <FontAwesomeIcon 
                      icon={faCheck} 
                      className="text-teal-500 dark:text-teal-400 text-sm animate-pulse"
                    />
                  </div>
                )}
              </button>
            ))
          ) : (
            <div className="px-4 py-8 text-center text-slate-500 dark:text-slate-400">
              <FontAwesomeIcon icon={faSearch} className="text-2xl mb-2 opacity-50" />
              <p className="text-sm">No languages found</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
            Press <kbd className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-xs">ESC</kbd> to close
          </p>
        </div>
      </div>
    </div>
  );
}