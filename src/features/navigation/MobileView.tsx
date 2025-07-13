import {
	faBars,
	faTimes,
	faHome,
	faUser,
	faProjectDiagram,
	faEnvelope,
	faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";
import { useSidebarContext } from "./useSidebarContext";

function MobileView() {
	const { isSidebarOpen, toggleSidebar } = useSidebarContext();

	return (
		<>
			{/* Hamburger Menu Button */}
			<div className='flex justify-between items-center p-4'>
				<h3 className='text-xl font-bold bg-gradient-to-r from-teal-400 to-gold-400 bg-clip-text text-transparent'>Ese Osagie</h3>
				<button
					className='text-2xl text-white hover:text-teal-300 transition-colors duration-300'
					onClick={toggleSidebar}
				>
					<FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
				</button>
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
					<div className='fixed top-16 left-0 w-80 h-full bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl z-50 transform transition-transform duration-300'>
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
								<span className='text-lg'>Home</span>
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
								<span className='text-lg'>About Me</span>
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
								<span className='text-lg'>Skills</span>
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
								<span className='text-lg'>My Projects</span>
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
								<span className='text-lg'>Contact</span>
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
