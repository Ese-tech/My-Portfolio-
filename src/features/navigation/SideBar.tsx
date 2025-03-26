import { NavLink } from "react-router"; // Fixed import
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
		<div className='hidden lg:block fixed top-0 left-0 h-full w-64 bg-gradient-to-r from-amber-600 to-yellow-500 shadow-lg z-50 text-2xl font-bold'>
			<div className='flex justify-between items-center p-5'>
				<h2 className='text-white text-3xl font-extrabold'>Menu</h2>
			</div>
			<nav className='flex flex-col space-y-5 p-5'>
				<NavLink
					to='/'
					end
					className={({ isActive }) =>
						isActive
							? "text-gold-500 font-bold flex items-center"
							: "text-white hover:text-gold-500 flex items-center"
					}
				>
					<FontAwesomeIcon icon={faHome} className='mr-3' />
					Home
				</NavLink>
				<NavLink
					to='/about-me'
					end
					className='text-white hover:text-gold-500 flex items-center'
				>
					<FontAwesomeIcon icon={faUser} className='mr-3' />
					About Me
				</NavLink>
				<NavLink
					to='/my-projects'
					end
					className='text-zinc-300 hover:text-gold-500 flex items-center'
				>
					<FontAwesomeIcon icon={faProjectDiagram} className='mr-3' />
					My Projects
				</NavLink>
				<NavLink
					to='/contact'
					end
					className='text-zinc-300 hover:text-gold-500 flex items-center'
				>
					<FontAwesomeIcon icon={faEnvelope} className='mr-3' />
					Contact
				</NavLink>
				<NavLink
					to='/skills'
					end
					className='text-zinc-300 hover:text-gold-500 flex items-center'
				>
					<FontAwesomeIcon icon={faCogs} className='mr-3' />
					Skills
				</NavLink>
			</nav>
		</div>
	);
}

export { SideBar };
