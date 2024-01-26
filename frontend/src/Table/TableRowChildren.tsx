import React, {memo, useState} from 'react';
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
import TableModal from './TableModal';
import TableRowData from './TableRowData';

function TableRowChildren({row, open, handleDelete, handleSuccessAlert}: TableRowChildrenProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        type: '',
        amount: 0
    });

    const handleModalOpen = (el:any) => {
        setIsModalOpen(!isModalOpen);
        setFormValues(el);
    };

    return (
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>  
                        <Table size="small" aria-label="purchases">
                                
                            <TableBody>
                                <tr>
                                    <td>
                                        {
                                            isModalOpen ?
                                                <TableModal 
                                                    props={formValues}
                                                    handleSuccessAlert={handleSuccessAlert}
                                                />
                                            : ''
                                        }
                                    </td>
                                </tr>
                                <TableRowData
                                    row={row}
                                    handleModalOpen={handleModalOpen}
                                    handleDelete={handleDelete}
                                />
                            </TableBody>

                        </Table>
                    </Box>
                </Collapse>
                    
            </TableCell>
        </TableRow>
    );
}

export default memo(TableRowChildren);