import React from 'react';
import { Bar } from 'react-chartjs-2';

import { data1, options1 } from './ChartData';

const Chart = () => {
   return (
      <div>
         <Bar data={data1} options={options1} />
      </div>
   );
};

export default Chart;
