import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register the required components
ChartJS.register(
  CategoryScale, // This is for the 'category' scale
  LinearScale,   // This is for the 'linear' scale (y-axis)
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const graphData = {
  labels: ['2024-09-11', '2024-09-12', '2024-09-13', '2024-09-14'],
  datasets: [
    {
      label: 'Price over Time',
      data: [100, 120, 150, 170],
      borderColor: 'rgba(75,192,192,1)',
      fill: false,
    },
  ],
};

const ViewGraph = () => {
  // Calculate total amount
  const totalAmount = graphData.datasets[0].data.reduce((acc, value) => acc + value, 0);

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <div style={{ flex: 1 }}>
        <h2>Graph Detail</h2>
        <Line data={graphData} />
      </div>
      <div style={{ width: '250px', marginLeft: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', marginTop:"7%" }}>
        <h3>Details</h3>
        <p><strong>Total Amount:</strong> ${totalAmount}</p>
        {/* Add more details here if needed */}
      </div>
    </div>
  );
};

export default ViewGraph;
