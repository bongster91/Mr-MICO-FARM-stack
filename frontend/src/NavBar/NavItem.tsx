import React from 'react';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';

import { NavItemProps } from './types';

function NavItem({ item }: any) {
    const {
        title,
        redirect
    } = item;
    
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* <Link to={redirect}> 
                {title} */}
            {/* <Link to='/'> */}
                Home
            {/* </Link> */}
        </Typography>
    );
}

export default NavItem;