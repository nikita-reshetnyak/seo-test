import { useParams } from 'react-router-dom';
import { cards } from '../../api';
import SEO from '../../components/SEO/SEO';
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
    <SEO seo={product.seo} />
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
       <div className={styles.body}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, atque architecto explicabo nam nesciunt expedita optio soluta vel blanditiis voluptate debitis omnis tenetur suscipit, veniam molestiae assumenda odio eius facere!
       </div>
       <div className={styles.footer}></div>
    </div>
    </>
    
  )
};
 export default Product;
