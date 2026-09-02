import type { Technology } from '../types/Technology';
import './TechnologyCard.css';

interface TechnologyCardProps {
  technology: Technology;
  onClick: () => void;
}

export function TechnologyCard({ technology, onClick }: TechnologyCardProps) {
  return (
    <div className="technology-card" onClick={onClick}>
      <div className="card-image-container">
        <img 
          src={technology.thumbnail} 
          alt={technology.title}
          className="card-image"
        />
        <div className="card-overlay">
          <span className="card-category">{technology.category}</span>
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{technology.title}</h3>
        <p className="card-description">
          {technology.description.substring(0, 80)}...
        </p>
      </div>
    </div>
  );
}
