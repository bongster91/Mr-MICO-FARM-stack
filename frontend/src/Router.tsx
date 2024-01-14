import React from 'react';
import { createBrowserRouter } from "react-router-dom";

import NavBar from "./NavBar";
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Portfolio from './Pages/Portfolio';
import NetWorth from './Pages/NetWorth';
import Assets from './Pages/Assets';
import Debts from './Pages/Debts';
import Security from './Pages/SecurityPage';
import CustomerService from './Pages/ServicePage';
import Contact from './Pages/ContactPage';
import App from "./App";

export const router = [
    {
        path: '/portfolio',
        element: <Portfolio />,
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
        path: '/security',
        element: <Security />
    },
    {
        path: '/service',
        element: <CustomerService />
    },
    {
        path: '/contact',
        element: <Contact />
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