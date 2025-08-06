import React from 'react';
import '../styles/components/statscard.css';

const StatsCard = ({ title, value, change, icon: Icon, trend }) => {
  return (
    <div className="stats-card">
      <div className="stats-info">
        <h3>{title}</h3>
        <p className="stats-value">{value}</p>
        <p className={`stats-change ${trend}`}>
          {change} {trend === 'up' ? '↑' : '↓'}
        </p>
      </div>
      <div className="stats-icon">
        <Icon />
      </div>
    </div>
  );
};

export default StatsCard;