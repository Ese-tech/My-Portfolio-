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

export function NavBar() {
	return (
		<>
			{/* Mobile View */}
			<div className='md:hidden fixed top-0 left-0 w-full bg-gradient-to-r from-slate-800 to-slate-900 shadow-lg z-50'>
				<MobileView />
			</div>

			{/* Tablet View */}
			<div className='hidden md:flex lg:hidden fixed top-0 left-0 w-full h-16 bg-gradient-to-r from-slate-800 to-slate-900 shadow-lg z-50 text-white'>
				<nav className='flex flex-row justify-center items-center space-x-8 w-full p-4'>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive
								? "flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm font-bold border border-teal-400/30"
								: "flex items-center px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 transition-all duration-300"
						}
					>
						<FontAwesomeIcon icon={faHome} className='mr-2 text-lg' />
						<span>Home</span>
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
						<span>About Me</span>
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
						<span>Skills</span>
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
						<span>Projects</span>
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
						<span>Contact</span>
					</NavLink>
				</nav>
			</div>
		</>
	);
}
export default NavBar;
