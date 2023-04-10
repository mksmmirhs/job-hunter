import React from 'react';
import './Category.css';
const Category = ({ category }) => {
  const { logo, name, jobsAvailable } = category;
  return (
    <div className="category">
      <img src={logo} alt="" />
      <h3>{name}</h3>
      <p>{jobsAvailable} Jobs Available</p>
    </div>
  );
};

export default Category;
