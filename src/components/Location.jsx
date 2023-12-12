import style from '../styles/layouts/_home_location.module.scss';
import Card from './Card';

export default function Location({data}) {

  return (
    <div className={style.home__location}>
      {/* Parcours les données et pour chaques données crée une card en utilisant l'index comme clé unique */}
      {data.map((card, id) => {
        return <Card key={id} card={card} />;
      })}
    </div>
  );
}
