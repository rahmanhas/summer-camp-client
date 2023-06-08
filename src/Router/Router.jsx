import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/MAin';
import Home from '../Pages/HomePage/Home';
import Registration from '../Pages/Registration/Registration';
import Login from '../Pages/Login/Login';
import Dashboard from '../Layout/Dashboard';
import Instructor from '../Dashboards/Instructor.jsx/Instructor';
import PrivateRoute from './PrivateRoute';
import AddAClass from '../Dashboards/Instructor.jsx/AddAClass';
import MyClass from '../Dashboards/Instructor.jsx/MyClass';


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
          element: <Instructor></Instructor>,
        },
        {
          path: '/dashboard/addaclass', element: <AddAClass></AddAClass>
        },
        {
          path: '/dashboard/myclasses', element: <MyClass></MyClass>
        },
      ]
    }
  ]);

export default Router;