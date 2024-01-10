import React from 'react';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import { UserButtonProps } from './types';
import stringAvatar from '../Helper/StringManipulation';

function UserButton({
    handleMenu,
    anchorEl,
    handleClose
}: UserButtonProps) {

    return (
        <div>
            <Avatar {...stringAvatar('Mister Meowgi')} onClick={handleMenu} />
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
        </div>
    );
}

export default UserButton;