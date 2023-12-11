import style from '../styles/layouts/_home_location.module.scss';
import Card from './Card';
// import data from '../../data.json';

import { DataContext } from '../contexts/DataContext';
import { useContext } from 'react';

export default function Location() {
  // Avec le hook 'useContext' j'accède aux données data.json depuis le context 'DataContext' et stock dans la variable 'houses'
  const { houses } = useContext(DataContext);

  return (
    <div className={style.home__location}>
      {/* Parcours les données et pour chaques données crée une card en utilisant l'index comme clé unique */}
      {houses.map((card, id) => {
        return <Card key={id} card={card} />;
      })}
    </div>
  );
}
