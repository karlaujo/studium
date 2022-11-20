import React, { useState } from "react";
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapPage from './Components/Map/MapPage';
import Music from './Components/Music/Music';
import Focus from './Components/Focus/Focus';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import './App.css';

import eric from './Components/Home/ghibli1.png'
import andre from './Components/Focus/ghibli2.jpg'

import './fonts/APOLLO.otf'

const App = () => {

    return (
        <BrowserRouter >
            <Container maxwidth="xl">
            {/* <Container style={{backgroundImage: window.location.pathname==="/" ?  `url(${andre})` : eric}} maxwidth="xl"> */}
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />}/>
                    <Route path="/Map" exact element={<MapPage />}/>
                    <Route path="/Music" exact element={<Music />}/>
                    <Route path="/Focus" exact element={<Focus />}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App;
