import { skillsRow1, skillsRow2 } from "../assets/lib/Repsodata";

const borderImageStyle = {
    borderImage: "linear-gradient(to bottom right, red, orange, yellow, green, blue, indigo, violet) 1"
};

const SkillsData = () => {
    return (
        <div className="projects-container px-5 mt-36 mb-12 rounded-lg shadow-lg bg-white">
            <h2 className="text-5xl pt-5 font-extrabold text-gray-800 mb-10 text-center">
                <span className="">My</span>
                <span className=" ml-2">Skills</span>
            </h2>
            <p className="text-base md:text-lg text-gray-800 text-center mb-10">
                Discover the skills that shape my journey as a web developer.<br />
                Each technology and tool I’ve mastered reflects my commitment to creating high-quality, innovative solutions.
            </p>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mb-8">
                {skillsRow1.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white border-2 rounded-lg shadow-lg p-4 md:p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                        style={borderImageStyle}
                    >
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-12 h-12 md:w-16 md:h-16 mb-3 transition-transform duration-300 hover:scale-110"
                            style={{ color: skill.color }}
                        />
                        <p className="text-gray-800 text-base md:text-lg font-semibold text-center">{skill.name}</p>
                    </div>
                ))}
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {skillsRow2.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white border-2 rounded-lg shadow-lg p-4 md:p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                        style={borderImageStyle}
                    >
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-12 h-12 md:w-16 md:h-16 mb-3 transition-transform duration-300 hover:scale-110"
                            style={{ color: skill.color }}
                        />
                        <p className="text-gray-800 text-base md:text-lg font-semibold text-center">{skill.name}</p>
                    </div>
                ))}
            </div>
            <div className="text-center pb-4 text-lg md:text-xl font-bold mt-10 tracking-wide">
                Skills that shape my work
            </div>
        </div>
    );
};

export default SkillsData;