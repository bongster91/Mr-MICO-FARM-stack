import React, { useContext, useState, useEffect } from 'react';
import { PortfolioContext } from '../Portfolio/PortfolioContext';

function Assets() {
    const { bankAccounts, investments, properties} = useContext(PortfolioContext);

    return (
        <div>Assets</div>
    );
}

export default Assets;