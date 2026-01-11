import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({ onSearch, placeholder = "Search articles, tutorials, insights..." }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    const value = e?.target?.value;
    setSearchValue(value);
    onSearch(value);
  };

  const handleClear = () => {
    setSearchValue('');
    onSearch('');
  };

  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <Icon name="Search" size={20} className="text-muted-foreground" />
      </div>
      <Input
        type="search"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleSearch}
        className="pl-12 pr-12 h-12 md:h-14 text-base md:text-lg"
      />
      {searchValue && (
        <button
          onClick={handleClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted transition-colors duration-200"
          aria-label="Clear search"
        >
          <Icon name="X" size={18} className="text-muted-foreground" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;