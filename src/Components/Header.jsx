import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  InputAdornment,
  Box,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Header = () => {
  return (
    <AppBar
      sx={{
        position: "fixed",
        zIndex: 5,
        backgroundColor: "white",
        boxShadow: 3,
        width: "calc(100% - 165px)",
        display: "flex",
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 20px",
        }}
      >
        {/* Search Box in Center */}
        <Grid item md={9} display="flex" justifyContent="flex-end">
          <TextField
            variant="outlined"
            placeholder="Global Search"
            size="small"
            sx={{
              width: "500px",
              borderRadius: "6px",
              backgroundColor: "#F0EEFF",
              "& .MuiOutlinedInput-root": {
                minHeight: "40px",
                "& fieldset": { borderColor: "transparent" },
                "&:hover fieldset": { borderColor: "transparent" },
                "&.Mui-focused fieldset": { borderColor: "transparent" },
              },
              input: { color: "#000", fontWeight: "bold" },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "black" }} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Right Side - Icons */}
        <Grid
          item
          md={1}
          sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}
        >
          {/* Notification Icon */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F0EEFF",
              borderRadius: "6px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
              padding: "5px",
            }}
          >
            <IconButton color="inherit" sx={{ p: 0 }}>
              <NotificationsIcon sx={{ color: "black" }} />
            </IconButton>
          </Box>

          {/* Filter Icon */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F0EEFF",
              borderRadius: "6px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
              padding: "5px",
            }}
          >
            <IconButton color="inherit" sx={{ p: 0 }}>
              <FilterListIcon sx={{ color: "black" }} />
            </IconButton>
          </Box>

          {/* Add Party Icon */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F0EEFF",
              borderRadius: "6px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
              padding: "5px",
            }}
          >
            <IconButton color="inherit" sx={{ p: 0 }}>
              <AddCircleOutlineIcon sx={{ color: "black" }} />
            </IconButton>
          </Box>
        </Grid>

        {/* Settings Icon */}
        <Grid item md={1}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50px",
              padding: "2px 30px ", // Adjust padding to make it elliptical
              border: "2px solid black", // Ellipse border
            }}
          >
            <IconButton color="inherit">
              <SettingsIcon sx={{ color: "black" }} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
