import { React, useState, useRef } from 'react';
import ArrowBack from '../assets/arrowBack.svg';
import style from '../styles/layouts/_accordion.module.scss';

export default function Accordion({ title, content }) {
  const head = useRef(null);
  const contient = useRef(null);

  const [key, setKey] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Fonction qui déroule l'accordéon selon la taille et ajoute une propriété pour son style
  const toogleAccordeon = () => {
    console.log(head.current);

    if (contient.current.style.maxHeight) {
      contient.current.style.maxHeight = null;
      contient.current.style.padding = null;
    } else {
      contient.current.style.maxHeight = `${contient.current.scrollHeight}px`;
      contient.current.style.padding = `20px 20px 20px 15px`;
    }
    setKey((preKey) => preKey + 1);
    setIsActive(!isActive);
  };

  console.log(isActive);

  return (
    <div className={style.accordion}>
      <div className={style.accordion__head} ref={head}>
        {<h3>{title}</h3>}
        {
          // Selon l'état du click
          <img
            key={key}
            src={ArrowBack}
            alt="flèche vers le haut"
            // Joue l'animation en fonction de l'état
            className={`${style.accordion__arrow} ${isActive ? style.rotateIn : style.rotateOut}`}
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
