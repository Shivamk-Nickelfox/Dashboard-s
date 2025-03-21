import React, { use, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import { getAuth } from "firebase/auth";

function ProductMaster() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(savedCart);
      setCount(savedCart.length);
    } catch (error) {
      console.error("Error parsing cart data:", error);
      localStorage.removeItem("cart"); // Clear corrupt data
      setCart([]);
      setCount(0);
    }
  }, []);
  useEffect(() => {
    const fetchproducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
        console.log("Error Fetching Products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchproducts();
  }, []);


  const handleAddToCart = async (product) => {
    const updateCart = [...cart, product];
    setCart(updateCart);
    setCount(updateCart.length);
    localStorage.setItem("cart", JSON.stringify(updateCart));
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      console.error("User is not logged in");
      alert("Please log in to add items to the cart");
      return;
    }
    const token = await user.getIdToken();
    console.log("Token:", token);
    console.log("Product:", product);
    const cartItem = {
      productId: product._id,
      quantity: 1,
      description: product.description,
      productImage: product.image,
    };
    console.log("cartitm:", cartItem);
    try {
      const response = await fetch("http://localhost:5000/api/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(cartItem),
      });
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      const result = await response.json();
      console.log("Backend response:", result);
    } catch (error) {
      setError(error.message);
      console.log("Error adding to cart:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      style={{
        padding: "80px 10px",
        display: "flex",
        flexDirection: "column",
        margin: "0px",
        width: "100%",
        height: "100vh",
      }}
    >
      <Grid sx={{ backgroundColor: "Blue" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 2,
            padding: "20px 10px",
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 3 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ pl: 2, color: "darkblue" }}
            >
              Products
            </Typography>
          </Box>
          <Box sx={{ position: "relative", display: "inline-block" }}>
            {/* Count Display (Badge) */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                backgroundColor: "red",
                color: "white",
                fontSize: "12px",
                fontWeight: "bold",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: "translate(-100%, -50%)", // Moves it above the cart icon
              }}
            >
              {count}
            </Box>

            {/* Cart Button */}
            <Button
              sx={{ color: "white", width: "100%" }}
              startIcon={<ShoppingCartIcon sx={{ fontSize: "large" }} />}
            ></Button>
          </Box>
        </Box>
      </Grid>
      {/* Products Grid */}

      <Grid
        container
        spacing={3}
        sx={{
          padding: "50px 38px",
          backgroundColor: "rgba(155, 40, 40, 0.05)",
          marginTop: "calc(0* 24px)",
          marginLeft: "1px",
          width: "100%",
        }}
      >
        {products &&
          products.map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={product.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid #ccc",
                borderRadius: "8px",
                backgroundColor: "#fff",
                padding: "10px",
                height: "3  0%",
                marginBottom: "20px",
              }}
            >
              {/* Product Image */}
              {product.image ? (
                <Box
                  component="img"
                  src={product.image}
                  alt={product.name}
                  sx={{
                    height: "300px",
                    width: "300px",
                    objectFit: "cover",
                    borderRadius: "4px",
                    mb: 1,
                  }}
                />
              ) : (
                <Box
                  sx={{
                    height: "300px",
                    width: "300px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "24px",
                    color: "gray",
                  }}
                >
                  No Image Available
                </Box>
              )}
              {/* Price and Description */}
              <Box sx={{ textAlign: "center", width: "100%", mb: 1 }}>
                {product.price ? (
                  <Typography variant="h6">${product.price}</Typography>
                ) : (
                  <Typography variant="h6">Price Not Available</Typography>
                )}
                {product.description ? (
                  <Typography variant="body2">{product.description}</Typography>
                ) : (
                  <Typography variant="body2">
                    Description Not Available
                  </Typography>
                )}
              </Box>
              {/* Cart Button */}

              <Button
                variant="contained"
                fullWidth
                sx={{ backgroundColor: "darkblue" }}
                startIcon={<ShoppingCartIcon />}
                onClick={() => {
                  handleAddToCart(product);
                  incrementCount();
                }}
              >
                Add to Cart
              </Button>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default ProductMaster;
