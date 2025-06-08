import { skillsRow1, skillsRow2, softSkills } from "../assets/lib/Repsodata";
import { Skill, SoftSkill  } from "../types/SkillTypes";
const borderImageStyle = {
    borderImage: "linear-gradient(to bottom right, red, orange, yellow, green, blue, indigo, violet) 1"
};

const SkillCard = ({ skill }: { skill: Skill }) => (
    <div
        className="flex flex-col items-center bg-white border-2 rounded-lg shadow p-3 md:p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
        style={borderImageStyle}
    >
        <img
            src={skill.icon}
            alt={skill.name}
            className="w-8 h-8 md:w-12 md:h-12 mb-2"
            style={{ color: skill.color }}
        />
        <p className="text-gray-800 text-sm md:text-base font-semibold text-center">{skill.name}</p>
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
);

const SoftSkillCard = ({ skill }: { skill: SoftSkill }) => (
    <div
        className="flex flex-col items-center bg-white border-2 rounded-lg shadow p-3 md:p-4"
        style={borderImageStyle}
    >
        {skill.icon && (
            <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 mb-2"
            />
        )}
        <p className="text-gray-800 text-sm md:text-base font-semibold text-center">{skill.name}</p>
    </div>
);

const SkillsData = () => {
    return (
        <div className="flex justify-center items-start min-h-[80vh]">
            <div className="skills-container w-full max-w-7xl mr-115 mx-auto mt-16 mb-4 rounded-lg shadow bg-white px-4">
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mb-2 text-center">
                    My Skills
                </h2>
                <p className="text-xs md:text-sm text-gray-600 text-center mb-2">
                    Discover the skills that shape my journey as a web developer.
                </p>

            {/* Frontend Skills */}
            <div className="text-xs font-bold mb-1 mt-2 text-gray-500 uppercase tracking-wide">Frontend</div>
            <div className="w-10px grid grid-cols-2 md:grid-cols-3 gap-2 mb-2">
                {skillsRow1.filter(skill => skill.category === "Frontend").map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>

            {/* Backend Skills */}
            <div className="text-xs font-bold mb-1 mt-2 text-gray-500 uppercase tracking-wide">Backend</div>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2 mb-2">
                {skillsRow1.filter(skill => skill.category === "Backend").map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>

            {/* Tools & Platforms */}
            <div className="text-xs font-bold mb-1 mt-2 text-gray-500 uppercase tracking-wide">Tools & Platforms</div>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2 mb-2">
                {skillsRow2.filter(skill => skill.category === "Tools").map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>

            {/* Soft Skills */}
            <div className="text-xs font-bold mb-1 mt-2 text-gray-500 uppercase tracking-wide">Soft Skills</div>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2 mb-2">
                {softSkills.map((skill, index) => (
                    <SoftSkillCard key={index} skill={skill} />
                ))}
            </div>

         <div className="text-center pb-1 text-xs md:text-base font-bold mt-2 tracking-wide text-gray-700">
                    Skills that shape my work
                </div>
            </div>
        </div>
    );
};
export default SkillsData;