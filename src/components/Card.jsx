import React from 'react';
import style from '../styles/layouts/_home_location.module.scss';
import { Navigate } from 'react-router-dom';

export default function Card({ card }) {
  const [redirect, setRedirect] = React.useState(false);

  const handleClick = () => {
    setRedirect(true);
  };

  if(redirect) {
    return <Navigate to={`/house/${card.id}`} />
  }

  return (
    <article onClick={handleClick} className={style.home__location__card}>
      <img className={style.home__location__card__img} src={card.cover} alt={card.title} />
      <h2 className={style.home__location__card__title}>{card.title}</h2>
    </article>
  );
}
