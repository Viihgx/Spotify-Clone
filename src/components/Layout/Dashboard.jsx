import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import Navbar from '../Navbar/Navbar'
import { Grid } from '@mui/material'

const Dashboard = (WrappedComponent) => {
    return function (props) {
        return (
        <Grid className='app-container' container xs={12}>
            <Sidebar />
            <Grid className='sidebar-container' xs={12}>
            <Navbar />
            </Grid>
            <WrappedComponent {...props} />
        </Grid>
        )
    }
}
 
export default Dashboard