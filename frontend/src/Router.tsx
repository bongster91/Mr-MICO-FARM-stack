import React from 'react';
import { createBrowserRouter } from "react-router-dom";

import NavBar from "./NavBar";
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Portfolio from './Pages/Portfolio';
import NetWorth from './Pages/NetWorth';
import Assets from './Pages/Assets';
import Debts from './Pages/Debts';
import App from "./App";

export const router = [
    {
        path: '/portfolio',
        element: <Portfolio />,
        errorElement: <NotFound />
    },
    {
        path: '/net_worth',
        element: <NetWorth />,
        errorElement: <NotFound />
    },
    {
        path: '/assets',
        element: <Assets />,
        errorElement: <NotFound />
    },
    {
        path: '/debts',
        element: <Debts />,
        errorElement: <NotFound />
    },
    {
        path: '/',
        element: <Portfolio />
    
    },
    {
        path: '*',
        element: <NotFound />
    }
    
    
];