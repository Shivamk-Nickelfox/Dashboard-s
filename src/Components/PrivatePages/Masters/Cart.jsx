import React, { useEffect } from "react";
import { useState } from "react";
const Cart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchCart = async () => {
      try {
        console.log("start");
        const response = await fetch("http://localhost:5000/api/cartItems");
        console.log("end");
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCart(data);
        console.log("Cart Data:", data);
      } catch (error) {
        console.error("Error Fetching Cart:", error);
      }
    };
    fetchCart();
  }, []);
  return (
    <div style={{ position: "relative", top: "85px" }}>
      <h2>Your Cart</h2>
      {cart && cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.description} - {item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
      <button onClick={() => localStorage.setItem("cart", JSON.stringify([]))}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
