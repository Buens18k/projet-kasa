import React from 'react';
import style from '../styles/layouts/_information.module.scss';

function Information({ titleHouse, location, tags, name, nameHost }) {
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
          <div className={style.ctaInformation__host__name}><p>{name}</p></div>
          <div>
            <img className={style.ctaInformation__host__pictureHost} src={nameHost} alt="" />
          </div>
        </div>
      </div>

      <div>Accordeon</div>
    </>
  );
}

export default Information;
