import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/MAin';
import Home from '../Pages/HomePage/Home';
import Registration from '../Pages/Registration/Registration';
import Login from '../Pages/Login/Login';
import Dashboard from '../Layout/Dashboard';
import Instructor from '../Dashboards/Instructor.jsx/Instructor';
import PrivateRoute from './PrivateRoute';


const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/register',
          element:<Registration></Registration>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
      ]
    },
    {
      path:"/dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: '/dashboard/instructor',
          element: <Instructor></Instructor>
        }
      ]
    }
  ]);

export default Router;