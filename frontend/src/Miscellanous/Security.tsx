import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function Security() {
    return (
        <Card className='misc-tab'>
            <CardContent>
                <Typography variant='h4'>Welcome to Security Center</Typography>
                <Typography variant='body1'>Our tools help you manage your data, protect your privacy and keep your accounts secure.</Typography> 
                <Typography variant='body1'>Together, we can protect you better.</Typography>
            </CardContent>
        </Card>
    );
}

export default Security;