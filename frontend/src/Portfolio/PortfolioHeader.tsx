import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { insertCommas } from '../Helper/insertCommas';
import { PortfolioHeaderProps } from './types';

function PortfolioHeader({totalAssetsAmount, totalDebtsAmount}: PortfolioHeaderProps) {
    
    return (
        <Card>
            <CardContent>
                <Typography component={'h1'} variant='h4'>Portfolio</Typography>
                <Typography component={'h2'} variant='h5'>
                        Net Worth: ${insertCommas(totalAssetsAmount - totalDebtsAmount)}
                 </Typography>
            </CardContent>
        </Card>
    );
}

export default PortfolioHeader;