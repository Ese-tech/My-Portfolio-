import { useState, useEffect } from "react";
import { useParams } from "react-router"; // Added useParams
import {
	fetchGithubUserRepos,
	GitHubRepo,
} from "../services/GithubFetchServices";

const ProjectsDetaList = () => {
	const { projectId } = useParams(); // Get projectId from route parameters
	const [repos, setRepos] = useState<GitHubRepo[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<null | string>(null);

	const excludedRepos = ["Ese-tech"];

	useEffect(() => {
		const fetchRepos = async () => {
			setLoading(true);

			try {
				const data = await fetchGithubUserRepos();
				setRepos(data.filter((repo) => !excludedRepos.includes(repo.name)));
			} catch (error) {
				setError("Failed to fetch repos");
				console.error("Failed to fetch repos:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchRepos();
	}, []);

	// If projectId is provided, filter the repos to show only the matching project
	const filteredRepos = projectId
		? repos.filter((repo) => repo.id.toString() === projectId)
		: repos;
	// If no projectId is provided, show all repos
	// const filteredRepos = repos;
	// const filteredRepos = projectId

	return (
		<div className='projects'>
			<h2 className='text-2xl font-bold mb-4'>My Projects</h2>
			{loading && <p>Loading...</p>}
			{error && <p>{error}</p>}
			<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{filteredRepos.map((repo) => (
					<li
						key={repo.id}
						className='border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition-shadow'
					>
						<h3 className='text-xl text-amber-300 font-semibold'>{repo.name}</h3>
						<p className='text-sm text-gray-600'>{repo.description}</p>
						<p className='text-sm'>Stars: {repo.stargazers_count}</p>
						<p className='text-sm text-amber-900'>Language: {repo.language}</p>
						<p className='text-sm text-sky-950'>Created at: {repo.created_at}</p>
						<p className='text-sm text-rose-950'>Updated at: {repo.updated_at}</p>
						<p className='text-sm text-fuchsia-950'>Topics: {repo.topics.join(", ")}</p>
						<a
							href={repo.html_url}
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-500 hover:underline'
						>
							View on GitHub
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};
export default ProjectsDetaList;
