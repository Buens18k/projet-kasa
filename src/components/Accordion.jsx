import { React, useState } from 'react';
import ArrowBack from '../assets/arrowBack.svg';
import style from '../styles/layouts/_accordion.module.scss';

function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);
  return (
    <div className={style.accordion}>
      <div className={style.accordion_item}>
        <h3>{title}</h3>
        {
          <img
            onClick={() => setIsActive(!isActive)}
            src={ArrowBack}
            alt="Flèche vers le haut"
            className={isActive ? `${style.accordion_arrow} ${style.rotate}` : `${style.accordion_arrow} ${style.rotateInverse}`}
          />
        }
      </div>
      {isActive && <p className={style.accordion_content}>{content}</p>}
    </div>
  );
}

export default Accordion;
