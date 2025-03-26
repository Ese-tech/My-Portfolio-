import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faSlack,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className="flex justify-center mt-5 relative">
      <div className="absolute left-5 mt-96  transform -translate-y-1/2 flex flex-col items-center space-y-2 text-3xl">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 text-xl" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-blue-500 text-xl" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-xl" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="text-blue-700 text-xl" />
        </a>
        <a href="https://slack.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSlack} className="text-green-500 text-xl" />
        </a>
        <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSnapchat} className="text-yellow-500 text-xl" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-xl" />
        </a>
       
      </div>
     
      <div className="absolute mt-96 right-5">
        <a href="mailto:example@example.com" className="block rotate-90 text-amber-700 text-2xl">
          example@example.com
        </a>
        
      </div>
      {/* <h1 className="text-amber-700 font-bold text-xl ">My Portfolio</h1> */}
    </div>
  );
}

export default Home;
