import React from 'react';
import style from '../styles/layouts/_information.module.scss';
import Star from '../assets/star.png';
import StarRed from '../assets/starRed.png';

function RatingStars({ ratings }) {
  // console.log(ratings);

  // Crée un tableau pour le nombre d'étoile à afficher
  const numberStars = [1, 2, 3, 4, 5];

  return (
    <>
      <div className={style.ctaInformation__profil__rating}>
        {/* Itère sur le tableau 'numbersStar', et pour chaque élément 'star' et son index */}
        {numberStars.map((star, index) => {
          // Si la valeur de 'star' est infèrieur ou égale à 'ratings'
          if (star <= ratings) {
            // Vrai : affiche la source 'étoile rouge'
            return <img className={style.ctaInformation__profil__rating__star} key={index} src={StarRed} alt="étoile rouge" />;
          } else {
            // Sinon : affiche un étoile grise
            return <img className={style.ctaInformation__profil__rating__star} key={index} src={Star} alt="étoile" />;
          }
        })}
      </div>
    </>
  );
}

export default RatingStars;
