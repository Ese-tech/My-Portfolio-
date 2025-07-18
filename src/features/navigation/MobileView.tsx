import {
    faBars,
    faTimes,
    faHome,
    faUser,
    faProjectDiagram,
    faEnvelope,
    faCogs,
    faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";
import { useSidebarContext } from "./useSidebarContext";
import { useLanguage } from "../../contexts/LanguageContext";
import ROUTES_PATHS from "../routing/Routes_Paths";
import { ThemeToggle } from "../../components/ThemeToggle";
import { LanguageSelector } from "../../components/LanguageSelector";

function MobileView() {
    const { isSidebarOpen, toggleSidebar } = useSidebarContext();
    const { t } = useLanguage();

    return (
        <>
            {/* Header mit Theme und Language Controls */}
            <div className='flex justify-between items-center p-4'>
                <h2 className='text-2xl font-extrabold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg'>Ese Osagie</h2>
                
                {/* Controls und Hamburger */}
                <div className="flex items-center space-x-3">
                    <ThemeToggle />
                    <LanguageSelector />
                    <button
                        className='text-2xl text-white hover:text-teal-300 transition-colors duration-300 ml-2'
                        onClick={toggleSidebar}
                    >
                        <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40'
                        onClick={toggleSidebar}
                    ></div>

                    {/* Sidebar */}
                    <div className='fixed top-16 left-0 w-80 h-full bg-gradient-to-b from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black shadow-2xl z-50 transform transition-transform duration-300'>
                        <nav className='flex flex-col p-6 space-y-4 mt-8'>
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-white font-bold flex items-center py-3 px-4 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm shadow-lg border border-teal-400/30"
                                        : "text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 flex items-center py-3 px-4 rounded-lg transition-all duration-300"
                                }
                                onClick={toggleSidebar}
                            >
                                <FontAwesomeIcon icon={faHome} className='mr-4 text-xl' />
                                <span className='text-lg'>{t('navigation.home')}</span>
                            </NavLink>

                            <NavLink
                                to='/about-me'
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-white font-bold flex items-center py-3 px-4 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm shadow-lg border border-teal-400/30"
                                        : "text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 flex items-center py-3 px-4 rounded-lg transition-all duration-300"
                                }
                                onClick={toggleSidebar}
                            >
                                <FontAwesomeIcon icon={faUser} className='mr-4 text-xl' />
                                <span className='text-lg'>{t('navigation.about')}</span>
                            </NavLink>

                            <NavLink
                                to='/skills'
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-white font-bold flex items-center py-3 px-4 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm shadow-lg border border-teal-400/30"
                                        : "text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 flex items-center py-3 px-4 rounded-lg transition-all duration-300"
                                }
                                onClick={toggleSidebar}
                            >
                                <FontAwesomeIcon icon={faCogs} className='mr-4 text-xl' />
                                <span className='text-lg'>{t('navigation.skills')}</span>
                            </NavLink>

                            <NavLink
                                to='/my-projects'
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-white font-bold flex items-center py-3 px-4 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm shadow-lg border border-teal-400/30"
                                        : "text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 flex items-center py-3 px-4 rounded-lg transition-all duration-300"
                                }
                                onClick={toggleSidebar}
                            >
                                <FontAwesomeIcon icon={faProjectDiagram} className='mr-4 text-xl' />
                                <span className='text-lg'>{t('navigation.projects')}</span>
                            </NavLink>

                            <NavLink
                                to='/contact'
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-white font-bold flex items-center py-3 px-4 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm shadow-lg border border-teal-400/30"
                                        : "text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 flex items-center py-3 px-4 rounded-lg transition-all duration-300"
                                }
                                onClick={toggleSidebar}
                            >
                                <FontAwesomeIcon icon={faEnvelope} className='mr-4 text-xl' />
                                <span className='text-lg'>{t('navigation.contact')}</span>
                            </NavLink>

                            <NavLink
                                to={ROUTES_PATHS.SETTINGS}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-white font-bold flex items-center py-3 px-4 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm shadow-lg border border-teal-400/30"
                                        : "text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 flex items-center py-3 px-4 rounded-lg transition-all duration-300"
                                }
                                onClick={toggleSidebar}
                            >
                                <FontAwesomeIcon icon={faGear} className='mr-4 text-xl' />
                                <span className='text-lg'>{t('navigation.settings')}</span>
                            </NavLink>
                        </nav>

                        {/* Footer */}
                        <div className='absolute bottom-8 left-0 right-0 px-6'>
                            <div className='text-center text-white/60 text-sm'>
                                <p>© 2025 Ese Osagie</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default MobileView;