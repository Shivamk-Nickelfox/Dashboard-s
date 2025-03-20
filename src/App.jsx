import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux"; // Get authentication state
import Layout from "./Components/Layout";
import GSTMaster from "./Components/PrivatePages/Masters/GSTMaster";
import PartyMaster from "./Components/PrivatePages/Masters/PartyMaster";
import ProductMaster from "./Components/PrivatePages/Masters/ProductMaster";
import Dashboard from "./Components/PrivatePages/Dashboard";
import Login from "./PublicPages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import { CssBaseline } from "@mui/material";

function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />

          {/* Protect all private routes */}
          <Route
            path="/*"
            element={
              <ProtectedRoute user={user}>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="PartyMaster" element={<PartyMaster />} />
            <Route path="ProductMaster" element={<ProductMaster />} />
            <Route path="GSTMaster" element={<GSTMaster />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
