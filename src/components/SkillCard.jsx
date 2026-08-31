function SkillCard({ icon, title, description, level }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="skill-level">
        <span>{level}</span>
      </div>
    </div>
  );
}

export default SkillCard;