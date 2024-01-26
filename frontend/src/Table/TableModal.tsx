import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import{ Box }from '@mui/material';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Backdrop from '@mui/material/Backdrop';
import { useTheme } from '@mui/material';
import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';

import { assetTypes, debtTypes } from '../Modal/types';
import { handleRequest, findAccountType, findType, handlePutRequest } from '../Modal/ModalRequest';
import { TableModalProps } from './types';
import useDarkTheme from '../DarkModeTheme';


function TableModal({props, handleSuccessAlert}: TableModalProps){
    const { isDarkMode } = useDarkTheme();
    const { name, amount, type } = props;
    const generalType = findType(props);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [formValue, setFormValue] = useState({
        name: name,
        type: type,
        amount: amount
    });

    const theme = useTheme();

    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleChange = (e: any) => {
        if (generalType === 'assets') {
            e.target.id 
            ?
                setFormValue((prev) => ({ ...prev, [e.target.id]: e.target.value, assets_id: 1 })) 
            : 
                setFormValue((prev) => ({ ...formValue, [e.target.name]: e.target.value, assets_id: 1 })); 
        } else {
            e.target.id 
            ?
                setFormValue((prev) => ({ ...prev, [e.target.id]: e.target.value, debts_id: 1 })) 
            : 
                setFormValue((prev) => ({ ...formValue, [e.target.name]: e.target.value, debts_id: 1 })); 
        };
    };

    const handleSubmit = async(e: any) => {
        e.preventDefault();
        
        const accountType = findAccountType(generalType, formValue);
        const response = await handlePutRequest(accountType.type, 'PUT', formValue, props);

        return handleSuccessAlert(response);
    };

    return (
        <Modal
            className={isDarkMode ? 'dark-table-modal' : 'table-modal'}
            open={isModalOpen}
            onClose={handleModalOpen}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                    style: {
                        backgroundColor: 'rgba(255,255,255,0.2)',
                    }
                }
            }}
        >
            <Box 
                className={isDarkMode ? 'dark-table-modal-form' : 'table-modal-form'}
                component={'form'} 
            >
                <TextField
                    required
                    id="name"
                    label="Title"
                    onChange={handleChange}
                    value={formValue.name}
                />
                <TextField
                    id='type'
                    className='modal-dropdown'
                    name='type'
                    select
                    label='Type'
                    onChange={handleChange}
                    value={formValue.type}
                    defaultValue={generalType === 'assets' ? 'Checking' : 'Household'}
                >
                    {
                        generalType === 'assets' 
                        ?
                            assetTypes.map((asset, index) => {
                                return <MenuItem key={index} value={asset.value}>{asset.label}</MenuItem>;
                            })
                        :
                            debtTypes.map((debt, index) => {
                                return <MenuItem key={index} value={debt.value}>{debt.label}</MenuItem>;
                            })
                    }
                </TextField>
                <TextField
                    required
                    id="amount"
                    label="Amount"
                    onChange={handleChange}
                    value={formValue.amount}
                />
                <Button 
                    className='modal-submit-button'
                    onClick={handleSubmit} 
                    style={{
                        backgroundColor: theme.palette.primary.dark,
                        outlineColor: theme.palette.primary.main
                    }}>
                        Submit
                </Button>
                <Button 
                    className='modal-cancel-button'
                    onClick={handleModalOpen} 
                    style={{
                        backgroundColor: theme.palette.primary.light,
                        outlineColor: theme.palette.primary.main
                    }}>
                        Cancel
                </Button>
            </Box>
        </Modal>
    );
}

export default TableModal;