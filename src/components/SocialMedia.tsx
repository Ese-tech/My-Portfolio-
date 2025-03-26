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
			<div className='hidden md:flex flex-col items-center space-y-12 font-extrabold  fixed right-4 bottom-24 pr-12'>
				<a
					href='https://linkedin.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon
						icon={faLinkedin}
						className='text-blue-700 text-4xl'
					/>
				</a>
				<a href='https://github.com' target='_blank' rel='noopener noreferrer'>
					<FontAwesomeIcon icon={faGithub} className='text-blue-500 text-4xl' />
				</a>
				<a
					href='https://facebook.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon
						icon={faFacebook}
						className='text-blue-700 text-4xl'
					/>
				</a>
				<a href='https://slack.com' target='_blank' rel='noopener noreferrer'>
					<FontAwesomeIcon icon={faSlack} className='text-green-500 text-4xl' />
				</a>
				{/* Updated email alignment */}
				<a
					href='mailto:example@example.com'
					className='text-amber-700 text-2xl'
					style={{
						writingMode: "vertical-rl",
						
					}}
				>
					example@example.com
				</a>
			</div>

			{/* Mobile View */}
			<div className='fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-center space-x-4 md:hidden'>
				<a
					href='https://linkedin.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon
						icon={faLinkedin}
						className='text-blue-700 text-xl'
					/>
				</a>
				<a href='https://github.com' target='_blank' rel='noopener noreferrer'>
					<FontAwesomeIcon icon={faGithub} className='text-blue-500 text-xl' />
				</a>
				<a
					href='https://facebook.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon
						icon={faFacebook}
						className='text-blue-700 text-xl'
					/>
				</a>
				<a href='https://slack.com' target='_blank' rel='noopener noreferrer'>
					<FontAwesomeIcon icon={faSlack} className='text-green-500 text-xl' />
				</a>
				<a href='mailto:example@example.com' className='text-amber-700 text-xl'>
					example@example.com
				</a>
			</div>
		</div>
	);
}
export default SocialMedia;
