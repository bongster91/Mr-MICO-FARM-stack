import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from "./NavBar";
import { routes } from './Router';


function App({children}: any) {

  return (
        <div className="App">
            <NavBar />
            <Routes>
                {
                    routes.map((route, index) => {
                        return (
                            <Route 
                                path={route.path}
                                element={route.element}
                                key={index}
                            />
                        );
                    })
                }
            </Routes>
        </div>
  );
}

export default App;
