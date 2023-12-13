import React from 'react';
import style from '../styles/layouts/_information.module.scss';
import styles from '../styles/layouts/_accordion.module.scss';
import RatingStars from './RatingStars';
import Accordion from '../components/Accordion';
import Host from '../assets/Host.png';

function Information({ titleHouse, location, tags, nameHost, pictureHost, ratings, description, equipments }) {
  // Divise la chaîne en utilisant ' ' comme delimiteur
  const [firstName, lastName] = nameHost.split(' ');
  // console.log('Le prénom :', firstName);
  // console.log('Le Nom :', lastName);

  // Parcours la liste 'equipments' reçu en prop
  // et pour chaque équipment 'e', crée une liste ('li') qui sera stocké dans la variable 'equipmentsList'
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
            <img className={style.ctaInformation__profil__host__pictureHost} src={pictureHost ? pictureHost : Host} alt="portrait de l'hôte" />
          </div>
          {/* Appel du composant 'RatingStars' en lui donnant le prop 'ratings' */}
          <RatingStars ratings={Number(ratings)} />
        </div>
      </div>
      <div className={styles.ctaAccordionHouse}>
        <div className={styles.ctaAccordionHouse__item}>
          {/* Appel du composant 'Accordion' en lui passant les props demander par le composant ou un message */}
          <Accordion title="Description" content={description || 'Aucune description pour le moment'} />
        </div>
        <div className={styles.ctaAccordionHouse__item}>
          {/* Appel du composant 'Accordion' en verifiant si la liste est supèrieur à 0 si oui affiche la liste des équipements si non alors affiche un message */}
          <Accordion title="Equipements" content={equipments.length > 0 ? equipmentsList : 'Aucun équipement renseigner pour le moment'} />
        </div>
      </div>
    </>
  );
}

export default Information;
