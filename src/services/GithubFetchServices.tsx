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

export const fetchGithubUserRepos = async (): Promise<GitHubRepo[]> => {
	try {
		const response = await fetch("https://api.github.com/users/Ese-tech/repos");
       
		if (!response.ok) {
			throw new Error(`Failed to fetch repos: ${response.status}`);
		}
		const data: GitHubRepo[] = await response.json();   console.log(':',data);
        return data;
     
	} catch (error) {
		console.error("Failed to fetch repos:", error);
		return []; // Return an empty array in case of an error
	}
};
