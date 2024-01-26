import React, { memo } from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

import TableHeadComponent from './TableHead';
import TableBodyComponent from './TableBody';
import { TableComponentProps } from './types';

function TableComponent({props, handleSuccessAlert}: TableComponentProps) {
    
    let tableProps = 'bank_accounts' in props ? 
        [
            props.bank_accounts,
            props.investments,
            props.properties
        ] :
        [
            props.bills,
            props.loans,
            props.credits,
            props.expenses
        ];
  
    return (
        <TableContainer component={Paper} >
            <Table aria-label="collapsible table">
                <TableHeadComponent />
                <TableBodyComponent 
                    rows={tableProps} 
                    type={'bank_accounts' in props ? 'assets' : 'debts'}
                    handleSuccessAlert={handleSuccessAlert}
                />
            </Table>
        </TableContainer>
    );
}

export default memo(TableComponent);