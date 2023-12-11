import React from 'react';
import ReactDOM from 'react-dom/client';
import { DataProvider } from './contexts/DataContext';
import { RouterProvider } from 'react-router-dom';

import AppRouter from './AppRouter';
import './styles/style.scss';

// Création d'un conteneur racine pour l'App React et le relie à l'élément racine avec l'ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
// Indique à React de rendre les composants dans le conteneur racine
root.render(
  // Activation du mode strict de React pour effectuer des vérifications et affiche dans la console
  <React.StrictMode>
    {/* Donne le contexte 'DataContext' aux enfants avec la variable 'DataProvider' */}
    <DataProvider>
      {/* Utilise la fonction 'RouterProvider pour définir avec la propriété 'router' le router 'AppRouter' de l'app */}
      <RouterProvider router={AppRouter} />
    </DataProvider>
  </React.StrictMode>
);
