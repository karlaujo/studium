import React from "react";
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapPage from './Components/Map/MapPage';
import Navbar from "./Components/Navbar/Navbar";
import './App.css';

import './fonts/APOLLO.otf'

const App = () => {

    return (
        <BrowserRouter >
            <Container  maxwidth="xl">
                <Navbar />
                <Routes>
                    <Route path="/Map" exact element={<MapPage />}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App;
