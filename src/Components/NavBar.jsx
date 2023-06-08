import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaListUl } from "react-icons/fa";


const menu = <>
        <NavLink className={({ isActive }) => isActive ? "text-lg text-pink-400 mr-2 p-2 rounded-xl" : "mr-2 p-2"} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-lg text-pink-400 mr-2 p-2 rounded-xl" : "mr-2 p-2"} to="/instructors">Instructors</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-lg text-pink-400 mr-2 p-2 rounded-xl" : "mr-2 p-2"} to="/classes">Classes</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-lg text-pink-400 mr-2 p-2 rounded-xl" : "mr-2 p-2"} to="/dashboard">Dashboard</NavLink>
    </>

const NavBar = () => {
    //const {user} = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)
    //console.log(isOpen);

  
    return (

        <div className='bg-neutral-100 flex justify-between align-center p-5'>
            <div>
                {/* logo  */}
                <h1 className='text-2xl text-pink-500'>DanceFlow Academy</h1>
            </div>
            <div className='hidden md:block'>
                {/* menu options */}
                {menu}

            </div>
            <div className='hidden md:block'>
                {/* buttons  */}
                {/* {user ? <>
                        <button>Logout</button>
                    </> : <>
                        <div className='flex justify-between align-center'>
                            <img className="pl-2"  src={user?.image} alt="" />
                            <button className="pl-2" >login</button>
                        </div>
                    </>} */}
                <button type="button" className="text-white bg-pink-400 hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-pink-900">LogOut</button>
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
                <div className='flex justify-end'><FaListUl className='text-2xl'></FaListUl ></div>
                {
                    isOpen && <div className='flex flex-col'>
                        {menu}
                    </div>
                }

            </div>
        </div>


    );
};


export default NavBar;