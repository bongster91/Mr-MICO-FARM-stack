import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import useDarkTheme from '../DarkModeTheme';
import './styles.css';

function Contact() {
    const { isDarkMode } = useDarkTheme();

    return (
        <Card className={isDarkMode ? 'dark-misc-tab' : 'misc-tab'}>
            <CardContent className={isDarkMode ? 'dark-misc-tab' : 'misc-tab'}>
                <Typography variant='h6'>If you need to contact us, we&apos;re here to help.</Typography>
                <Typography variant='h6'>Get online and mobile banking support, or help with your account.</Typography>
                <Typography variant='h6'>Call Mr.MICO Customer Service: 1-800-935-9935</Typography>
                <Typography variant='h6'>Get support from Chase Accessibility Services</Typography>
            </CardContent>
        </Card>
    );
}

export default Contact;