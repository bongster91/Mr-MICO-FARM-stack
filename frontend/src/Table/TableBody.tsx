import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableRowComponent from './TableRow';

function TableBodyComponent({rows}: any) {
    const type = rows[0][0].bank_accounts_id ? 'assets' : 'debts';
    const accountNames = {
        assets: [
            'Bank Accounts',
            'Investments',
            'Properties'
        ],
        debts: [
            'Bills',
            'Loans',
            'Credits', 
            'Expenses'
        ]
    };

    return (
        <TableBody>
            {
                rows.map((row: any, index: number) => (
                    <TableRowComponent 
                        key={index}
                        row={row}
                        type={accountNames[type][index]}
                    />
                ))
            }
        </TableBody>
    );
}

export default TableBodyComponent;