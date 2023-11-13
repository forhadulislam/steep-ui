import './App.css';
import Navbar from "./components/navbar/navbar";

import { BrowserRouter , Routes, Route } from "react-router-dom";
import React from "react";
import AppRoutes from "./components/routes/routes";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Navbar />
            <AppRoutes />
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
