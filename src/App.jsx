import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import GSTMaster from "./Components/SidebarC/Masters/GSTMaster";
import PartyMaster from "./Components/SidebarC/Masters/PartyMaster";
import ProductMaster from "./Components/SidebarC/Masters/ProductMaster";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import { onAuthStateChanged } from "firebase/auth";
import ProtectedRoute from "./Components/ProtectedRoute";
import { auth } from "./Components/Firebase";
import { ToastContainer } from "react-toastify";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
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
  );
}

export default App;
