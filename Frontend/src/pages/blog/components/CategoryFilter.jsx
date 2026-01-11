import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      {categories?.map((category) => {
        const isActive = activeCategory === category?.value;
        return (
          <button
            key={category?.value}
            onClick={() => onCategoryChange(category?.value)}
            className={`inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-lg font-mono text-sm md:text-base transition-all duration-200 ${
              isActive
                ? 'bg-primary text-primary-foreground shadow-md scale-105'
                : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
            }`}
          >
            <Icon name={category?.icon} size={18} />
            <span>{category?.label}</span>
            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
              isActive ? 'bg-primary-foreground/20' : 'bg-background'
            }`}>
              {category?.count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;