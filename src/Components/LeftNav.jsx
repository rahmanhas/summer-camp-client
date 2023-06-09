import React from 'react';
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
    return (
        <div className='bg-gray-400 flex flex-col h-[100vh]'>
            <NavLink className="inline-flex gap-2" to="/"> <FaHome className='text-2xl'></FaHome> Home </NavLink>
            <NavLink to='/dashboard/addaclass'>Add a Class</NavLink>
            <NavLink to='/dashboard/myclasses'>My Classes</NavLink>
            <NavLink to='/dashboard/manageusers'>Manage Users</NavLink>
        </div>
    );
};

export default LeftNav;