import { useState, useEffect } from "react";
import { Link } from "react-router";
import { RepoData } from "../types/RepoTypes";
// import { fetchGithubUserRepos, extractRepoData } from "../services/GithubFetchServices";
import { reposdata } from "../assets/lib/Repsodata";

const ProjectsDetaList = () => {
	const [repos, setRepos] = useState<RepoData[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<null | string>(null);

	useEffect(() => {
		// Simulate fetching data (replace with real fetch if needed)
		const fetchRepos = async () => {
			try {
				// Example: If you want to fetch from API, uncomment below and adjust
				// const data = await fetchGithubUserRepos();
				// const filteredData = extractRepoData(data).filter(
				// 	(repo) => repo.name !== "Ese-tech"
				// );
				// setRepos(filteredData);

				// For now, use local data
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

	if (loading) {
		return <div className="text-center mt-10">Loading...</div>;
	}

	if (error) {
		return <div className="text-center mt-10 text-red-500">{error}</div>;
	}

	return (
		<div className='projects-container ml-23 px-5 mt-36 p-22 rounded-lg shadow-lg bg-white w-full max-w-7xl mx-auto'>
			<h2 className='text-3xl font-extrabold text-gray-500 -mt-18 mb-16 text-center'>
				My Projects
			</h2>
			<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-x-8 gap-y-8 justify-center mb-2">
				{repos.map((repo) => (
					<li className="flex items-center justify-center" key={repo.name}>
						<Link to={`/my-projects/${repo.name}`}>
							<div
								className="rounded-full  w-62 h-62 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl animate-fade-in"
								style={{
									background: "linear-gradient(to bottom right, white, khaki, dimgray)"
								}}
							>
								<div className="flex flex-col items-center bg-white rounded-full shadow p-6 w-54 h-54 justify-center">
									<h3 className='text-base text-amber-500 font-bold mb-2 text-center'>
										{repo.name}
									</h3>
									<p className='text-xs text-gray-600 mb-2 text-center line-clamp-3'>
										{repo.description || "No description available"}
									</p>
									<div className='flex flex-col items-center text-xs mt-auto'>
										{repo.technologiesTags && (
											<div>
												<p className='text-gray-800 font-medium'>
													{repo.technologiesTags.join(", ")}
												</p>
												<p className='text-gray-700 font-medium'>
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
		</div>
	);
};

export default ProjectsDetaList;