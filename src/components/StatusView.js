// src/components/StatusView.js
import React from 'react';

const StatusView = () => {
  return (
    <div className="my-4">
      <h2 className="text-3xl font-bold">View <span className=' text-blue-500'>Status</span></h2>
      <div className="bg-gray-100 p-4 rounded">
        <img src="/path/to/pie-chart.png" alt="Pie Chart" />
      </div>
    </div>
  );
};

export default StatusView;
