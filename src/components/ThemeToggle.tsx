import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <FontAwesomeIcon
          icon={faSun}
          className={`absolute text-yellow-500 transition-all duration-300 ${
            theme === 'light' 
              ? 'opacity-100 transform rotate-0 scale-100' 
              : 'opacity-0 transform rotate-180 scale-0'
          }`}
        />
        <FontAwesomeIcon
          icon={faMoon}
          className={`absolute text-blue-400 transition-all duration-300 ${
            theme === 'dark' 
              ? 'opacity-100 transform rotate-0 scale-100' 
              : 'opacity-0 transform -rotate-180 scale-0'
          }`}
        />
      </div>
    </button>
  );
}
