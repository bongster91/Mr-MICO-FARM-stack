import React, {useEffect, useState, useMemo} from 'react';
import { fetchRequest } from '../Api/Fetch';
import { BankAccounts, Investments, Properties } from './types';

function Portfolio() {
    const [bankAccounts, setBankAccounts] = useState<BankAccounts[]>([]);
    const [investments, setInvestments] = useState<Investments[]>([]);
    const [properties, setProperties] = useState<Properties[]>([]);

    let apiRequest = useMemo(() => fetchRequest('GET', 'assets'), []);
    
    useEffect(() => {
        apiRequest
        .then(response => (
            setBankAccounts(response.data[0].bank_accounts),
            setInvestments(response.data[0].investments),
            setProperties(response.data[0].properties)
        ))
        .catch(error => console.error('Error fetching porfolio data: ', error));
    }, [apiRequest]);

    return (
        <div>
            <h1>Portfolio</h1>
            <div>{ bankAccounts && bankAccounts.map((el, index) => {
                return (
                    <div key={index}>{el.name} </div>
                )
            })}</div>
        </div>
    );
}

export default Portfolio;