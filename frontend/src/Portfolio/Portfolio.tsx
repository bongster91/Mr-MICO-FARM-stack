import React, {useEffect, useState, useMemo, createContext} from 'react';

import { fetchRequest } from '../Api/Fetch';
import { calculateTotal } from '../Utils/calculateTotals';
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
    const [bankAccounts, setBankAccounts] = useState<BankAccounts[]>([]);
    const [investments, setInvestments] = useState<Investments[]>([]);
    const [properties, setProperties] = useState<Properties[]>([]);
    const [assetsTotal, setAssetsTotal] = useState(0);
    const [bills, setBills] = useState<Bills[]>([]);
    const [loans, setLoans] = useState<Loans[]>([]);
    const [credits, setCredits] = useState<Credits[]>([]);
    const [expenses, setExpenses] = useState<Expenses[]>([]);
    const [debtsTotal, setDebtsTotal] = useState(0);

    const PortfolioContext = createContext({
        bankAccounts,
        investments,
        properties,
        bills,
        loans,
        credits,
        expenses
    })

    const assetsAPIRequest = useMemo(() => fetchRequest('GET', 'assets'), []);
    const debtsAPIRequest = useMemo(() => fetchRequest('GET', 'debts'), []);

    useEffect(() => {
        assetsAPIRequest
        .then(response => (
            setBankAccounts(response.data[0].bank_accounts),
            setInvestments(response.data[0].investments),
            setProperties(response.data[0].properties)
        ))
        .catch(error => console.error('Error fetching assets data: ', error));
    }, [assetsAPIRequest]);

    useEffect(() => {
        debtsAPIRequest
            .then(response => (
                setBills(response.data[0].bills),
                setLoans(response.data[0].loans),
                setCredits(response.data[0].credits),
                setExpenses(response.data[0].expenses)
            ))
            .catch(error => console.error('Error fetching debts data: ', error));
    }, [debtsAPIRequest]);

    const totalAssets = useMemo(() => (
        calculateTotal(bankAccounts) + calculateTotal(investments) + calculateTotal(properties)
    ), [bankAccounts, investments, properties]);

    const totalDebts = useMemo(() => (
        calculateTotal(bills) + calculateTotal(loans) + calculateTotal(credits) + calculateTotal(expenses)
    ), [bills, loans, credits, expenses]);

    useEffect(() => {
        setAssetsTotal(totalAssets)
        setDebtsTotal(totalDebts)
    }, [bankAccounts, investments, properties])

    return (
        <PortfolioContext.Provider value={{
            bankAccounts,
            investments,
            properties,
            bills,
            loans,
            credits,
            expenses
        }}>
            <div>
                <h1>Portfolio</h1>
                <div>{ bankAccounts && bankAccounts.map((el, index) => {
                    return (
                        <div key={index}>{el.name} </div>
                        )
                    })}</div>
                <h2>Net Worth: {assetsTotal - debtsTotal}</h2>
                <h2>Assets: {assetsTotal}</h2>
                <h2>Debts: {debtsTotal}</h2>
            </div>
         </PortfolioContext.Provider>
    );
}

export default Portfolio;