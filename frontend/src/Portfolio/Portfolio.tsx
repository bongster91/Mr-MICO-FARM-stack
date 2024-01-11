import React, {useEffect, useState} from 'react';
import { fetchRequest } from '../Api/Fetch';
import { BankAccounts, Investments, Properties } from './types';

function Portfolio() {
    const [bankAccounts, setBankAccounts] = useState<BankAccounts[]>([]);
    const [investments, setInvestments] = useState<Investments[]>([]);
    const [properties, setProperties] = useState<Properties[]>([]);

    useEffect(() => {

        let apiRequest = fetchRequest('GET', 'assets');
        apiRequest
        .then(response => (
            setBankAccounts(response.data[0]),
            setInvestments(response.data[1]),
            setProperties(response.data[2])
        ))
        .catch(error => console.error('Error fetching porfolio data: ', error));
    }, []);

    return (
        <h1>Portfolio</h1>
    );
}

export default Portfolio;