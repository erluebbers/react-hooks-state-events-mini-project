import React from "react";

function CategoryFilter( {categories} ) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button>{categories[0]}</button>
      <button>{categories[1]}</button>
      <button>{categories[2]}</button>
      <button>{categories[3]}</button>
      <button>{categories[4]}</button>
    </div>
  );
}

export default CategoryFilter;
