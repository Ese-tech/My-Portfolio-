import { skillsRow1, skillsRow2, softSkills } from "../assets/lib/Repsodata";
import { Skill, SoftSkill  } from "../types/SkillTypes";


const SkillCard = ({ skill }: { skill: Skill }) => (
    <div
        className="rounded-full p-[3px] w-40 h-40 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl animate-fade-in"
        style={{
            background: "linear-gradient(to bottom right, #e2e8f0, #cbd5e1, #94a3b8)"
        }}
    >
        <div className="flex flex-col items-center bg-white rounded-full shadow-lg p-6 w-36 h-36 justify-center hover:shadow-xl transition-shadow duration-300 border border-slate-200">
            <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 mb-2 object-contain"
                style={{ color: skill.color }}
            />
            <p className="text-slate-800 text-sm font-semibold text-center leading-tight">{skill.name}</p>
            <p className="text-xs text-slate-600 mt-1">{skill.level}</p>
            {skill.projectLink && (
                <a
                    href={skill.projectLink}
                    className="text-teal-600 hover:text-teal-700 underline text-xs mt-1 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See in action
                </a>
            )}
        </div>
    </div>
);

const SoftSkillCard = ({ skill }: { skill: SoftSkill }) => (
    <div
        className="rounded-full p-[3px] w-40 h-40 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl animate-fade-in"
        style={{
            background: "linear-gradient(to bottom right, #e2e8f0, #cbd5e1, #94a3b8)"
        }}
    >
        <div className="flex flex-col items-center bg-white rounded-full shadow-lg p-6 w-36 h-36 justify-center hover:shadow-xl transition-shadow duration-300 border border-slate-200">
            {skill.icon && (
                <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 mb-2 object-contain"
                />
            )}
            <p className="text-slate-800 text-sm font-semibold text-center leading-tight">{skill.name}</p>
        </div>
    </div>
);

const SkillsData = () => {
    return (
        <div className="flex justify-center items-center min-h-screen px-4 py-16">
            <div className="skills-container w-full max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 px-8 py-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-4">
                        My Skills & Expertise
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Discover the technologies and skills that drive my passion for web development.
                    </p>
                </div>

                {/* Frontend Skills */}
                <div className="mb-12">
                    <div className="text-sm font-bold mb-6 text-slate-600 uppercase tracking-wider text-center">
                        <span className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-full">
                            Frontend Technologies
                        </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 justify-items-center">
                        {skillsRow1.filter(skill => skill.category === "Frontend").map((skill, index) => (
                            <SkillCard key={index} skill={skill} />
                        ))}
                    </div>
                </div>

                {/* Backend Skills */}
                <div className="mb-12">
                    <div className="text-sm font-bold mb-6 text-slate-600 uppercase tracking-wider text-center">
                        <span className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-4 py-2 rounded-full">
                            Backend Technologies
                        </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 justify-items-center">
                        {skillsRow1.filter(skill => skill.category === "Backend").map((skill, index) => (
                            <SkillCard key={index} skill={skill} />
                        ))}
                    </div>
                </div>

                {/* Tools & Platforms */}
                <div className="mb-12">
                    <div className="text-sm font-bold mb-6 text-slate-600 uppercase tracking-wider text-center">
                        <span className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-4 py-2 rounded-full">
                            Tools & Platforms
                        </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 justify-items-center">
                        {skillsRow2.filter(skill => skill.category === "Tools").map((skill, index) => (
                            <SkillCard key={index} skill={skill} />
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div className="mb-8">
                    <div className="text-sm font-bold mb-6 text-slate-600 uppercase tracking-wider text-center">
                        <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full">
                            Professional Skills
                        </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 justify-items-center">
                        {softSkills.map((skill, index) => (
                            <SoftSkillCard key={index} skill={skill} />
                        ))}
                    </div>
                </div>

                <div className="text-center pt-8 border-t border-slate-300">
                    <p className="text-lg font-semibold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                        Continuously learning and growing in the ever-evolving world of technology
                    </p>
                </div>
            </div>
        </div>
    );
};
export default SkillsData;
