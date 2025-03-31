import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { getAuth } from "firebase/auth";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        console.error("User is not logged in");
        return;
      }
      try {
        const token = await user.getIdToken();
        const response = await fetch("http://localhost:5000/api/cartItems", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCart(data?.items || []);
      } catch (error) {
        console.error("Error Fetching Cart:", error);
      }
    });

    return () => unsubscribe();
  }, []);

  let clearCart = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      console.error("User is not logged in");
      alert("You must be logged in to clear the cart.");
      return;
    }

    const token = await user.getIdToken();
    const userId = user.uid;

    setCart([]); // Clear cart immediately for UI feedback
    localStorage.removeItem("cart"); // Replace "cart" with your key

    try {
      const response = await fetch(`http://localhost:5000/cart/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("userId:", userId);
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      console.log("Cart cleared successfully");
    } catch (error) {
      console.error("Error Clearing Cart:", error);
    }
  };

  return (
    <div style={{ position: "relative", top: "85px" }}>
      <h2>Your Cart</h2>
      <Box sx={{ border: "1px solid black", padding: "10px" }}>
        {cart.length > 0 ? (
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
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
