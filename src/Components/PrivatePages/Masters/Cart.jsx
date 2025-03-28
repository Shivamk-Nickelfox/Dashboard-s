import React, { useEffect } from "react";
import { useState } from "react";
import { Box } from "@mui/system";
import { head } from "framer-motion/client";
const Cart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/cartItems",
          {
            method: "GET",
          },
          []
        );
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCart(data[0].items);
        console.log("Cart Data:", data);
      } catch (error) {
        console.error("Error Fetching Cart:", error);
      }
    };
    fetchCart();
  }, []);
  const clearCart = async () => {
    const token = localStorage.getItem("Token");
    const userId = localStorage.getItem("userId");
    if (!token || !userId) {
      console.error("User is not logged in");
      return;
    }
    localStorage.setItem("cart", JSON.stringify([]));

    try {
      const response = await fetch(`http://localhost:5000/api/cart/${userId}`, {
        method: "DELETE",

        headers: {
          contentType: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      const data = await response.json(); // Clear cart
      setCart([]);
    } catch (error) {
      console.error("Error Clearing Cart:", error);
    }
  };

  return (
    <div style={{ position: "relative", top: "85px" }}>
      <h2>Your Cart</h2>
      <Box sx={{ border: "1px solid black", padding: "10px" }}>
        {cart && cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.productId.description} , ${item.productId.price},
                {<img src={item.productId.image} alt="product" />}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty</p>
        )}
      </Box>
      <button
        onClick={() => {
          clearCart = { clearCart };
        }}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
