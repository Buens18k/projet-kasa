import { React, useState } from 'react';
// import ArrowUp from '../assets/arrowBack.png';
import ArrowBack from '../assets/arrowBack.svg';
import style from '../styles/layouts/_accordion.module.scss';

function Accordion({ title }) {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);
  return (
    <div className={style.accordion} onClick={() => setIsActive(!isActive)}>
      <h3>{title}</h3>
      {
        <img
          src={ArrowBack}
          alt="Flèche vers le haut"
          className={isActive ? `${style.accordion_arrow} ${style.rotate}` : `${style.accordion_arrow} ${style.rotateInverse}`}
        />
      }
    </div>
  );
}

export default Accordion;
