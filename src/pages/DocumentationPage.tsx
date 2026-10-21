import { useState } from 'react';
import { docs } from '../docs/standards';
import SkillsPage from './SkillsPage';

type DocTab = 'standards' | 'skills';

export default function DocumentationPage() {
  const [tab, setTab] = useState<DocTab>('standards');

  return (
    <div className="docs-page">
      <div className="docs-subnav">
        <button
          className={tab === 'standards' ? 'subnav-item active' : 'subnav-item'}
          onClick={() => setTab('standards')}
        >
          Standards
        </button>
        <button
          className={tab === 'skills' ? 'subnav-item active' : 'subnav-item'}
          onClick={() => setTab('skills')}
        >
          Skills
        </button>
      </div>

      {tab === 'skills' ? (
        <SkillsPage />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
