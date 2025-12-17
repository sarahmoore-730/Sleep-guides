import './ChapterList.css';

export function ChapterList({ chapters }) {
  return (
    <div className="chapter-list">
      {chapters.map((chapter, index) => (
        <button key={chapter.id} className="chapter-item">
          <div className="chapter-number">{index + 1}</div>
          <div className="chapter-content">
            <h4 className="chapter-title">{chapter.title}</h4>
            <span className="chapter-duration">{chapter.duration} min</span>
          </div>
          <div className="chapter-action">
            <PlayIcon />
          </div>
        </button>
      ))}
    </div>
  );
}

function PlayIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
