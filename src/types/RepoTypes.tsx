export type RepoData = {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    topics: string[];
    created_at: string;
    updated_at: string;
    language: string;
    image?: string;
    technologiesTags?: string[];
    links?: {
        githubUrl?: string;
        vercelUrl?: string;
    };
};