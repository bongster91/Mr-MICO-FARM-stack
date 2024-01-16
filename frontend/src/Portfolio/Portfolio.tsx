import React, {useEffect, useState, useMemo, memo, useContext, useCallback} from 'react';
import { Box, Typography } from '@mui/material';

import { insertCommas } from '../Helper/insertCommas';
import { fetchRequest } from '../Api/Fetch';
import { PortfolioContext } from './PortfolioContext';
import { calculateTotal } from '../Helper/calculateTotals';
import { 
    BankAccounts, 
    Investments, 
    Properties,
    Bills,
    Loans,
    Credits,
    Expenses
} from './types';


function Portfolio() {
    const { assets, debts } = useContext(PortfolioContext);
    const [totalAssets, setTotalAssets] = useState(0);
    const [totalDebts, setTotalDebts] = useState(0);
    const { bank_accounts, investments, properties } = assets;
    const { bills, loans, credits, expenses } = debts;

    const totalAssetsAmount = useMemo(() => (
        calculateTotal(bank_accounts) + calculateTotal(investments) + calculateTotal(properties)
    ), [bank_accounts, investments, properties]);

    const totalDebtsAmount = useMemo(() => (
        calculateTotal(bills) + calculateTotal(loans) + calculateTotal(credits) + calculateTotal(expenses)
    ), [bills, loans, credits, expenses]);

    return (
            <Box>
                <Typography component={'h1'} variant='h2'>Portfolio</Typography>
                <h2>Net Worth: ${insertCommas(totalAssetsAmount - totalDebtsAmount)}</h2>
                <h2>Assets: ${insertCommas(totalAssetsAmount)}</h2>
                <h2>Debt: ${insertCommas(totalDebtsAmount)}</h2>
            </Box>
    );
}

export default memo(Portfolio);