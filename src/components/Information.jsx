import React from 'react';
import style from '../styles/layouts/_information.module.scss';
import styles from '../styles/layouts/_accordion.module.scss';
import RatingStars from './RatingStars';
import Accordion from '../components/Accordion';
import House from '../pages/House';

function Information({ titleHouse, location, tags, nameHost, pictureHost, ratings, description, equipments }) {
  // Divise la chaîne en utilisant ' ' comme delimiteur
  const [firstName, lastName] = nameHost.split(' ');
  // console.log('Le prénom :', firstName);
  // console.log('Le Nom :', lastName);

  // Parcours la liste 'equipments' et pour chaque équipment 'e', crée une 'li'
  const equipmentsList = equipments.map((e) => <li key={e}>{e}</li>);

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
      <div className={styles.ctaAccordionHouse}>
        <div className={styles.ctaAccordionHouse__item}>
          <Accordion title="Description" content={description} />
        </div>
        <div className={styles.ctaAccordionHouse__item}>
          <Accordion title="Equipements" content={equipmentsList} />
        </div>
      </div>
    </>
  );
}

export default Information;
