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

function Debts() {
    const { debts } = useContext(PortfolioContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [successAlert, setSuccessAlert] = useState(false);
    const { bills, loans, credits, expenses } = debts;

    const totalDebts: number = useMemo(() => (
        calculateTotal(bills) + calculateTotal(loans) + calculateTotal(credits) + calculateTotal(expenses)
    ), [bills, loans, credits, expenses]);
    
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
        <div className='debts-container'>
            <div className='debts-header'>
                <Typography component={'h4'} variant={'h4'}>Debts</Typography>
                <Typography component={'h4'} variant={'h4'}>{ `$${insertCommas(totalDebts)}` }</Typography>
                <Button className='debts-add-button'>
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
                type={'debts'}
                isModalOpen={isModalOpen}
                handleModalOpen={handleModalOpen}
                request={'POST'}
                handleSuccessAlert={handleSuccessAlert}
            />
            <TableComponent props={debts} handleSuccessAlert={handleSuccessAlert} />
        </div>
    );
}

export default memo(Debts);