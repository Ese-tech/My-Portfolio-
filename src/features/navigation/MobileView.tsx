import { faBars, faTimes, faHome, faUser, faProjectDiagram, faEnvelope, faCogs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router';
import { useSidebarContext } from './SidebarContext';


export function MobileView() {
	const { isSidebarOpen, toggleSidebar } = useSidebarContext();

	return (
		<div className='flex justify-between items-center p-5'>
			<button className='text-white text-2xl' onClick={toggleSidebar}>
				<FontAwesomeIcon
					icon={isSidebarOpen ? faTimes : faBars}
					className='text-amber-700'
				/>
			</button>
			<div className='absolute right-5 top-1/2 transform -translate-y-1/2 text-amber-600 text-sm'>
				<a href='mailto:example@example.com' className='block rotate-90'>
					example@example.com
				</a>
			</div>
			{isSidebarOpen && (
				<div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
					<nav className='bg-gradient-to-r from-amber-600 to-yellow-500 rounded-lg shadow-lg p-5 space-y-5'>
						<NavLink to='/' className='flex items-center text-white'>
							<FontAwesomeIcon icon={faHome} className='mr-3' />
							Home
						</NavLink>
						<NavLink to='/about-me' className='flex items-center text-white'>
							<FontAwesomeIcon icon={faUser} className='mr-3' />
							About Me
						</NavLink>
						<NavLink to='/my-projects' className='flex items-center text-white'>
							<FontAwesomeIcon icon={faProjectDiagram} className='mr-3' />
							My Projects
						</NavLink>
						<NavLink to='/contact' className='flex items-center text-white'>
							<FontAwesomeIcon icon={faEnvelope} className='mr-3' />
							Contact
						</NavLink>
						<NavLink to='/skills' className='flex items-center text-white'>
							<FontAwesomeIcon icon={faCogs} className='mr-3' />
							Skills
						</NavLink>
					</nav>
				</div>
			)}
		</div>
	);
}
