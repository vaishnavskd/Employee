import React from 'react'
import Navbar from '../elements/Navbar'

const Dashboard = (props) => {
    return (
        <div>
            <Navbar />
            {props.child}
        </div>
    )
}

export default Dashboard