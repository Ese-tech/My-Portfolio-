import { skillsRow1, skillsRow2 } from "../../assets/lib/Repsodata";

const Skills = () => {
    return (
        <div className="skills border-8 py-16 px-2 md:px-8 flex flex-col mr-38 items-center justify-center">
            <div className="skills-header max-w-3xl mx-auto text-center mb-14">
                <h1 className="skills-title text-5xl md:text-5xl text-[var(--dark-blue)] font-extrabold mb-4 flex justify-center items-center">
                    <span className="skills-title-my">My</span>
                    <span className="skills-title-skills ml-2">Skills</span>
                </h1>
                <p className="projects-subtitle text-base md:text-lg text-[var(--dark-blue)]">
                    Discover the skills that shape my journey as a web developer.<br />
                    Each technology and tool I’ve mastered reflects my commitment to creating high-quality, innovative solutions.
                </p>
            </div>
            <div className=" max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-8">
                {skillsRow1.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white border-2 rounded-lg shadow-lg p-5 md:p-7 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                        style={{ animationDelay: `${index * 0.15}s` , borderImage:
									"linear-gradient(to bottom right, red, orange, yellow, green, blue, indigo, violet) 1"}}
                    >
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-14 h-14 md:w-16 md:h-16 mb-3 transition-transform duration-300 hover:scale-110"
                            style={{ color: skill.color }}
                        />
                        <p className="text-gray-800 text-base md:text-lg font-semibold text-center">{skill.name}</p>
                    </div>
                ))}
            </div>
            <div className=" max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                {skillsRow2.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white border-2 rounded-lg shadow-lg p-5 md:p-7 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                        style={{ animationDelay: `${index * 0.15}s`, borderImage:
									"linear-gradient(to bottom right, red, orange, yellow, green, blue, indigo, violet) 1" }}
                    >
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-14 h-14 md:w-16 md:h-16 mb-3 transition-transform duration-300 hover:scale-110"
                            style={{ color: skill.color }}
                        />
                        <p className="text-gray-800 text-base md:text-lg font-semibold text-center">{skill.name}</p>
                    </div>
                ))}
            </div>
            <div className="text-center text-[var(--dark-blue)] text-lg md:text-xl font-bold mt-12 tracking-wide">
                Skills that shape my work
            </div>
        </div>
    );
};

export default Skills;