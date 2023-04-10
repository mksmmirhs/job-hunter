import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <div className="bg-home">
      <div className="home">
        <div className="home-description">
          <h1>
            One Step Closer To Your <span className="dream-job">Dream Job</span>
          </h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn-common">Get Started</button>
        </div>
        <img src="../../assets/All Images/P3OLGJ1 copy 1.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
