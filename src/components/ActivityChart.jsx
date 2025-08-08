import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../styles/components/activitychart.css';
import { activityData, chartOptions } from '../data/activity';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ActivityChart = () => {
  return (
    <div className="activity-chart">
      <h2 className="chart-title">Activity Overview</h2>
      <div className="chart-container">
        <Line 
          data={activityData} 
          options={chartOptions} 
        />
      </div>
    </div>
  );
};

export default ActivityChart;