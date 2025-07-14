import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group relative p-3 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95 overflow-hidden"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Background gradient animation */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        theme === 'light' 
          ? 'bg-gradient-to-br from-yellow-50 to-orange-50 opacity-100' 
          : 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 opacity-100'
      }`} />
      
      {/* Icon container */}
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Sun icon */}
        <FontAwesomeIcon
          icon={faSun}
          className={`absolute text-yellow-500 transition-all duration-500 transform ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-180 scale-0'
          }`}
        />
        
        {/* Moon icon */}
        <FontAwesomeIcon
          icon={faMoon}
          className={`absolute text-blue-400 dark:text-blue-300 transition-all duration-500 transform ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-180 scale-0'
          }`}
        />
        
        {/* Pulse animation for active state */}
        <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
          theme === 'light' 
            ? 'bg-yellow-400/20 animate-pulse' 
            : 'bg-blue-400/20 animate-pulse'
        }`} />
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-full group-hover:translate-x-0" />
    </button>
  );
}
