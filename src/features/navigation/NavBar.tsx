import { NavLink } from "react-router";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { SideBar } from "./SideBar";
import {
	faLinkedin,
	faFacebook,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export function NavBar() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<>
			{/* Smartphone View */}
			<div className='flex justify-center p-5 '>
				<button className='text-white text-2xl' onClick={toggleSidebar}>
					<FontAwesomeIcon
						icon={isSidebarOpen ? faTimes : faBars}
						className='text-amber-700'
					/>
				</button>
			</div>
			{/* <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} /> */}

			{/* Tablet View */}
			<div className='hidden md:flex lg:hidden justify-center bg-gradient-to-r from-amber-600 to-yellow-500 rounded-lg shadow-lg'>
				<nav className='flex flex-row space-x-5 p-4 '>
					<NavLink
						to='/'
						end
						className={({ isActive }) =>
							isActive
								? "text-amber-700 font-bold"
								: "text-zinc-500 hover:text-gold-500"
						}
					>
						Home
					</NavLink>
					<NavLink
						to='/about-me'
						end
						className={({ isActive }) =>
							isActive
								? "text-amber-700 font-bold"
								: "text-zinc-500 hover:text-gold-500"
						}
					>
						About Me
					</NavLink>
					<NavLink
						to='/my-projects'
						end
						className={({ isActive }) =>
							isActive
								? "text-amber-700 font-bold"
								: "text-zinc-500 hover:text-gold-500"
						}
					>
						My Projects
					</NavLink>
					<NavLink
						to='/contact'
						end
						className={({ isActive }) =>
							isActive
								? "text-amber-700 font-bold"
								: "text-zinc-500 hover:text-gold-500"
						}
					>
						Contact
					</NavLink>
					<NavLink
						to='/skills'
						end
						className={({ isActive }) =>
							isActive
								? "text-amber-700 font-bold"
								: "text-zinc-500 hover:text-gold-500"
						}
					>
						Skills
					</NavLink>
				</nav>
				<div className='flex justify-around mt-auto p-5'>
					<a href='#' className='text-white hover:text-gold-500'>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a href='#' className='text-white hover:text-gold-500'>
						<FontAwesomeIcon icon={faFacebook} />
					</a>
					<a href='#' className='text-white hover:text-gold-500'>
						<FontAwesomeIcon icon={faTwitter} />
					</a>
				</div>
			</div>

			{/* Desktop View */}
			<div className='hidden lg:flex justify-center bg-gradient-to-r from-amber-600 to-yellow-500 rounded-lg shadow-lg'>
				<nav className='flex flex-row space-x-10 p-6'>
					<NavLink
						to='/'
						end
						className={({ isActive }) =>
							isActive
								? "text-amber-700 font-bold"
								: "text-zinc-500 hover:text-gold-500"
						}
					>
						Home
					</NavLink>
					<NavLink
						to='/about-me'
						end
						className={({ isActive }) =>
							isActive
								? "text-amber-700 font-bold"
								: "text-zinc-500 hover:text-gold-500"
						}
					>
						About Me
					</NavLink>
					<NavLink
						to='/my-projects'
						end
						className={({ isActive }) =>
							isActive
								? "text-amber-700 font-bold"
								: "text-zinc-500 hover:text-gold-500"
						}
					>
						My Projects
					</NavLink>
					<NavLink
						to='/contact'
						end
						className={({ isActive }) =>
							isActive
								? "text-amber-700 font-bold"
								: "text-zinc-500 hover:text-gold-500"
						}
					>
						Contact
					</NavLink>
					<NavLink
						to='/skills'
						end
						className={({ isActive }) =>
							isActive
								? "text-amber-700 font-bold"
								: "text-zinc-500 hover:text-gold-500"
						}
					>
						Skills
					</NavLink>
				</nav>
				<div className='flex justify-around mt-auto p-5'>
					<a href='#' className='text-white hover:text-gold-500'>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a href='#' className='text-white hover:text-gold-500'>
						<FontAwesomeIcon icon={faFacebook} />
					</a>
					<a href='#' className='text-white hover:text-gold-500'>
						<FontAwesomeIcon icon={faTwitter} />
					</a>
				</div>
			</div>
		</>
	);
}
