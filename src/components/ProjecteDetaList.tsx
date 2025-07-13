import { useState, useEffect } from "react";
import { Link } from "react-router"; // <- Korrektur!
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

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="projects-container mr-98 px-5 mt-36  p-22 rounded-lg shadow-lg bg-white w-full max-w-5xl mx-auto"
    >
      <h2 className="text-3xl font-extrabold text-gray-500 -mt-18 mb-10 text-center">
        My Projects
      </h2>

      {/* 🔍 Filter UI */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
        <input
          type="text"
          placeholder="Search projects..."
          className="border border-gray-300 rounded bg-gray-100 text-gray-800 px-4 py-2 w-full md:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border border-gray-300 rounded bg-gray-100 text-gray-800 px-4 py-2 w-full md:w-1/4"
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

      {/* 🎨 Projekt-Gitter */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-x-8 gap-y-8 justify-center mb-2">
        {filteredRepos.map((repo) => (
          <li className="flex items-center justify-center" key={repo.name}>
            <Link to={`/my-projects/${repo.name}`}>
              <div
                className="rounded-full w-62 h-62 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl animate-fade-in"
                style={{
                  background:
                    "linear-gradient(to bottom right, white, khaki, dimgray)",
                }}
              >
                <div className="flex flex-col items-center bg-white rounded-full shadow p-6 w-54 h-54 justify-center">
                  <h3 className="text-base text-amber-500 font-bold mb-2 text-center">
                    {repo.name}
                  </h3>
                  <p className="text-xs text-gray-600 mb-2 text-center line-clamp-3">
                    {repo.description || "No description available"}
                  </p>
                  <div className="flex flex-col items-center text-xs mt-auto">
                    {repo.technologiesTags && (
                      <div>
                        <p className="text-gray-800 font-medium">
                          {repo.technologiesTags.join(", ")}
                        </p>
                        <p className="text-gray-700 font-medium">
                          ⭐ {repo.stargazers_count}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Kein Ergebnis */}
      {filteredRepos.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No projects found.</p>
      )}
    </motion.div>
  );
};

export default ProjectsDetaList;
