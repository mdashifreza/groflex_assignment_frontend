import React from 'react';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import groflex from '../assets/groflex.png';
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <Container>
            <AppBar position="static" sx={{ backgroundColor: '#aaf0d1', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}>
                <Toolbar>
                    <Button component={Link} to="/">
                        <img src={groflex} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
                    </Button>
                </Toolbar>
            </AppBar>
        </Container>
    );
};

export default Navbar;
