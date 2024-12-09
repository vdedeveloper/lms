import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/StudentLogin";
import AdminLogin from "./components/Login/AdminLogin";
import TrainerLogin from "./components/Login/TrainerLogin";
import User from "./components/User/User";
import Course from "./components/Course/Course"
import AdminDashboard from "./components/AdminDashboard/AdminDashboard"
import SessionVideo from "./components/SessionVideo/SessionVideo";
import Materials from "./components/Materials/Materials";
import Submissions from "./components/Submissions/Submissions";
import FeeStructure from "./components/FeeStructure/FeeStructure";
import Support from "./components/Support/Support";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/trainer-login" element={<TrainerLogin />} />
        <Route path="/user" element={<User />} />
        <Route path="/course" element={<Course />} />
        <Route path="/sessionvideo" element={<SessionVideo />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/submissions" element={<Submissions />} />
        <Route path="/feestructure" element={<FeeStructure />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
