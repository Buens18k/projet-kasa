import data from '../../data.json';
import Main from '../components/Main';
import Caroussel from '../components/Caroussel';
import Information from '../components/Information.jsx';

import { redirect, useLoaderData } from 'react-router-dom';

// Crée une fonction qui va retourner les valeurs d'un logement
export async function loader({ params }) {
  // Récupère le titre extrès de l'URL
  const { title } = params;
  // Parcours les données 'data' en utilisant le titre comme critère
  // puis vérifie si le titre correspond au slug
  // Si les données correspond alors stock les valeur de ce titre dans la variable 'house'
  const house = data.find((h) => h.title.toLowerCase().split(' ').join('-') === title);

  // Condition URL si elle ne correspond pas
  if (house === undefined) {
    // Redirige vers la page 'Error'
    return redirect(`/error`);
  } else {
    // Sinon retourne l'objet
    return { house };
  }
}

export default function House() {
  // Utilise le hook 'useLoaderData' pour extraire les valeurs dans l'objet 'house' retourné par la fonction 'loader'
  const { house } = useLoaderData();

  return (
    <Main>
      <Caroussel pictures={house.pictures} />
      {/* Passe en prop les données souhaité */}
      <Information
        titleHouse={house.title}
        location={house.location}
        tags={house.tags}
        nameHost={house.host.name}
        pictureHost={house.host.picture}
        ratings={house.rating}
        description={house.description}
        equipments={house.equipments}
      />
    </Main>
  );
}
