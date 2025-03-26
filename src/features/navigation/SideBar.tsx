import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faUser,
	faProjectDiagram,
	faEnvelope,
	faCogs,
} from "@fortawesome/free-solid-svg-icons";

 function SideBar({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) {
	return (
		<div
			className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-r from-amber-600 to-yellow-500 transform ${
				isOpen ? "translate-x-0" : "-translate-x-full"
			} transition-transform duration-300 ease-in-out md:hidden`}
		>
			<div className='flex justify-between items-center p-5'>
				<h2 className='text-white font-bold text-xl'>Menu</h2>
				<button className='text-white text-2xl' onClick={onClose}>
					&times;
				</button>
			</div>
			<nav className='flex flex-col space-y-5 p-5'>
				<NavLink
					to='/'
					end
					className={({ isActive }) =>
						isActive
							? "text-gold-500 font-bold flex items-center"
							: "text-zinc-600 hover:text-gold-500 flex items-center"
					}
				>
					<FontAwesomeIcon icon={faHome} className='mr-3' />
					Home
				</NavLink>
				<NavLink
					to='/about-me'
					end
					className='text-zinc-300 hover:text-gold-500 flex items-center'
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