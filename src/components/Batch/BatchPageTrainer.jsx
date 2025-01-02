import React from "react";
import "./Batch.css";

const BatchPageTrainer = () => {

  // Handle Menu
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    // Main Section
    <div className="main-section">
      {/* Main Heading */}
      <div className="main-heading">
        <div className="usercontent-heading">
          <h3>Batches</h3>
          <p>Set up your batches and share your knowledge.</p>
        </div>
      </div>

      {/* Courses Section */}
      <div className="batches">
        <div className="batch-card">
          <div className="batch-number">
            <h2>Batch No : <span>1</span></h2>
          </div>
          <div className="trainer-profile">
            <div className="trainer-profile-img">
              <img src="/trainer-profile-img.jpg" alt="trainer-profile-img" />
            </div>
            <div className="trainer-profile-detail">
              <h2>Jagriti Mishra</h2>
              <h3>Sr. Trainer</h3>
            </div>
          </div>
          <div className="batch-course-title">
            <div className="course-heading">
              <img src="/batch-course-icon.png" />
              <h2>Course :</h2>
            </div>
            <div className="course-heading-content">
              <h2>BIM Basic <span>(ACS)</span></h2>
            </div>
          </div>
          <div className="batch-enrolled-students">
            <div className="enrolled-students">
              <img src="/batch-student-icon.png" />
              <h2>Students :</h2>
            </div>
            <div className="enrolled-students-content">
              <h2>05</h2>
            </div>
          </div>
          <div className="batch-start-date">
            <div className="start-date">
              <img src="/batch-calender-icon.png" />
              <h2>Start Date :</h2>
            </div>
            <div className="start-date-content">
              <h2>16/12/2024</h2>
            </div>
          </div>
          <div className="batch-end-date">
            <div className="end-date">
              <img src="/batch-calender-icon.png" />
              <h2>End Date :</h2>
            </div>
            <div className="end-date-content">
              <h2>30/12/2024</h2>
            </div>
          </div>
          <div className="batch-class-time">
            <div className="class-time">
              <img src="/batch-time-icon.png" />
              <h2>Class Time :</h2>
            </div>
            <div className="class-time-content">
              <h2>10:00 am <span>To</span> 12:00 pm</h2>
            </div>
          </div>
          <div className="user-add-btn" style={{marginTop:"20px"}}>
            <button type="button" style={{fontSize:"15px"}}>
              Start Class
            </button>
          </div>
        </div>
        <div className="batch-card">
          <div className="batch-number">
            <h2>Batch No : <span>2</span></h2>
          </div>
          <div className="trainer-profile">
            <div className="trainer-profile-img">
              <img src="/trainer-profile-img.jpg" alt="trainer-profile-img" />
            </div>
            <div className="trainer-profile-detail">
              <h2>Jagriti Mishra</h2>
              <h3>Sr. Trainer</h3>
            </div>
          </div>
          <div className="batch-course-title">
            <div className="course-heading">
              <img src="/batch-course-icon.png" />
              <h2>Course :</h2>
            </div>
            <div className="course-heading-content">
              <h2>BIM Basic <span>(ACS)</span></h2>
            </div>
          </div>
          <div className="batch-enrolled-students">
            <div className="enrolled-students">
              <img src="/batch-student-icon.png" />
              <h2>Students :</h2>
            </div>
            <div className="enrolled-students-content">
              <h2>05</h2>
            </div>
          </div>
          <div className="batch-start-date">
            <div className="start-date">
              <img src="/batch-calender-icon.png" />
              <h2>Start Date :</h2>
            </div>
            <div className="start-date-content">
              <h2>16/12/2024</h2>
            </div>
          </div>
          <div className="batch-end-date">
            <div className="end-date">
              <img src="/batch-calender-icon.png" />
              <h2>End Date :</h2>
            </div>
            <div className="end-date-content">
              <h2>30/12/2024</h2>
            </div>
          </div>
          <div className="batch-class-time">
            <div className="class-time">
              <img src="/batch-time-icon.png" />
              <h2>Class Time :</h2>
            </div>
            <div className="class-time-content">
              <h2>10:00 am <span>To</span> 12:00 pm</h2>
            </div>
          </div>
          <div className="user-add-btn" style={{marginTop:"20px"}}>
            <button type="button" style={{fontSize:"15px"}}>
              Start Class
            </button>
          </div>
        </div>
        <div className="batch-card">
          <div className="batch-number">
            <h2>Batch No : <span>3</span></h2>
          </div>
          <div className="trainer-profile">
            <div className="trainer-profile-img">
              <img src="/trainer-profile-img.jpg" alt="trainer-profile-img" />
            </div>
            <div className="trainer-profile-detail">
              <h2>Jagriti Mishra</h2>
              <h3>Sr. Trainer</h3>
            </div>
          </div>
          <div className="batch-course-title">
            <div className="course-heading">
              <img src="/batch-course-icon.png" />
              <h2>Course :</h2>
            </div>
            <div className="course-heading-content">
              <h2>BIM Basic <span>(ACS)</span></h2>
            </div>
          </div>
          <div className="batch-enrolled-students">
            <div className="enrolled-students">
              <img src="/batch-student-icon.png" />
              <h2>Students :</h2>
            </div>
            <div className="enrolled-students-content">
              <h2>05</h2>
            </div>
          </div>
          <div className="batch-start-date">
            <div className="start-date">
              <img src="/batch-calender-icon.png" />
              <h2>Start Date :</h2>
            </div>
            <div className="start-date-content">
              <h2>16/12/2024</h2>
            </div>
          </div>
          <div className="batch-end-date">
            <div className="end-date">
              <img src="/batch-calender-icon.png" />
              <h2>End Date :</h2>
            </div>
            <div className="end-date-content">
              <h2>30/12/2024</h2>
            </div>
          </div>
          <div className="batch-class-time">
            <div className="class-time">
              <img src="/batch-time-icon.png" />
              <h2>Class Time :</h2>
            </div>
            <div className="class-time-content">
              <h2>10:00 am <span>To</span> 12:00 pm</h2>
            </div>
          </div>
          <div className="user-add-btn" style={{marginTop:"20px"}}>
            <button type="button" style={{fontSize:"15px"}}>
              Start Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchPageTrainer;
