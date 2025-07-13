import { skillsRow1, skillsRow2, softSkills } from "../assets/lib/Repsodata";
import { Skill, SoftSkill  } from "../types/SkillTypes";


const SkillCard = ({ skill }: { skill: Skill }) => (
    <div
        className="rounded-full p-[5px] w-40 h-40 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl animate-fade-in"
        style={{
            background: "linear-gradient(to bottom right, white, khaki, dimgray)"
        }}
    >
        <div className="flex flex-col items-center bg-white rounded-full shadow p-6 w-36 h-36 justify-center">
            <img
                src={skill.icon}
                alt={skill.name}
                className="w-40 h-16 mb-3"
                style={{ color: skill.color }}
            />
            <p className="text-gray-800 text-base font-semibold text-center">{skill.name}</p>
            <p className="text-xs text-gray-500">{skill.level}</p>
            {skill.projectLink && (
                <a
                    href={skill.projectLink}
                    className="text-blue-500 underline text-xs mt-1"
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
        className="rounded-full p-[5px] w-40 h-40 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl animate-fade-in"
        style={{
            background: "linear-gradient(to bottom right, white, khaki, dimgray)"
        }}
    >
        <div className="flex flex-col items-center bg-white rounded-full shadow p-6 w-36 h-36 justify-center">
            {skill.icon && (
                <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 mb-3"
                />
            )}
            <p className="text-gray-800 text-base font-semibold text-center">{skill.name}</p>
        </div>
    </div>
);

const SkillsData = () => {
    return (
        <div className="flex justify-center items-start min-h-screen mr-92">
            <div className="skills-container w-full max-w-6xl mx-auto mt-16 mb-4 rounded-lg shadow bg-white px-4 py-8">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4 text-center">
                    My Skills
                </h2>
                <p className="text-sm md:text-base text-gray-600 text-center mb-6">
                    Discover the skills that shape my journey as a web developer.
                </p>

                {/* Frontend Skills */}
                <div className="text-sm font-bold mb-2 mt-4 text-gray-500 uppercase tracking-wide">Frontend</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-x-6 gap-y-4 justify-center mb-2">
                    {skillsRow1.filter(skill => skill.category === "Frontend").map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>

                {/* Backend Skills */}
                <div className="text-sm font-bold mb-2 mt-4 text-gray-500 uppercase tracking-wide">Backend</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-x-6 gap-y-4 justify-center mb-2">
                    {skillsRow1.filter(skill => skill.category === "Backend").map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>

                {/* Tools & Platforms */}
                <div className="text-sm font-bold mb-2 mt-4 text-gray-500 uppercase tracking-wide">Tools & Platforms</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-x-6 gap-y-4 justify-center mb-2">
                    {skillsRow2.filter(skill => skill.category === "Tools").map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>

                {/* Soft Skills */}
                <div className="text-sm font-bold mb-2 mt-4 text-gray-500 uppercase tracking-wide">Soft Skills</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-x-6 gap-y-4 justify-center mb-2">
                    {softSkills.map((skill, index) => (
                        <SoftSkillCard key={index} skill={skill} />
                    ))}
                </div>


                <div className="text-center pb-1 text-base md:text-lg font-bold mt-4 tracking-wide text-gray-700">
                    Skills that shape my work
                </div>
            </div>
        </div>
    );
};
export default SkillsData;
