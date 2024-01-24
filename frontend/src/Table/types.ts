import { BankAccounts, Bills, Credits, Expenses, Investments, Loans, Properties } from "../Portfolio/types";

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