import { useState, useEffect } from "react";
import { RepoData } from "../types/RepoTypes";
import { reposdata } from "../assets/lib/Repsodata";
import { motion } from "framer-motion";

const ProjectsDetaList = () => {
  const [repos, setRepos] = useState<RepoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const filteredData = reposdata.filter(
          (repo) => repo.name !== "Ese-tech"
        );
        setRepos(filteredData);
      } catch (error) {
        setError("Failed to fetch repos");
        console.error("Failed to fetch repos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const languages = [
    "All",
    ...new Set(repos.map((repo) => repo.language).filter(Boolean)),
  ];

  const filteredRepos = repos.filter((repo) => {
    const nameMatches = repo.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const languageMatches =
      selectedLanguage === "All" || repo.language === selectedLanguage;

    return nameMatches && languageMatches;
  });

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-xl text-gray-600">Loading projects...</div>
        <div className="flex justify-center space-x-2 mt-4">
          <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center text-red-600 bg-red-50 p-8 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Error Loading Projects</h3>
        <p>{error}</p>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 text-center">
            My Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-12"></div>

          {/* Filter UI */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <input
              type="text"
              placeholder="Search projects..."
              className="border border-gray-300 rounded-lg bg-gray-50 text-gray-800 px-6 py-3 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="border border-gray-300 rounded-lg bg-gray-50 text-gray-800 px-6 py-3 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {filteredRepos.map((repo) => (
              <div key={repo.name} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden h-full">
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                      {repo.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {repo.description || "No description available"}
                    </p>
                    
                    {repo.technologiesTags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {repo.technologiesTags.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border"
                          >
                            {tech}
                          </span>
                        ))}
                        {repo.technologiesTags.length > 3 && (
                          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full border border-yellow-200">
                            +{repo.technologiesTags.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                      {repo.language && (
                        <span className="flex items-center">
                          <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                          {repo.language}
                        </span>
                      )}
                      {repo.html_url && (
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors duration-300"
                        >
                          View Code →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredRepos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
              <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filter options.</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsDetaList;
