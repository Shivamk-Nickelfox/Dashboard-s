import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";

function CustomerItem() {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon sx={{ color: "blue" }}>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText sx={{ color: "blue" }} primary="Customers" />
      </ListItemButton>
    </ListItem>
  );
}

export default CustomerItem;
