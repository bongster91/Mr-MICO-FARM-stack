import React from 'react';
import Card from '@mui/material/Card';
import { CardContent, Typography } from '@mui/material';
import useDarkTheme from '../DarkModeTheme';
import './styles.css';

function CustomerService() {
    const { isDarkMode } = useDarkTheme();

    return (
        <Card className={isDarkMode ? 'dark-misc-tab' : 'misc-tab'}>
            <CardContent className={isDarkMode ? 'dark-misc-tab' : 'misc-tab'}>
                <Typography variant='h4'>Welcome to Customer Service</Typography>
                <Typography variant='body1'>We&apos;ll help you find a solution.</Typography>
                <Typography variant='body1'>Get the banking services help you need with Mr.MICO Customer Service. We&apos;ll help you find answers to your questions today!</Typography>
            </CardContent>
        </Card>
    );
}

export default CustomerService;