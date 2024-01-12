import React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

import TableHeadComponent from './TableHead';
import TableBodyComponent from './TableBody';
import { Asset } from '../Portfolio/types';


function createData(asset: Asset) {
    return asset;
}

function TableComponent({props}: any) {
    const rows = [
        createData(props.bank_accounts),
        createData(props.investments),
        createData(props.properties)
    ];
  
    return (
        <TableContainer component={Paper} >
            <Table aria-label="collapsible table">
                <TableHeadComponent />
                <TableBodyComponent rows={rows} />
            </Table>
        </TableContainer>
    );
}

export default TableComponent;