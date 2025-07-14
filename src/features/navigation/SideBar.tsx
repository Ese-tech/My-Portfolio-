import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faUser,
    faProjectDiagram,
    faEnvelope,
    faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../../contexts/LanguageContext";

function SideBar() {
    const { t } = useLanguage();

    return (
        <div className='hidden lg:block fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black shadow-2xl z-50 text-white'>
            <div className='flex justify-center items-center p-8 border-b border-teal-400/30'>
                <h2 className='text-3xl font-extrabold bg-gradient-to-r from-teal-400 to-gold-400 bg-clip-text text-transparent'>Menu</h2>
            </div>
            <nav className='flex flex-col p-6 space-y-4 mt-8'>
                <NavLink
                    to='/'
                    end
                    className={({ isActive }) =>
                        isActive
                            ? "text-white font-bold flex items-center py-3 px-4 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm shadow-lg transform scale-105 border border-teal-400/30"
                            : "text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 flex items-center py-3 px-4 rounded-lg transition-all duration-300 hover:transform hover:scale-105"
                    }
                >
                    <FontAwesomeIcon icon={faHome} className='mr-4 text-xl' />
                    <span className='text-lg'>{t('navigation.home')}</span>
                </NavLink>

                <NavLink
                    to='/about-me'
                    className={({ isActive }) =>
                        isActive
                            ? "text-white font-bold flex items-center py-3 px-4 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm shadow-lg transform scale-105 border border-teal-400/30"
                            : "text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 flex items-center py-3 px-4 rounded-lg transition-all duration-300 hover:transform hover:scale-105"
                    }
                >
                    <FontAwesomeIcon icon={faUser} className='mr-4 text-xl' />
                    <span className='text-lg'>{t('navigation.about')}</span>
                </NavLink>

                <NavLink
                    to='/skills'
                    className={({ isActive }) =>
                        isActive
                            ? "text-white font-bold flex items-center py-3 px-4 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm shadow-lg transform scale-105 border border-teal-400/30"
                            : "text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 flex items-center py-3 px-4 rounded-lg transition-all duration-300 hover:transform hover:scale-105"
                    }
                >
                    <FontAwesomeIcon icon={faCogs} className='mr-4 text-xl' />
                    <span className='text-lg'>{t('navigation.skills')}</span>
                </NavLink>

                <NavLink
                    to='/my-projects'
                    className={({ isActive }) =>
                        isActive
                            ? "text-white font-bold flex items-center py-3 px-4 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm shadow-lg transform scale-105 border border-teal-400/30"
                            : "text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 flex items-center py-3 px-4 rounded-lg transition-all duration-300 hover:transform hover:scale-105"
                    }
                >
                    <FontAwesomeIcon icon={faProjectDiagram} className='mr-4 text-xl' />
                    <span className='text-lg'>{t('navigation.projects')}</span>
                </NavLink>

                <NavLink
                    to='/contact'
                    className={({ isActive }) =>
                        isActive
                            ? "text-white font-bold flex items-center py-3 px-4 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm shadow-lg transform scale-105 border border-teal-400/30"
                            : "text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 flex items-center py-3 px-4 rounded-lg transition-all duration-300 hover:transform hover:scale-105"
                    }
                >
                    <FontAwesomeIcon icon={faEnvelope} className='mr-4 text-xl' />
                    <span className='text-lg'>{t('navigation.contact')}</span>
                </NavLink>
            </nav>
        </div>
    );
}

export { SideBar };
