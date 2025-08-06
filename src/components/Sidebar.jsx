import React from 'react';
import { FiHome, FiUsers, FiMessageSquare, FiSettings, FiLogOut } from 'react-icons/fi';
import '../styles/components/sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h1>MyMedia</h1>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className="active">
            <FiHome />
            <span>Dashboard</span>
          </li>
          <li>
            <FiUsers />
            <span>Network</span>
          </li>
          <li>
            <FiMessageSquare />
            <span>Messages</span>
          </li>
          <li>
            <FiSettings />
            <span>Settings</span>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <button className="logout-btn">
          <FiLogOut />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;