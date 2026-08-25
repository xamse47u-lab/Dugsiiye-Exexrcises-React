import { useState } from "react";
import CartContext from "./CartContext";
import ProductItem from "./ProductItem";
import CartSummery from "./CartSummery";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };
  const value = { cartItems, addToCart, removeFromCart };
  return (
    <CartContext.Provider value={value}>
      <ProductItem itemId={1} itemName="wedget" price={19.9} />
      <ProductItem itemId={2} itemName="Gadget" price={29.9} />
      <CartSummery />
    </CartContext.Provider>
  );
}

export default App;
