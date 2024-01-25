import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material';
import './styles.css';

import { BottomBarSurfaceProps } from './types';
import useDarkTheme from '../DarkModeTheme';

const BottomBarSurface: React.FC<BottomBarSurfaceProps> = ({children}) => {
    const { isDarkMode } = useDarkTheme();

    return (
        <Box>
            <AppBar position="static">
                <Toolbar className={isDarkMode ? 'dark-bottombar' : 'bottombar'}>
                    {children}
                </Toolbar>
                <div style={{position: 'relative'}}>2024 Mr.MICO LLC.</div>
            </AppBar>
        </Box>
    );
};

export default BottomBarSurface;