import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import '../App.css';

const EmployeeData = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setEmployees(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <>
            <div style={{ margin: '5%' }} className='App'>
                <Typography variant='h4'>Employee Data</Typography>
                <br /><br />
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default EmployeeData