import React from 'react';
import { Typography } from '@mui/material';

import { BottomBarItemProps } from './types';

function BottomBarItem({item}: BottomBarItemProps) {
    const { title, description, icon} = item;
    
    return (
        <div>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, padding: '10px' }}>
                {title}
            </Typography>
            <Typography variant='caption' component='div' sx={{ flex: 'true', padding: '10px', margin: '5px'}}>
                {description}
            </Typography>
        </div>
    );
}

export default BottomBarItem;