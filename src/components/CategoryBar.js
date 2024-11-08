import React from 'react';

const CategoryBar = ({ onCategoryChange }) => {
  const categories = ['Movies', 'Stream', 'Events', 'Plays', 'Sports', 'Activities'];

  return (
    <div className="category-bar">
      {categories.map((category, index) => (
        <button 
          key={index} 
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
