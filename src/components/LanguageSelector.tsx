import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../contexts/translations';

const languageOptions = [
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  { code: 'fr' as Language, name: 'French', flag: '🇫🇷' },
  { code: 'de' as Language, name: 'German', flag: '🇩🇪' },
  { code: 'ja' as Language, name: 'Japanese', flag: '🇯🇵' },
  { code: 'zh' as Language, name: 'Chinese', flag: '🇨🇳' },
  { code: 'es' as Language, name: 'Spanish', flag: '🇪🇸' },
];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languageOptions.find(lang => lang.code === language);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-3 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
        aria-label="Select language"
      >
        <FontAwesomeIcon icon={faGlobe} className="text-slate-600 dark:text-slate-300" />
        <span className="text-sm font-medium text-slate-700 dark:text-slate-200 hidden sm:inline">
          {currentLanguage?.flag} {currentLanguage?.name}
        </span>
        <span className="text-sm font-medium text-slate-700 dark:text-slate-200 sm:hidden">
          {currentLanguage?.flag}
        </span>
        <FontAwesomeIcon 
          icon={faChevronDown} 
          className={`text-slate-500 dark:text-slate-400 text-xs transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full mt-2 right-0 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-600 overflow-hidden z-20 min-w-[160px]">
            {languageOptions.map((option) => (
              <button
                key={option.code}
                onClick={() => handleLanguageChange(option.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200 ${
                  language === option.code 
                    ? 'bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400' 
                    : 'text-slate-700 dark:text-slate-200'
                }`}
              >
                <span className="text-lg">{option.flag}</span>
                <span className="font-medium">{option.name}</span>
                {language === option.code && (
                  <div className="ml-auto w-2 h-2 bg-teal-500 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
