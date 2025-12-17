import { useNavigate } from 'react-router-dom';
import './GuideCard.css';

export function GuideCard({ guide }) {
  const navigate = useNavigate();

  return (
    <button
      className="guide-card"
      onClick={() => navigate(`/guide/${guide.id}`)}
    >
      <div className="guide-card-content">
        <h3 className="guide-card-title">{guide.title}</h3>
        <p className="guide-card-description">{guide.description}</p>
        <div className="guide-card-meta">
          <span className="guide-card-chapters">
            <ChaptersIcon />
            {guide.chapters} chapters
          </span>
          <span className="guide-card-duration">
            <ClockIcon />
            {guide.duration} min
          </span>
        </div>
      </div>
      <div className="guide-card-arrow">
        <ChevronIcon />
      </div>
    </button>
  );
}

function ChaptersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
