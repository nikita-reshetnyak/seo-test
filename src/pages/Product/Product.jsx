import { useParams } from 'react-router-dom';
import { cards } from '../../api';
import SEO from '../../components/SEO/SEO';
import { generateString } from '../../generateText';
import styles from './Product.module.scss';
const Product = () => {
  const {cardId} = useParams();
  
  let product;
  cards.forEach((card) => {
    if (String(card.id) === cardId) {
      product = card;
    }
  });
  console.log(product);
  
  return (
    <>
    <SEO seo={product.seo} id={product.id} />
    <div className={styles.wrapper}>
       <div className={styles.header}>
        <div className={styles.head}>
          <div className={styles.image}>
           <img src={product?.img} alt='product' />
          </div>
          <h1 className={styles.title}>
            {product?.name}
          </h1>
        </div>
       </div>
       <div style={{maxWidth: '80%', wordWrap: 'break-word'}} className={styles.body}>
       {generateString(1000)}
       </div>
       <div className={styles.footer}></div>
    </div>
    </>
    
  )
};
 export default Product;
