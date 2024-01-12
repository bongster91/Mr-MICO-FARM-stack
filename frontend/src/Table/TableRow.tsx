import React, {useState} from 'react';
import TableRowHeader from './TableRowHeader';
import TableRowChildren from './TableRowChildren';

function TableRowComponent({row, type}: any) {
    const [open, setOpen] = useState(false);
    

    return (
        <React.Fragment>
            
            <TableRowHeader 
                row={row}
                type={type}
                open={open}
                setOpen={setOpen}
            />

            <TableRowChildren 
                row={row}
                open={open}
            />
            
        </React.Fragment>
    );
}

export default TableRowComponent;