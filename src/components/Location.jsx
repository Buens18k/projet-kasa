import style from '../styles/layouts/_home_location.module.scss';
import Card from './Card';


export default function Location({data}) {


  return (
    <div className={style.home__location}>
      {data.map((card, id) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
}
