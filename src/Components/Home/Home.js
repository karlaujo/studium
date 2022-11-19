import React from 'react'
import { Container, Grow, Grid, Paper, AppBar, TextField, Button, Chip } from '@material-ui/core';
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import HomeList from './HomeList'
import useStyles from './styles';

import './Home.css'


const Home = () => {

    const [currentId, setCurrentId] = useState(0);
    // const [input, setInput] a= useState('');
    const classes = useStyles();

    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <HomeList/>
            </div>
        </div>
    )
}

export default Home;
