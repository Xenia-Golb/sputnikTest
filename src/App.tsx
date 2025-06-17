import "./App.css";
import { CardList } from "./components/index";
import { products } from "./data/products";

function App() {
  return <CardList products={products} />;
}

export default App;
