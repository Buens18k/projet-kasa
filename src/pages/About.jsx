import Main from '../components/Main';
import AboutBanner from '../components/AboutBanner';
import style from '../styles/layouts/_accordion.module.scss';
import Accordion from '../components/Accordion';

export default function About() {
  return (
    <>
      <Main>
        <AboutBanner title="Fiabilité" />
        <div className={style.ctaAccordionAbout}>
          <Accordion
            title="Fiabilité"
            content="Les annonces postéed sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"
          />
          <Accordion
            title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement descriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Accordion
            title="Service"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement descriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Accordion
            title="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité est établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </Main>
    </>
  );
}
