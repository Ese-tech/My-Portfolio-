import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import { reposdata } from "../assets/lib/Repsodata";
import { RepoData } from "../types/RepoTypes";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faExternalLinkAlt, faCode, faStar, faCalendar, faTag } from "@fortawesome/free-solid-svg-icons";

function Card() {
	const { card } = useParams<{ card: string }>();
	const [repoData, setRepoData] = useState<RepoData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchRepo = async () => {
			setLoading(true);
			try {
				const repos = reposdata;
				const repo = repos.find((repo) => repo.name === card);
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
		return (
			<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
				<div className="text-center">
					<div className="text-2xl font-semibold bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent mb-4">Loading project details...</div>
					<div className="flex justify-center space-x-2 mt-4">
						<div className="w-4 h-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full animate-bounce"></div>
						<div className="w-4 h-4 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
						<div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
					</div>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-6">
				<div className="text-center bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-red-200">
					<div className="text-6xl mb-4">❌</div>
					<h2 className="text-2xl font-bold text-red-600 mb-2">Error</h2>
					<p className="text-slate-600 mb-6">{error}</p>
					<Link 
						to="/my-projects"
						className="inline-flex items-center bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
					>
						<FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
						Back to Projects
					</Link>
				</div>
			</div>
		);
	}

	if (!repoData) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-6">
				<div className="text-center bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
					<div className="text-6xl mb-4">🔍</div>
					<h2 className="text-2xl font-bold text-slate-700 mb-2">Repository Not Found</h2>
					<p className="text-slate-600 mb-6">The project you're looking for doesn't exist.</p>
					<Link 
						to="/my-projects"
						className="inline-flex items-center bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
					>
						<FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
						Back to Projects
					</Link>
				</div>
			</div>
		);
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
		technologiesTags,
	} = repoData;

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 px-6 py-12">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="max-w-4xl mx-auto"
			>
				{/* Back Button */}
				<div className="mb-8">
					<Link 
						to="/my-projects"
						className="inline-flex items-center text-slate-600 hover:text-slate-800 transition-colors duration-300 group"
					>
						<FontAwesomeIcon icon={faArrowLeft} className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
						Back to Projects
					</Link>
				</div>

				{/* Main Card */}
				<div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 overflow-hidden">
					{/* GitHub Stats Banner */}
					<div className="bg-gradient-to-r from-slate-700 to-slate-800 p-6 text-center">
						<img
							src={`https://github-readme-stats.vercel.app/api/pin/?username=Ese-tech&repo=${name}&theme=transparent&hide_border=true&title_color=ffffff&text_color=ffffff&icon_color=14b8a6`}
							alt={`${name} GitHub stats`}
							className="mx-auto rounded-lg shadow-lg"
						/>
					</div>

					{/* Content */}
					<div className="p-8">
						{/* Header */}
						<div className="text-center mb-8">
							<h1 className="text-4xl font-extrabold bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-4">
								{name || "No name available"}
							</h1>
							<div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-6"></div>
							<p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
								{description || "No description available"}
							</p>
						</div>

						{/* Tech Stack */}
						{technologiesTags && technologiesTags.length > 0 && (
							<div className="mb-8">
								<h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
									<FontAwesomeIcon icon={faCode} className="mr-2 text-teal-600" />
									Tech Stack
								</h3>
								<div className="flex flex-wrap gap-3">
									{technologiesTags.map((tech, index) => (
										<span
											key={index}
											className="px-4 py-2 bg-slate-100/80 text-slate-700 rounded-full border border-slate-200/50 font-medium text-sm hover:bg-teal-50 hover:border-teal-200 transition-colors duration-300"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						)}

						{/* Project Details Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
							<div className="bg-slate-50/50 rounded-xl p-6 border border-slate-200/50">
								<h3 className="font-semibold text-slate-800 mb-4 flex items-center">
									<FontAwesomeIcon icon={faStar} className="mr-2 text-yellow-500" />
									Statistics
								</h3>
								<div className="space-y-3">
									<div className="flex justify-between">
										<span className="text-slate-600">Stars:</span>
										<span className="font-medium text-slate-800">{stargazers_count || 0}</span>
									</div>
									<div className="flex justify-between">
										<span className="text-slate-600">Language:</span>
										<span className="font-medium text-slate-800">{language || "Not specified"}</span>
									</div>
								</div>
							</div>

							<div className="bg-slate-50/50 rounded-xl p-6 border border-slate-200/50">
								<h3 className="font-semibold text-slate-800 mb-4 flex items-center">
									<FontAwesomeIcon icon={faCalendar} className="mr-2 text-blue-500" />
									Timeline
								</h3>
								<div className="space-y-3">
									<div className="flex justify-between">
										<span className="text-slate-600">Created:</span>
										<span className="font-medium text-slate-800">{new Date(created_at).toLocaleDateString()}</span>
									</div>
									<div className="flex justify-between">
										<span className="text-slate-600">Updated:</span>
										<span className="font-medium text-slate-800">{new Date(updated_at).toLocaleDateString()}</span>
									</div>
								</div>
							</div>
						</div>

						{/* Topics */}
						{topics && topics.length > 0 && (
							<div className="mb-8">
								<h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
									<FontAwesomeIcon icon={faTag} className="mr-2 text-purple-500" />
									Topics
								</h3>
								<div className="flex flex-wrap gap-2">
									{topics.map((topic, index) => (
										<span
											key={index}
											className="px-3 py-1 bg-purple-100/80 text-purple-700 rounded-full text-sm font-medium border border-purple-200/50"
										>
											{topic}
										</span>
									))}
								</div>
							</div>
						)}

						{/* Action Buttons */}
						<div className="flex flex-col sm:flex-row gap-4">
							{html_url && (
								<a
									href={html_url}
									target="_blank"
									rel="noopener noreferrer"
									className="flex-1 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white py-4 px-6 rounded-xl text-center font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
								>
									<FontAwesomeIcon icon={faCode} className="mr-2" />
									View Source Code
								</a>
							)}
							<a
								href={`https://ese-tech.github.io/${name}`}
								target="_blank"
								rel="noopener noreferrer"
								className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white py-4 px-6 rounded-xl text-center font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
							>
								<FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
								View Live Demo
							</a>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default Card;


