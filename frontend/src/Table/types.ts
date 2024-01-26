import React, {useContext} from 'react';
import { BankAccounts, Bills, Credits, Expenses, Investments, Loans, Properties, Asset, Debt } from "../Portfolio/types";
import { Assets, Debts, PortfolioContext } from "../Portfolio/PortfolioContext";

const { assets, debts } = useContext(PortfolioContext);

export type TableComponentProps = {
    props: typeof assets | typeof debts;
    handleSuccessAlert: (response:string) => void;
}

export type TableBodyComponentProp = {
    rows: Asset[][] | Debt[][];
    type: string;
    handleSuccessAlert: (response:string) => void;
}

export type TableRowComponentProps = {
    row: Asset[]| Debt[];
    type: string;
    generalType: string;
    handleSuccessAlert: (response:string) => void;
}

export type TableRowChildrenProps = {
    row: Asset[] | Debt[];
    open: boolean;
    handleDelete: (e: any) => void;
    handleSuccessAlert: (response:string) => void;
}

export type TableRowDataProps = {
    row: Asset[]| Debt[];
    handleModalOpen: (el: Asset | Debt) => void;
    handleDelete: (e: Asset | Debt) => void;
}