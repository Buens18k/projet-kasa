import React from 'react';
import style from '../styles/layouts/_home_location.module.scss';
import { Navigate } from 'react-router-dom';

export default function Card({ card }) {
  // Utilise le hook 'useState' pour initialisé la variable d'état 'redirect',
  // et une fonction 'setRedirect' qui permet de MAJ cette variable d'état
  const [redirect, setRedirect] = React.useState(false);

  // Fonction qui va mettre à jour la variable d'état si elle est appelé
  const handleClick = () => {
    setRedirect(true);
  };

// Condition de redirection
  if (redirect) {
    // En utilisant le hook Navigate, redirige vers l'URL 'house' + le titre de la card cliqué
    return <Navigate to={`/house/${card.title}`} />;
  }

  return (
    <article onClick={handleClick} className={style.home__location__card}>
      <img className={style.home__location__card__img} src={card.cover} alt={card.title} />
      <h2 className={style.home__location__card__title}>{card.title}</h2>
    </article>
  );
}
