import React, { useState } from "react";
import { CssBaseline } from "@mui/material";
import { Box } from "@mui/material";
import Header from "./Header";
import Sidebar from "./SidebarC/Sidebar";
const Layout = ({ children }) => {
  const [selectedComponent, setSelectedComponent] = useState("Dashboard");

  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <Sidebar
          setSelectedComponent={setSelectedComponent}
          sx={{ width: 360, flexShrink: 0, zIndex: 1300 }}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Header />
        <Box
          component="div"
          sx={{ flexGrow: 1, bgcolor: "background.default" }}
        >
          <div style={{ position: "relative", top: "80px" }}>{children}</div>
          <CssBaseline />
          {/* Call the renderComponent function here */}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
