import React from "react";
import styles from "./CounterButton.module.css";

const CounterButton = ({
  itemQuantity,
  addItemToCart,
  subtractItemFromCart,
}) => {
  return (
    <div className={styles.addToCartButtonActive}>
      <button
        className={styles.addToCartDecrement}
        onClick={subtractItemFromCart}
      >
        -
      </button>
      <span>{itemQuantity}</span>
      <button className={styles.addToCartIncrement} onClick={addItemToCart}>
        +
      </button>
    </div>
  );
};

export default CounterButton;
