import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../App.css';


const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'black' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>
                    <Button color="inherit" className='Navbar-Button'><Link to={'/dashboard'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link></Button>
                    <Button color="inherit" className='Navbar-Button'><Link to={'/form'} style={{ textDecoration: 'none', color: 'white' }}>Employee Form</Link></Button>
                </Toolbar>
            </AppBar>
        </Box>

    )
}

export default Navbar