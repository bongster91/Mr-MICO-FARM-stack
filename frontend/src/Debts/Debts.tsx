import React, { useContext, useState, useEffect, useMemo, memo } from 'react';

import { PortfolioContext } from '../Portfolio/PortfolioContext';
import { calculateTotal } from '../Helper/calculateTotals';
import TableComponent from '../Table/TableComponent';
import { insertCommas } from '../Helper/insertCommas';

function Debts() {
    const { debts } = useContext(PortfolioContext);
    const bills = debts.bills;
    const loans = debts.loans;
    const credits = debts.credits;
    const expenses = debts.expenses;

    const totalDebts = useMemo(() => (
        calculateTotal(bills) + calculateTotal(loans) + calculateTotal(credits) + calculateTotal(expenses)
    ), [bills, loans, credits, expenses]);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <h1>Debts</h1>
            <h2>{ `$${insertCommas(totalDebts)}` }</h2>
            <TableComponent props={debts} />
        </div>
    );
}

export default memo(Debts);