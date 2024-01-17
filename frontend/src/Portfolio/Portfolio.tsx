import React, {useEffect, useState, useMemo, memo, useContext, useCallback} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Chart from '../d3/Chart';
import { insertCommas } from '../Helper/insertCommas';
import { fetchRequest } from '../Api/Fetch';
import { PortfolioContext } from './PortfolioContext';
import { calculateTotal } from '../Helper/calculateTotals';
import PortfolioHeader from './PortfolioHeader';
import PortfolioAssets from './PortfolioAssets';
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

    const totalAssetsAmount: number = useMemo(() => (
        calculateTotal(bank_accounts) + calculateTotal(investments) + calculateTotal(properties)
    ), [bank_accounts, investments, properties]);

    const totalDebtsAmount: number = useMemo(() => (
        calculateTotal(bills) + calculateTotal(loans) + calculateTotal(credits) + calculateTotal(expenses)
    ), [bills, loans, credits, expenses]);

    return (
            <Box>
                <PortfolioHeader 
                    totalAssetsAmount={totalAssetsAmount}
                    totalDebtsAmount={totalDebtsAmount}
                />
                    
                
                
                <Typography component={'h4'} variant='h4'>Assets: ${insertCommas(totalAssetsAmount)}</Typography>
                <Chart />
                <Typography component={'h4'} variant='h4'>Debt: ${insertCommas(totalDebtsAmount)}</Typography>
            </Box>
    );
}

export default memo(Portfolio);