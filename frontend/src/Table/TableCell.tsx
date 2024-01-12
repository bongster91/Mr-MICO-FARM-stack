import React, {memo} from 'react';
import TableCell from '@mui/material/TableCell';

function TableCellComponent({props}: any) {
    return (
        <TableCell align='left'>{props}</TableCell>
    );
}

export default memo(TableCellComponent);