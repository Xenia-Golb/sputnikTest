import CardItem, { type Product } from "../CardItem/CardItem";
import styles from "./CardList.module.css";

type CardListProps = {
  products: Product[];
};
function CardList({ products }: CardListProps) {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <CardItem
          key={product.id}
          title={product.title}
          origin={product.origin}
          price={product.price}
          currency={product.currency}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
}

export default CardList;
