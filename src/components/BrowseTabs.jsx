import { BROWSE_MODES } from '../data/guides';
import './BrowseTabs.css';

export function BrowseTabs({ activeMode, onModeChange }) {
  const tabs = [
    { id: BROWSE_MODES.AGE, label: 'By Age' },
    { id: BROWSE_MODES.TOPIC, label: 'By Topic' },
    { id: BROWSE_MODES.SEASONAL, label: 'Seasonal' },
  ];

  return (
    <div className="browse-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`browse-tab ${activeMode === tab.id ? 'active' : ''}`}
          onClick={() => onModeChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
