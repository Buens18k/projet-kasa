import { React, useState, useRef } from 'react';
import ArrowBack from '../assets/arrowBack.png';
import style from '../styles/layouts/_accordion.module.scss';

export default function Accordion({ title, content }) {
  const head = useRef(null);
  const contient = useRef(null);

  const [isActive, setIsActive] = useState(false);

  // Fonction qui déroule l'accordéon selon la taille et ajoute une propriété pour son style
  const toogleAccordeon = () => {
    // Contrôle
    // console.log(head.current);
    // console.log(contient.current);

    if (contient.current.style.maxHeight) {
      contient.current.style.maxHeight = null;
      contient.current.style.padding = null;
    } else {
      contient.current.style.maxHeight = `${contient.current.scrollHeight}px`;
      contient.current.style.padding = `4%`;
    }
    // Inverse la valeur actuelle de 'isActive'
    setIsActive(!isActive);
  };

  return (
    <div className={style.accordion}>
      <div className={style.accordion__head} ref={head}>
        {<h3 className={style.accordion__head__title}>{title}</h3>}
        {
          // Selon l'état du click
          <img
            src={ArrowBack}
            alt="flèche vers le haut"
            // Joue l'animation en fonction de l'état
            className={`${style.accordion__arrow} ${isActive ? style.rotate180 : ''}`}
            // Appel au click la fonction
            onClick={toogleAccordeon}
          />
        }
      </div>
      {/* Qui affiche ce que contient le props "content" */}
      <div className={style.accordion__content} ref={contient}>
        {content}
      </div>
    </div>
  );
}
