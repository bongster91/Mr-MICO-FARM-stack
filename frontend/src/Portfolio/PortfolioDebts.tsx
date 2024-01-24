import React from 'react';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useTheme } from '@mui/material';

import { insertCommas } from '../Helper/insertCommas';
import { calculateTotal } from '../Helper/calculateTotals';
import { PortfolioAssetsProps, PortfolioDebtsProps } from './types';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function PortfolioDebts({ totalDebtsAmount,debts }: PortfolioDebtsProps) {
    const theme = useTheme();
    const { bills, loans, credits, expenses } = debts;

    const data = {
        labels: [
            'Bills',
            'Loans',
            'Credits',
            'Expenses'
        ],
        datasets: [{
            label: 'Total',
            data: [
                calculateTotal(bills),
                calculateTotal(loans),
                calculateTotal(credits),
                calculateTotal(expenses)
            ],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(166, 237, 211)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(166, 237, 211)'
            ],
            hoverOffset: 4
        }]
    };

    const options = {

    };

    return (
        <Card>
            <CardContent>
                <Link to={'/debts'} style={{color: 'black', textDecoration: 'none'}}>
                    <CardHeader
                        title={`Debts`}
                        subheader={`$${insertCommas(totalDebtsAmount)}`}
                    />
                </Link>
                <div style={{width: '50%', height: '50%'}}>
                    <Pie
                        data={data}
                        options={options} 
                        />
                </div>
            </CardContent>
        </Card>
    );
}

export default PortfolioDebts;