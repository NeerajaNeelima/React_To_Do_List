import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = ({ checkedCount, uncheckedCount }) => {
  const data = {
    labels: ['Checked', 'Unchecked'],
    datasets: [
      {
        data: [checkedCount, uncheckedCount],
        backgroundColor: ['#3F9142', '#142E15'], // Light green and dark green
        borderColor: ['#ffffff', '#ffffff'], // Border color white for cleaner separation
        borderWidth: 2, // Adjust border width
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    cutout: '60%', // Donut shape with cutout in the middle
  };

  return (
    <div style={{ width: '151px', height: '151px', margin: '0 auto' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
