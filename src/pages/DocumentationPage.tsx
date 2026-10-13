import { docs } from '../docs/standards';

export default function DocumentationPage() {
  return (
    <div className="docs-page">
      <h1>{docs.title}</h1>
      <p className="docs-intro">
        Shared standards for all projects. Bots and developers should follow these so code stays consistent, modular, and maintainable.
      </p>
      {docs.sections.map((section) => (
        <section key={section.heading} className="docs-section">
          <h2>{section.heading}</h2>
          <div className="docs-content">
            {section.content.split('\n').map((line, i) => (
              <p key={i} className={line.startsWith('- ') ? 'docs-bullet' : ''}>
                {line.startsWith('- ') ? line.slice(2) : line}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
