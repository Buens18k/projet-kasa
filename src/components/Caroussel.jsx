import React, { useState } from 'react';
import style from '../styles/layouts/_caroussel.module.scss';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

export default function Caroussel({ pictures }) {
  // console.log('Les pictures :', pictures);

  // Défini l'index de l'image courante.
  const [currentImage, setCurrentImage] = useState(0);

  // Fonction pour passer à l'image précèdente.
  const prevImg = () => {
    // Utilise la fonction 'setCurrentImage' du hook 'useState' pour mettre à jour la 'currentImage'
    // Décrémente de 1 l'index actuel 'prev' et ajoute la longueur du tableau.
    // L'opérateur modulo('%') assure que l'index reste dans les limites du tableau, cela crée une boucle circulaire.
    // Si l'index du tableau atteint la fin du tableau, il revient au début.
    setCurrentImage((prev) => (prev - 1 + pictures.length) % pictures.length);
  };

  // Fonction pour passer à l'image suivante
  const nextImg = () => {
    setCurrentImage((prev) => (prev + 1) % pictures.length);
  };

  console.log('Index de l image courante :', currentImage);
  return (
    <>
      <div className={style.caroussel}>
        <LeftArrow onClick={prevImg} />
        <img src={pictures[currentImage]} alt="photo de l'appartement" className={style.caroussel__image} />
        <RightArrow onClick={nextImg} />
      </div>
    </>
  );
}
