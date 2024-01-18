import React, { EventHandler } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import{ Box }from '@mui/material';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Backdrop from '@mui/material/Backdrop';
import { useTheme } from '@mui/material';

import { ModalPopUpProps, assetTypes, debtTypes } from './types';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    bgcolor: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


function ModalPopUp({...props}: ModalPopUpProps){
    const { type, isModalOpen, handleModalOpen } = props;
    const theme = useTheme();

    const handleChange = (e: any) => {
        console.log(e.target)
    }

    const handleSubmit = (e: any) => {
        console.log(e)
    };

    return (
        <Modal
            open={isModalOpen}
            onClose={handleModalOpen}
            closeAfterTransition
            style={{
                top: '30%', 
                left: '30%', 
                width: 600, 
                height: 300, 
                backgroundColor: 'white'
            }}
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
            <Box component={'form'} 
                sx={{ 
                    width: 600, 
                    height: 300, 
                    flex: 'space-between', 
                    justifyContent: 'space-between', 
                    boxShadow: 24
                }}>
                <TextField
                    required
                    id="outlined-required"
                    label="Title"
                    onChange={handleChange}
                    value
                />
                <TextField
                    id='outlined-required'
                    select
                    label='Type'
                    onChange={handleChange}
                    defaultValue={type === 'assets' ? 'Checking' : 'Household'}
                >
                    {
                        type === 'assets' 
                        ?
                            assetTypes.map((asset, index) => {
                                return <MenuItem key={index} value={asset.value}>{asset.label}</MenuItem>
                            })
                        :
                            debtTypes.map((debt, index) => {
                                return <MenuItem key={index} value={debt.value}>{debt.label}</MenuItem>
                            })
                    }
                </TextField>
                <TextField
                    required
                    id="outlined-required"
                    label="Amount"
                    onChange={handleChange}
                />
                <Button 
                    onClick={handleSubmit} 
                    style={{
                        outline: '1px solid black', 
                        color: 'black',
                        backgroundColor: theme.palette.primary.main,
                        outlineColor: theme.palette.primary.main
                    }}>
                        Submit
                    </Button>
            </Box>
        </Modal>
    );
}

export default ModalPopUp;