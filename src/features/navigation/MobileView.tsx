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
		<div className='fixed top-0 left-0 w-full z-50 bg-white shadow-md md:hidden'>
			{/* Hamburger Menu Button */}
			<div className='flex justify-between items-center p-5'>
				{/* Move the button to the right */}
				<div className='ml-auto'>
					<button className='text-2xl' onClick={toggleSidebar}>
						<FontAwesomeIcon
							icon={isSidebarOpen ? faTimes : faBars}
							className='text-amber-700'
						/>
					</button>
				</div>
			</div>

			{/* Sidebar Overlay */}
			{isSidebarOpen && (
				<div className='fixed inset-0 z-40 bg-opacity-50'>
					{/* Sidebar Navigation */}
					<div className='fixed top-0 right-0 w-3/4 bg-dark-blue shadow-lg p-5 z-50 text-white-gold'>
						<nav className='space-y-5'>
							<NavLink
								to='/'
								className='flex items-center font-bold hover:text-white'
								onClick={toggleSidebar}
							>
								<FontAwesomeIcon icon={faHome} className='mr-3' />
								Home
							</NavLink>
							<NavLink
								to='/about-me'
								className='flex items-center font-bold hover:text-white'
								onClick={toggleSidebar}
							>
								<FontAwesomeIcon icon={faUser} className='mr-3' />
								About Me
							</NavLink>
							<NavLink
								to='/my-projects'
								className='flex items-center font-bold hover:text-white'
								onClick={toggleSidebar}
							>
								<FontAwesomeIcon icon={faProjectDiagram} className='mr-3' />
								My Projects
							</NavLink>
							<NavLink
								to='/contact'
								className='flex items-center font-bold hover:text-white'
								onClick={toggleSidebar}
							>
								<FontAwesomeIcon icon={faEnvelope} className='mr-3' />
								Contact
							</NavLink>
							<NavLink
								to='/skills'
								className='flex items-center font-bold hover:text-white'
								onClick={toggleSidebar}
							>
								<FontAwesomeIcon icon={faCogs} className='mr-3' />
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
