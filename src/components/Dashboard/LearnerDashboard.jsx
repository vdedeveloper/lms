import React from 'react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';
import './DashboardResponsive.css';

const LearnerDashboard = () => {
  // Navigation
  const navigate = useNavigate();

  // Course Navigation
  const handleAddCourseClick = () => {
    navigate("/course");
  };

  return (
    // Main Section
    <div className="main-section">
      <div className="learner-dashboard">
        {/* Learner Dashboard Top */}
        <div className="learner-dashboard-top">
          {/* Learner Dashboard Left */}
          <div className="dashboard-left">
            {/* Running Course Detail */}
            <div className="running-course-deail">
              <div className="learner-main-heading running-course-heading">
                <h2>Running <span>Course Detail</span></h2>
              </div>
              <div className="admin-main-counter-card">
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
                <div className="students-counter-card">
                  <div className="counter-card-content">
                    <div className="counter-card-icon">
                      <img src="/student-counter-icon.png" alt="student-counter-icon" />
                    </div>
                    <div className="counter-card-heading">
                      <h2>1</h2>
                      <h3>Certificate</h3>
                    </div>
                  </div>
                </div>
                <div className="trainers-counter-card">
                  <div className="counter-card-content">
                    <div className="counter-card-icon">
                      <img src="/trainer-counter-icon.png" alt="trainer-counter-icon" />
                    </div>
                    <div className="counter-card-heading">
                      <h2>50</h2>
                      <h3>Hours Spend</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Popular Course */}
            <div className="popular-course">
              <div className="learner-main-heading popular-course-heading">
                <h2>Popular <span>Course</span></h2>
                <div className="view-all-course">
                  <button onClick={handleAddCourseClick}>View <span>All</span></button>
                </div>
              </div>
              <div className="courses">
                {/* Sample Course Card */}
                <div className="course-card">
                  <div className="course-active-btn">
                    <button>Active</button>
                  </div>
                  <div className="course-card-img">
                    <img src="course1.png" alt="course-img" />
                  </div>
                  <div className="course-title">
                    <h2>BIM BASIC COURSE <span>(ACS)</span></h2>
                  </div>
                  <div className="course-trainer-name">
                    <h3>(Subbarao Attada)</h3>
                  </div>
                  <div className="course-start-date">
                    <div className="start-date2">
                      <img src="/batch-calender-icon.png" />
                      <h2>Start Date :</h2>
                    </div>
                    <div className="start-date-content">
                      <h2>01/12/2024</h2>
                    </div>
                  </div>
                  <div className="course-end-date">
                    <div className="end-date2">
                      <img src="/batch-calender-icon.png" />
                      <h2>End Date :</h2>
                    </div>
                    <div className="end-date-content">
                      <h2>15/01/2025</h2>
                    </div>
                  </div>
                  <div className="course-class-time">
                    <div className="class-time2">
                      <img src="/batch-time-icon.png" />
                      <h2>Class Time:</h2>
                    </div>
                    <div className="class-time-content">
                      <h2>10:00 <span>To</span> 12:00</h2>
                    </div>
                  </div>
                  <div className="course-class-time">
                    <div className="class-time2">
                      <img src="/Class.png" />
                      <h2>Mode :</h2>
                    </div>
                    <div className="class-time-content">
                      <h2>Online</h2>
                    </div>
                  </div>
                  <div className="course-class-time">
                    <div className="class-time2">
                      <img src="/fees.png" />
                      <h2>Fee Detail :</h2>
                    </div>
                    <div className="class-time-content">
                      <h2>Pending <span>30%</span></h2>
                    </div>
                  </div>
                  <div className="course-content">
                    <div className="enrolled-learner">
                      Enrolled learner: <span>03</span>
                    </div>
                    <div className="course-id">
                      Course ID :  <span>ACS1</span>
                    </div>
                  </div>
                </div>
                <div className="course-card">
                  <div className="course-card-img">
                    <img src="course2.png" alt="course-img" />
                  </div>
                  <div className="course-title">
                    <h2>BIM PROFESSIONAL COURSE</h2>
                  </div>
                  <div className="course-trainer-name">
                    <h3>(Subbarao Attada)</h3>
                  </div>
                  <div className="unlock-course">
                    <img src="/unlock-gif.gif" alt="unlock-course" />
                  </div>
                  <div className="enroll-course">
                    <a href="https://vdei.in/bim-professional-course/">Unlock Course</a>
                  </div>
                </div>
                <div className="course-card">
                  <div className="course-card-img">
                    <img src="course3.png" alt="course-img" />
                  </div>
                  <div className="course-title">
                    <h2>BIM MASTER COURSE</h2>
                  </div>
                  <div className="course-trainer-name">
                    <h3>(Subbarao Attada)</h3>
                  </div>
                  <div className="unlock-course">
                    <img src="/unlock-gif.gif" alt="unlock-course" />
                  </div>
                  <div className="enroll-course">
                    <a href="https://vdei.in/bim-master-course/">Unlock Course</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-right">
            {/* Running Batch Detail */}
            <div className="running-batch-detail">
              <div className="learner-main-heading running-batch-heading">
                <h2>Running <span>Batch Detail</span></h2>
              </div>
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
                <div className="user-add-btn" style={{marginTop: "15px"}}>
                  <button type="button">
                    Join Class
                  </button>
                </div>
              </div>
            </div>
            {/* Active Assignments */}
            <div className="active-assignment">
              <div className="learner-main-heading active-assignment-heading">
                <h2>Active <span>Assignment</span></h2>
              </div>
              <div className="assignment-counter">
                <div className="assignment-counter-img">
                  <img src="/assignment.gif" alt="" />
                </div>
                <div className="assignment-counter-content">
                  <h2>Chapter 3 : <span>Create walls types....</span></h2>
                  <div className="assignment-btn">
                    <button type="button">View Assignment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Learner Dashboard Bottom */}
        <div className="learner-dashboard-bottom">
          {/* Recent Videos */}
          <div className="recent-video">
            <div className="learner-main-heading recent-video-heading">
              <h2>Recent <span>Video</span></h2>
            </div>
            <div className="recent-video-counter">
              <div className="recent-video-counter-video">
                <video
                  src="/demo-video.mp4"
                  muted
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                  controlsList="nodownload noplaybackrate"
                  disablePictureInPicture
                  controls
                ></video>
              </div>
              <div className="recent-video-counter-content">
                <h2>Your Videos</h2>
                <div className="recent-video-btn">
                  <div className="video-next-icon">
                    <FontAwesomeIcon
                      icon={faArrowRightLong}
                      style={{ color: "#fff" }}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/* Certificate */}
          <div className="download-certificate">
            <div className="learner-main-heading download-certificate-heading">
              <h2>Download <span>Certificate</span></h2>
            </div>
            <div className="download-certificate-counter">
              <div className="download-certificate-img">
                <img src="/certificate.gif" alt="" />
              </div>
              <div className="download-certificate-content">
                <h2>Certificate</h2>
                <h3>Your Certificate Is Locked</h3>
                <div className="download-certificate-btn">
                  <button type="button">View Certificate</button>
                </div>
              </div>
            </div>
          </div>
          {/* Active Mock Test */}
          <div className="active-mock-test">
            <div className="learner-main-heading active-mock-test-heading">
              <h2>Mock <span>Interview</span></h2>
            </div>
            <div className="mock-test-counter">
              <div className="mock-test-counter-img">
                <img src="/mock-interview.gif" alt="" />
              </div>
              <div className="mock-test-counter-content">
                <h2>Mock Interview</h2>
                <h3>Your Interview Is Locked</h3>
                <div className="mock-test-btn">
                  <button type="button">View Mock Interview</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearnerDashboard