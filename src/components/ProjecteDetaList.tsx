import { useState, useEffect } from "react";
import { RepoData } from "../types/RepoTypes";
import { reposdata } from "../assets/lib/Repsodata";
import { motion } from "framer-motion";
import { Link } from "react-router";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="text-center">
        <div className="text-2xl font-semibold bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent mb-4">Loading projects...</div>
        <div className="flex justify-center space-x-2 mt-4">
          <div className="w-4 h-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="text-center text-red-600 bg-white/90 backdrop-blur-sm border border-red-200 p-8 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Error Loading Projects</h3>
        <p>{error}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-7xl mx-auto"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 p-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-4">
              My Projects
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover the technologies and skills that drive my passion for web development.
            </p>
          </div>

          {/* Filter UI */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <input
              type="text"
              placeholder="Search projects..."
              className="border border-slate-300 rounded-xl bg-white/80 text-slate-800 px-6 py-3 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 placeholder-slate-500 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="border border-slate-300 rounded-xl bg-white/80 text-slate-800 px-6 py-3 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 shadow-sm"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {filteredRepos.map((repo) => (
              <div key={repo.name} className="group">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200/50 hover:border-teal-300/50 overflow-hidden h-full">
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors duration-300 line-clamp-2">
                      {repo.name}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 flex-grow line-clamp-3">
                      {repo.description || "No description available"}
                    </p>
                    
                    {repo.technologiesTags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {repo.technologiesTags.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-slate-100/80 text-slate-700 text-xs rounded-full border border-slate-200/50 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {repo.technologiesTags.length > 3 && (
                          <span className="px-3 py-1 bg-teal-100/80 text-teal-700 text-xs rounded-full border border-teal-200/50 font-medium">
                            +{repo.technologiesTags.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                      {repo.language && (
                        <span className="flex items-center">
                          <span className="w-3 h-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mr-2"></span>
                          {repo.language}
                        </span>
                      )}
                      <span className="text-slate-400">
                        ⭐ {repo.stargazers_count || 0}
                      </span>
                    </div>

                    <div className="flex gap-2 mt-auto">
                      <Link
                        to={`/my-projects/${repo.name}`}
                        className="flex-1 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                      >
                        View Details
                      </Link>
                      {repo.html_url && (
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                        >
                          GitHub
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
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-slate-600 text-xl font-semibold mb-2">No projects found</p>
              <p className="text-slate-500 text-sm">Try adjusting your search or filter options.</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsDetaList;
