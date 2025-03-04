import React from "react";
import { Typography, Box, Paper } from "@mui/material";

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignContent: "center",
        justifyContent: "center",
        p: 2,
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4">Dashboard</Typography>
      <Paper sx={{ p: 2, textAlign: "center" }}>Dashboard Content</Paper>
    </Box>
  );
};

export default Dashboard;
