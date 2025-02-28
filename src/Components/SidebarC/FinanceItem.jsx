import React from "react";
import ListItem from "@mui/material/ListItem"; // Importing ListItem from MUI
import ListItemButton from "@mui/material/ListItemButton"; // Importing ListItemButton from MUI
import ListItemIcon from "@mui/material/ListItemIcon"; // Importing ListItemIcon from MUI
import ListItemText from "@mui/material/ListItemText"; // Importing ListItemText from MUI
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"; // Importing AttachMoneyIcon from MUI

const financeItem = () => {
  // Functional component named FinanceItem
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <AttachMoneyIcon />
        </ListItemIcon>
        <ListItemText primary="Finance" />
      </ListItemButton>
    </ListItem>
  );
};

export default financeItem; // Exporting the FinanceItem component
