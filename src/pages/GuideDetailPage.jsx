import { useParams, useNavigate } from 'react-router-dom';
import { ChapterList } from '../components/ChapterList';
import { getGuideById, getCategoryLabel } from '../data/guides';
import './GuideDetailPage.css';

export function GuideDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const guide = getGuideById(id);

  if (!guide) {
    return (
      <div className="page guide-detail-page">
        <header className="detail-header">
          <button className="back-button touch-target" onClick={() => navigate(-1)}>
            <BackIcon />
            <span>Back</span>
          </button>
        </header>
        <div className="guide-not-found">
          <p>Guide not found</p>
        </div>
      </div>
    );
  }

  const categoryLabel = getCategoryLabel(guide.category, guide.categoryId);

  return (
    <div className="page guide-detail-page">
      <header className="detail-header">
        <button className="back-button touch-target" onClick={() => navigate(-1)}>
          <BackIcon />
          <span>Back</span>
        </button>
        <span className="detail-header-category">{categoryLabel}</span>
      </header>

      <div className="guide-hero">
        <h1 className="guide-title">{guide.title}</h1>
        <p className="guide-description">{guide.description}</p>
        <div className="guide-meta">
          <div className="guide-meta-item">
            <BookIcon />
            <span>{guide.chapters} chapters</span>
          </div>
          <div className="guide-meta-item">
            <ClockIcon />
            <span>{guide.duration} min total</span>
          </div>
        </div>
      </div>

      <div className="guide-content">
        <div className="chapters-header">
          <h2 className="chapters-title">Chapters</h2>
          <button className="btn btn-primary start-button">
            Start Guide
          </button>
        </div>
        <ChapterList chapters={guide.chapterList} />
      </div>
    </div>
  );
}

function BackIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
