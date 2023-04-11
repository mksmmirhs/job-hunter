import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className="bg-header">
      <nav>
        <div className="logo">JobHunter</div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="statistics">Statistics</Link>
          <Link to="apply">Applied Jobs</Link>
          <Link to="blog">Blog</Link>
        </div>
        <div>
          <button className="btn-common">Star Applying</button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
