import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
	fetchGithubUserRepos,
	extractRepoData,
	GitHubRepo,
} from "../services/GithubFetchServices";

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
		<div className='projects-container ml-23 px-5 mt-36 p-22  rounded-lg shadow-lg bg-white w-full max-w-7xl mx-auto'>
			<h2 className='text-3xl font-extrabold text-gray-500 -mt-18 mb-16 text-center'>
				My Projects
			</h2>
			{loading && <p className='text-center text-gray-500'>Loading...</p>}
			{error && <p className='text-center text-red-500'>{error}</p>}
<ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
    {repos.map((repo) => (
        <Link
            to={`/my-projects/${repo.name}`}
            key={repo.id}
        >
            <li className="flex items-center justify-center">
    <div
        className="rounded-full p-[5px] w-64 h-64 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl animate-fade-in"
        style={{
            background: "linear-gradient(to bottom right, white, khaki, dimgray)"
        }}
    >
        <div className="flex flex-col items-center bg-white rounded-full shadow p-8 w-60 h-60 justify-center">
            <h3 className='text-2xl text-amber-500 font-bold mb-2 text-center'>
                {repo.name}
            </h3>
            <p className='text-base text-gray-600 mb-2 text-center'>
                {repo.description || "No description available"}
            </p>
            <div className='flex flex-col items-center text-base mt-auto'>
                <p className='text-gray-700 font-medium'>
                    ⭐ {repo.stargazers_count}
                </p>
                <p className='text-gray-800 font-medium'>
                    {repo.language || "N/A"}
                </p>
            </div>
        </div>
    </div>
</li>
        </Link>
    ))}
</ul>
		</div>
	);
};

export default ProjectsDetaList;
