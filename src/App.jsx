import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://discoveryprovider.audius.co/v1/tracks/trending")
      .then(({ data }) => setProducts(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App bg-slate-100 flex flex-wrap gap-5 justify-center items-center m-auto py-8">
      {products.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
}

export default App;
