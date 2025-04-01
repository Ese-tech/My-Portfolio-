import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faUser,
	faProjectDiagram,
	faEnvelope,
	faCogs,
} from "@fortawesome/free-solid-svg-icons";

function SideBar() {
	return (
		<div className='hidden lg:block fixed left-0 top-0 h-full w-64 bg-dark-blue shadow-lg z-50 text-2xl font-bold text-white-gold'>
			<div className='flex justify-between items-center p-5 border-b border-white-gold'>
				<h2 className='text-4xl font-extrabold mt-10 mb-36 p-8'>Menu</h2>
			</div>
			<nav className='flex flex-col p-8 space-y-18'>
				<NavLink
					to='/'
					end
					className={({ isActive }) =>
						isActive
							? "text-white font-bold flex items-center"
							: "text-white-gold hover:text-white flex items-center"
					}
				>
					<FontAwesomeIcon icon={faHome} className='mr-3 mb-2.5' />
					Home
				</NavLink>
				<NavLink
					to='/about-me'
					end
					className={({ isActive }) =>
						isActive
							? "text-white font-bold flex items-center"
							: "text-white-gold hover:text-white flex items-center"
					}
				>
					<FontAwesomeIcon icon={faUser} className='mr-4.5 mb-2.5' />
					About Me
				</NavLink>
				<NavLink
					to='/my-projects'
					end
					className={({ isActive }) =>
						isActive
							? "text-white font-bold flex items-center"
							: "text-white-gold hover:text-white flex items-center"
					}
				>
					<FontAwesomeIcon icon={faProjectDiagram} className='mr-3 mb-1.5' />
					My Projects
				</NavLink>
				<NavLink
					to='/contact'
					end
					className={({ isActive }) =>
						isActive
							? "text-white font-bold flex items-center"
							: "text-white-gold hover:text-white flex items-center"
					}
				>
					<FontAwesomeIcon icon={faEnvelope} className='mr-3 mb-1.5' />
					Contact
				</NavLink>
				<NavLink
					to='/skills'
					end
					className={({ isActive }) =>
						isActive
							? "text-white font-bold flex items-center"
							: "text-white-gold hover:text-white flex items-center"
					}
				>
					<FontAwesomeIcon icon={faCogs} className='mr-3 mb-2.5' />
					Skills
				</NavLink>
			</nav>
		</div>
	);
}

export { SideBar };
