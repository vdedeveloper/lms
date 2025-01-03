import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/StudentLogin";
import AdminLogin from "./components/Login/AdminLogin";
import TrainerLogin from "./components/Login/TrainerLogin";
import User from "./components/User/User";
import Batch from "./components/Batch/Batch";
import LearnerCourse from "./components/Course/LearnerCourse";
import AdminCourse from "./components/Course/AdminCourse";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import LearnerDashboard from "./components/Dashboard/LearnerDashboard";
import SessionVideo from "./components/SessionVideo/SessionVideo";
import Materials from "./components/Materials/Materials";
import MaterialsLearner from "./components/Materials/MaterialsLearner";
import FeeStructure from "./components/FeeStructure/FeeStructure";
import Support from "./components/Support/Support";
import CreateCoursePage1 from "./components/Course/CreateCoursePage1";
import CreateCoursePage2 from "./components/Course/CreateCoursePage2";
import CreateBatchPage from "./components/Batch/CreateBatchPage";
import MaterialPage from "./components/Materials/MaterialPage";
import Layout from "./components/Layout/Layout";
import SupportLearner from "./components/Support/SupportLearner";
import TrainerDashboard from "./components/Dashboard/TrainerDashboard";
import Assignment from "./components/Assignment/Assignment";
import CreateAssignmentPage from "./components/Assignment/CreateAssignmentPage";
import TrainerAssignment from "./components/Assignment/TrainerAssignment";
import StudentAssignment from "./components/Assignment/StudentAssignment";
import TrainerProject from "./components/Assignment/TrainerProject";
import CreateProjectPage from "./components/Assignment/CreateProjectPage";
import StudentProject from "./components/Assignment/StudentProject";
import BatchPageTrainer from "./components/Batch/BatchPageTrainer";
import LearnerFeeStructure from "./components/FeeStructure/LearnerFeeStructure";
import BatchAssignment from "./components/Assignment/BatchAssignment";
import BatchProject from "./components/Assignment/BatchProject";

function App() {
  return (
    <Router>
      <Routes>
        {/* Logins */}

        {/* Student Login */}
        <Route path="/" element={<Login />} />
        {/* Admin Login */}
        <Route path="/admin-login" element={<AdminLogin />} />
        {/* Trainer Login */}
        <Route path="/trainer-login" element={<TrainerLogin />} />

        {/* Dashboard */}

        {/* Admin Dashboard */}
        <Route
          path="/admindashboard"
          element={
            <Layout>
              <AdminDashboard />
            </Layout>
          }
        />
        {/* Learner Dashboard */}
        <Route
          path="/learnerdashboard"
          element={
            <Layout>
              <LearnerDashboard />
            </Layout>
          }
        />
        {/* Trainer Dashboard */}
        <Route
          path="/trainerdashboard"
          element={
            <Layout>
              <TrainerDashboard />
            </Layout>
          }
        />

        {/* Users */}

        {/* Main User Page */}
        <Route
          path="/user"
          element={
            <Layout>
              <User />
            </Layout>
          }
        />

        {/* Course */}
        <Route
          path="/learnercourse"
          element={
            <Layout>
              <LearnerCourse />
            </Layout>
          }
        />
        <Route
          path="/admincourse"
          element={
            <Layout>
              <AdminCourse />
            </Layout>
          }
        />
        {/* Create Course */}
        <Route
          path="/create-course"
          element={
            <Layout>
              <CreateCoursePage1 />
            </Layout>
          }
        />
        {/* Create Course 2 */}
        <Route
          path="/create-course-2"
          element={
            <Layout>
              <CreateCoursePage2 />
            </Layout>
          }
        />

        {/* Batch */}

        {/* Main Batch Page */}
        <Route
          path="/batch"
          element={
            <Layout>
              <Batch />
            </Layout>
          }
        />
        {/* Batch Page For Trainer */}
        <Route
          path="/batch-page-trainer"
          element={
            <Layout>
              <BatchPageTrainer />
            </Layout>
          }
        />
        {/* Create Batch */}
        <Route
          path="/create-batch"
          element={
            <Layout>
              <CreateBatchPage />
            </Layout>
          }
        />

        {/* Study Material */}

        {/* Study Material Main */}
        <Route
          path="/materials"
          element={
            <Layout>
              <Materials />
            </Layout>
          }
        />
        {/* Material Page For Learner */}
        <Route
          path="/materials-learner"
          element={
            <Layout>
              <MaterialsLearner />
            </Layout>
          }
        />
        {/* Study Material Main Page */}
        <Route
          path="/material-page"
          element={
            <Layout>
              <MaterialPage />
            </Layout>
          }
        />

        {/* Session Video */}
        <Route
          path="/sessionvideo"
          element={
            <Layout>
              <SessionVideo />
            </Layout>
          }
        />

        {/* Assignment */}

        {/* Assignment Main Page */}
        <Route
          path="/assignment"
          element={
            <Layout>
              <Assignment />
            </Layout>
          }
        />
        {/* Create Assignment Page */}
        <Route
          path="/create-assignment"
          element={
            <Layout>
              <CreateAssignmentPage />
            </Layout>
          }
        />
        {/* Create Project Page */}
        <Route
          path="/create-project"
          element={
            <Layout>
              <CreateProjectPage />
            </Layout>
          }
        />
        {/* Assignment Page For Trainer */}
        <Route
          path="/trainer-assignment"
          element={
            <Layout>
              <TrainerAssignment />
            </Layout>
          }
        />
        <Route
          path="/batchassignment"
          element={
            <Layout>
              <BatchAssignment />
            </Layout>
          }
        />
        <Route
          path="/batchproject"
          element={
            <Layout>
              <BatchProject />
            </Layout>
          }
        />
        {/* Assignment Page For Student */}
        <Route
          path="/student-assignment"
          element={
            <Layout>
              <StudentAssignment />
            </Layout>
          }
        />
        {/* Project Page For Student */}
        <Route
          path="/student-project"
          element={
            <Layout>
              <StudentProject />
            </Layout>
          }
        />
        {/* Project Page For Trainer */}
        <Route
          path="/trainer-project"
          element={
            <Layout>
              <TrainerProject />
            </Layout>
          }
        />

        {/* Support */}

        {/* Support Main Page */}
        <Route
          path="/support"
          element={
            <Layout>
              <Support />
            </Layout>
          }
        />
        {/* Support Page For Learner */}
        <Route
          path="/support-learner"
          element={
            <Layout>
              <SupportLearner />
            </Layout>
          }
        />

        {/* Fee Structure */}
        <Route
          path="/feestructure"
          element={
            <Layout>
              <FeeStructure />
            </Layout>
          }
        />

        <Route
          path="/learnerfeestructure"
          element={
            <Layout>
              <LearnerFeeStructure />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
