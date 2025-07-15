import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGraduationCap,
  faCode,
  faHeart,
  faMapMarkerAlt,
  faCalendarAlt,
  faLightbulb,
  faRocket,
  faDownload
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../contexts/LanguageContext";
import profileImage from "../assets/image/ese_foto.jpg";

function AboutMeContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-800 transition-colors py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-teal-400 hover:border-gold-400 transition-all duration-500 hover:scale-105 mb-8">
            <img 
              src={profileImage}
              alt="Ese Osagie" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/300x300/1abc9c/2c3e50?text=EO";
              }}
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              {t('about.title')}
            </span>
          </h1>

          <p className="text-xl font-bold text-slate-400 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Personal Info Card */}
          <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-500">
            <div className="flex items-center mb-6">
              <FontAwesomeIcon icon={faUser} className="text-2xl text-teal-500 mr-4" />
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                {t('about.personal.title')}
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-teal-500 mr-3 w-5" />
                <span className="text-slate-700 dark:text-slate-300">
                  <strong>Location:</strong> {t('about.personal.location')}
                </span>
              </div>
              
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-teal-500 mr-3 w-5" />
                <span className="text-slate-700 dark:text-slate-300">
                  <strong>Age:</strong> {t('about.personal.age')}
                </span>
              </div>
              
              <div className="flex items-center">
                <FontAwesomeIcon icon={faGraduationCap} className="text-teal-500 mr-3 w-5" />
                <span className="text-slate-700 dark:text-slate-300">
                  <strong>Education:</strong> {t('about.personal.education')}
                </span>
              </div>
              
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCode} className="text-teal-500 mr-3 w-5" />
                <span className="text-slate-700 dark:text-slate-300">
                  <strong>Focus:</strong> {t('about.personal.focus')}
                </span>
              </div>
            </div>
          </div>

          {/* Journey Card */}
          <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-500">
            <div className="flex items-center mb-6">
              <FontAwesomeIcon icon={faRocket} className="text-2xl text-blue-500 mr-4" />
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                {t('about.journey.title')}
              </h2>
            </div>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              {t('about.journey.description1')}
            </p>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {t('about.journey.description2')}
            </p>
          </div>
        </div>

        {/* Skills Overview */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 dark:from-slate-600 dark:to-slate-700 rounded-2xl p-8 shadow-lg mb-16 border border-slate-500">
          <div className="flex items-center mb-8">
            <FontAwesomeIcon icon={faLightbulb} className="text-2xl text-amber-600 mr-4" />
            <h2 className="text-2xl font-bold text-white">
              {t('about.skills.title')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-teal-400 mb-3">
                {t('about.skills.frontend.title')}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-slate-600 dark:bg-slate-500 text-slate-200 rounded-full text-sm font-medium hover:bg-teal-600 dark:hover:bg-teal-600 transition-colors cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Backend */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">
                {t('about.skills.backend.title')}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'API Design'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-slate-600 dark:bg-slate-500 text-slate-200 rounded-full text-sm font-medium hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Tools */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-amber-600 mb-3">
                {t('about.skills.tools.title')}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['Git', 'VS Code', 'Vite', 'Bun', 'Figma', 'Linux'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-slate-600 dark:bg-slate-500 text-slate-200 rounded-full text-sm font-medium hover:bg-yellow-700 dark:hover:bg-gold-600 transition-colors cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values & Interests */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Values */}
          <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-500">
            <div className="flex items-center mb-6">
              <FontAwesomeIcon icon={faHeart} className="text-2xl text-red-500 mr-4" />
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                {t('about.values.title')}
              </h2>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-slate-700 dark:text-slate-300">{t('about.values.value1')}</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-slate-700 dark:text-slate-300">{t('about.values.value2')}</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-slate-700 dark:text-slate-300">{t('about.values.value3')}</span>
              </li>
            </ul>
          </div>

          {/* Interests */}
          <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-500">
            <div className="flex items-center mb-6">
              <FontAwesomeIcon icon={faRocket} className="text-2xl text-purple-500 mr-4" />
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                {t('about.interests.title')}
              </h2>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-slate-700 dark:text-slate-300">{t('about.interests.interest1')}</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-slate-700 dark:text-slate-300">{t('about.interests.interest2')}</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-slate-700 dark:text-slate-300">{t('about.interests.interest3')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-slate-700 to-slate-800 dark:from-slate-600 dark:to-slate-700 rounded-2xl p-8 shadow-lg border border-slate-500">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-4">
            {t('about.cta.title')}
          </h3>
          <p className="text-slate-200 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
            {t('about.cta.description')}
          </p>
          <a 
            href="/assets/cv/ese-osagie-cv.pdf" 
            download
            className="inline-flex items-center bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            {t('about.cta.button')}
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMeContent;