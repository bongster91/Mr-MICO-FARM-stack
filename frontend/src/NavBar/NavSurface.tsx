import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { NavBarSurfaceProps } from './types';


const NavSurface: React.FC<NavBarSurfaceProps> = ({children}) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {children}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavSurface;