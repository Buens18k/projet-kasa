import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import HeaderFooterLayout from './Layout/HeaderFooterLayout';

import Home,{ loader as homeloader } from './pages/Home';
import ErrorPage from './pages/Error-page';
import House ,{ loader as houseLoader } from './pages/House';
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
        loader: homeloader,

      },
      {
        path: '/house/:title',
        element: <House />,
        loader: houseLoader,

      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default AppRouter;
