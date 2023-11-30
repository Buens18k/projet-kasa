import style from '../styles/layouts/_home_location.module.scss';
import { Link } from 'react-router-dom';

export default function Card({ card }) {
  return (
    <article className={style.home__location__card}>
      <Link to={`/house/${card.id}`} />
      <div className={style.home__location__card__cta}>
        <div className={style.home__location__card__cta__gradient}></div>
        {/* <img src={card.cover} alt={card.title} /> */}
      </div>
    </article>
  );
}
