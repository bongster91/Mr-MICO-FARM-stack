import React, { useContext, useState, useEffect, useMemo, memo } from 'react';
import { Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import{ Box }from '@mui/material';
import Alert from '@mui/material/Alert';

import { PortfolioContext } from '../Portfolio/PortfolioContext';
import { calculateTotal } from '../Helper/calculateTotals';
import TableComponent from '../Table/TableComponent';
import { insertCommas } from '../Helper/insertCommas';
import ModalPopUp from '../Modal/Modal';
import './style.css';

function Assets() {
    const { assets } = useContext(PortfolioContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [successAlert, setSuccessAlert] = useState(false);
    const { bank_accounts, investments, properties } = assets;

    const totalAssets: number = useMemo(() => (
        calculateTotal(bank_accounts) + calculateTotal(investments) + calculateTotal(properties)
    ), [bank_accounts, investments, properties]);
    
    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleSuccessAlert = (response: string) => { 
        if (response === 'Success') {
            setSuccessAlert(true);
        } 
        setTimeout(() => {
                setSuccessAlert(false);
        }, 4000);
    };

    return (
        <div className='assets-container'>
            <div className='assets-header'>
                <Typography component={'h4'} variant={'h4'}>Assets</Typography>
                <Typography component={'h4'} variant={'h4'}>{ `$${insertCommas(totalAssets)}` }</Typography>
                <Button className='assets-add-button'>
                    <AddCircleIcon 
                        onClick={handleModalOpen}
                        />
                </Button>
                {
                    successAlert ?  
                        <Alert severity="success">Success.</Alert> 
                    : ''
                }
            </div>
            <ModalPopUp
                type={'assets'}
                isModalOpen={isModalOpen}
                handleModalOpen={handleModalOpen}
                request={'POST'}
                handleSuccessAlert={handleSuccessAlert}
            />
            <TableComponent props={assets} />
        </div>
    );
}

export default memo(Assets);