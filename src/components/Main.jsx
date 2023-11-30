import React from 'react';
import HomeBanner from './HomeBanner';
import Location from './Location';

import style from '../styles/layouts/_home_main.module.scss'

export default function Main(props) {
  return (
    <main className={style.home_main}>
      <HomeBanner />
      <Location />
    </main>
  );
}
