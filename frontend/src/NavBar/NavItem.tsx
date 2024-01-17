import React from 'react';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

import { NavItemProps } from './types';

function NavItem({ item }: any) {
    const theme = useTheme();
    const {
        title,
        redirect
    } = item;
    
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={redirect} style={{color: 'black', textDecoration: 'none'}}> 
                {title}
            </Link>
        </Typography>
    );
}

export default NavItem;