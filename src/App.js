import React from "react";
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapPage from './Components/Map/MapPage';

import './App.css';

const App = () => {

    return (
        <BrowserRouter >
            <Container  maxwidth="xl">
                <Routes>
                    <Route path="/Map" exact element={<MapPage />}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App;
