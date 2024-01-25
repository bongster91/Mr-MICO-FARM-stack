import React from 'react';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useTheme, Box } from '@mui/material';

import { insertCommas } from '../Helper/insertCommas';
import { calculateTotal } from '../Helper/calculateTotals';
import { PortfolioAssetsProps } from './types';
import useDarkTheme from '../DarkModeTheme';
import './styles.css';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function PortfolioAssets({totalAssetsAmount, assets}: PortfolioAssetsProps) {
    const { isDarkMode } = useDarkTheme();
    const { bank_accounts, investments, properties } = assets;
    const data = {
        labels: [
            'Bank Accounts',
            'Investments',
            'Properties'
        ],
        datasets: [{
            label: 'Total',
            data: [
                calculateTotal(bank_accounts),
                calculateTotal(investments),
                calculateTotal(properties)
            ],
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

    };

    return (
        <Card >
            <CardContent className={ isDarkMode ? 'dark-portfolio-assets-container' : 'portfolio-assets-container' }>
                <Box>
                    <Link to={'/assets'} style={{color: 'black', textDecoration: 'none'}}>
                        <CardHeader
                            title={`Assets`}
                            subheader={`$${insertCommas(totalAssetsAmount)}`}
                        />
                    </Link>
                    <div style={{width: '50%', height: '50%'}}>
                        <Pie
                            data={data}
                            options={options} 
                        />
                    </div>
                </Box>
            </CardContent>
        </Card>
    );
}

export default PortfolioAssets;