function Skills() {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 87 },
    { name: "React", level: 85 },
    { name: "GitHub", level: 85 },
    { name: "Figma", level: 95 },
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>

      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <div className="skill-info">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>

          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
