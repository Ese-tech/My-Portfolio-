export type Skill = {
    icon: string;
    name: string;
    color?: string;
    level?: string;
    projectLink?: string;
    category?: string;
};

export type SoftSkill = {
    name: string;
    icon?: string;
};
export type SkillsData = {
    skillsTitle: string;
    skills: Skill[];
};
export type SkillsDataWeb = {
    skillsTitle: string;
    skills: {
        title: string;
        hash: string;
        icon: string;
        color: string;
    }[];
};
export type SkillsDataSoft = {
    skillsTitle: string;
    skills: SoftSkill[];
};
export type SkillsDataType = SkillsData | SkillsDataWeb | SkillsDataSoft;
export type SkillsRow = {
    category: string;
    skills: Skill[];
};

