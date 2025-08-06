import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import UserProfile from '../components/UserProfile';
import StatsCard from '../components/StatsCard';
import ActivityChart from '../components/ActivityChart';
import Post from '../components/Post';
import { statsData } from '../data/stats';
import { postsData } from '../data/posts';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard-content">
          <div className="left-column">
            <UserProfile />
            <div className="stats-grid">
              {statsData.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>
            <ActivityChart />
          </div>
          <div className="right-column">
            <h2 className="section-title">Recent Posts</h2>
            <div className="posts-feed">
              {postsData.map((post, index) => (
                <Post key={index} {...post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;