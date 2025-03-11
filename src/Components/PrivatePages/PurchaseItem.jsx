import React from "react";
import ListItem from "@mui/material/ListItem"; // Importing ListItem from MUI
import ListItemButton from "@mui/material/ListItemButton"; // Importing ListItemButton from MUI
import ListItemIcon from "@mui/material/ListItemIcon"; // Importing ListItemIcon from MUI
import ListItemText from "@mui/material/ListItemText"; // Importing ListItemText from MUI
import ShoppingCartIcon from "@mui/icons-material/AttachMoney"; // Importing AttachMoneyIcon from MUI
const PurchaseItem = () => {
  // Functional component named FinanceItem
  return (

    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon sx={{ color: "blue" }}>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText sx={{ color: "blue" }} primary="Purchase" />
      </ListItemButton>
    </ListItem>
  );
};

export default PurchaseItem; // Exporting the FinanceItem component
