import { createTheme, Theme } from '@mui/material/styles';

export const theme: Theme = createTheme({
    palette: {
        primary: {
            main: '#A5C6EF',
            light: '#F7D58C',
            dark: '#4297ff',
            contrastText: '#000000'
        },
        secondary: {
            main: '#040D12',
            light: '#5C8374',
            dark: '#183D3D',
            contrastText: '#93B1A6'
        },
        error: {
            main: '#f44336',
            light: '#e57373',
            dark: '#d32f2f'
        },
        warning: {
            main: '#ffa726',
            light: '#ffb74d',
            dark: '#f57c00'
        },
        info: {
            main: '#ce93d8',
            light: '#f3e5f5',
            dark: '#ab47bc'
        },
        success: {
            main: '#66bb6a',
            light: '#81c784',
            dark: '#388e3c'
        }
    },
    typography: {
        fontFamily: 'Gill Sans',
        htmlFontSize: 14,
    },
    
});