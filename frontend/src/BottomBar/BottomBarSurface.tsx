import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { BottomBarSurfaceProps } from './types';

const BottomBarSurface: React.FC<BottomBarSurfaceProps> = ({children}) => {
    return (
        <Box sx={{ flexGrow: 1, position: 'absolute', bottom: '0'}}>
            <AppBar position="static">
                <Toolbar>
                    {children}
                </Toolbar>
                <div style={{position: 'relative'}}>2024 Mr.MICO LLC.</div>
            </AppBar>
        </Box>
    );
};

export default BottomBarSurface;