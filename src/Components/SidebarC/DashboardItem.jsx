import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";

const DashboardItem = () => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon sx={{ color: "blue" }}>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText sx={{ color: "blue" }} primary="Dashboard" />
      </ListItemButton>
    </ListItem>
  );
};
export default DashboardItem;
