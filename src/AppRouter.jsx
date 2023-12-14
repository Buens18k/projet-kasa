import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import HeaderFooterLayout from './Layout/HeaderFooterLayout';

import Home, { loader as homeloader } from './pages/Home';
import ErrorPage from './pages/Error-page';
import House, { loader as houseloader } from './pages/House';
import About from './pages/About';

// Création du Routeur en utilisant la fonction 'createBrowserRouter' qui définit les différentes routes et config de l'app
const AppRouter = createBrowserRouter([
  {
    // Configuration pour la route principal

    // Si l'URL correspond à '/'
    path: '/',
    // Le composant 'HeaderFooterLayout' est affiché
    element: <HeaderFooterLayout />,
    // En cas d'erreur, le composant ‘ErrorPage’ est affiché
    errorElement: <ErrorPage />,
    // Contient des enfants (définit des sous-routes pour cette route principal)
    children: [
      {
        // Route Racine de l'app

        // Si l'URL correspond à '/'
        path: '/',
        // Le composant 'Home' sera affiché
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
