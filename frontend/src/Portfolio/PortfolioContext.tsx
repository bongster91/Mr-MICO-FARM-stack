import { createContext } from "react";
import {
    BankAccounts,
    Investments,
    Properties,
    Bills,
    Loans,
    Credits,
    Expenses
} from './types';

export const PortfolioContext = createContext<{
    bankAccounts: BankAccounts[],
    investments: Investments[],
    properties: Properties[],
    bills: Bills[],
    loans: Loans[],
    credits: Credits[],
    expenses: Expenses[]
}>({
    bankAccounts: [],
    investments: [],
    properties: [],
    bills: [],
    loans: [],
    credits: [],
    expenses: []
});