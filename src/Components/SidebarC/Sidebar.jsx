import React from "react";
import { Box, List, Toolbar, Divider, Typography } from "@mui/material";
import DashboardItem from "./DashboardItem";
import CustomerItem from "./CustomerItem";
import HRItem from "./HRItem";
import InventoryItem from "./InventoryItem";
import SellItem from "./SellItem";
import FinanceItem from "./FinanceItem";
import MarketingItem from "./MarketingItem";
import PurchaseItem from "./PurchaseItem";
import MastersItem from "./Masters/MastersItem";

const Sidebar = ({ setSelectedComponent }) => {
  return (
    <Box
      sx={{
        width: 300, // Keep sidebar width consistent
        height: "100vh",
        backgroundColor: "White",
        color: "Black",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0, // Prevent sidebar from shrinking
      }}
    >
      {/* Logo and Fixed White Space */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 2,
          backgroundColor: "white",
          width: "100%",
          padding: "20px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Your Logo Here */}
        <img
          src="/public/bird-colorful-logo-gradient-vector_343694-1365_prev_ui.png" // Replace with actual logo URL
          alt="Logo"
          style={{ width: "20%", height: "8vh" }}
        />
      </Box>

      {/* Divider (Now Closer to Logo) */}
      <Divider sx={{ width: "100%", my: 8, marginBottom: "30px" }} />

      {/* Scrollable Sidebar Items */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          paddingX: 2, // Adds spacing
          "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar
        }}
      >
        <List
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <DashboardItem onClick={() => setSelectedComponent("Dashboard")} />
          <MastersItem onClick={() => setSelectedComponent("Masters")} />
          <CustomerItem onClick={() => setSelectedComponent("Customer")} />
          <PurchaseItem onClick={() => setSelectedComponent("Purchase")} />
          <FinanceItem onClick={() => setSelectedComponent("Finance")} />
          <InventoryItem onClick={() => setSelectedComponent("Inventory")} />
          <SellItem onClick={() => setSelectedComponent("Sell")} />
          <HRItem onClick={() => setSelectedComponent("HR")} />
          <MarketingItem onClick={() => setSelectedComponent("Marketing")} />
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
