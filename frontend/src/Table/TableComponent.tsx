import React, { memo } from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

import TableHeadComponent from './TableHead';
import TableBodyComponent from './TableBody';
import { Asset } from '../Portfolio/types';


function createData(asset: Asset) {
    return asset;
}

function TableComponent({props, handleSuccessAlert}: any) {
    const assetsProps = [
        createData(props.bank_accounts),
        createData(props.investments),
        createData(props.properties)
    ];
    const debtsProps = [
        createData(props.bills),
        createData(props.loans),
        createData(props.credits),
        createData(props.expenses)
    ];
  
    return (
        <TableContainer component={Paper} >
            <Table aria-label="collapsible table">
                <TableHeadComponent />
                <TableBodyComponent 
                    rows={props.assets_id ? assetsProps : debtsProps} 
                    type={props.assets_id ? 'assets' : 'debts'}
                    handleSuccessAlert={handleSuccessAlert}
                />
            </Table>
        </TableContainer>
    );
}

export default memo(TableComponent);