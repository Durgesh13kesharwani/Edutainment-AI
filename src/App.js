import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import SubscriptionPage from "./components/subscriptionPage";
import WebSeriesPage from "./components/WebseriesPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/webseries" element={<WebSeriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
