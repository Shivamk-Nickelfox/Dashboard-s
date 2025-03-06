import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import GSTMaster from "./Components/SidebarC/Masters/GSTMaster";
import PartyMaster from "./Components/SidebarC/Masters/PartyMaster";
import ProductMaster from "./Components/SidebarC/Masters/ProductMaster";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login"; // Ensure correct import

function App() {
  return (
    <Router>
      <Routes>
        {/* Login page without Layout */}
        <Route path="/Login" element={<Login />} />

        {/* All other pages wrapped with Layout */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/PartyMaster" element={<PartyMaster />} />
                <Route path="/ProductMaster" element={<ProductMaster />} />
                <Route path="/GSTMaster" element={<GSTMaster />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
