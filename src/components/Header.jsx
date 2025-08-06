import React from 'react';
import { FiSearch, FiBell } from 'react-icons/fi';
import '../styles/components/header.css';

const Header = () => {
  return (
    <header className="dashboard-header">
      <div className="search-bar">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="header-actions">
        <button className="notification-btn">
          <FiBell />
          <span className="notification-badge">3</span>
        </button>
        <div className="user-avatar">
          <img src="/assets/user-avatar.jpg" alt="User" />
        </div>
      </div>
    </header>
  );
};

export default Header;