import React, { useContext, useState, useEffect, memo } from 'react';
import { PortfolioContext } from '../Portfolio/PortfolioContext';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'type', headerName: 'Type', width: 130 },
  { field: 'amount', headerName: 'Amount', width: 130 }
];

function Assets() {
    const { assets, debts } = useContext(PortfolioContext);
console.log(assets, debts)
    return (
        <div style={{ height: 400, width: '100%' }}>
            <ol>
                {
                    assets.properties.map((el, index) => {
                        return (
                            <li key={index}>{el.name}: {el.amount}</li>
                        )
                    })
                }
            </ol>
        </div>
    );
}

export default memo(Assets);