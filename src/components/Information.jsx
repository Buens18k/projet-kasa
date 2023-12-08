import React from 'react';
import style from '../styles/layouts/_information.module.scss';
import RatingStars from './RatingStars';

function Information({ titleHouse, location, tags, nameHost, pictureHost, ratings }) {
  // Divise la chaîne en utilisant ' ' comme delimiteur
  const [firstName, lastName] = nameHost.split(' ');
  console.log('Le prénom :', firstName);
  console.log('Le Nom :', lastName);

  return (
    <>
      <div className={style.ctaInformation}>
        <div className={style.ctaInformation__house}>
          <div className={style.ctaInformation__house__info}>
            <h1 className={style.ctaInformation__house__info__title}>{titleHouse}</h1>
            <p className={style.ctaInformation__house__info__location}>{location}</p>
          </div>
          <div className={style.ctaInformation__house__tags}>
            <ul>
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={style.ctaInformation__profil}>
          <div className={style.ctaInformation__profil__host}>
            <div className={style.ctaInformation__profil__host__name}>
              <p className={style.ctaInformation__profil__host__name__first}>{firstName}</p>
              <p className={style.ctaInformation__profil__host__name__last}>{lastName}</p>
            </div>
            <img className={style.ctaInformation__profil__host__pictureHost} src={pictureHost} alt="portrait de l'hôte" />
          </div>
          {/* <div className={style.informationRating}> */}
          <RatingStars ratings={Number(ratings)} />
          {/* </div> */}
        </div>
      </div>
      <div>Accordeon</div>
    </>
  );
}

export default Information;
