import React from 'react';
import Sidebar from '../SideBar/Sidebar';
// import Sidebar from '../Navbar/Navbar';
import Navbar from '../Navbar/Navbar';

const Dashboard = (WrappedComponent) => {
    return function(props) {
        return ( 
            <div style={{
                // display: 'flex', 
//   flexDirection: 'row',
  height: '100vh',
            }}>
                <Sidebar/>
                <Navbar/>
                <WrappedComponent {...props} />
            </div>
        );
    };
}
 
export default Dashboard;