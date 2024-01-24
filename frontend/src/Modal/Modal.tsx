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

import { ModalPopUpProps, assetTypes, debtTypes } from './types';
import { handleRequest } from './ModalRequest';
import './style.css';


function ModalPopUp({...props}: ModalPopUpProps){
    const { type, isModalOpen, handleModalOpen, request, handleSuccessAlert } = props;
    const [formValue, setFormValue] = useState({
        name: '',
        type: '',
        amount: ''
    });

    const theme = useTheme();

    const handleChange = (e: any) => {
        if (type === 'assets') {
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
        const response = await handleRequest(type, request, formValue);

        if (response === 'Success') handleSuccessAlert('Success');
    };

    return (
        <Modal
            className='modal'
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
                className='modal-form-box'
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
                    defaultValue={type === 'assets' ? 'Checking' : 'Household'}
                >
                    {
                        type === 'assets' 
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

export default ModalPopUp;