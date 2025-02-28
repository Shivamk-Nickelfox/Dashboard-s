import React from "react";
import { Drawer, List, Toolbar } from "@mui/material";
import Divider from "@mui/material/Divider";
import CustomerItem from "./CustomerItem";
import DashboardItem from "./DashboardItem";
import HRItem from "./HRItem";
import InventoryItem from "./InventoryItem";
import SellItem from "./SellItem";
import FinanceItem from "./FinanceItem";
import MarketingItem from "./MarketingItem";
import MastersItem from "./MastersItem";
import PurchaseItem from "./purchaseItem";

const Sidebar = ({ isOpen }) => {
  return (
    <Drawer
      variant="permanent"
      open={isOpen}
      sx={{
        width: 300,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 300,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <Toolbar />
      <Divider sx={{ marginY: 2.5, width: "100%", paddingY: 2 }} />

      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // Even spacing
          flexGrow: 1, // Allows items to stretch
          gap: 2, // Space between items
          paddingY: 2, // Add padding for better spacing
        }}
      >
        <DashboardItem />
        <CustomerItem />
        <MastersItem />
        <PurchaseItem />
        <FinanceItem />
        <InventoryItem />
        <SellItem />
        <HRItem />
        <MarketingItem />
      </List>
    </Drawer>
  );
};

export default Sidebar;
