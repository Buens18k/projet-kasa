import React from 'react';
import style from '../styles/layouts/_home_location.module.scss';
import { Link } from 'react-router-dom';

export default function Card({ card }) {
  // Rècupère le titre de la carte pour le convertir en miniscule
  // puis divise le titre en un tableau de mots
  // et joint les mots par des tirets pour le slug
  const slug = card.title.toLowerCase().split(' ').join('-');

  return (
    // Utilise l'élément 'Link' pour rediriger l'utilisateur lors d'un click vers une URL définssant le titre du logement concerné 
    <Link to={`/house/${slug}`} className={style.home__location__card}>
      <img className={style.home__location__card__img} src={card.cover} alt={card.title} width='100' height='100' loading='lazy'/>
      <h2 className={style.home__location__card__title}>{card.title}</h2>
    </Link>
  );
}
