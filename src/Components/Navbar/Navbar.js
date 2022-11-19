import React, { useState, useEffect } from 'react'
import { Button, Toolbar, AppBar, Avatar, Typography } from '@material-ui/core';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import useStyles from './styles';

import eye from './logo.svg';

const Navbar = () => {

    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <img className={classes.image} src={eye} alt="eye" height="80" />
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">studium</Typography>
            </div>
            <Button component={Link} to="/" variant="contained" className={classes.logout} >Home</Button>
            <Button component={Link} to="/Map" variant="contained" className={classes.logout} >Map</Button>
            <Button component={Link} to="/Music" variant="contained" className={classes.logout} >Music</Button>
            <Button component={Link} to="/Focus" variant="contained" className={classes.logout} >Focus</Button>
        </AppBar>
    )
}

export default Navbar;
