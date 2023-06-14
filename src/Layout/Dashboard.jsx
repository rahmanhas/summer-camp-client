import React, { useContext } from 'react';
import LeftNav from '../Components/LeftNav';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <NavBar></NavBar>
            <div className='w-full flex'>
                <div className='w-1/3 '>
                    <LeftNav></LeftNav>
                </div>
                <div className='w-2/3 '>
                    <h2 className='pl-5 mt-5 text-xl '>Welcome to your Dashboard {user.displayName}</h2>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Dashboard;