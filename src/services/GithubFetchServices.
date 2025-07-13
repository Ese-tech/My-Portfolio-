export interface GitHubRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    topics: string[];
    created_at: string;
    updated_at: string;
    language: string;
}

// Fetch GitHub repositories
export const fetchGithubUserRepos = async (): Promise<GitHubRepo[]> => {
    try {
        const response = await fetch("https://api.github.com/users/Ese-tech/repos");

        if (!response.ok) {
            throw new Error(`Failed to fetch repos: ${response.status}`);
        }

        const data: GitHubRepo[] = await response.json();
        console.log("Fetched Data:", data);
        return data;
    } catch (error) {
        console.error("Failed to fetch repos:", error);
        return []; // Return an empty array in case of an error
    }
};

// Utility function to extract specific fields from the fetched data
export const extractRepoData = (repos: GitHubRepo[]) => {
	;
	console.log('repos2:',repos);
	const extractedData = repos.map((repo) => ({
		id: repo.id,
		name: repo.name,
		description: repo.description,
		html_url: repo.html_url,
		stargazers_count: repo.stargazers_count,
		topics: repo.topics,
		created_at: repo.created_at,
		updated_at: repo.updated_at,
		language: repo.language,
	}));
	console.log("Extracted Data:", extractedData);
	return extractedData;
	
};console.log('extractRepoData:',extractRepoData);