import React, {memo} from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import TableCellComponent from './TableCell';

function TableRowChildren({row, open}: any) {
    return (
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>  
                        <Table size="small" aria-label="purchases">
                                
                            <TableBody>
                                {
                                    row?.map((el: any, index: number) => (
                                        <TableRow key={index}>
                                            <TableCellComponent />
                                            <TableCellComponent props={el.name} />
                                            <TableCellComponent props={el.type} />
                                            <TableCellComponent props={el.amount} />
                                        </TableRow>
                                    ))
                                }
                            </TableBody>

                        </Table>
                    </Box>
                </Collapse>
                    
            </TableCell>
        </TableRow>
    );
}

export default memo(TableRowChildren);