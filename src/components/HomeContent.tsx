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
import profileImage from "../assets/image/ese_foto.jpg";
import { useLanguage } from "../contexts/LanguageContext";

function HomeContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-5xl mx-auto text-center animate-fade-in">
        
        {/* Hero Section */}
        <div className="mb-16">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-teal-400 hover:border-gold-400 transition-all duration-500 hover:scale-105 dark:shadow-slate-900/50">
              <img 
                src={profileImage}
                alt="Ese Osagie" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/300x300/1abc9c/2c3e50?text=EO";
                }}
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="text-slate-700 dark:text-slate-300 block sm:inline">Hi, I'm </span>
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent hover:from-teal-500 hover:to-blue-500 transition-all duration-300">Ese Osagie</span>
          </h1>

          {/* Tagline */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-600 dark:text-slate-400 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t('fullStackDeveloper')}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed px-4">
            {t('welcomeMessage')}
          </p>

          {/* Skills Highlight */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 px-4">
            {['React', 'TypeScript', 'Node.js', 'MongoDB', 'Bun', 'Vite', 'Tailwind CSS'].map((skill) => (
              <span 
                key={skill}
                className="px-5 py-3 bg-gradient-to-r from-slate-100 to-slate-200 hover:from-teal-100 hover:to-blue-100 dark:from-slate-700 dark:to-slate-800 dark:hover:from-teal-800 dark:hover:to-blue-800 text-slate-700 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-200 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-slate-300 hover:border-teal-400 dark:border-slate-600 dark:hover:border-teal-500"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 px-4">
          
          {/* Primary CTA - View Projects */}
          <Link 
            to={ROUTES_PATHS.MY_PROJECTS}
            className="w-full sm:w-auto group bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 dark:from-slate-600 dark:to-slate-700 dark:hover:from-slate-700 dark:hover:to-slate-800 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
          >
            <FontAwesomeIcon icon={faEye} className="mr-3 group-hover:animate-pulse" />
            {t('exploreWork')}
          </Link>

          {/* Secondary CTA - About Me */}
          <Link 
            to={ROUTES_PATHS.ABOUT_ME}
            className="w-full sm:w-auto group border-2 border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500 hover:text-white dark:hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
          >
            <FontAwesomeIcon icon={faUser} className="mr-3" />
            {t('aboutMe')}
          </Link>

          {/* Tertiary CTA - Download CV */}
          <a 
            href="/assets/cv/ese-osagie-cv.pdf" 
            download
            className="w-full sm:w-auto group bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-3 group-hover:animate-bounce" />
            Download CV
          </a>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16 px-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-slate-600 hover:border-teal-500">
            <div className="text-2xl lg:text-3xl font-bold text-teal-400 mb-2">10+</div>
            <div className="text-slate-300 font-medium text-sm lg:text-base">Projects</div>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-slate-600 hover:border-blue-500">
            <div className="text-2xl lg:text-3xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-slate-300 font-medium text-sm lg:text-base">Technologies</div>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-slate-600 hover:border-gold-500">
            <div className="text-2xl lg:text-3xl font-bold text-gold-400 mb-2">1+</div>
            <div className="text-slate-300 font-medium text-sm lg:text-base">Years Learning</div>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-slate-600 hover:border-emerald-500">
            <div className="text-2xl lg:text-3xl font-bold text-emerald-400 mb-2">100%</div>
            <div className="text-slate-300 font-medium text-sm lg:text-base">Passion</div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-300 transform hover:-translate-y-1 mx-4 border border-slate-600 hover:border-teal-500 dark:border-slate-500 dark:hover:border-teal-400">
          <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Let's Work Together!
          </h3>
          <p className="text-slate-300 dark:text-slate-200 mb-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
          </p>
          <Link 
            to={ROUTES_PATHS.CONTACT}
            className="inline-flex items-center bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            {t('getInTouch')}
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16">
          <div className="animate-bounce">
            <FontAwesomeIcon 
              icon={faCode} 
              className="text-2xl text-teal-500 hover:text-teal-400 transition-colors duration-300"
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Explore my work below
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;