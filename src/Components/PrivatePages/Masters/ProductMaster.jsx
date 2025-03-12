import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function ProductMaster() {
  return (
    <div
      style={{
        padding: "0px",
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
      <Grid
        container
        sx={{
          padding: "30px 38px",
          backgroundColor: "rgba(155, 40, 40, 0.05)",
          marginLeft: "0px",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
          <Grid
            item
            md={2} // Each row will have 3 items (4 columns each)
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 18px",
              color: "blue",
              border: "1px solid black",
              height: "30vh",
              marginLeft: "120px",
              textAlign: "center",
              marginBottom: "40px",
              marginRight: index % 2 !== 2 ? "80px" : "0",
            }}
          >
            <Typography variant="h6">Product {index + 1}</Typography>
            <Button
              variant="contained"
              sx={{ marginTop: "90px", blockSize: "20px", width: "40%" }}
            >
              addCart
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProductMaster;
