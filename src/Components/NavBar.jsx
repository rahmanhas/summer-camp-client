import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaListUl } from 'react-icons/fa';

const menu = (
  <>
    <NavLink
      className={({ isActive }) =>
        isActive ? 'text-lg text-blue-400 dark:text-white mr-2 p-2 rounded-xl' : 'mr-2 p-2'
      }
      to='/'
    >
      Home
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        isActive ? 'text-lg text-blue-400 dark:text-white mr-2 p-2 rounded-xl' : 'mr-2 p-2'
      }
      to='/instructor'
    >
      Instructors
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        isActive ? 'text-lg text-blue-400 dark:text-white mr-2 p-2 rounded-xl' : 'mr-2 p-2'
      }
      to='/classes'
    >
      Classes
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        isActive ? 'text-lg text-blue-400 dark:text-white mr-2 p-2 rounded-xl' : 'mr-2 p-2'
      }
      to='/dashboard'
    >
      Dashboard
    </NavLink>
  </>
);

const NavBar = ({ isDarkMode }) => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogOut = () => {
    logOut()
      .then(() => navigate(from))
      .catch((error) => console.log(error.message));
  };

  const navbarClass = isDarkMode ? 'bg-gray-900 text-white pt-5' : 'bg-gray-100 text-black pt-5';
  const buttonClass = isDarkMode
    ? 'text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-blue-900'
    : 'text-black bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-blue-900';

  return (
    <div className={navbarClass}>
      <div className='flex justify-between align-center p-5 mx-auto w-full'>
        <div>
          <h2 className='text-2xl text-blue-500'>DanceFlow Academy</h2>
        </div>
        <div className='hidden md:block'>{menu}</div>
        <div className='hidden md:block'>
          {user ? (
            <div className='flex justify-between align-center'>
              <img className='pr-2 rounded-full' src={user?.photoURL} alt='' width={45} height={45} title={`${user?.displayName}`} />
              <button onClick={handleLogOut} type='button' className={buttonClass}>
                LogOut
              </button>
            </div>
          ) : (
            <div className='flex justify-between align-center'>
              <Link to='/login'>
                <button className={buttonClass}>Login</button>
              </Link>
            </div>
          )}
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
          <div className='flex justify-end'>
            <FaListUl className='text-2xl' />
          </div>
          {isOpen && (
            <div className='flex flex-col gap-5'>
              {menu}
              {user ? (
                <div className='flex flex-col justify-between align-center'>
                  <img className='pr-2 rounded-full' src={user?.photoURL} alt='' width={45} height={45} title={`${user?.displayName}`} />
                  <button onClick={handleLogOut} type='button' className={buttonClass}>
                    LogOut
                  </button>
                </div>
              ) : (
                <div className='flex justify-between align-center'>
                  <Link to='/login'>
                    <button className={buttonClass}>Login</button>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
