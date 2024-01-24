import React, {memo} from 'react';
import TableBody from '@mui/material/TableBody';
import TableRowComponent from './TableRow';

type TableBodyComponentProp = {
    rows: any;
    type: string;
    handleSuccessAlert: () => void;
}

function TableBodyComponent({rows, type, handleSuccessAlert}: TableBodyComponentProp) {
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

    const rowType = type === 'assets' ? accountNames.assets : accountNames.debts;

    return (
        <TableBody>
            {
                rows.map((row: any, index: number) => (
                    <TableRowComponent 
                        key={index}
                        row={row}
                        type={rowType[index]}
                        generalType={type}
                        handleSuccessAlert={handleSuccessAlert}
                    />
                ))
            }
        </TableBody>
    );
}

export default memo(TableBodyComponent);