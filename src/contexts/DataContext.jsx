import React, { createContext, useState } from 'react';
import data from '../../data.json';

// Création du context
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // Gérer les données avec useState
  const [houses, setHouses] = useState(data);

  return (
    <DataContext.Provider value={{houses, setHouses}}>
        {children}
    </DataContext.Provider>
  )
};
