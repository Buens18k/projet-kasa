import style from '../styles/layouts/_home_location.module.scss';
import Card from './Card';
import data from '../../data.json';

export default function Location() {
  return (
    <div className={style.home__location}>
      {data.map((card, id) => {
        return <Card key={id} card={card} />;
      })}
    </div>
  );
}
