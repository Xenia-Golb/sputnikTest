import "./App.css";
import CardList from "./components/CardList/CardList";
import { products } from "./data/products";

function App() {
  return <CardList products={products} />;
}

export default App;
