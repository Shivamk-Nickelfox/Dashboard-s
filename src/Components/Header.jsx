import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Grid,
  IconButton,
  TextField,
  InputAdornment,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const Header = () => {
  // User details (Replace this with real user data from backend/auth)
  const [user, setUser] = useState({
    name: "Shivam",
    profileImage: "https://via.placeholder.com/40", // Replace with actual user profile image
  });

  return (
    <AppBar
      sx={{
        position: "fixed",
        zIndex: 1000,
        backgroundColor: "white",
        width: "calc(106% - 360px)",
        display: "flex",
        borderBottom: "1xpx solid black",
        boxShadow: "0px 1px 1px -1px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Grid
        container
        spacing={3}
        alignItems="center"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "14px 18px",
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
                minHeight: "50px",
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
          md={2}
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
              padding: "5px",
            }}
          >
            <IconButton color="inherit" sx={{ p: 0 }}>
              <NotificationsIcon sx={{ color: "black" }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F0EEFF",
              borderRadius: "6px",
              padding: "5px",
            }}
          >
            <IconButton color="inherit" sx={{ p: 0 }}>
              <PlayCircleFilledIcon sx={{ color: "black" }} />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F0EEFF",
              borderRadius: "6px",
              padding: "5px",
            }}
          >
            <IconButton color="inherit" sx={{ p: 0 }}>
              <AutoAwesomeIcon sx={{ color: "black" }} />
            </IconButton>
          </Box>
        </Grid>

        {/* Profile Image & Settings Icon */}
        <Grid item md={1}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              border: "2px solid black",
              borderRadius: "50px",
              gap: "12px",
            }}
          >
            {/* User Image */}
            <Avatar
              src={user.profileImage}
              alt={user.name}
              sx={{ width: 30, height: 30, cursor: "pointer", margin: "10px" }}
            />

            {/* Settings Icon */}
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
