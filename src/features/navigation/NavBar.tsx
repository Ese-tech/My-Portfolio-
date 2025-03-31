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
// Import SidebarContext

export function NavBar() {
	// const { toggleSidebar } = useSidebarContext(); // Use toggleSidebar from context

	return (
		<>
			{/* Tablet View */}
			<div className='hidden md:flex lg:hidden fixed top-0 left-0 w-full bg-gradient-to-r from-amber-600 to-yellow-500 shadow-lg z-50 font-bold text-xl'>
				<nav className='flex flex-row justify-center space-x-5 p-4'>
					<NavLink to='/' className='flex items-center'>
						<FontAwesomeIcon icon={faHome} className='mr-3 mb-2.5' />
						Home
					</NavLink>
					<NavLink to='/about-me' className='flex items-center'>
						<FontAwesomeIcon icon={faUser} className='mr-3 mb-2.5' />
						About Me
					</NavLink>
					<NavLink to='/my-projects' className='flex items-center'>
						<FontAwesomeIcon icon={faProjectDiagram} className='mr-3 mb-1.5' />
						My Projects
					</NavLink>
					<NavLink to='/contact' className='flex items-center'>
						<FontAwesomeIcon icon={faEnvelope} className='mr-3 mb-1.5' />
						Contact
					</NavLink>
					<NavLink to='/skills' className='flex items-center'>
						<FontAwesomeIcon icon={faCogs} className='mr-3 mb-2.5' />
						Skills
					</NavLink>
				</nav>
			</div>

			{/* Mobile View */}
			<MobileView />
		</>
	);
}
export default NavBar;
