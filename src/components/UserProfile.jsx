import React from 'react';
import '../styles/components/userprofile.css';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src="/assets/user-avatar.jpg" alt="User" className="profile-avatar" />
        <div className="profile-info">
          <h2>DANIEL ARNOLD</h2>
          <p>@danny</p>
        </div>
      </div>
      <div className="profile-stats">
        <div className="stat">
          <span className="stat-number">1,234</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat">
          <span className="stat-number">567</span>
          <span className="stat-label">Following</span>
        </div>
        <div className="stat">
          <span className="stat-number">89</span>
          <span className="stat-label">Posts</span>
        </div>
      </div>
      <button className="edit-profile-btn">Edit Profile</button>
    </div>
  );
};

export default UserProfile;