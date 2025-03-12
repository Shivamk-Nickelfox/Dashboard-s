import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import GSTMaster from "./Components/PrivatePages/Masters/GSTMaster";
import PartyMaster from "./Components/PrivatePages/Masters/PartyMaster";
import ProductMaster from "./Components/PrivatePages/Masters/ProductMaster";
import Dashboard from "./Components/PrivatePages/Dashboard";
import Login from "./PublicPages/Login";
import { onAuthStateChanged } from "firebase/auth";
import ProtectedRoute from "./Components/ProtectedRoute";
import { auth } from "./Components/Firebase";
import { CssBaseline } from "@mui/material";

function App() {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setChecking(false);
    });

    return () => unsubscribe();
  }, []);
  if (checking) {
    return;
    <p>Loading Authentication...</p>;
  }

  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          {/* Wrap the entire Layout in ProtectedRoute */}
          <Route
            path="/*"
            element={
              <ProtectedRoute user={user}>
                <Layout>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/PartyMaster" element={<PartyMaster />} />
                    <Route path="/ProductMaster" element={<ProductMaster />} />
                    <Route path="/GSTMaster" element={<GSTMaster />} />
                  </Routes>
                </Layout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
