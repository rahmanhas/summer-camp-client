import React from 'react';
import LeftNav from '../Components/LeftNav';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='w-full flex'>
            <div className='w-1/3 '>
                <LeftNav></LeftNav>
            </div>
            <div className='w-2/3 '>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;