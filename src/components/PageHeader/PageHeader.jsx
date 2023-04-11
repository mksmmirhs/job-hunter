import React from 'react';
import './PageHeader.css';

const PageHeader = ({ header }) => {
  return (
    <div className="bg-home">
      <h1 className="page-header">{header}</h1>
    </div>
  );
};

export default PageHeader;
