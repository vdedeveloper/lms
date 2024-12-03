import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import User from "./components/User/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
