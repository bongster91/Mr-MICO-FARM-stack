import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { NavBarSurfaceProps } from './types';
import { useTheme } from '@mui/material';
import useDarkTheme from '../DarkModeTheme';
import './styles.css';

const NavSurface: React.FC<NavBarSurfaceProps> = ({children}) => {
    const { isDarkMode } = useDarkTheme();

    return (
        <Box  sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className={isDarkMode ? 'dark-navbar' : 'navbar'}>
                    {children}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavSurface;