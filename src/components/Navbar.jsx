import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>RecoverMe</h1>
      </div>
      <div className="navbar-links">
        <a href="#exercises" className="nav-link">Exercise Library</a>
        <a href="#profile" className="nav-link">Profile</a>
        <a href="#dashboard" className="nav-link">Dashboard</a>
      </div>
    </nav>
  );
};

export default Navbar;