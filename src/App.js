import './App.css';
import Navbar from "./components/navbar/navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import AppRoutes from "./components/routes/routes";

function App() {
  return (
    <div>
        <Router>
            <Navbar />
            <AppRoutes />
        </Router>
    </div>
  );
}

export default App;
