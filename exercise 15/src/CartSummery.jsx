import React, { useContext } from "react";
import CartContext from "./CartContext";

const CartSummery = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  return (
    <div>
      <h2>Cart summery</h2>
      <p>Total items :{cartItems.length}</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name}- ${item.price}
            {""}
            <button onClick={() => removeFromCart(item.id)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartSummery;
