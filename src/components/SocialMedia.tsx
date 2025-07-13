import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faFacebook,
	faGithub,
	faSlack,
} from "@fortawesome/free-brands-svg-icons";

function SocialMedia() {
	return (
		<div>
			{/* Desktop View */}
			<div className='hidden lg:flex flex-col items-center space-y-6 font-extrabold fixed right-4 top-1/2 transform -translate-y-1/2 z-10'>
				<a
					href='https://linkedin.com'
					target='_blank'
					rel='noopener noreferrer'
					className="text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors duration-300"
				>
					<FontAwesomeIcon
						icon={faLinkedin}
						className='text-3xl'
					/>
				</a>
				<a 
					href='https://github.com' 
					target='_blank' 
					rel='noopener noreferrer'
					className="text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors duration-300"
				>
					<FontAwesomeIcon icon={faGithub} className='text-3xl' />
				</a>
				<a
					href='https://facebook.com'
					target='_blank'
					rel='noopener noreferrer'
					className="text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors duration-300"
				>
					<FontAwesomeIcon
						icon={faFacebook}
						className='text-3xl'
					/>
				</a>
				<a 
					href='https://slack.com' 
					target='_blank' 
					rel='noopener noreferrer'
					className="text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors duration-300"
				>
					<FontAwesomeIcon
						icon={faSlack}
						className='text-3xl'
					/>
				</a>
				{/* Updated email alignment */}
				<a
					href='mailto:example@example.com'
					className='text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors duration-300 text-sm'
					style={{
						writingMode: "vertical-rl",
					}}
				>
					example@example.com
				</a>
			</div>

			{/* Tablet View - Hidden on desktop and mobile */}
			<div className='hidden md:flex lg:hidden flex-row justify-center space-x-8 fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-slate-200 dark:border-slate-700 z-10'>
				<a
					href='https://linkedin.com'
					target='_blank'
					rel='noopener noreferrer'
					className="text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 transition-colors duration-300"
				>
					<FontAwesomeIcon
						icon={faLinkedin}
						className='text-2xl'
					/>
				</a>
				<a 
					href='https://github.com' 
					target='_blank' 
					rel='noopener noreferrer'
					className="text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 transition-colors duration-300"
				>
					<FontAwesomeIcon icon={faGithub} className='text-2xl' />
				</a>
				<a
					href='https://facebook.com'
					target='_blank'
					rel='noopener noreferrer'
					className="text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 transition-colors duration-300"
				>
					<FontAwesomeIcon
						icon={faFacebook}
						className='text-2xl'
					/>
				</a>
				<a 
					href='https://slack.com' 
					target='_blank' 
					rel='noopener noreferrer'
					className="text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 transition-colors duration-300"
				>
					<FontAwesomeIcon icon={faSlack} className='text-2xl' />
				</a>
				<a
					href='mailto:example@example.com'
					className='text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 transition-colors duration-300 text-xl'
				>
					✉
				</a>
			</div>

			{/* Mobile View */}
			<div className='fixed bottom-0 left-0 w-full bg-slate-800 dark:bg-slate-900 text-white p-4 flex justify-center space-x-6 md:hidden z-10'>
				<a
					href='https://linkedin.com'
					target='_blank'
					rel='noopener noreferrer'
					className="text-gray-300 hover:text-yellow-400 dark:text-gray-200 dark:hover:text-teal-400 transition-colors duration-300"
				>
					<FontAwesomeIcon
						icon={faLinkedin}
						className='text-xl'
					/>
				</a>
				<a 
					href='https://github.com' 
					target='_blank' 
					rel='noopener noreferrer'
					className="text-gray-300 hover:text-yellow-400 dark:text-gray-200 dark:hover:text-teal-400 transition-colors duration-300"
				>
					<FontAwesomeIcon icon={faGithub} className='text-xl' />
				</a>
				<a
					href='https://facebook.com'
					target='_blank'
					rel='noopener noreferrer'
					className="text-gray-300 hover:text-yellow-400 dark:text-gray-200 dark:hover:text-teal-400 transition-colors duration-300"
				>
					<FontAwesomeIcon
						icon={faFacebook}
						className='text-xl'
					/>
				</a>
				<a 
					href='https://slack.com' 
					target='_blank' 
					rel='noopener noreferrer'
					className="text-gray-300 hover:text-yellow-400 dark:text-gray-200 dark:hover:text-teal-400 transition-colors duration-300"
				>
					<FontAwesomeIcon icon={faSlack} className='text-xl' />
				</a>
				<a
					href='mailto:example@example.com'
					className='text-gray-300 hover:text-yellow-400 dark:text-gray-200 dark:hover:text-teal-400 transition-colors duration-300 text-lg'
				>
					✉
				</a>
			</div>
		</div>
	);
}
export default SocialMedia;
