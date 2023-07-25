import Card from "../Card/Card";

const ProductCard = (props) => {
  const {cardId, img, prodName} = props;
  return (
    <Card
     cardId={cardId}
     img={img}
     prodName={prodName}
     />
  );
};
export default ProductCard;
