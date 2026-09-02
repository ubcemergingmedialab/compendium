import type { Technology } from '../types/Technology';
import './TechnologyDetail.css';

interface TechnologyDetailProps {
  technology: Technology;
  onClose: () => void;
}

export function TechnologyDetail({ technology, onClose }: TechnologyDetailProps) {
  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="detail-content">
          <div className="detail-hero">
            <img 
              src={technology.image} 
              alt={technology.title}
              className="detail-image"
            />
            <div className="detail-hero-info">
              <span className="detail-category">{technology.category}</span>
              <h1 className="detail-title">{technology.title}</h1>
            </div>
          </div>

          <div className="detail-body">
            <section className="detail-section">
              <h2>About</h2>
              <p className="detail-description">{technology.description}</p>
            </section>

            <section className="detail-section">
              <h2>Documentation</h2>
              <div className="link-grid">
                {technology.documentation.map((doc, index) => (
                  <a 
                    key={index}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="doc-link"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                    </svg>
                    <span>{doc.title}</span>
                    <svg className="external-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                ))}
              </div>
            </section>

            <section className="detail-section">
              <h2>Projects Using This Technology</h2>
              <div className="projects-list">
                {technology.projects.map((project, index) => (
                  <div key={index} className="project-card">
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    {project.documentationUrl && (
                      <a 
                        href={project.documentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        View Documentation
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
