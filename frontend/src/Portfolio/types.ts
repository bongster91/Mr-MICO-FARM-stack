interface BaseItem {
    name: string;
    type: string;
    amount: number;
}
  
export interface Asset extends BaseItem {
    assets_id: number;
}
  
export interface Debt extends BaseItem {
    debts_id: number;
}
  
export type BankAccounts = Asset;
export type Investments = Asset;
export type Properties = Asset;
export type Bills = Debt;
export type Loans = Debt;
export type Credits = Debt;
export type Expenses = Debt;

export type PortfolioHeaderProps = {
    totalAssetsAmount: number;
    totalDebtsAmount: number;
}

export type PortfolioAssetsProps = {
    totalAssetsAmount: number;
    assets: {
        bank_accounts: BankAccounts[]
        investments: Investments[]
        properties: Properties[]
    }
}

export type PortfolioDebtsProps = {
    totalDebtsAmount: number;
    debts: {
        bills: Bills[],
        loans: Loans[],
        credits: Credits[],
        expenses: Expenses[]
    }
}