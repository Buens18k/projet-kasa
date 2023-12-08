import React, { createContext, useState } from 'react';
import data from '../../data.json';

// Création d'un context React nommé 'DataContext'
export const DataContext = createContext();

// Création d'un composant 'DataProvider'
export const DataProvider = ({ children }) => {
  // Initialise l'état 'houses' provenant de la variable 'data'
  const [houses, setHouses] = useState(data);

  return (
    // Retourne le contexte 'DataContext' avec les valeurs initialisé à 'houses'
    <DataContext.Provider value={{ houses, setHouses }}>
      {/* Chaque enfant pourras accéder aux données 'houses'  */}
      {children}
    </DataContext.Provider>
  );
};
