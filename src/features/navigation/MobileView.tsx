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
import { useSidebarContext } from "../navigation/useSidebarContext"; // Corrected path

function MobileView() {
	const { isSidebarOpen, toggleSidebar } = useSidebarContext();

	return (
		<div className='flex justify-between items-center p-5 md:hidden'>
			<button className='text-2xl' onClick={toggleSidebar}>
				<FontAwesomeIcon
					icon={isSidebarOpen ? faTimes : faBars}
					className='text-amber-700'
				/>
			</button>

			{isSidebarOpen && (
				<div className='fixed inset-8 bottom-7/12 flex justify-start items-center z-50 font-bold '>
					<nav className='bg-gradient-to-r from-amber-600 to-yellow-500 rounded-lg shadow-lg p-5 space-y-5'>
						<NavLink to='/' className='flex items-center '>
							<FontAwesomeIcon icon={faHome} className='mr-3' />
							Home
						</NavLink>
						<NavLink to='/about-me' className='flex items-center '>
							<FontAwesomeIcon icon={faUser} className='mr-3' />
							About Me
						</NavLink>
						<NavLink to='/my-projects' className='flex items-center '>
							<FontAwesomeIcon icon={faProjectDiagram} className='mr-3' />
							My Projects
						</NavLink>
						<NavLink to='/contact' className='flex items-center '>
							<FontAwesomeIcon icon={faEnvelope} className='mr-3' />
							Contact
						</NavLink>
						<NavLink to='/skills' className='flex items-center '>
							<FontAwesomeIcon icon={faCogs} className='mr-3' />
							Skills
						</NavLink>
					</nav>
				</div>
			)}
		</div>
	);
}
export default MobileView;
