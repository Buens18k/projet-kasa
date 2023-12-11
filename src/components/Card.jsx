import React from 'react';
import style from '../styles/layouts/_home_location.module.scss';
import { Link } from 'react-router-dom';

export default function Card({ card }) {
  const slug = card.title.toLowerCase().split(' ').join('-');

  return (
    
    <Link to={`/house/${slug}`}  className={style.home__location__card}>
      <img className={style.home__location__card__img} src={card.cover} alt={card.title} />
      <h2 className={style.home__location__card__title}>{card.title}</h2>
    </Link> 
  ); 
}
