"use strict";

const express = require("express");
const mongoose = require("mongoose");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

//--firebase admin sdk initialization---
const serviceAccount = require("/home/shivamkumar/Downloads/dashboard-244b9-firebase-adminsdk-fbsvc-0b32682c85.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dashboard-244b9.firebaseio.com",
});

//---mongodb connection---

mongoose
  .connect(
    "mongodb+srv://rclips45:bExOxRfcpxvkgmQs@backend.jv2oj.mongodb.net/?retryWrites=true&w=majority&appName=Backend",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("Error connected to MongoDB", err));

//---mongoose schema---

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  description: String,
});

const Product = mongoose.model("Product", productSchema);

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      productImage: { type: String, required: true },
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema);

//---api endpoints---
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

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
    image: "https://cdn.beebom.com/mobile/2024/08/Untitled-design-100-3.png",

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
    image: "https://micromaxinfo.com/pub/media/wysiwyg/images/in2c.png",
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
// Insert products into the database
// Product.insertMany(products)
//   .then(() => {
//     console.log("Products inserted successfully");
//     mongoose.connection.close(); // Close the connection
//   })
//   .catch((err) => {
//     console.error("Error inserting products:", err);
//     mongoose.connection.close(); // Close the connection on error
//   });

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log("Error Fetching Products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.get("/api/cartItems", async (req, res) => {
  try {
    const cart = await Cart.find({});
    res.json(cart);
  } catch (error) {
    console.log("Error Fetching Products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.post("/api/carts", async (req, res) => {
  console.log("cart api hit!");
  try {
    const idToken = req.headers.authorization?.split(" ")[1];
    if (!idToken) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    if (!uid) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { productId, quantity, productImage } = req.body;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    //find existing cart or create a new one
    let cart = await Cart.findOne({ userId: uid });
    if (!cart) {
      cart = new Cart({ userId: uid, items: [] });
    }

    //find existing item or find one
    const existingItem = cart.items.find(
      (item) => item.productId.toString() === productId
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId, quantity, productImage });
    }
    await cart.save();
    res.status(201).json({ message: "Product added to cart successfully" });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ error: "Failed to add to cart" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
