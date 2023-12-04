import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import AboutBanner from '../components/AboutBanner';
import style from '../styles/layouts/_accordion.module.scss';
import Accordion from '../components/Accordion';
import { useState } from 'react';

export default function About() {
  const [active, setActive] = useState('');
  return (
    <>
      <Header />
      <Main>
        <AboutBanner title="Fiabilité" />
        <div className={style.ctaAccordionAbout}>
          <div className={style.ctaAccordionAbout__item}>
            <Accordion active={active} setActive={setActive} title="Fiabilité" />
          </div>
          <div className={style.ctaAccordionAbout__item}>
            <Accordion title="Respect" />
          </div>
          <div className={style.ctaAccordionAbout__item}>
            <Accordion title="Service" />
          </div>
          <div className={style.ctaAccordionAbout__item}>
            <Accordion title="Sécurité" />
          </div>
        </div>
      </Main>

      <Footer />
    </>
  );
}
