import React from 'react';
import style from '../styles/layouts/_information.module.scss';

function Information({ titleHouse, location, tags, nameHost, pictureHost }) {
  // Divise la chaîne en utilisant ' ' comme delimiteur
  const [firstName, lastName] = nameHost.split(' ');
  console.log('Le prénom :', firstName);
  console.log('Le Nom :', lastName);

  return (
    <>
      <div className={style.ctaInformation}>
        <div className={style.ctaInformation__info}>
          <h1 className={style.ctaInformation__info__title}>{titleHouse}</h1>
          <p className={style.ctaInformation__info__location}>{location}</p>
          <div className={style.ctaInformation__info__tagHouse}>
            <ul>
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={style.ctaInformation__host}>
          <div className={style.ctaInformation__host__name}>
            <span>{firstName}</span> <br />
            <span>{lastName}</span>
          </div>
          <img className={style.ctaInformation__host__pictureHost} src={pictureHost} alt="portrait de l'hôte" />
        </div>
      </div>

      <div>Accordeon</div>
    </>
  );
}

export default Information;
