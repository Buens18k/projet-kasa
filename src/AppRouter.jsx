import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import HeaderFooterLayout from './Layout/HeaderFooterLayout';

import Home from './pages/Home';
import ErrorPage from './pages/Error-page';
import House from './pages/House';
import About from './pages/About';

// Application route
const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/house/:title',
        element: <House />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default AppRouter;
