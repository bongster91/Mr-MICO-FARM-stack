import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

import TableCellComponent from './TableCell';
import { insertCommas } from '../Helper/insertCommas';
import { TableRowDataProps } from './types';
import { Asset, Debt } from '../Portfolio/types';

function TableRowData({ row, handleModalOpen, handleDelete }: TableRowDataProps) {
    return (
        <>
            {
                row?.map((el: Asset | Debt, index: number) => (
                    <TableRow key={index}>
                        <td style={{width: '60px', padding: 0, margin: 0, display: 'flex'}}>
                            <Button 
                                onClick={() => handleModalOpen(el)}
                                sx={{padding: 0, minWidth: '10px', p: '2px'}}
                            >
                                <EditIcon />
                            </Button>
                            <Button 
                                onClick={() => handleDelete(el)} 
                                sx={{padding: 0, minWidth: '10px', p: '2px'}}
                            >
                                <DeleteIcon />
                            </Button>
                        </td>
                        <td></td>
                        <TableCellComponent props={el.name} />
                        <TableCellComponent props={el.type} />
                        <TableCellComponent props={`$${insertCommas(el.amount)}`} />
                    </TableRow>
                ))
            }
        </>
    );
}

export default TableRowData;