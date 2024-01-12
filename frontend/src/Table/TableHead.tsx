import React, {memo} from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import TableCellComponent from './TableCell';

function TableHeadComponent() {
    return (
        <TableHead >
            <TableRow >
                <TableCellComponent />
                <TableCellComponent props={'Name'} />
                <TableCellComponent props={'Type'} />
                <TableCellComponent props={'Amount'} />
            </TableRow>
        </TableHead>
    );
}

export default memo(TableHeadComponent);