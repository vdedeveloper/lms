import React from 'react';
import './Dashboard.css';
import './DashboardResponsive.css';

const TrainerDashboard = () => {
  return (
    <div className="main-section">
      <div className="trainer-dashboard">
        {/* Trainer Dashboard Top */}
        <div className="trainer-dashboard-top">
          {/* Running Course Detail */}
          <div className="running-course-deail">
            <div className="trainer-main-heading running-course-heading">
              <h2>Running <span>Course Detail</span></h2>
            </div>
            <div className="trainer-main-counter-card">
              <div className="course-counter-card">
                <div className="counter-card-content">
                  <div className="counter-card-icon">
                    <img src="/course-counter-icon.png" alt="course-counter-icon" />
                  </div>
                  <div className="counter-card-heading">
                    <h2>5</h2>
                    <h3>Ongoing</h3>
                  </div>
                </div>
              </div>
              <div className="batches-counter-card">
                <div className="counter-card-content">
                  <div className="counter-card-icon">
                    <img src="/batch-counter-icon.png" alt="batch-counter-icon" />
                  </div>
                  <div className="counter-card-heading">
                    <h2>25</h2>
                    <h3>Completed</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Running Batch Detail */}
          <div className="running-batch-detail">
            <div className="trainer-main-heading running-batch-heading">
              <h2>Running <span>Batch Detail</span></h2>
            </div>
            <div className="trainer-batches">
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
                    <h2>01/12/2024</h2>
                  </div>
                </div>
                <div className="batch-end-date">
                  <div className="end-date">
                    <img src="/batch-calender-icon.png" />
                    <h2>End Date :</h2>
                  </div>
                  <div className="end-date-content">
                    <h2>15/01/2025</h2>
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
                <div className="user-add-btn">
                  <button type="button">
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
                    <h2>BIM Basic <span>(MEP)</span></h2>
                  </div>
                </div>
                <div className="batch-enrolled-students">
                  <div className="enrolled-students">
                    <img src="/batch-student-icon.png" />
                    <h2>Students :</h2>
                  </div>
                  <div className="enrolled-students-content">
                    <h2>15</h2>
                  </div>
                </div>
                <div className="batch-start-date">
                  <div className="start-date">
                    <img src="/batch-calender-icon.png" />
                    <h2>Start Date :</h2>
                  </div>
                  <div className="start-date-content">
                    <h2>15/12/2024</h2>
                  </div>
                </div>
                <div className="batch-end-date">
                  <div className="end-date">
                    <img src="/batch-calender-icon.png" />
                    <h2>End Date :</h2>
                  </div>
                  <div className="end-date-content">
                    <h2>30/01/2025</h2>
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
                <div className="user-add-btn">
                  <button type="button">
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
                    <h2>BIM Basic <span>(MEP)</span></h2>
                  </div>
                </div>
                <div className="batch-enrolled-students">
                  <div className="enrolled-students">
                    <img src="/batch-student-icon.png" />
                    <h2>Students :</h2>
                  </div>
                  <div className="enrolled-students-content">
                    <h2>15</h2>
                  </div>
                </div>
                <div className="batch-start-date">
                  <div className="start-date">
                    <img src="/batch-calender-icon.png" />
                    <h2>Start Date :</h2>
                  </div>
                  <div className="start-date-content">
                    <h2>15/12/2024</h2>
                  </div>
                </div>
                <div className="batch-end-date">
                  <div className="end-date">
                    <img src="/batch-calender-icon.png" />
                    <h2>End Date :</h2>
                  </div>
                  <div className="end-date-content">
                    <h2>30/01/2025</h2>
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
                <div className="user-add-btn">
                  <button type="button">
                    Start Class
                  </button>
                </div>
              </div>
              <div className="batch-card">
                <div className="batch-number">
                  <h2>Batch No : <span>4</span></h2>
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
                    <h2>BIM Basic <span>(MEP)</span></h2>
                  </div>
                </div>
                <div className="batch-enrolled-students">
                  <div className="enrolled-students">
                    <img src="/batch-student-icon.png" />
                    <h2>Students :</h2>
                  </div>
                  <div className="enrolled-students-content">
                    <h2>15</h2>
                  </div>
                </div>
                <div className="batch-start-date">
                  <div className="start-date">
                    <img src="/batch-calender-icon.png" />
                    <h2>Start Date :</h2>
                  </div>
                  <div className="start-date-content">
                    <h2>15/12/2024</h2>
                  </div>
                </div>
                <div className="batch-end-date">
                  <div className="end-date">
                    <img src="/batch-calender-icon.png" />
                    <h2>End Date :</h2>
                  </div>
                  <div className="end-date-content">
                    <h2>30/01/2025</h2>
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
                <div className="user-add-btn">
                  <button type="button">
                    Start Class
                  </button>
                </div>
              </div>
              <div className="batch-card">
                <div className="batch-number">
                  <h2>Batch No : <span>5</span></h2>
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
                    <h2>BIM Basic <span>(MEP)</span></h2>
                  </div>
                </div>
                <div className="batch-enrolled-students">
                  <div className="enrolled-students">
                    <img src="/batch-student-icon.png" />
                    <h2>Students :</h2>
                  </div>
                  <div className="enrolled-students-content">
                    <h2>15</h2>
                  </div>
                </div>
                <div className="batch-start-date">
                  <div className="start-date">
                    <img src="/batch-calender-icon.png" />
                    <h2>Start Date :</h2>
                  </div>
                  <div className="start-date-content">
                    <h2>15/12/2024</h2>
                  </div>
                </div>
                <div className="batch-end-date">
                  <div className="end-date">
                    <img src="/batch-calender-icon.png" />
                    <h2>End Date :</h2>
                  </div>
                  <div className="end-date-content">
                    <h2>30/01/2025</h2>
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
                <div className="user-add-btn">
                  <button type="button">
                    Start Class
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainerDashboard
