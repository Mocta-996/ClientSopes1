
import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

function BarChart(){
    const [basicData] = useState({
        labels: ['Marcadores'],
        datasets: [
            {
                label: '2-0',
                backgroundColor: '#42A5F5',
                data: [65]
            },
            {
                label: '1-1',
                backgroundColor: '#FFA726',
                data: [59]
            },
            {
                label: '0-2',
                backgroundColor: '#66BB6A',
                data: [80]
            }
        ]
    });

    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .8,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        
        return {
            basicOptions            
        }
    }

    const { basicOptions} = getLightTheme();

    return (
        <div>
            <div className="card">
                <h5>Predicciones</h5>
                <Chart type="bar" data={basicData} options={basicOptions} />
            </div>
        </div>
    )
}
                 
export default BarChart