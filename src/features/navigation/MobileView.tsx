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
		<div className='navb fixed top-0 left-0 w-full h-16 z-50 shadow-md md:hidden'>
			{/* Hamburger Menu Button */}
			<div className='flex justify-between items-center p-5'>
				<div className='ml-auto'>
					<button className='text-3xl' onClick={toggleSidebar}>
						<FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
					</button>
				</div>
			</div>

			{/* Sidebar Overlay */}
			{isSidebarOpen && (
				<div className='nav1 fixed inset-0 z-40 bg-opacity-50'>
					{/* Sidebar Navigation */}
					<div className='navb fixed top-20 left-0 w-3/4 shadow-lg p-5 text-white-gold'>
						<nav className='space-y-5'>
							<NavLink
								to='/'
								className='flex items-center nav-item'
								onClick={toggleSidebar}
							>
								<FontAwesomeIcon icon={faHome} className='mr-3 ' />
								Home
							</NavLink>
							<NavLink
								to='/about-me'
								className='flex items-center nav-item'
								onClick={toggleSidebar}
							>
								<FontAwesomeIcon icon={faUser} className='mr-3 ' />
								About Me
							</NavLink>
							<NavLink
								to='/my-projects'
								className='flex items-center nav-item'
								onClick={toggleSidebar}
							>
								<FontAwesomeIcon icon={faProjectDiagram} className='mr-3 ' />
								My Projects
							</NavLink>
							<NavLink
								to='/contact'
								className='flex items-center nav-item'
								onClick={toggleSidebar}
							>
								<FontAwesomeIcon icon={faEnvelope} className='mr-3 ' />
								Contact
							</NavLink>
							<NavLink
								to='/skills'
								className='flex items-center nav-item'
								onClick={toggleSidebar}
							>
								<FontAwesomeIcon icon={faCogs} className='mr-3 ' />
								Skills
							</NavLink>
						</nav>
					</div>
				</div>
			)}
		</div>
	);
}

export default MobileView;
