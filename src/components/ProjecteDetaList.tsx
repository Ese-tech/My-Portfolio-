import { useState, useEffect } from "react";
import { Link } from "react-router";
import { fetchGithubUserRepos, extractRepoData, GitHubRepo } from "../services/GithubFetchServices";

const ProjectsDetaList = () => {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        const excludedRepos = ["Ese-tech"];
        const fetchRepos = async () => {
            setLoading(true);

            try {
                const data = await fetchGithubUserRepos();
                const filteredData = extractRepoData(data).filter(
                    (repo) => !excludedRepos.includes(repo.name)
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

    return (
        <div className='projects'>
            <h2 className='text-2xl font-bold mb-4'>My Projects</h2>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {repos.map((repo) => (
                  <Link
				  to={`/my-projects/${repo.name}`} // Pass the name directly
				  key={repo.id}
			  >
                        <li className='border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition-shadow'>
                            <h3 className='text-xl text-amber-300 font-semibold'>{repo.name}</h3>
                            <p className='text-sm text-gray-600'>{repo.description}</p>
                            <p className='text-sm'>Stars: {repo.stargazers_count}</p>
                            <p className='text-sm text-amber-900'>Language: {repo.language}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default ProjectsDetaList;