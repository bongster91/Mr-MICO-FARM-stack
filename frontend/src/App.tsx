import React, {useState, useEffect, useMemo, memo} from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';
import { fetchRequest } from './Api/Fetch';
import { router } from './Router';
import { theme }from './Styles/Theme';

import NavBar from "./NavBar";
import { PortfolioContext, Assets, Debts } from './Portfolio/PortfolioContext';
import BottomBar from './BottomBar';
import SideBar from './SideBar';
import { DarkThemeProvider } from './DarkModeTheme';

function App() {

    type Portfolio = {
        assets: Assets;
        debts: Debts;
    };
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [portfolio, setPortfolio] = useState<Portfolio>({
        assets: {
            bank_accounts: [],
            investments: [],
            properties: []
        },
        debts: {
            bills: [],
            loans: [],
            credits: [],
            expenses: []
        }
    });

    const assetsAPIRequest = useMemo(() => fetchRequest('GET', 'assets'), []);
    const debtsAPIRequest = useMemo(() => fetchRequest('GET', 'debts'), []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [assetsResponse, debtsResponse] = await Promise.all([
                    assetsAPIRequest,
                    debtsAPIRequest
                ]);

                setPortfolio({
                    assets: assetsResponse.data[0],
                    debts: debtsResponse.data[0]
                });

                console.log(portfolio);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, [assetsAPIRequest, debtsAPIRequest]);

    const changeDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        console.log(isDarkMode)
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
                <DarkThemeProvider value={{ isDarkMode, changeDarkMode }}>
                    <PortfolioContext.Provider value={portfolio}>
                        <div className={isDarkMode ? 'dark-app' : 'app'}>
                            <NavBar />
                            <div className={isDarkMode ? 'dark-main-section' : 'main-section'}>
                                <Routes>
                                    {router.map((route, index) => (
                                        <Route path={route.path} element={route.element} key={index} />
                                        ))}
                                </Routes>
                                <SideBar />
                            </div>
                            <BottomBar />
                        </div>
                    </PortfolioContext.Provider>
                </DarkThemeProvider>
            </ThemeProvider>
        </div>
    );
}

export default memo(App);
