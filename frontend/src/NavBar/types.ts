export type NavBarSurfaceProps = {
    children: React.ReactNode
}

export type UserButtonProps = {
    handleMenu: (event: React.MouseEvent<HTMLElement>) => void,
    anchorEl: any,
    handleClose: () => void
}

