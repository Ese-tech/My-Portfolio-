import { NavLink } from "react-router";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export function NavBar() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<div className='bg-gradient-to-r from-amber-600 to-yellow-500 border-2'>
			<div className='flex justify-between items-center p-5'>
				<h1 className='text-white font-bold text-xl'>My Portfolio</h1>
				<button
					className='text-white text-2xl md:hidden'
					onClick={toggleSidebar}
				>
					<FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
				</button>
			</div>
			<nav
				className={`${
					isSidebarOpen ? "flex" : "hidden"
				} flex-col md:flex md:flex-row md:space-x-15 p-5`}
			>
				<NavLink
					to='/'
					end
					className={({ isActive }) =>
						isActive
							? "text-gold-500 font-bold"
							: "text-zinc-300 hover:text-gold-500"
					}
				>
					Home
				</NavLink>
				<NavLink
					to='/about-me'
					end
					className='text-zinc-300 hover:text-gold-500'
				>
					About Me
				</NavLink>
				<NavLink
					to='/my-projects'
					end
					className='text-zinc-300 hover:text-gold-500'
				>
					My Projects
				</NavLink>
				<NavLink
					to='/contact'
					end
					className='text-zinc-300 hover:text-gold-500'
				>
					Contact
				</NavLink>
				<NavLink to='/skills' end className='text-zinc-300 hover:text-gold-500'>
					Skills
				</NavLink>
			</nav>
		</div>
	);
}
