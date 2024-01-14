import React, {useEffect, useState, useMemo, memo, useContext, useCallback} from 'react';
import { Box, Typography } from '@mui/material';

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

    return (
            <Box>
                <Typography component={'h1'} variant='h2'>Portfolio</Typography>
                <h2>Net Worth: </h2>
                <h2>Assets: </h2>
                <h2>Debt:</h2>
            </Box>
    );
}

export default memo(Portfolio);