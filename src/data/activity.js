export const activityData = {

  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  
  datasets: [
    {
      label: 'Posts',        
      data: [12, 19, 15, 27, 22, 30, 25, 18, 24, 28, 32, 35],  
      borderColor: '#4361ee', 
      backgroundColor: 'rgba(67, 97, 238, 0.1)', 
      tension: 0.3,           
      fill: true    
    },          
    {
      label: 'Engagement',   
      data: [8, 12, 18, 15, 20, 25, 22, 28, 24, 30, 34, 40],   
      borderColor: '#4cc9f0', 
      backgroundColor: 'rgba(76, 201, 240, 0.1)', 
      tension: 0.3,           
      fill: true              
    },
    {
      label: 'New Followers', 
      data: [15, 22, 18, 30, 25, 28, 32, 25, 30, 35, 40, 45], 
      borderColor: '#f72585', 
      backgroundColor: 'rgba(247, 37, 133, 0.1)', 
      tension: 0.3,           
      fill: true              
    }
  ]
};

export const chartOptions = {
  responsive: true,        
  maintainAspectRatio: false, 
  plugins: {
    legend: {
      position: 'top',     
      labels: {
        usePointStyle: true, 
        padding: 20       
      }
    },
    tooltip: {
      mode: 'index',       
      intersect: false     
    }
  },
  scales: {
    x: {
      grid: {
        display: false    
      }
    },
    y: {
      beginAtZero: true,  
      grace: '10%'        
    }
  },
  interaction: {
    mode: 'nearest',      
    axis: 'x'             
  }
};