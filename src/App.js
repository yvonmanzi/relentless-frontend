import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import Register from "./components/Register.js";
import ProductList from "./components/ProductList.js";

const isAuthenticated = !!localStorage.getItem("user");

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/productList" element={<ProductList />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute
            component={Dashboard}
            isAuthenticated={isAuthenticated}
          />
        }
      />
    </Routes>
  </Router>
);

export default App;
