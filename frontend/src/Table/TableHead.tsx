import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function TableHeadComponent() {
    return (
        <TableHead>
            <TableRow>
                <TableCell />
                <TableCell>Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Amount</TableCell>
            </TableRow>
        </TableHead>
    );
}

export default TableHeadComponent;