import { React, useState, useRef } from 'react';
import ArrowBack from '../assets/arrowBack.png';
import style from '../styles/layouts/_accordion.module.scss';

export default function Accordion({ title, content }) {
  // Avec le hook 'useRef', crée une référence mutable à un élément DOM avec une valeur mis à 'null'
  const head = useRef(null);
  const contient = useRef(null);
  // Crée une variable d'état 'isActive' et une fonction 'setIsActive' en utilisant le hook 'useState'
  const [isActive, setIsActive] = useState(false);

  // Fonction qui déroule l'accordéon selon la taille et ajoute une propriété pour son style
  const toogleAccordeon = () => {
    // Contrôle
    // console.log(head.current);
    // console.log(contient.current);

    // Condition qui va modifier un style
    if (contient.current.style.maxHeight) {
      contient.current.style.maxHeight = null;
      contient.current.style.padding = null;
    } else {
      contient.current.style.maxHeight = `${contient.current.scrollHeight}px`;
      contient.current.style.padding = `20px 20px 20px 15px`;
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
            className={`${style.accordion__arrow} ${isActive && style.rotate180}`}
            // Appel au click la fonction
            onClick={toogleAccordeon}
          />
        }
      </div>
      {/* En référence le content approprié au DOM */}
      <div className={style.accordion__content} ref={contient}>
        {/* Applique un style au content si l'état est active */}
        <div className={`${style.accordion__content__inside} ${isActive && style.active}`}>
          {/* Affiche les données contenu dans le prop du titre concerné */}
          {content || 'Pas de contenu disponible'}
        </div>
      </div>
    </div>
  );
}
