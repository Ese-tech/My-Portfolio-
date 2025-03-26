import { NavLink } from "react-router";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faUser,
	faProjectDiagram,
	faEnvelope,
	faCogs,
} from "@fortawesome/free-solid-svg-icons";
	


export function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{/* Tablet View */}
			<div className='hidden md:flex lg:hidden justify-center bg-gradient-to-r from-amber-600 to-yellow-500 rounded-lg shadow-lg'>
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

			{/* Example usage of isOpen */}
			<div className='md:hidden'>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='p-2 bg-yellow-500 rounded-lg shadow-md'
				>
					{isOpen ? "Close Menu" : "Open Menu"}
				</button>
				{isOpen && (
					<nav className='flex flex-col space-y-3 p-4 bg-yellow-200 rounded-lg shadow-lg'>
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
				)}
			</div>
		</>
	);
}
export default NavBar;
