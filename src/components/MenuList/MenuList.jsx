import React from "react";
import styles from "./MenuList.module.css";
import MenuItem from "../MenuItem/MenuItem";
import bakeryItems from "../../assets/data.js";

const MenuList = ({
  cartContent,
  setCartContent,
  addToCartButtonActive,
  setAddToCartButtonActive,
}) => {
  return (
    <>
      <h1 className={styles.dessertHeader}>High Carb Haven</h1>
      <div className={styles.menuList}>
        {bakeryItems.map((item, index) => {
          return (
            <MenuItem
              key={item.id}
              item={item}
              cartContent={cartContent}
              setCartContent={setCartContent}
              addToCartButtonActive={addToCartButtonActive}
              setAddToCartButtonActive={setAddToCartButtonActive}
              itemQuantity={
                cartContent.find((cartItem) => cartItem.menuItemNum === item.id)
                  ?.qty || 0
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default MenuList;
