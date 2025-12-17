import './CategoryPills.css';

export function CategoryPills({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="category-pills-container">
      <div className="category-pills">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-pill ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(cat.id)}
          >
            {cat.icon && <span className="category-icon">{cat.icon}</span>}
            <span className="category-label">{cat.shortLabel || cat.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
