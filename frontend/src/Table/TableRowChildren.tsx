import React, {memo} from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

import TableCellComponent from './TableCell';
import {insertCommas} from '../Helper/insertCommas';
import { TableRowChildrenProps } from './types';

function TableRowChildren({row, open, handleDelete}: TableRowChildrenProps) {
   
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
                                            <td style={{width: '60px', padding: 0, margin: 0, display: 'flex'}}>
                                                <Button sx={{outline: '1px solid black', padding: 0, minWidth: '10px', p: '2px'}}>
                                                    <EditIcon />
                                                </Button>
                                                <Button onClick={() => handleDelete(el)} sx={{outline: '1px solid black', padding: 0, minWidth: '10px', p: '2px'}}>
                                                    <DeleteIcon />
                                                </Button>
                                            </td>
                                            <td>

                                            {/* <Checkbox value={el} onSubmit={handleDelete} /> */}
                                            </td>
                                            <TableCellComponent props={el.name} />
                                            <TableCellComponent props={el.type} />
                                            <TableCellComponent props={`$${insertCommas(el.amount)}`} />
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