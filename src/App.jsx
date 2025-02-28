import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Layout from "./Components/Layout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
   
  );
}

export default App;
