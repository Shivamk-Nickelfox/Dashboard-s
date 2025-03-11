import React from "react";
import ListItem from "@mui/material/ListItem"; // Importing ListItem from MUI
import ListItemButton from "@mui/material/ListItemButton"; // Importing ListItemButton from MUI
import ListItemIcon from "@mui/material/ListItemIcon"; // Importing ListItemIcon from MUI
import ListItemText from "@mui/material/ListItemText"; // Importing ListItemText from MUI
import CampaignIcon from "@mui/icons-material/Campaign";

const MarketingItem = () => {
  // Functional component named FinanceItem
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon sx={{ color: "blue" }}>
          <CampaignIcon />
        </ListItemIcon>
        <ListItemText sx={{ color: "blue" }} primary="Marketing" />
      </ListItemButton>
    </ListItem>
  );
};

export default MarketingItem; // Exporting the FinanceItem component
