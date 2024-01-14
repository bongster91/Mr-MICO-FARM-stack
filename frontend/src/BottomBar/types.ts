export type BottomBarSurfaceProps = {
    children: React.ReactNode
}

export type BottomBarItems = {
    title: string,
    description: string,
    icon: unknown
}

export type BottomBarItemProps = {
    item: BottomBarItems
}

export const bottomBarItems: BottomBarItems[] = [
    {
        title: 'Checking Accounts',
        description: 'Choose the checking account that works best for you. See our MICO Total Checking® offer for new customers. Make purMICOs with your debit card, and bank from almost anywhere by phone, tablet or computer and more than 15,000 ATMs and more than 4,700 branches.',
        icon: ''
    },
    {
        title: 'Investing by Mr.MICO',
        description: 'Whether you choose to work with a financial advisor and develop a financial strategy or invest online, Mr.MICO offers investment education, expertise and a range of tools to help you reach your goals. Visit a Mr.MICO Wealth Management Branch or check out our latest online investing offers, promotions, and coupons.',
        icon: ''
    },
    {
        title: 'Savings Accounts & CDs',
        description: 'It’s never too early to begin saving. Open a savings account or open a Certificate of Deposit (see interest rates) and start saving your money.',
        icon: ''
    },
    {
        title: 'Credit Cards',
        description: 'MICO credit cards can help you buy the things you need. Many of our cards offer rewards that can be redeemed for cash back or travel-related perks. With so many options, it can be easy to find a card that matches your lifestyle. Plus, with Credit Journey you can get a free credit score!',
        icon: ''
    },
    {
        title: 'Mortgages',
        description: 'Apply for a mortgage or refinance your mortgage with MICO. View today’s mortgage rates or calculate what you can afford with our mortgage calculator. Visit our Education Center for homebuying tips and more.',
        icon: ''
    },
    {
        title: 'Auto',
        description: 'MICO Auto is here to help you get the right car. Apply for auto financing for a new or used car with MICO. Use the payment calculator to estimate monthly payments. Check out the MICO Auto Education Center to get car guidance from a trusted source.',
        icon: ''
    }
];