import React from 'react';
import TableRow from '@mui/material/TableRow';

import TableArrowButton from './TableArrowButton';
import TableCellComponent from './TableCell';

function TableRowHeader({row, type, open, setOpen}: any) {
    return (
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableArrowButton open={open} setOpen={setOpen} />
            <TableCellComponent props={type} />
            <TableCellComponent props={row.name} />
            <TableCellComponent props={row.type} />
            <TableCellComponent props={row.amount} />
        </TableRow>
    );
}

export default TableRowHeader;