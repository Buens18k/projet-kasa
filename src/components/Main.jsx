import React from 'react';
import style from '../styles/layouts/_home_main.module.scss';

export default function Main({ children }) {
  // place une balise 'main' pour optimiser les moteurs de recherche
  return <main className={style.home_main}>{children}</main>;
}
