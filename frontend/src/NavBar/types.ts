import { createContext, Dispatch, SetStateAction } from "react";

export type NavBarProps = {
    isDarkMode: {darkMode: boolean};
    setIsDarkMode: any;
}

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
        'title': 'Assets',
        'redirect': '/assets'
    },
    {
        'title': 'Debts',
        "redirect": '/debts'
    },
    {
        'title': 'Security & Privacy',
        'redirect': '/security'
    },
    {
        'title': 'Customer Service',
        'redirect': '/service'
    },
    {
        'title': 'Contact Us',
        'redirect': '/contact'
    }
];

export const DarkModeContext = createContext<{
    darkMode: boolean;
}>({
    darkMode: false
});