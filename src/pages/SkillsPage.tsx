import { skills } from '../docs/skills';

const categories = Array.from(new Set(skills.map((s) => s.category)));

export default function SkillsPage() {
  return (
    <div className="docs-page">
      <h1>Skills</h1>
      <p className="docs-intro">
        Studio and research skills available to bots. These define how work moves through the pipeline and how non-build tasks are handled.
      </p>
      {categories.map((cat) => (
        <section key={cat} className="docs-section">
          <h2>{cat}</h2>
          <div className="skills-list">
            {skills
              .filter((s) => s.category === cat)
              .map((skill) => (
                <div key={skill.name} className="skill-card">
                  <h3>{skill.name}</h3>
                  <p>{skill.description}</p>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
