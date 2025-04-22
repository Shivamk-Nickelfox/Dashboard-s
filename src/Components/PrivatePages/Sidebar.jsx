import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, List, Toolbar, Divider, Typography } from "@mui/material";
import CustomerItem from "./CustomerItem";
import HRItem from "./HRItem";
import DashboardItem from "./DashboardItem";
import InventoryItem from "./InventoryItem";
import SellItem from "./SellItem";
import FinanceItem from "./FinanceItem";
import MarketingItem from "./MarketingItem";
import PurchaseItem from "./PurchaseItem";
import { ListItemButton } from "@mui/material";
import MastersItem from "./Masters/MastersItem";
import { display } from "@mui/system";
const Sidebar = ({ setSelectedComponent }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: 250, // Keep sidebar width consistent
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
        }}
      >
        {/* Your Logo Here */}
        <img
          src="/public/bird-colorful-logo-gradient-vector_343694-1365_prev_ui.png" // Replace with actual logo URL
          alt="Logo"
          style={{ width: "50%", height: "10vh" }}
        />
      </Box>

      {/* Divider (Now Closer to Logo) */}
      <Divider sx={{ width: "100%", my: 0, marginBottom: "30px" }} />

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
          <ListItemButton
            onClick={() => {
              console.log("Dashboard Clicked");
              setSelectedComponent("Dashboard");
              navigate("/Dashboard");
            }}
          >
            <DashboardItem />
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              setSelectedComponent("Customers");
              navigate("/Customers");
            }}
          >
            <CustomerItem />
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              setSelectedComponent("Masters");
            }}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <MastersItem />
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              setSelectedComponent("Purchase");
              navigate("/Purchase");
            }}
          >
            <PurchaseItem />
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              setSelectedComponent("Finance");
              navigate("/Finance");
            }}
          >
            <FinanceItem />
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              setSelectedComponent("Inventory");
              navigate("/Inventory");
            }}
          >
            <InventoryItem />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setSelectedComponent("Sell");
              navigate("/Sell");
            }}
          >
            <SellItem />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setSelectedComponent("HR");
              navigate("/HR");
            }}
          >
            <HRItem />
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              setSelectedComponent("Marketing");
              navigate("/Marketing");
            }}
          >
            <MarketingItem />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
