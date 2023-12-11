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
        {/* Parcours le tableau des nombres d'étoiles en utilisant l'index
        et affiche le nombre d'étoile Rouge reçu en props, sinon affiche les étoiles grises pour le reste */}
        {numberStars.map((star, index) => {
          if (star <= ratings) {
            return <img className={style.ctaInformation__profil__rating__star} key={index} src={StarRed} alt="étoile rouge" />;
          } else {
            return <img className={style.ctaInformation__profil__rating__star} key={index} src={Star} alt="étoile" />;
          }
        })}
      </div>
    </>
  );
}

export default RatingStars;
