import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = ({ checkedCount, uncheckedCount,isDarkMode }) => {
  const borderColor = isDarkMode ? '#ffffff' : '#000000';
  const checkedCountColor = isDarkMode ?'#3F9142' : '#3F9142';
  const uncheckedCountColor=isDarkMode ?'#142E15' :'#A0EDA4';
  const data = {
    labels: ['Checked', 'Unchecked'],
    datasets: [
      {
        data: [checkedCount, uncheckedCount],
        backgroundColor: [checkedCountColor, uncheckedCountColor], // Light green and dark green
        borderColor: [borderColor, borderColor], // Border color white for cleaner separation
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
