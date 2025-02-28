import React from "react";
import ListItem from "@mui/material/ListItem"; // Importing ListItem from MUI
import ListItemButton from "@mui/material/ListItemButton"; // Importing ListItemButton from MUI
import ListItemIcon from "@mui/material/ListItemIcon"; // Importing ListItemIcon from MUI
import ListItemText from "@mui/material/ListItemText"; // Importing ListItemText from MUI
import InventoryIcon from "@mui/icons-material/Inventory"; // Importing InventoryIcon from MUI

const InventoryItem = () => {
  // Functional component named FinanceItem
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <InventoryIcon />
        </ListItemIcon>
        <ListItemText primary="Inventory" />
      </ListItemButton>
    </ListItem>
  );
};

export default InventoryItem; // Exporting the FinanceItem component
