import React, { useState } from "react";

function CategoryFilter( {categories, selectedCategory, setCategory, setCategorizedTasks} ) {
  

  const buttons = categories.map(category => {
    const className = category === selectedCategory ? "selected" : null

    return ( 
      <button 
        onClick={() => setCategory(category)}
        className={className}
        key={category} 
        >
          {category}
      </button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
