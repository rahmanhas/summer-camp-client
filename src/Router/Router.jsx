import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/MAin';
import Home from '../Pages/HomePage/Home';
import Registration from '../Pages/Registration/Registration';
import Login from '../Pages/Login/Login';

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
  ]);

export default Router;