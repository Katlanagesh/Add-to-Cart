import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Footer from "./components/Footer";
import data from "./data.json";

import { useState } from "react";

export default function App() {
  const [totalitems, setTotalitems] = useState([]);
  const [product, setProduct] = useState(data);

  const Update = (desc, id) => {
    let tempdes = { id, desc };
    setTotalitems([...totalitems, tempdes]);
    let index = product.findIndex((obj) => obj.id === id);
    let temp = product;
    temp[index].isvisible = false;
    setProduct([...temp]);
  };
  const remove = (id) => {
    setTotalitems(totalitems.filter((value) => value.id !== id));
    let index = product.findIndex((obj) => obj.id === id);
    let temps = product;
    temps[index].isvisible = true;
    setProduct([...temps]);
  };

  return (
    <div className="App">
      <Navbar totalitems={totalitems} />
      <Header />

      <Product data={data} Update={Update} remove={remove} />
      <Footer />
    </div>
  );
}
