import { createContext } from "react";
import {
    Asset,
    Debt
} from './types';

export type Assets = {
    bank_accounts: Asset[],
    investments: Asset[],
    properties: Asset[],
}

export type Debts = {
    bills: Debt[],
    loans: Debt[],
    credits: Debt[],
    expenses: Debt[]
}

export const PortfolioContext = createContext<{
    assets: Assets,
    debts: Debts
}>({
    assets: {
        bank_accounts: [],
        investments: [],
        properties: []
    },
    debts: {
        bills: [],
        loans: [],
        credits: [],
        expenses: []
    }
});