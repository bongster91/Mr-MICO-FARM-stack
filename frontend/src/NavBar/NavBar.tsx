import * as React from 'react';

import NavSurface from './NavSurface';
import NavMenu from './NavMenu';
import UserButton from './UserButton';
import NavItem from './NavItem';
import { NavItemProps, navItems } from './types';

const NavBar = () => {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
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
