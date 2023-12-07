import data from '../../data.json';
import Main from '../components/Main';
import Caroussel from '../components/Caroussel';

import { useParams } from 'react-router-dom';
import { DataContext } from '../contexts/DataContext.jsx';
import { useContext } from 'react';

export default function House() {
  // Récupère depuis l'URL, le titre du logement
  const { title } = useParams();
  
  // Accède au contexte du tableau 'houses' pré-établi dans le 'DataContext'
  const { houses } = useContext(DataContext);
  // console.log('Contexte du tableau houses :',houses);

  // Parcours le context du tableau houses pour trouver l'objet qui correspond au titre extrait
  const house = houses.find(h => h.title === title)
  // console.log('Données du logement :',house)
  
  return (
    <>
      <Main>
        <Caroussel
          pictures={house.pictures}
        />
      </Main>
    </>
  );
}
