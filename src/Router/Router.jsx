import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/MAin';
import Home from '../Pages/HomePage/Home';
import Registration from '../Pages/Registration/Registration';
import Login from '../Pages/Login/Login';
import Dashboard from '../Layout/Dashboard';
import PrivateRoute from './PrivateRoute';
import AddAClass from '../Dashboards/Instructor.jsx/AddAClass';
import MyClass from '../Dashboards/Instructor.jsx/MyClass';
import ManageUsers from '../Dashboards/ManageUsers';
import ManageClasses from '../Dashboards/ManageClasses';
import ErrorPage from '../Pages/ErrorPage/Error.Page';
import Instructor from '../Pages/Instructor/Instructor';
import Classes from '../Pages/Classes/Classes';
import MySelectedClasses from '../Dashboards/Student/MySelectedClasses';
import EnrolledClasses from '../Dashboards/Student/EnrolledClasses';


const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
        {
          path:'/instructor',
          element:<Instructor></Instructor>
        },
        {
          path:'/classes',
          element:<Classes></Classes>
        },
      ]
    },
    {
      path:"/dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: '/dashboard/addaclass', element: <AddAClass></AddAClass>
        },
        {
          path: '/dashboard/myclasses', element: <MyClass></MyClass>
        },
        {
          path: '/dashboard/manageusers', element: <ManageUsers></ManageUsers>
        },
        {
          path: '/dashboard/manageclasses', element: <ManageClasses></ManageClasses>
        },
        {
          path: '/dashboard/selectedclasses', element: <MySelectedClasses></MySelectedClasses>
        },
        {
          path: '/dashboard/enrolledclasses', element: <EnrolledClasses></EnrolledClasses>
        },
      ]
    }
  ]);

export default Router;