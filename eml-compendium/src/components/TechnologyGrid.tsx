import type { Technology } from '../types/Technology';
import { TechnologyCard } from './TechnologyCard';
import './TechnologyGrid.css';

interface TechnologyGridProps {
  technologies: Technology[];
  onSelectTechnology: (technology: Technology) => void;
}

export function TechnologyGrid({ technologies, onSelectTechnology }: TechnologyGridProps) {
  return (
    <div className="technology-grid-container">
      <header className="grid-header">
        <h1>EML Technology Compendium</h1>
        <p className="grid-subtitle">
          Explore the technologies we use at EML to create innovative learning experiences
        </p>
      </header>
      
      <div className="technology-grid">
        {technologies.map((tech) => (
          <TechnologyCard
            key={tech.id}
            technology={tech}
            onClick={() => onSelectTechnology(tech)}
          />
        ))}
      </div>
    </div>
  );
}
