import React, { useContext, useState, useEffect, useMemo, memo } from 'react';

import { PortfolioContext } from '../Portfolio/PortfolioContext';
import { calculateTotal } from '../Helper/calculateTotals';
import TableComponent from '../Table/TableComponent';
import { insertCommas } from '../Helper/insertCommas';

function Assets() {
    const { assets } = useContext(PortfolioContext);
    const { bank_accounts, investments, properties } = assets;

    const totalAssets = useMemo(() => (
        calculateTotal(bank_accounts) + calculateTotal(investments) + calculateTotal(properties)
    ), [bank_accounts, investments, properties]);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <h1>Assets</h1>
            <h2>{ `$${insertCommas(totalAssets)}` }</h2>
            <TableComponent props={assets} />
        </div>
    );
}

export default memo(Assets);