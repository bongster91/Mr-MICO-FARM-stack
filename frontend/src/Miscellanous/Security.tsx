import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import useDarkTheme from '../DarkModeTheme';
import './styles.css';

function Security() {
    const { isDarkMode } = useDarkTheme();

    return (
        <Card className={isDarkMode ? 'dark-misc-tab' : 'misc-tab'}>
            <CardContent className={isDarkMode ? 'dark-misc-tab' : 'misc-tab'}>
                <Typography variant='h4'>Welcome to Security Center</Typography>
                <Typography variant='body1'>Our tools help you manage your data, protect your privacy and keep your accounts secure.</Typography> 
                <Typography variant='body1'>Together, we can protect you better.</Typography>
            </CardContent>
        </Card>
    );
}

export default Security;