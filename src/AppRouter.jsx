import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import HeaderFooterLayout from './Layout/HeaderFooterLayout';

import Home, { loader as homeloader } from './pages/Home';
import ErrorPage from './pages/Error-page';
import House, { loader as houseloader } from './pages/House';
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
        // Appel la fonction alias 'homeloader' pour charger les données avant d'afficher le contenu
        loader: homeloader,
      },
      {
        path: '/house/:title',
        element: <House />,
        loader: houseloader,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default AppRouter;
