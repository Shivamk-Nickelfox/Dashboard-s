import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function ProductMaster() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      image:
        "https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$",
      description: "Samsung",
    },
    {
      id: 2,
      name: "Product 2",
      price: 15.99,
      image:
        "https://www.aptronixindia.com/media/catalog/product/r/1/r1594_starlight_pdp_image_position-1a_avail__en-in.jpg",
      description: "Apple",
    },
    {
      id: 3,
      name: "Product 3",
      price: 3.99,
      image:
        "https://hotfixapi.lavamobiles.com/storage/media/community/image/blaze-3-5g-listing-1726467349.webp",
      description: "Lava",
    },
    {
      id: 4,
      name: "Product 1",
      price: 12.99,
      image:
        "https://lh3.googleusercontent.com/yNVCCLko19YvTDwqxtNIYVkDtg_k8wzwHgNlft1ktbVwjDTgk0mrCSmbglSsak4TUyD9jNcVkx4S7ICHZE4wFwd5kbMC8H_BynxL",
      description: "Google",
    },
    {
      id: 5,
      name: "Product 1",
      price: 5.99,
      image:
        "https://cdn.beebom.com/mobile/2024/08/Untitled-design-100-3.png",

      description: "mi",
    },
    {
      id: 6,
      name: "Product 1",
      price: 7.99,
      image:
        "https://www.khoslaonline.com/wp-content/uploads/2024/01/VIVO-MOBILE-V29-RED-8GB128GB-1.png",
      description: "Vivo",
    },
    {
      id: 7,
      name: "Product 1",
      price: 6.99,
      image:
        "https://opsg-img-cdn-gl.heytapimg.com/epb/202401/03/FmsGOwNtafyTY2BK.png",
      description: "Oppo",
    },
    {
      id: 8,
      name: "Product 1",
      price: 2.99,
      image:
        "https://micromaxinfo.com/pub/media/wysiwyg/images/in2c.png",
      description: "Micromax",
    },
    {
      id: 9,
      name: "Product 1",
      price: 4.99,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/5/HQ/HG/IA/138319557/poco-x3-6gb-128gb-mobile-phone.jpg",
      description: "Poco",
    },
    {
      id: 10,
      name: "Product 1",
      price: 14.99,
      image:
        "https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1724143611464/3e7ba560a078bd4386593ac2fe1f1d42.png_w860-h860.webp",
      description: "IQOO",
    },
    {
      id: 11,
      name: "Product 1",
      price: 9.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx2DJ8uiLoZAgDqvqBlNrBBqg9Eiowj1g3KA&s",
      description: "LG",
    },
    {
      id: 12,
      name: "Product 1",
      price: 3.99,
      image:
        "https://cdn.beebom.com/mobile/2023/10/Screenshot-2023-10-27-182827.png",
      description: "Nokia",
    },
  ];
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
