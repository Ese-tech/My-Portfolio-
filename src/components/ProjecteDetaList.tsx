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
		<div className='projects-container mt-18 px-32   border-amber-950 border-2 w-auto h- mx-auto p-8 rounded-lg shadow-lg bg-white'>
			<h2 className='text-3xl font-extrabold text-gray-800 mb-6 text-center'>
				My Projects
			</h2>
			{loading && <p className='text-center text-gray-500'>Loading...</p>}
			{error && <p className='text-center text-red-500'>{error}</p>}
			<ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
				{repos.map((repo) => (
					<Link
						to={`/my-projects/${repo.name}`} // Pass the name directly
						key={repo.id}
					>
						<li
							className='border rounded-lg shadow-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full'
							style={{
								borderImage:
									"linear-gradient(to bottom right, red, orange, yellow, green, blue, indigo, violet) 1",
							}}
						>
							<h3 className='text-xl text-amber-500 font-bold mb-3'>
								{repo.name}
							</h3>
							<p className='text-sm text-gray-600 mb-4'>
								{repo.description || "No description available"}
							</p>
							<div className='flex justify-between items-center text-sm mt-auto'>
								<p className='text-gray-700 font-medium'>
									⭐ {repo.stargazers_count}
								</p>
								<p className='text-gray-800 font-medium'>
									{repo.language || "N/A"}
								</p>
							</div>
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default ProjectsDetaList;
