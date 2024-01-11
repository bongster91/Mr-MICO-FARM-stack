import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { router } from './Router';

import NavBar from "./NavBar";
import { PortfolioContext } from './Portfolio/PortfolioContext';


function App() {

    const initialContextValue = {
        bankAccounts: [],
        investments: [],
        properties: [],
        bills: [],
        loans: [],
        credits: [],
        expenses: []
    };

    return (
            <div className="App">
                <PortfolioContext.Provider value={initialContextValue}>

                <NavBar />
                <Routes>
                    {
                        router.map((route, index) => {
                            return (
                                <Route path={route.path} element={route.element} key={index} />
                                );
                            })
                        }
                </Routes>
                        </PortfolioContext.Provider>
            </div>
    );
}

export default App;
