import {cards} from '../../api';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Cards.module.scss'
const Cards = () => {
  return (
    <div className={styles.wrapper}>
        {cards.length && cards.map((card) => (
            <ProductCard
             key={card.id}
             prodName={card.name}
             cardId={card.id}
             img={card.img}
            />
        ))}
    </div>
  )
};
export default Cards;
