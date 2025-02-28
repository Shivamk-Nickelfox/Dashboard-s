import React from "react";
import ListItem from "@mui/material/ListItem"; // Importing ListItem from MUI
import ListItemButton from "@mui/material/ListItemButton"; // Importing ListItemButton from MUI
import ListItemIcon from "@mui/material/ListItemIcon"; // Importing ListItemIcon from MUI
import ListItemText from "@mui/material/ListItemText"; // Importing ListItemText from MUI
import PeopleIcon from "@mui/icons-material/People"; // Importing PeopleIcon from MUI

const HRItem = () => {
  // Functional component named FinanceItem
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="HR" />
      </ListItemButton>
    </ListItem>
  );
};

export default HRItem; // Exporting the FinanceItem component
