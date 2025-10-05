import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const OrderSummaryChart = ({ subtotal, deliveryFee }) => {
  const data = {
    labels: ['Subtotal', 'Delivery Fee'],
    datasets: [
      {
        data: [subtotal, deliveryFee],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Order Cost Summary' },
    },
  };

  return <Pie data={data} options={options} />;
};

export default OrderSummaryChart;