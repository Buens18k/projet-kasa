import style from '../styles/layouts/_home_location.module.scss';
import Card from './Card';
import data from '../../data.json';

import { DataContext } from '../contexts/DataContext';
import { useContext } from 'react';

export default function Location() {
  // Avec le hook 'useContext' j'accède aux données du context 'DataContext'
  const { houses } = useContext(DataContext);

  return (
    <div className={style.home__location}>
      {houses.map((card, id) => {
        return <Card key={id} card={card} />;
      })}
    </div>
  );
}
