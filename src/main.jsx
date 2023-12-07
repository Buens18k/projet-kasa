import React from 'react';
import ReactDOM from 'react-dom/client';
import { DataProvider } from './contexts/DataContext';
import { RouterProvider } from 'react-router-dom';

import AppRouter from './AppRouter';
import './styles/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={AppRouter} />
    </DataProvider>
  </React.StrictMode>
);
