import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import GSTMaster from "./Components/SidebarC/Masters/GSTMaster";
import PartyMaster from "./Components/SidebarC/Masters/PartyMaster";
import ProductMaster from "./Components/SidebarC/Masters/ProductMaster";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/PartyMaster" element={<PartyMaster />} />
          <Route path="/ProductMaster" element={<ProductMaster />} />
          <Route path="/GSTMaster" element={<GSTMaster />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
