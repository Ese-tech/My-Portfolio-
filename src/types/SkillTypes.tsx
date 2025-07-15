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
    SkillsTitle: string;
    skills: Skill[];
};
export type SkillsDataWeb = {
    SkillsTitle: string;
    skills: {
        title: string;
        hash: string;
        icon: string;
        color: string;
    }[];
};
export type SkillsDataSoft = {
    SkillsTitle: string;
    skills: SoftSkill[];
};
export type SkillsDataType = SkillsData | SkillsDataWeb | SkillsDataSoft;
export type SkillsRow = {
    category: string;
    skills: Skill[];
};

