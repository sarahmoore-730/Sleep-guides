import { useState, useMemo } from 'react';
import { BrowseTabs } from '../components/BrowseTabs';
import { CategoryPills } from '../components/CategoryPills';
import { GuideCard } from '../components/GuideCard';
import {
  BROWSE_MODES,
  AGE_GROUPS,
  TOPICS,
  SEASONAL,
  GUIDES,
  getGuidesByCategory,
} from '../data/guides';
import './HomePage.css';

export function HomePage() {
  const [browseMode, setBrowseMode] = useState(BROWSE_MODES.AGE);
  const [selectedCategory, setSelectedCategory] = useState(AGE_GROUPS[0].id);

  // Get categories based on browse mode
  const categories = useMemo(() => {
    switch (browseMode) {
      case BROWSE_MODES.AGE:
        return AGE_GROUPS;
      case BROWSE_MODES.TOPIC:
        return TOPICS;
      case BROWSE_MODES.SEASONAL:
        return SEASONAL;
      default:
        return AGE_GROUPS;
    }
  }, [browseMode]);

  // Reset category when browse mode changes
  const handleModeChange = (mode) => {
    setBrowseMode(mode);
    switch (mode) {
      case BROWSE_MODES.AGE:
        setSelectedCategory(AGE_GROUPS[0].id);
        break;
      case BROWSE_MODES.TOPIC:
        setSelectedCategory(TOPICS[0].id);
        break;
      case BROWSE_MODES.SEASONAL:
        setSelectedCategory(SEASONAL[0].id);
        break;
    }
  };

  // Get filtered guides
  const guides = useMemo(() => {
    return getGuidesByCategory(browseMode, selectedCategory);
  }, [browseMode, selectedCategory]);

  // Get current category label for display
  const currentCategoryLabel = useMemo(() => {
    const cat = categories.find(c => c.id === selectedCategory);
    return cat?.label || '';
  }, [categories, selectedCategory]);

  return (
    <div className="page home-page">
      <header className="header">
        <h1 className="header-title">Sleep Help</h1>
        <p className="header-subtitle">Browse guides to help your little one sleep better</p>
      </header>

      <BrowseTabs activeMode={browseMode} onModeChange={handleModeChange} />

      <section className="section">
        <CategoryPills
          categories={categories}
          activeCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </section>

      <section className="section">
        <h2 className="section-title">{currentCategoryLabel}</h2>
        <div className="guide-list">
          {guides.length > 0 ? (
            guides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))
          ) : (
            <div className="guide-list-empty">
              <p>No guides available for this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
