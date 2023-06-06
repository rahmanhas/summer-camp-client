import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/MAin';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>
    },
  ]);

export default Router;