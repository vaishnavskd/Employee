import React from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import '../App.css'

const EmployeeForm = () => {
    return (
        <div style={{ margin: '5%' }} className='App'>
            <Typography variant='h4'>Employee Form</Typography>
            <br /><br />
            <Grid container spacing={3}
                alignItems="center"
                justifyContent="center">
                <Grid item xs={12} sm={12} md={8}>
                    <TextField variant='outlined' fullWidth label='Name' id='name' />
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <TextField variant='outlined' fullWidth label='Designation' id='designation' />
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <TextField variant='outlined' fullWidth label='Location' id='location' />
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <TextField variant='outlined' type='number' fullWidth label='Salary' id='salary' />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Button variant='outlined'>Submit</Button>
                </Grid>
            </Grid>
            </div>
            )
}

            export default EmployeeForm