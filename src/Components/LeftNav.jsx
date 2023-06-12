import React, { useContext } from 'react';
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const LeftNav = () => {
    const { role } = useContext(AuthContext)
    return (
        <div className='bg-gray-400 flex flex-col h-[100vh] pt-28'>
            <NavLink className="inline-flex gap-2 p-5" to="/"> <FaHome className='text-2xl'></FaHome> Home </NavLink>
            {role === "instructor" && <>
                <NavLink className="inline-flex gap-2 p-5"  to='/dashboard/addaclass'>Add a Class</NavLink>
                <NavLink className="inline-flex gap-2 p-5"  to='/dashboard/myclasses'>My Classes</NavLink>
            </>}
            {role === "admin" && <>
                <NavLink className="inline-flex gap-2 p-5"  to='/dashboard/manageusers'>Manage Users</NavLink>
                <NavLink className="inline-flex gap-2 p-5"  to='/dashboard/manageclasses'>Manage Classes</NavLink>
            </>}
            
            {
                role!=="instructor" && role !== "admin" && <>
                <NavLink className="inline-flex gap-2 p-5"  to='/dashboard/selectedclasses'>Selected Classes</NavLink>
                <NavLink className="inline-flex gap-2 p-5"  to='/dashboard/enrolledclasses'>Enrolled Classes</NavLink>
                
                </>
            }
        </div>
    );
};

export default LeftNav;