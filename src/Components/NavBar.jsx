import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaListUl } from "react-icons/fa";


const menu = <>
        <NavLink className={({ isActive }) => isActive ? "text-lg text-blue-400 dark:text-white mr-2 p-2 rounded-xl" : "mr-2 p-2"} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-lg text-blue-400 dark:text-white mr-2 p-2 rounded-xl" : "mr-2 p-2"} to="/instructor">Instructors</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-lg text-blue-400 dark:text-white mr-2 p-2 rounded-xl" : "mr-2 p-2"} to="/classes">Classes</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-lg text-blue-400 dark:text-white mr-2 p-2 rounded-xl" : "mr-2 p-2"} to="/dashboard">Dashboard</NavLink>
    </>

const NavBar = () => {
    const {user, logOut} = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/'
    //console.log(isOpen);
    const handleLogOut = ()=>{
    logOut().then(navigate(from)).catch(error=>console.log(error.message))
    }
  
    return (

        <div className='bg-gray-100 flex justify-between align-center p-5 mx-auto w-full'>
            <div>
                {/* logo  */}
                <h2 className='text-2xl text-blue-500'>DanceFlow Academy</h2>
            </div>
            <div className='hidden md:block'>
                {/* menu options */}
                {menu}

            </div>
            <div className='hidden md:block'>
                {/* buttons  */}
                {user ? <>
                    <div className='flex justify-between align-center'>
                    <img className="pr-2 rounded-full"  src={user?.photoURL} alt="" width={45} height={45} title={`${user?.displayName}`} />
                    <button onClick={handleLogOut} type="button" className="text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-blue-900">LogOut</button>
                    </div>
                    </> : <>
                        <div className='flex justify-between align-center'>
                            
                            <Link to="/login"><button className="text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-blue-900" >login</button></Link>
                        </div>
                    </>}

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