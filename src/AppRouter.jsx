import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/Error-page';
import House from './pages/House';
import About from './pages/About';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/house/:id',
    element: <House />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

export default AppRouter;
