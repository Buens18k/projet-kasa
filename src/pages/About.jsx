import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import AboutBanner from '../components/AboutBanner';
import style from '../styles/layouts/_accordion.module.scss';

export default function About() {
  return (
    <>
      <Header />
      <Main>
        <AboutBanner />
        <div className={style.ctaAccordion}>
          <div className={style.ctaAccordion__item}>Fiabilité</div>
          <div className={style.ctaAccordion__item}>Respect</div>
          <div className={style.ctaAccordion__item}>Service</div>
          <div className={style.ctaAccordion__item}>Sécurité</div>
        </div>
      </Main>

      <Footer />
    </>
  );
}
