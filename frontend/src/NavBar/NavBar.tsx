import React, { useState, useContext, MouseEvent } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';

import NavSurface from './NavSurface';
import NavMenu from './NavMenu';
import UserButton from './UserButton';
import NavItem from './NavItem';
import { DarkModeContext, NavItemProps, navItems } from './types';
import useDarkTheme from '../DarkModeTheme';

const NavBar = () => {
    const { isDarkMode, changeDarkMode } = useDarkTheme();
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <NavSurface>
            {
                navItems.map((item: NavItemProps, index) => {
                    return (
                        <NavItem item={item} key={index} />
                    );
                })
            }
            {   
                isDarkMode ?
                <LightModeIcon onClick={changeDarkMode} />
                : <DarkModeIcon  onClick={changeDarkMode}/>
            }
            {
                auth && ( 
                    <UserButton  
                        handleMenu={handleMenu}
                        anchorEl={anchorEl}
                        handleClose={handleClose}
                    /> 
                )
            }
        </NavSurface>
    );
};

export default NavBar;
