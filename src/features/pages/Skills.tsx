
import { skillsRow1, skillsRow2 } from "../../assets/lib/Repsodata";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-header">
        <h1 className="skills-title">
          <span className="skills-title-my">My</span> <span className="skills-title-skills">Skills</span>
        </h1>
        <p className="projects-subtitle">
          Discover the skills that shape my journey as a web developer. <br /> Each technology and tool I’ve mastered reflects
          my commitment to creating high-quality, innovative solutions.
        </p>
      </div>
      <div className="skills-row">
        {skillsRow1.map((skill, index) => (
          <div
            key={index}
            className="skill-icon-container"
            style={{ animationDelay: `${index * 2}s` }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="skill-icon"
              style={{ color: skill.color }}
            />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
      <div className="skills-row">
        {skillsRow2.map((skill, index) => (
          <div
            key={index}
            className="skill-icon-container"
            style={{ animationDelay: `${index * 2}s` }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="skill-icon"
              style={{ color: skill.color }}
            />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
      <div className="line2-skills">Skills that shape my work</div>
    </div>
  );
};

export default Skills;