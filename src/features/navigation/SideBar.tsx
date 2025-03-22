import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faFacebook,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export function SideBar({
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
	);
}
