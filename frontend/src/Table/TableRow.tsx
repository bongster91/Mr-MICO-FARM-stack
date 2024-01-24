import React, {useState, memo} from 'react';
import TableRowHeader from './TableRowHeader';
import TableRowChildren from './TableRowChildren';
import { findId } from '../Helper/findId';
import { assetTypes, debtTypes } from "../Modal/types";
import { RequestMethod, fetchRequest } from "../Api/Fetch";




function TableRowComponent({row, type, generalType, handleSuccessAlert}: any) {
    const [open, setOpen] = useState(false);
   
    const findAccountType = (accountType: any) => {
        const accountTypes = generalType === 'assets' ? assetTypes : debtTypes;
        const account = accountTypes.filter((el) => el.value === accountType.type);
     
        return account[0];
    };

    const handleDelete = async(e: any) => {
        const row = e;
        const id = findId(row);
        const accountType = findAccountType(row);

        const response = await fetchRequest('DELETE', accountType.type, undefined, id);
        console.log(response);
    };

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
                handleDelete={handleDelete}
                handleSuccessAlert={handleSuccessAlert}
            />
            
        </React.Fragment>
    );
}

export default memo(TableRowComponent);