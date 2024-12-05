import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/StudentLogin";
import AdminLogin from "./components/Login/AdminLogin";
import TrainerLogin from "./components/Login/TrainerLogin";
import User from "./components/User/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/trainer-login" element={<TrainerLogin />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
