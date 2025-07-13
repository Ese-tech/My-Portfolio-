import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faUser,
	faProjectDiagram,
	faEnvelope,
	faCogs,
} from "@fortawesome/free-solid-svg-icons";
import MobileView from "./MobileView";
import { useLanguage } from "../../contexts/LanguageContext";

export function NavBar() {
	const { t } = useLanguage();

	return (
		<>
			{/* Mobile View */}
			<div className='md:hidden fixed top-0 left-0 w-full bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black shadow-lg z-50'>
				<MobileView />
			</div>

			{/* Tablet View */}
			<div className='hidden md:flex lg:hidden fixed top-0 left-0 w-full h-16 bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black shadow-lg z-50 text-white'>
				<nav className='flex flex-row justify-between items-center w-full p-4'>
					<div className='flex space-x-6'>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive
									? "flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm font-bold border border-teal-400/30"
									: "flex items-center px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 transition-all duration-300"
							}
						>
							<FontAwesomeIcon icon={faHome} className='mr-2 text-lg' />
							<span className='hidden xl:inline'>{t('home')}</span>
						</NavLink>

						<NavLink
							to='/about-me'
							className={({ isActive }) =>
								isActive
									? "flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm font-bold border border-teal-400/30"
									: "flex items-center px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 transition-all duration-300"
							}
						>
							<FontAwesomeIcon icon={faUser} className='mr-2 text-lg' />
							<span className='hidden xl:inline'>{t('aboutMe')}</span>
						</NavLink>

						<NavLink
							to='/skills'
							className={({ isActive }) =>
								isActive
									? "flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm font-bold border border-teal-400/30"
									: "flex items-center px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 transition-all duration-300"
							}
						>
							<FontAwesomeIcon icon={faCogs} className='mr-2 text-lg' />
							<span className='hidden xl:inline'>{t('skills')}</span>
						</NavLink>

						<NavLink
							to='/my-projects'
							className={({ isActive }) =>
								isActive
									? "flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm font-bold border border-teal-400/30"
									: "flex items-center px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 transition-all duration-300"
							}
						>
							<FontAwesomeIcon icon={faProjectDiagram} className='mr-2 text-lg' />
							<span className='hidden xl:inline'>{t('myProjects')}</span>
						</NavLink>

						<NavLink
							to='/contact'
							className={({ isActive }) =>
								isActive
									? "flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm font-bold border border-teal-400/30"
									: "flex items-center px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 transition-all duration-300"
							}
						>
							<FontAwesomeIcon icon={faEnvelope} className='mr-2 text-lg' />
							<span className='hidden xl:inline'>{t('contact')}</span>
						</NavLink>
					</div>
				</nav>
			</div>
		</>
	);
}
export default NavBar;
