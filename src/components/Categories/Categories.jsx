import React, { useEffect, useState } from 'react';
import './Categories.css';
import Category from '../Category/Category';
const Categories = () => {
  const [categories, serCategories] = useState([]);
  useEffect(() => {
    fetch('category.json')
      .then(res => res.json())
      .then(data => serCategories(data));
  }, []);
  return (
    <div className="categories">
      <h1>Job Category List</h1>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="categories-item">
        {categories.map(category => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
