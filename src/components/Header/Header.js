import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <h2 className="freind">Friend's Info</h2>
      <nav>
        <a href="/activity">Activity</a>
        <a href="/others">Others</a>
        <a href="/list">All friend list</a>
      </nav>
      
    </div>
  );
};

export default Header;