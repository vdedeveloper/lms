import React from "react";
import './Dashboard.css';
import './DashboardResponsive.css';
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  // Navigation
  const navigate = useNavigate();

  // Create Course Navigation
  const handleCreateCourseClick = () => {
    navigate('/create-course');
  };

  // Create Batch Navigation
  const handleCreateBatchClick = () => {
    navigate('/create-batch');
  };

  // Add Learner Navigation
  const handleCreateStudentsClick = () => {
    navigate('/addlearner');
  };

  // Add Trainer Navigation
  const handleCreateTrainerClick = () => {
    navigate('/addtrainer');
  };

  return (
    <div>
      {/* Main Section */}
      <div className="main-section">
        {/* Counter Card */}
        <div className="admin-main-counter-card">
          <div className="course-counter-card">
            <div className="counter-card-content">
              <div className="counter-card-icon">
                <img src="/course-counter-icon.png" alt="course-counter-icon" />
              </div>
              <div className="counter-card-heading">
                <h2>7+</h2>
                <h3>Courses</h3>
              </div>
            </div>
            <div className="counter-course-navigate-content">
              <button onClick={handleCreateCourseClick} style={{ cursor: "pointer" }}>Create Course</button>
            </div>
          </div>
          <div className="batches-counter-card">
            <div className="counter-card-content">
              <div className="counter-card-icon">
                <img src="/batch-counter-icon.png" alt="batch-counter-icon" />
              </div>
              <div className="counter-card-heading">
                <h2>700+</h2>
                <h3>Batches</h3>
              </div>
            </div>
            <div className="counter-batch-navigate-content">
              <button onClick={handleCreateBatchClick} style={{ cursor: "pointer" }}>Create Batch</button>
            </div>
          </div>
          <div className="students-counter-card">
            <div className="counter-card-content">
              <div className="counter-card-icon">
                <img src="/student-counter-icon.png" alt="student-counter-icon" />
              </div>
              <div className="counter-card-heading">
                <h2>1400+</h2>
                <h3>Students</h3>
              </div>
            </div>
            <div className="counter-students-navigate-content">
              <button onClick={handleCreateStudentsClick} style={{ cursor: "pointer" }}>Total Students</button>
            </div>
          </div>
          <div className="trainers-counter-card">
            <div className="counter-card-content">
              <div className="counter-card-icon">
                <img src="/trainer-counter-icon.png" alt="trainer-counter-icon" />
              </div>
              <div className="counter-card-heading">
                <h2>4</h2>
                <h3>Trainers</h3>
              </div>
            </div>
            <div className="counter-trainer-navigate-content">
              <button onClick={handleCreateTrainerClick} style={{ cursor: "pointer" }}>Total Trainer</button>
            </div>
          </div>
        </div>
        {/* Total Batches */}
        <div className="total-batches">
          <div className="total-batch-content">
            <div className="total-batch-card">
              <div className="total-batch-card-content">
                <div className="batch-number-left">
                  <div className="batch-number-counter">
                    1
                  </div>
                  <div className="batch-course-name">
                    <h2>BIM Basic (ACS)</h2>
                    <h3>Subbarao Attada</h3>
                  </div>
                </div>
                <div className="user-add-btn addcourse">
                  <button>20 Batches</button>
                </div>
              </div>
              <div className="total-batch-card-content">
                <div className="batch-number-left">
                  <div className="batch-number-counter">
                    2
                  </div>
                  <div className="batch-course-name">
                    <h2>BIM Basic (MEP)</h2>
                    <h3>Mohammed Adnan</h3>
                  </div>
                </div>
                <div className="user-add-btn addcourse">
                  <button>05 Batches</button>
                </div>
              </div>
              <div className="total-batch-card-content">
                <div className="batch-number-left">
                  <div className="batch-number-counter">
                    3
                  </div>
                  <div className="batch-course-name">
                    <h2>BIM Professional (ACS)</h2>
                    <h3>Subbarao Attada</h3>
                  </div>
                </div>
                <div className="user-add-btn addcourse">
                  <button>40 Batches</button>
                </div>
              </div>
              <div className="total-batch-card-content">
                <div className="batch-number-left">
                  <div className="batch-number-counter">
                    4
                  </div>
                  <div className="batch-course-name">
                    <h2>BIM Professional (MEP)</h2>
                    <h3>Mohammed Adnan</h3>
                  </div>
                </div>
                <div className="user-add-btn addcourse">
                  <button>05 Batches</button>
                </div>
              </div>
            </div>
            <div className="total-batch-card">
              <div className="total-batch-card-content">
                <div className="batch-number-left">
                  <div className="batch-number-counter">
                    5
                  </div>
                  <div className="batch-course-name">
                    <h2>BIM Master (ACS)</h2>
                    <h3>Subbarao Attada</h3>
                  </div>
                </div>
                <div className="user-add-btn addcourse">
                  <button>20 Batches</button>
                </div>
              </div>
              <div className="total-batch-card-content">
                <div className="batch-number-left">
                  <div className="batch-number-counter">
                    6
                  </div>
                  <div className="batch-course-name">
                    <h2>BIM Master (MEP)</h2>
                    <h3>Mohammed Adnan</h3>
                  </div>
                </div>
                <div className="user-add-btn addcourse">
                  <button>10 Batches</button>
                </div>
              </div>
              <div className="total-batch-card-content">
                <div className="batch-number-left">
                  <div className="batch-number-counter">
                    7
                  </div>
                  <div className="batch-course-name">
                    <h2>Digital Marketing</h2>
                    <h3>Tasaduq Hussain</h3>
                  </div>
                </div>
                <div className="user-add-btn addcourse">
                  <button>20 Batches</button>
                </div>
              </div>
              <div className="total-batch-card-content">
                <div className="batch-number-left">
                  <div className="batch-number-counter">
                    8
                  </div>
                  <div className="batch-course-name">
                    <h2>Interior Design</h2>
                    <h3>Aezaz Ahmad</h3>
                  </div>
                </div>
                <div className="user-add-btn addcourse">
                  <button>20 Batches</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
