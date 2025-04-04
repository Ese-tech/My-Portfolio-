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
			<div className='navb hidden md:flex lg:hidden fixed top-0 left-0 w-full h-16 bg-slate-600 shadow-lg z-50 font-bold text-xl text-white-gold pl-28'>
				<nav className='flex flex-row space-x-5 p-4'>
					<NavLink to='/' className='flex items-center hover:text-white'>
						<FontAwesomeIcon
							icon={faHome}
							className='mr-3 mb-2.5 icon-white-gold'
						/>
						<span className='text-white-gold'>Home</span>
					</NavLink>
					<NavLink
						to='/about-me'
						className='flex items-center hover:text-white'
					>
						<FontAwesomeIcon
							icon={faUser}
							className='mr-3 mb-2.5 icon-white-gold'
						/>
						<span className='text-white-gold'>About Me</span>
					</NavLink>
					<NavLink
						to='/my-projects'
						className='flex items-center hover:text-white'
					>
						<FontAwesomeIcon
							icon={faProjectDiagram}
							className='mr-3 mb-1.5 icon-white-gold'
						/>
						<span className='text-white-gold'>My Projects</span>
					</NavLink>
					<NavLink to='/contact' className='flex items-center hover:text-white'>
						<FontAwesomeIcon
							icon={faEnvelope}
							className='mr-3 mb-1.5 icon-white-gold'
						/>
						<span className='text-white-gold'>Contact</span>
					</NavLink>
					<NavLink to='/skills' className='flex items-center hover:text-white'>
						<FontAwesomeIcon
							icon={faCogs}
							className='mr-3 mb-2.5 icon-white-gold'
						/>
						<span className='text-white-gold'>Skills</span>
					</NavLink>
				</nav>
			</div>

			{/* Mobile View */}
			<MobileView />
		</>
	);
}
export default NavBar;
