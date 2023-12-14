import React from 'react';
import style from '../styles/layouts/_caroussel.module.scss';
import ArrowLeft from '../assets/arrowLeft.png';

export default function LeftArrow({ onClick }) {
  return <img className={`${style.caroussel__arrowLeft} ${style.caroussel__arrow}`} onClick={onClick} src={ArrowLeft} alt="Flèche gauche" />;
}
