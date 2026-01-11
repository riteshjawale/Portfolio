import { useState } from 'react';

import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const FilterBar = ({ categories, selectedCategory, onCategoryChange, searchQuery, onSearchChange, sortBy, onSortChange }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const sortOptions = [
    { value: 'recent', label: 'Most Recent', icon: 'Calendar' },
    { value: 'popular', label: 'Most Popular', icon: 'TrendingUp' },
    { value: 'alphabetical', label: 'A-Z', icon: 'ArrowDownAZ' }
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
        <div className="flex-1">
          <Input
            type="search"
            placeholder="Search projects by name, technology, or description..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e?.target?.value)}
            className="w-full"
          />
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="default"
            iconName="Filter"
            iconPosition="left"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden"
          >
            Filters
          </Button>

          <div className="hidden lg:flex items-center gap-2">
            {sortOptions?.map((option) => (
              <Button
                key={option?.value}
                variant={sortBy === option?.value ? 'default' : 'outline'}
                size="sm"
                iconName={option?.icon}
                iconPosition="left"
                onClick={() => onSortChange(option?.value)}
              >
                {option?.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-mono text-muted-foreground">Filter by:</span>
          {categories?.map((category) => (
            <Button
              key={category?.value}
              variant={selectedCategory === category?.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => onCategoryChange(category?.value)}
            >
              {category?.label}
              {category?.count > 0 && (
                <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-primary/20">
                  {category?.count}
                </span>
              )}
            </Button>
          ))}
        </div>
      </div>
      <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-2">
        {sortOptions?.map((option) => (
          <Button
            key={option?.value}
            variant={sortBy === option?.value ? 'default' : 'outline'}
            size="sm"
            iconName={option?.icon}
            iconPosition="left"
            onClick={() => onSortChange(option?.value)}
            className="flex-shrink-0"
          >
            {option?.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;