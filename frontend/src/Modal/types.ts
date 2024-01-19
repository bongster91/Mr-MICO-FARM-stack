export type ModalPopUpProps = {
    type: string;
    isModalOpen: boolean;
    handleModalOpen: () => void;
    request: string;
    handleSuccessAlert: (response:string) => void;
}

export const assetTypes = [
    {
        type: 'bank_accounts',
        value: 'Checking',
        label: 'Checking'
    },
    {
        type: 'bank_accounts',
        value: 'Savings',
        label: 'Savings'
    },
    {
        type: 'investments',
        value: 'ETF',
        label: 'ETF'
    },
    {
        type: 'investments',
        value: 'Mutual Fund',
        label: 'Mutual Fund'
    },
    {
        type: 'investments',
        value: 'Bond',
        label: 'Bond'
    },
    {
        type: 'investments',
        value: 'Stock',
        label: 'Stock'
    },
    {
        type: 'investments',
        value: '401k',
        label: '401k'
    },
    {
        type: 'investments',
        value: 'Roth IRA',
        label: 'Roth IRA'
    },
    {
        type: 'investments',
        value: 'IRA',
        label: 'IRA'
    },
    {
        type: 'investments',
        value: 'Cryptocurrency',
        label: 'Cryptocurrency'
    },
    {
        type: 'properties',
        value: 'Home',
        label: 'Home'
    },
    {
        type: 'properties',
        value: 'Vehicle',
        label: 'Vehicle'
    },
    {
        type: 'properties',
        value: 'Inventory',
        label: 'Inventory'
    },
    {
        type: 'properties',
        value: 'Misc',
        label: 'Misc'
    }
];

export const debtTypes = [
    {
        type: 'bills',
        value: 'Household',
        label: 'Household'
    },
    {
        type: 'bills',
        value: 'Subscription',
        label: 'Subscription'
    },
    {
        type: 'loans',
        value: 'Mortgage',
        label: 'Mortgage'
    },
    {
        type: 'loans',
        value: 'Student Loan',
        label: 'Student Loan'
    },
    {
        type: 'loans',
        value: 'Auto Loan',
        label: 'Auto Loan'
    },
    {
        type: 'loans',
        value: 'Business Loan',
        label: 'Business Loan'
    },
    {
        type: 'loans',
        value: 'Personal Loan',
        label: 'Personal Loan'
    }, 
    {
        type: 'credits',
        value: 'Mastercard',
        label: 'Mastercard'
    }, 
    {
        type: 'credits',
        value: 'Visa',
        label: 'Visa'
    },
    {
        type: 'credits',
        value: 'Discover',
        label: 'Discover'
    }, 
    {
        type: 'credits',
        value: 'American Express',
        label: 'American Express'
    }, 
    {
        type: 'expenses',
        value: 'Misc',
        label: 'Misc'
    }
];