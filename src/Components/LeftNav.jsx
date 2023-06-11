import React, { useContext } from 'react';
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const LeftNav = () => {
    const { role } = useContext(AuthContext)
    return (
        <div className='bg-gray-400 flex flex-col h-[100vh]'>
            <NavLink className="inline-flex gap-2" to="/"> <FaHome className='text-2xl'></FaHome> Home </NavLink>
            {role === "instructor" && <>
                <NavLink to='/dashboard/addaclass'>Add a Class</NavLink>
                <NavLink to='/dashboard/myclasses'>My Classes</NavLink>
            </>}
            {role === "admin" && <>
                <NavLink to='/dashboard/manageusers'>Manage Users</NavLink>
                <NavLink to='/dashboard/manageclasses'>Manage Classes</NavLink>
            </>}
            
            {
                role!=="instructor" && role !== "admin" && <>
                <NavLink to='/dashboard/selectedclasses'>My Selected Classes</NavLink>
                
                </>
            }
        </div>
    );
};

export default LeftNav;