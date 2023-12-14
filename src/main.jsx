import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import AppRouter from './AppRouter';
import './styles/style.scss';

// Création d'un conteneur racine pour l'App React et le relie à l'élément racine avec l'ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
// Indique à React de rendre les composants dans le conteneur racine
root.render(
  // Appelle le composant 'React.strictMode' qui active des vérifications et des avertissements supplémentaires pour ces composants enfants
  <React.StrictMode>
    {/* Utilise la fonction 'RouterProvider' pour définir avec la propriété 'router' le router 'AppRouter' de l'app */}
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);
