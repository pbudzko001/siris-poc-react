import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Header from "./components/organisms/Header/Header";
import Footer from "./components/molecules/Footer/Footer";
import Login from "./components/pages/Login/Login";
import Dashboard from "./components/pages/Dashboard/Dashboard";

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};

const MainLayout: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div>
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </div>
  );
};

export default App;
