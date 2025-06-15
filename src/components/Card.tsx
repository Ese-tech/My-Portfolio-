import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { reposdata } from "../assets/lib/Repsodata";
import { RepoData } from "../types/RepoTypes";
// import {
// 	GitHubRepo,
// 	fetchGithubUserRepos,
// } from "../services/GithubFetchServices";

function Card() {
	const { card } = useParams<{ card: string }>(); // Get card from route parameters
	const [repoData, setRepoData] = useState<RepoData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchRepo = async () => {
			setLoading(true);
			try {
				const repos = reposdata; // Use local data
				const repo = repos.find((repo) => repo.name === card); // Find the repo by name
				if (!repo) {
					throw new Error("Repository not found");
				}
				setRepoData(repo);
			} catch (err) {
				setError(err instanceof Error ? err.message : "An error occurred");	
			} finally {
				setLoading(false);
			}
		};

		fetchRepo();
	}, [card]);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	if (!repoData) {
		return <p>Repository not found.</p>;
	}

	const {
		name,
		description,
		html_url,
		stargazers_count,
		topics,
		created_at,
		updated_at,
		language,
	} = repoData;

	return (
		<div className='card px-5 w-4xl h-auto mt-36 p-22 ml-60 rounded-lg shadow-lg bg-white flex flex-col items-center'>
			<img
				src={`https://github-readme-stats.vercel.app/api/pin/?username=Ese-tech&repo=${name}&theme=radical`}
			/>
			<h2 className='text-4xl font-bold mb-4 '>{name || "No name available"}</h2>
			<p className='text-gray-700 text-xl mb-4'>
				{description || "No description available"}
			</p>
			<p className='text-gray-600 text-xl mb-2'>
				⭐ Stars: {stargazers_count || 0}
			</p>
			<p className='text-gray-600 text-lg mb-2'>
				📚 Topics: {topics?.join(", ") || "No topics available"}
			</p>
			<p className='text-gray-600 text-lg mb-2'>
				📅 Created At: {new Date(created_at).toLocaleDateString()}
			</p>
			<p className='text-gray-600 text-lg mb-2'>
				🔄 Updated At: {new Date(updated_at).toLocaleDateString()}
			</p>
			<p className='text-gray-600 text-lg mb-4'>
				💻 Language: {language || "Not specified"}
			</p>
			<a
				href={html_url || "#"} // Fallback to "#" if html_url is undefined
				target='_blank'
				rel='noopener noreferrer'
				className='text-blue-500 text-lg hover:underline'
			>
				View on GitHub
			</a>
			<div className='mt-4'>
				<a
					href={`https://ese-tech.github.io/${name}`}
					target='_blank'
					rel='noopener noreferrer'
					className='text-blue-500 text-lg hover:underline'
				>
					View web
				</a>
			</div>
		</div>
	);
}

export default Card;


