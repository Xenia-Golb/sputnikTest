import { formatPrice } from "../../utils/formatPrice";
import styles from "./CardItem.module.css";
export type Product = {
  id?: number;
  title: string;
  origin: string;
  price: number;
  currency: "RUB" | "USD" | "EUR" | string;
  imageUrl: string;
};
function CardItem({ imageUrl, title, origin, price, currency }: Product) {
  const formattedPrice = formatPrice(price, currency);
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.origin}>Страна: {origin}</p>
        <p className={styles.price}>{formattedPrice}</p>
      </div>
    </div>
  );
}

export default CardItem;
