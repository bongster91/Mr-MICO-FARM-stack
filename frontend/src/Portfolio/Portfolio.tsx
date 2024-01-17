import React, { useState, useMemo, memo, useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Chart from '../d3/Chart';
import { insertCommas } from '../Helper/insertCommas';
import { fetchRequest } from '../Api/Fetch';
import { PortfolioContext } from './PortfolioContext';
import { calculateTotal } from '../Helper/calculateTotals';
import PortfolioHeader from './PortfolioHeader';
import PortfolioAssets from './PortfolioAssets';
import PortfolioDebts from './PortfolioDebts';

function Portfolio() {
    const { assets, debts } = useContext(PortfolioContext);
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
                
                <PortfolioAssets
                    totalAssetsAmount={totalAssetsAmount}
                    assets={assets}
                />
                
                <PortfolioDebts
                    totalDebtsAmount={totalDebtsAmount}
                    debts={debts}
                />
            </Box>
    );
}

export default memo(Portfolio);