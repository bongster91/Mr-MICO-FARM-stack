export type NavBarSurfaceProps = {
    children: React.ReactNode
}

export type UserButtonProps = {
    handleMenu: (event: React.MouseEvent<HTMLElement>) => void,
    anchorEl: any,
    handleClose: () => void
}

export type NavItemProps = {
    title: string,
    redirect: string
}

export const navItems: NavItemProps[] = [
    {
        "title": "Portfolio",
        "redirect": '/portfolio'
    },
    {
        "title": "Net Worth",
        "redirect": '/net_worth'
    },
    {
        'title': 'Assets',
        'redirect': '/assets'
    },
    {
        'title': 'Debts',
        "redirect": '/debts'
    }
];