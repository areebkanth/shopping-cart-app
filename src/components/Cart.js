import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart">
      <button onClick={() => setShowCart(!showCart)}>
        Cart ({totalItems})
      </button>
      {showCart && (
        <div className="cart-popup">
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                </div>
                <div className="cart-item-actions">
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  />
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))
          )}
          <div className="cart-total">
            <h3>Total Bill: ${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
