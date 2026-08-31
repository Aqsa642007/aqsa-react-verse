import SkillCard from "../components/SkillCard";

function Skills() {
  const skills = [
    {
      icon: "⚛️",
      title: "React JS",
      description:
        "I build modern and interactive user interfaces using React components.",
      level: "Intermediate",
    },
    {
      icon: "🟨",
      title: "JavaScript",
      description:
        "I use JavaScript to create dynamic and interactive web applications.",
      level: "Intermediate",
    },
    {
      icon: "🎨",
      title: "HTML & CSS",
      description:
        "I create responsive and attractive website layouts using HTML and CSS.",
      level: "Intermediate",
    },
    {
      icon: "🤖",
      title: "Artificial Intelligence",
      description:
        "I am learning Artificial Intelligence concepts and modern AI technologies.",
      level: "Learning",
    },
    {
      icon: "☕",
      title: "Java",
      description:
        "I understand Java programming concepts including OOP and classes.",
      level: "Learning",
    },
    {
      icon: "💻",
      title: "C++",
      description:
        "I use C++ to understand programming logic, functions and problem solving.",
      level: "Learning",
    },
  ];

  return (
    <section className="skills-page">
      <div className="section-heading">
        <p>WHAT I DO</p>
        <h1>My Skills & Expertise</h1>
        <span>
          Explore the technologies and skills I am learning and improving.
        </span>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
            level={skill.level}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;