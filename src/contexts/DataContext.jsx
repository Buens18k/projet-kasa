import React, { createContext, useEffect, useState } from 'react';

// Création d'un context React nommé 'DataContext'
export const DataContext = createContext();

// Création d'un composant 'DataProvider'
export const DataProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // Initialise l'état 'houses' provenant de la variable 'data'
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Appel des données depuis le fichier 'data.json'
        const response = await fetch('data.json');
        console.log(response);

        // Si la réponse n'est pas ok alors un message sera créer
        if (!response.ok) {
          throw new Error('Echec de la récupération des données');
        }
        // Réponse reçu et les données sont stocké dans la variable 'data'
        const data = await response.json();
        console.log(data);
        // Mise à jour de l'état des données 'data' avec la fonction 'setHouses'
        setHouses(data);
        // Arrêt du statut de mise à jour du chargement des données
        setIsLoading(false);
      } catch (error) {
        // Mise à jour avec la fonction 'setError'
        setError(error);

        // Arrêt du statut de mise à jour du chargement des données
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p> Loading...</p>;
  }

  if (error) {
    // console.log(error.message);
    return <p>Une Erreur c'est produite lors du chargement des données, veuillez contacter le support technique s'il vous plaît.</p>;
  }

  return (
    // Retourne le contexte 'DataContext' avec les valeurs initialisé à 'houses'
    <DataContext.Provider value={{ houses, setHouses }}>
      {/* Chaque enfant pourras accéder aux données 'houses'  */}
      {children}
    </DataContext.Provider>
  );
};
