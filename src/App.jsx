import { useState } from "react";
import "../src/assets/styles/reset.css";
import "../src/assets/styles/variables.css";
import MenuList from "./components/MenuList/MenuList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

import "./App.css";

function App() {
  const [cartContent, setCartContent] = useState([]);
  const [addToCartButtonActive, setAddToCartButtonActive] = useState(null);
  return (
    <>
      <section className="listWrapper">
        <MenuList
          cartContent={cartContent}
          setCartContent={setCartContent}
          addToCartButtonActive={addToCartButtonActive}
          setAddToCartButtonActive={setAddToCartButtonActive}
        />
      </section>
      <ShoppingCart />
    </>
  );
}

export default App;
