import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSun, 
  faMoon, 
  faGlobe, 
  faPalette, 
  faLanguage,
  faCheck,
  faCog
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';

type Language = 'en' | 'de' | 'fr' | 'es' | 'zh' | 'ja';

const languageOptions = [
  { code: 'en' as Language, name: 'English', flag: '🇺🇸', nativeName: 'English' },
  { code: 'de' as Language, name: 'German', flag: '🇩🇪', nativeName: 'Deutsch' },
  { code: 'fr' as Language, name: 'French', flag: '🇫🇷', nativeName: 'Français' },
  { code: 'es' as Language, name: 'Spanish', flag: '🇪🇸', nativeName: 'Español' },
  { code: 'zh' as Language, name: 'Chinese', flag: '🇨🇳', nativeName: '中文' },
  { code: 'ja' as Language, name: 'Japanese', flag: '🇯🇵', nativeName: '日本語' },
];

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const currentLanguage = languageOptions.find(lang => lang.code === language);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl shadow-lg mb-6">
            <FontAwesomeIcon icon={faCog} className="text-2xl text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('settings.title')}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t('settings.description')}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Theme Settings */}
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faPalette} className="text-white text-lg" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {t('settings.theme.title')}
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  {t('settings.theme.description')}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Light Theme */}
              <button
                onClick={() => theme !== 'light' && toggleTheme()}
                className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-102 ${
                  theme === 'light'
                    ? 'border-yellow-400 bg-gradient-to-r from-yellow-50 to-orange-50 shadow-lg'
                    : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50 hover:border-yellow-300 dark:hover:border-yellow-400'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    theme === 'light' 
                      ? 'bg-gradient-to-br from-yellow-400 to-orange-500' 
                      : 'bg-slate-100 dark:bg-slate-600'
                  }`}>
                    <FontAwesomeIcon 
                      icon={faSun} 
                      className={`text-lg ${
                        theme === 'light' ? 'text-white' : 'text-yellow-500'
                      }`} 
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {t('settings.theme.light')}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Bright and clean interface
                    </p>
                  </div>
                </div>
                {theme === 'light' && (
                  <FontAwesomeIcon 
                    icon={faCheck} 
                    className="text-yellow-500 text-lg animate-pulse" 
                  />
                )}
              </button>

              {/* Dark Theme */}
              <button
                onClick={() => theme !== 'dark' && toggleTheme()}
                className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-102 ${
                  theme === 'dark'
                    ? 'border-blue-400 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 shadow-lg'
                    : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50 hover:border-blue-300 dark:hover:border-blue-400'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-br from-blue-500 to-indigo-600' 
                      : 'bg-slate-100 dark:bg-slate-600'
                  }`}>
                    <FontAwesomeIcon 
                      icon={faMoon} 
                      className={`text-lg ${
                        theme === 'dark' ? 'text-white' : 'text-blue-500'
                      }`} 
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {t('settings.theme.dark')}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Comfortable for your eyes
                    </p>
                  </div>
                </div>
                {theme === 'dark' && (
                  <FontAwesomeIcon 
                    icon={faCheck} 
                    className="text-blue-400 text-lg animate-pulse" 
                  />
                )}
              </button>
            </div>
          </div>

          {/* Language Settings */}
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faLanguage} className="text-white text-lg" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {t('settings.language.title')}
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  {t('settings.language.description')}
                </p>
              </div>
            </div>

            {/* Current Language Display */}
            <div className="mb-6 p-4 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-2xl border border-teal-200 dark:border-teal-700">
              <div className="flex items-center space-x-3">
                <span className="text-2xl" role="img" aria-label={currentLanguage?.name}>
                  {currentLanguage?.flag}
                </span>
                <div>
                  <p className="font-semibold text-teal-700 dark:text-teal-300">
                    Currently selected: {currentLanguage?.name}
                  </p>
                  <p className="text-sm text-teal-600 dark:text-teal-400">
                    {currentLanguage?.nativeName}
                  </p>
                </div>
              </div>
            </div>

            {/* Language Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {languageOptions.map((option) => (
                <button
                  key={option.code}
                  onClick={() => setLanguage(option.code)}
                  className={`flex items-center space-x-3 p-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-102 ${
                    language === option.code
                      ? 'border-teal-400 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/30 dark:to-blue-900/30 shadow-lg'
                      : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50 hover:border-teal-300 dark:hover:border-teal-400'
                  }`}
                >
                  <span className="text-2xl transition-transform duration-200 hover:scale-110" role="img" aria-label={option.name}>
                    {option.flag}
                  </span>
                  <div className="flex-1 text-left">
                    <p className="font-medium text-slate-900 dark:text-white text-sm">
                      {option.name}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {option.nativeName}
                    </p>
                  </div>
                  {language === option.code && (
                    <FontAwesomeIcon 
                      icon={faCheck} 
                      className="text-teal-500 dark:text-teal-400 animate-pulse" 
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
            <p className="text-slate-600 dark:text-slate-300 mb-2">
              Settings are automatically saved and synchronized across your browsing sessions.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center">
                <FontAwesomeIcon icon={faSun} className="mr-1" />
                Light Mode
              </span>
              <span>•</span>
              <span className="flex items-center">
                <FontAwesomeIcon icon={faMoon} className="mr-1" />
                Dark Mode
              </span>
              <span>•</span>
              <span className="flex items-center">
                <FontAwesomeIcon icon={faGlobe} className="mr-1" />
                6 Languages
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
