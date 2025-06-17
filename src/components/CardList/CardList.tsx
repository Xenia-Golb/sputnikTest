import { type Product, CardItem } from "../index";
import styles from "./CardList.module.css";

type CardListProps = {
  products: Product[];
};
export function CardList({ products }: CardListProps) {
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
