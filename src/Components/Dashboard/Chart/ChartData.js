export const data1 = {
   labels: ['2010', '2012', '2013', '2014', '2015', '2016'],
   datasets: [
      {
         label: 'Bar 1',
         data: [12, 19, 3, 5, 2, 3],
         backgroundColor: '#8DC73F',
      },
      {
         label: 'Bar 2',
         data: [2, 3, 20, 5, 1, 4],
         backgroundColor: '#FFAE3B',
      },
      {
         label: 'Bar 3',
         data: [3, 10, 13, 15, 22, 30],
         backgroundColor: '#FF3366',
      },
   ],
};

export const options1 = {
   responsive: true,
   legend: {
      position: 'top',
   },
   layout: {
      padding: {
         left: 50,
         right: 0,
         top: -40,
         bottom: 0,
      },
   },
   title: {
      display: true,
      text: 'Chart.js Bar Chart',
   },
   scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
};
