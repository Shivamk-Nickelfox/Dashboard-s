import React from "react";
import ListItem from "@mui/material/ListItem"; // Importing ListItem from MUI
import ListItemButton from "@mui/material/ListItemButton"; // Importing ListItemButton from MUI
import ListItemIcon from "@mui/material/ListItemIcon"; // Importing ListItemIcon from MUI
import ListItemText from "@mui/material/ListItemText"; // Importing ListItemText from MUI
import SellIcon from "@mui/icons-material/Sell"; // Importing SellIcon from MUI
const SellItem = () => {
  // Functional component named FinanceItem
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon sx={{ color: "blue" }}>
          <SellIcon />
        </ListItemIcon>
        <ListItemText sx={{ color: "blue" }} primary="Sell" />
      </ListItemButton>
    </ListItem>
  );
};

export default SellItem; // Exporting the FinanceItem component
