import React from 'react';
import Typography from '@mui/material/Typography';

function NavItem() {
    return (
        <div>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Photos
            </Typography>
        </div>
    );
}

export default NavItem;