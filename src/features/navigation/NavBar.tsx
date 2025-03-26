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
			<div className='hidden md:flex lg:hidden justify-center bg-gradient-to-r from-amber-600 to-yellow-500 shadow-lg border-red-600 border-2 -mt-5 font-bold text-xl'>
				<nav className='flex flex-row space-x-5 p-4'>
					<NavLink to='/' className='flex items-center'>
						<FontAwesomeIcon icon={faHome} className='mr-2' />
						Home
					</NavLink>
					<NavLink to='/about-me' className='flex items-center'>
						<FontAwesomeIcon icon={faUser} className='mr-2' />
						About Me
					</NavLink>
					<NavLink to='/my-projects' className='flex items-center'>
						<FontAwesomeIcon icon={faProjectDiagram} className='mr-2' />
						My Projects
					</NavLink>
					<NavLink to='/contact' className='flex items-center'>
						<FontAwesomeIcon icon={faEnvelope} className='mr-2' />
						Contact
					</NavLink>
					<NavLink to='/skills' className='flex items-center'>
						<FontAwesomeIcon icon={faCogs} className='mr-2' />
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
