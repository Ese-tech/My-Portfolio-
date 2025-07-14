import { createContext, useContext, useState, ReactNode } from 'react';
import { Language, translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Check if user has a saved preference
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && savedLanguage in translations) return savedLanguage;
    
    // Check browser language
    const browserLanguage = navigator.language.toLowerCase();
    if (browserLanguage.startsWith('fr')) return 'fr';
    if (browserLanguage.startsWith('de')) return 'de';
    if (browserLanguage.startsWith('ja')) return 'ja';
    if (browserLanguage.startsWith('zh')) return 'zh';
    if (browserLanguage.startsWith('es')) return 'es';
    
    return 'en'; // Default to English
  });

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('portfolio-language', newLanguage);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    // Fallback to English if translation not found
    if (!value) {
      value = translations.en;
      for (const k of keys) {
        value = value?.[k];
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
