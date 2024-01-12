import React, { useContext, useState, useEffect, useMemo, memo } from 'react';

import { PortfolioContext } from '../Portfolio/PortfolioContext';
import { calculateTotal } from '../Utils/calculateTotals';
import TableComponent from '../Table/TableComponent';

function Assets() {
    const { assets } = useContext(PortfolioContext);
    const bank_accounts = assets.bank_accounts;
    const investments = assets.investments;
    const properties = assets.properties;

    const totalAssets = useMemo(() => (
        calculateTotal(bank_accounts) + calculateTotal(investments) + calculateTotal(properties)
    ), [bank_accounts, investments, properties]);
    console.log(assets)

    return (
        <div style={{ height: 400, width: '100%' }}>
            <h1>Assets</h1>
            <h2>{totalAssets}</h2>
            <ol>
                {
                    assets.bank_accounts.map((el, index) => {
                        return (
                            <li key={index}>{el.name}: {el.amount} --- {el.type}</li>
                        )
                    })
                }
            </ol>
            <TableComponent props={assets} />
        </div>
    );
}

export default memo(Assets);