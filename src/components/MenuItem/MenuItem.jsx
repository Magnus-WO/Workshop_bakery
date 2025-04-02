import React from "react";
import styles from "./MenuItem.module.css";

const MenuItem = ({ key, item, cartContent, setCartContent }) => {
  return (
    <div className={styles.menuItem}>
      <img src={item.imageUrl} />
      <button>Add to cart</button>
    </div>
  );
};

export default MenuItem;
