import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { router } from './Router';

import NavBar from "./NavBar";


function App() {

  return (
        <div className="App">
            <NavBar />
            <Routes>
                {
                    router.map((route, index) => {
                        return (
                            <Route path={route.path} element={route.element} key={index} />
                        )
                    })
                }
            </Routes>
        </div>
  );
}

export default App;
