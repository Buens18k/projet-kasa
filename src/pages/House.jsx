import data from '../../data.json';
import Main from '../components/Main';
import Caroussel from '../components/Caroussel';

import { useParams } from 'react-router-dom';

import Error from '../pages/Error-page.jsx';

export default function House() {
  // Récupère depuis l'URL le titre du logement
  const { title } = useParams();
  console.log('Titre extrait depui lURL :',title);
  // Parcours le tableau data pour trouver l'objet qui corrrespond au titre extrait
  const house = data.find((h) => h.title === title);
  console.log('Données du logement :',house)

  return (
    <>
      <Main>
        <p>{house.title}</p>
        <img src={house.pictures[0]} alt="" />
        <Caroussel />
        <div>Information du logement en question cliqué</div>
      </Main>
    </>
  );
}
