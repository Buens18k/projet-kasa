import Main from '../components/Main';
import data from '../../data.json';

import Caroussel from '../components/Caroussel';
import Information from '../components/Information.jsx';

import { useLoaderData } from 'react-router-dom';


export async function loader({ params }) {
  const {title}=params;
  const house = data.find((h) => h.title.toLowerCase().split(' ').join('-') === title);
  return { house };
}
export default function House() {
  const { house } = useLoaderData();

  return (
      <Main>
        <Caroussel pictures={house.pictures} />
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
