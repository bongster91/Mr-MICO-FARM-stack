import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function Contact() {
    return (
        <Card className='misc-tab'>
            <CardContent>
                <Typography variant='h6'>If you need to contact us, we&apos;re here to help.</Typography>
                <Typography variant='h6'>Get online and mobile banking support, or help with your account.</Typography>
                <Typography variant='h6'>Call Mr.MICO Customer Service: 1-800-935-9935</Typography>
                <Typography variant='h6'>Get support from Chase Accessibility Services</Typography>
            </CardContent>
        </Card>
    );
}

export default Contact;