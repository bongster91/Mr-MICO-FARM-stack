import { elements } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const Chart = () => {
    
    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            borderColor: ['rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'],
            hoverOffset: 4
        }]
    };

    const options = {

    }

    const config = {
        type: 'doughnut',
        data: data,
    };
      

    return (
        <div style={{width: '50%', height: '50%'}}>
        <Doughnut
            data={data}
            options={options} 
        />
        </div>
    );
};

export default Chart;