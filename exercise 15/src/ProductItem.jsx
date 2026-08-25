import React, { useContext } from "react";
import CartContext from "./CartContext";

const ProductItem = ({ itemId, itemName, price }) => {
  const { addToCart } = useContext(CartContext);
  const handleAdd = () => {
    addToCart({ id: itemId, name: itemName, price });
  };
  return (
    <div>
      <p>{itemName}</p>
      <p>price:${price}</p>
      <button onClick={handleAdd}>Add to cart</button>
    </div>
  );
};

export default ProductItem;
