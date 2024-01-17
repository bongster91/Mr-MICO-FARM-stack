import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material';

import { BottomBarSurfaceProps } from './types';

const BottomBarSurface: React.FC<BottomBarSurfaceProps> = ({children}) => {
    const theme = useTheme();

    return (
        <Box>
            <AppBar position="static">
                <Toolbar sx={{backgroundColor: theme.palette.primary.dark}}>
                    {children}
                </Toolbar>
                <div style={{position: 'relative'}}>2024 Mr.MICO LLC.</div>
            </AppBar>
        </Box>
    );
};

export default BottomBarSurface;