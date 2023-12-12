import React from 'react';
import { useLoaderData } from 'react-router-dom';

import data from '../../data.json';

import Main from '../components/Main';
import HomeBanner from '../components/HomeBanner';
import Location from '../components/Location';

// Crée une fonction asynchrone pour renvoyez les données
export async function loader({ params }) {
  const house = data;
  return { house };
}

function Home() {
  // Utilise le hook 'useLoaderData' pour obtenir les données
  const { house } = useLoaderData();
  
  return (
    <Main>
      <HomeBanner />
      {/* Passe en prop 'data' les données au composant 'Location' */}
      <Location data={house} />
    </Main>
  );
}

export default Home;
