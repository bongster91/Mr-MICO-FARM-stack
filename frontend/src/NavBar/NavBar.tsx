import * as React from 'react';

import NavSurface from './NavSurface';
import NavMenu from './NavMenu';
import UserButton from './UserButton';
import NavItem from './NavItem';

export default function MenuAppBar() {
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
            <NavMenu />
            <NavItem />
            {auth && ( 
                <UserButton  
                    handleMenu={handleMenu}
                    anchorEl={anchorEl}
                    handleClose={handleClose}
                /> 
            )}
        </NavSurface>
    );
}