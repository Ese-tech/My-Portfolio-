import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faDownload, 
  faEye, 
  faCode, 
  faUser,
  faEnvelope 
} from "@fortawesome/free-solid-svg-icons";
import ROUTES_PATHS from "../features/routing/Routes_Paths";

function HomeContent() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        
        {/* Hero Section */}
        <div className="mb-12">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/assets/image/profile-placeholder.jpg" 
                alt="Your Name" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.src = "https://via.placeholder.com/300x300/e9dbaf/52576b?text=YN";
                }}
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="text-white-gold">Hi, I'm </span>
            <span className="text-amber-700">Your Name</span>
          </h1>

          {/* Tagline */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-700 mb-6">
            Full Stack Developer & Creative Problem Solver
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate about creating exceptional digital experiences through modern web technologies. 
            I specialize in React, TypeScript, and Node.js, turning ideas into responsive, 
            user-friendly applications.
          </p>

          {/* Skills Highlight */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          
          {/* Primary CTA - View Projects */}
          <Link 
            to={ROUTES_PATHS.MY_PROJECTS}
            className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faEye} className="mr-3 group-hover:animate-pulse" />
            View My Projects
          </Link>

          {/* Secondary CTA - About Me */}
          <Link 
            to={ROUTES_PATHS.ABOUT_ME}
            className="group border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faUser} className="mr-3" />
            About Me
          </Link>

          {/* Tertiary CTA - Download CV */}
          <a 
            href="/assets/cv/your-cv.pdf" 
            download
            className="group bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-3 group-hover:animate-bounce" />
            Download CV
          </a>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-amber-600 mb-2">10+</div>
            <div className="text-gray-600 font-medium">Projects</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
            <div className="text-gray-600 font-medium">Technologies</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-amber-600 mb-2">1+</div>
            <div className="text-gray-600 font-medium">Years Learning</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Passion</div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Let's Work Together!
          </h3>
          <p className="text-gray-600 mb-6">
            I'm always interested in new opportunities and exciting projects.
          </p>
          <Link 
            to={ROUTES_PATHS.CONTACT}
            className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Get In Touch
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12">
          <div className="animate-bounce">
            <FontAwesomeIcon 
              icon={faCode} 
              className="text-2xl text-amber-500"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Explore my work below
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;