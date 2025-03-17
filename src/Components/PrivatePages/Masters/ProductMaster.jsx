import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import { useEffect } from "react";

function ProductMaster() {
   const [products, setProducts] = useState([

   ])

   useEffect(() => {
    fetch("http://localhost:5000/api/products")
    .then((res) => res.json())
    .then((data) => setProducts(data))
    .catch((err) => console.log("Error Fetching Products",err))
   }, [])
      
     
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
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Button
              sx={{ backgroundColor: "darkblue" }}
              variant="contained"
              startIcon={<ShoppingCartIcon />}
            >
              Cart
            </Button>
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
        {products?.map((product) => (
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
              height: "40%",
              marginBottom: "20px",
            }}
          >
            {/* Product Image */}
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
            {/* Price and Description */}
            <Box sx={{ textAlign: "center", width: "100%", mb: 1 }}>
              <Typography variant="h6">${product.price}</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
            {/* Cart Button */}
            <Button
              variant="contained"
              fullWidth
              sx={{ backgroundColor: "darkblue" }}
              startIcon={<ShoppingCartIcon />}
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
