import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { fetchGithubUserRepos, GitHubRepo } from '../services/GithubFetchServices';  


const ProjectsDetaList = () => {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);
    
    const excludedRepos = ['Ese-tech'];
    
    useEffect(() => {
        const fetchRepos = async () => {
            setLoading(true);

            try {
                const data = await fetchGithubUserRepos();
                setRepos(data.filter((repo) => !excludedRepos.includes(repo.name)));
            } catch (error) {
                setError("Failed to fetch repos");
                console.error('Failed to fetch repos:', error);
            } finally {
                setLoading(false);
            }
        };      
        fetchRepos();
    }, []);     

    return (
        

        <div className="projects">
            <h2> My Projects</h2>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <h3>{repo.name}</h3>
                        <p>{repo.description}</p>
                        <p>Stars: {repo.stargazers_count}</p>
                        <p>Language: {repo.language}</p>
                        <p>Created at: {repo.created_at}</p>
                        <p>Updated at: {repo.updated_at}</p>
                        <p>Topics: {repo.topics.join(', ')}</p>
                        <Link to={repo.html_url}>View on GitHub</Link>
                    </li>
                ))}
            </ul>
        </div>
        );
};
    export default ProjectsDetaList;