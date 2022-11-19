import React from "react";
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapPage from './Components/Map/MapPage';
import Focus from './Components/Focus/Focus';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import './App.css';

import './fonts/APOLLO.otf'

const App = () => {

    return (
        <BrowserRouter >
            <Container  maxwidth="xl">
                <Navbar />
                <Routes>
                    <Route path="/Map" exact element={<MapPage />}/>
                    <Route path="/Focus" exact element={<Focus />}/>
                    <Route path="/Home" exact element={<Home />}/>

                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App;
