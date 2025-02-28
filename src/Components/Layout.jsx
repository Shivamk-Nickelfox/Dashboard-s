import React, { useState } from "react";
import { CssBaseline } from "@mui/material";
import { Box } from "@mui/material";
import Header from "./Header";
import Sidebar from "./SidebarC/Sidebar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <Sidebar
          isOpen={isOpen}
          sx={{ width: 360, flexShrink: 0, zIndex: 1300 }}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Header />
        <Box
          children={children}
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <CssBaseline />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
