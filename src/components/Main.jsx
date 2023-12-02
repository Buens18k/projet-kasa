import React from 'react';
import style from '../styles/layouts/_home_main.module.scss';

export default function Main({ children }) {
  console.log(children)
  return <main className={style.home_main}>{children}</main>;
}
