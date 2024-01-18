export type ModalPopUpProps = {
    type: string;
    isModalOpen: boolean;
    handleModalOpen: () => void;
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
        value: 'Household',
        label: 'Household'
    },
    {
        value: 'Subscription',
        label: 'Subscription'
    },
    {
        value: 'Mortgage',
        label: 'Mortgage'
    },
    {
        value: 'Student Loan',
        label: 'Student Loan'
    },
    {
        value: 'Auto Loan',
        label: 'Auto Loan'
    },
    {
        value: 'Business Loan',
        label: 'Business Loan'
    },
    {
        value: 'Personal Loan',
        label: 'Personal Loan'
    }, {
        value: 'Mastercard',
        label: 'Mastercard'
    }, {
        value: 'Visa',
        label: 'Visa'
    },
    {
        value: 'Discover',
        label: 'Discover'
    }, {
        value: 'American Express',
        label: 'American Express'
    }, {
        value: 'Misc',
        label: 'Misc'
    }
];