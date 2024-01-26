import React, {useContext} from 'react';
import { BankAccounts, Bills, Credits, Expenses, Investments, Loans, Properties } from "../Portfolio/types";
import { Assets, Debts, PortfolioContext } from "../Portfolio/PortfolioContext";

const { assets, debts } = useContext(PortfolioContext);

export type TableComponentProps = {
    props: typeof assets | typeof debts;
    handleSuccessAlert: (response:string) => void;
}

export type TableBodyComponentProp = {
    rows: any;
    type: string;
    handleSuccessAlert: (response:string) => void;
}

export type TableRowChildrenProps = {
    row: [
        bank_accounts: BankAccounts[],
        investments: Investments[],
        properties: Properties[]    
    ] | [
        bills: Bills[],
        loans: Loans[],
        credits: Credits[],
        expenses: Expenses[] 
    ];
    open: boolean;
    handleDelete: (e: any) => void;
    handleSuccessAlert: () => void;
}