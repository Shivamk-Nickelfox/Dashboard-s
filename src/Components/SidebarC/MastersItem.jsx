import React, { useState } from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";

const masterSubItems = [
  { text: "Party Master", path: "/PartyMaster" },
  { text: "Product Master", path: "/ProductMaster" },
  { text: "GST Master", path: "/GSTMaster" },
  { text: "Account Master", path: "/AccountMaster" },
  { text: "Broker Master", path: "/BrokerMaster" },
  { text: "Employee Master", path: "/EmployeeMaster" },
  { text: "Transport Master", path: "/TransportMaster" },
  { text: "Location Master", path: "/LocationMaster" },
];

const MastersItem = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={() => setOpen(!open)}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Masters" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>

      {/* Collapsible Submenu Items */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        {masterSubItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </Collapse>
    </>
  );
};

export default MastersItem;
