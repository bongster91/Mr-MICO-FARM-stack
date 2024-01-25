import React, { createContext, useContext} from 'react';

export const DarkThemeContext = createContext({
    isDarkMode: false,
    changeDarkMode: () => {}
});

export const DarkThemeProvider = DarkThemeContext.Provider;

export default function useDarkTheme() {
    return useContext(DarkThemeContext);
};