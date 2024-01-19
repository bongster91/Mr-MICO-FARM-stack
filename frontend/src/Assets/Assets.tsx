import React, { useContext, useState, useEffect, useMemo, memo } from 'react';
import { Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import{ Box }from '@mui/material';

import { PortfolioContext } from '../Portfolio/PortfolioContext';
import { calculateTotal } from '../Helper/calculateTotals';
import TableComponent from '../Table/TableComponent';
import { insertCommas } from '../Helper/insertCommas';
import ModalPopUp from '../Modal/Modal';

function Assets() {
    const { assets } = useContext(PortfolioContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { bank_accounts, investments, properties } = assets;

    const totalAssets = useMemo(() => (
        calculateTotal(bank_accounts) + calculateTotal(investments) + calculateTotal(properties)
    ), [bank_accounts, investments, properties]);
    
    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className='assets-container' style={{ height: '100%', width: '80%' }}>
            <Typography component={'h3'} variant={'h3'}>Assets</Typography>
            <Typography component={'h4'} variant={'h4'}>{ `$${insertCommas(totalAssets)}` }</Typography>
            <Button>
                <AddCircleIcon 
                    onClick={handleModalOpen}
                    />
            </Button>
            <ModalPopUp
                type={'assets'}
                isModalOpen={isModalOpen}
                handleModalOpen={handleModalOpen}
                request={'post'}
            />
            <TableComponent props={assets} />
        </div>
    );
}

export default memo(Assets);