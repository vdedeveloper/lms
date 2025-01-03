import React from "react";
import { useNavigate } from "react-router-dom";
import "./Course.css";

const LearnerCourse = () => {
  // Navigation
  const navigate = useNavigate();

  // Handle Menu
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  // Create Course Navigation
  const handleAddClick = () => {
    navigate("/create-course");
  };

  return (
    // Main Section
    <div className="main-section">
      {/* Main Heading */}
      <div className="main-heading">
        <div className="usercontent-heading">
          <h3>Courses</h3>
          <p>Set up your courses and share your knowledge.</p>
        </div>
      </div>

      {/* Courses Section */}
      <div className="courses">
        {/* Sample Course Card */}
        <div className="course-card">
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
              <h2>Class Time :</h2>
            </div>
            <div className="class-time-content">
              <h2>10:00 am <span>To</span> 12:00 pm</h2>
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
            <img src="course1.png" alt="course-img" />
          </div>
          <div className="course-title">
            <h2>BIM BASIC COURSE <span>(MEPF)</span></h2>
          </div>
          <div className="course-trainer-name">
            <h3>(Mohammad Adnan, Mohan Kanakala)</h3>
          </div>
          <div className="course-start-date">
            <div className="start-date2">
              <img src="/batch-calender-icon.png" />
              <h2>Start Date :</h2>
            </div>
            <div className="start-date-content">
              <h2>02/12/2024</h2>
            </div>
          </div>
          <div className="course-end-date">
            <div className="end-date2">
              <img src="/batch-calender-icon.png" />
              <h2>End Date :</h2>
            </div>
            <div className="end-date-content">
              <h2>16/01/2025</h2>
            </div>
          </div>
          <div className="course-class-time">
            <div className="class-time2">
              <img src="/batch-time-icon.png" />
              <h2>Class Time :</h2>
            </div>
            <div className="class-time-content">
              <h2>10:00 am <span>To</span> 12:00 pm</h2>
            </div>
          </div>
          <div className="course-content">
            <div className="enrolled-learner">
              Enrolled learner: <span>03</span>
            </div>
            <div className="course-id">
              Course ID :  <span>MEPF1</span>
            </div>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-img">
            <img src="course2.png" alt="course-img" />
          </div>
          <div className="course-title">
            <h2>BIM PROFESSIONAL COURSE <span>(ACS)</span></h2>
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
              <h2>01/02/2025</h2>
            </div>
          </div>
          <div className="course-class-time">
            <div className="class-time2">
              <img src="/batch-time-icon.png" />
              <h2>Class Time :</h2>
            </div>
            <div className="class-time-content">
              <h2>10:00 am <span>To</span> 12:00 pm</h2>
            </div>
          </div>
          <div className="course-content">
            <div className="enrolled-learner">
              Enrolled learner: <span>03</span>
            </div>
            <div className="course-id">
              Course ID :  <span>ACS2</span>
            </div>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-img">
            <img src="course2.png" alt="course-img" />
          </div>
          <div className="course-title">
            <h2>BIM PROFESSIONAL COURSE <span>(MEPF)</span></h2>
          </div>
          <div className="course-trainer-name">
            <h3>(Mohammad Adnan, Mohan Kanakala)</h3>
          </div>
          <div className="course-start-date">
            <div className="start-date2">
              <img src="/batch-calender-icon.png" />
              <h2>Start Date :</h2>
            </div>
            <div className="start-date-content">
              <h2>02/12/2024</h2>
            </div>
          </div>
          <div className="course-end-date">
            <div className="end-date2">
              <img src="/batch-calender-icon.png" />
              <h2>End Date :</h2>
            </div>
            <div className="end-date-content">
              <h2>02/02/2025</h2>
            </div>
          </div>
          <div className="course-class-time">
            <div className="class-time2">
              <img src="/batch-time-icon.png" />
              <h2>Class Time :</h2>
            </div>
            <div className="class-time-content">
              <h2>10:00 am <span>To</span> 12:00 pm</h2>
            </div>
          </div>
          <div className="course-content">
            <div className="enrolled-learner">
              Enrolled learner: <span>03</span>
            </div>
            <div className="course-id">
              Course ID :  <span>MEPF2</span>
            </div>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-img">
            <img src="course3.png" alt="course-img" />
          </div>
          <div className="course-title">
            <h2>BIM MASTER COURSE <span>(ACS)</span></h2>
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
              <h2>15/02/2025</h2>
            </div>
          </div>
          <div className="course-class-time">
            <div className="class-time2">
              <img src="/batch-time-icon.png" />
              <h2>Class Time :</h2>
            </div>
            <div className="class-time-content">
              <h2>10:00 am <span>To</span> 12:00 pm</h2>
            </div>
          </div>
          <div className="course-content">
            <div className="enrolled-learner">
              Enrolled learner: <span>03</span>
            </div>
            <div className="course-id">
              Course ID :  <span>ACS3</span>
            </div>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-img">
            <img src="course3.png" alt="course-img" />
          </div>
          <div className="course-title">
            <h2>BIM MASTER COURSE <span>(MEPF)</span></h2>
          </div>
          <div className="course-trainer-name">
            <h3>(Mohammad Adnan, Mohan Kanakala)</h3>
          </div>
          <div className="course-start-date">
            <div className="start-date2">
              <img src="/batch-calender-icon.png" />
              <h2>Start Date :</h2>
            </div>
            <div className="start-date-content">
              <h2>02/12/2024</h2>
            </div>
          </div>
          <div className="course-end-date">
            <div className="end-date2">
              <img src="/batch-calender-icon.png" />
              <h2>End Date :</h2>
            </div>
            <div className="end-date-content">
              <h2>16/02/2025</h2>
            </div>
          </div>
          <div className="course-class-time">
            <div className="class-time2">
              <img src="/batch-time-icon.png" />
              <h2>Class Time :</h2>
            </div>
            <div className="class-time-content">
              <h2>10:00 am <span>To</span> 12:00 pm</h2>
            </div>
          </div>
          <div className="course-content">
            <div className="enrolled-learner">
              Enrolled learner: <span>03</span>
            </div>
            <div className="course-id">
              Course ID :  <span>MEPF3</span>
            </div>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-img">
            <img src="course4.png" alt="course-img" />
          </div>
          <div className="course-title">
            <h2>INTERIOR DESIGN</h2>
          </div>
          <div className="course-trainer-name">
            <h3>(Trainer Name)</h3>
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
              <h2>01/03/2025</h2>
            </div>
          </div>
          <div className="course-class-time">
            <div className="class-time2">
              <img src="/batch-time-icon.png" />
              <h2>Class Time :</h2>
            </div>
            <div className="class-time-content">
              <h2>10:00 am <span>To</span> 12:00 pm</h2>
            </div>
          </div>
          <div className="course-content">
            <div className="enrolled-learner">
              Enrolled learner: <span>03</span>
            </div>
            <div className="course-id">
              Course ID :  <span>ID1</span>
            </div>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-img">
            <img src="course5.png" alt="course-img" />
          </div>
          <div className="course-title">
            <h2>DIGITAL MARKETING</h2>
          </div>
          <div className="course-trainer-name">
            <h3>(Tasaduq Hussain)</h3>
          </div>
          <div className="course-start-date">
            <div className="start-date2">
              <img src="/batch-calender-icon.png" />
              <h2>Start Date :</h2>
            </div>
            <div className="start-date-content">
              <h2>02/12/2024</h2>
            </div>
          </div>
          <div className="course-end-date">
            <div className="end-date2">
              <img src="/batch-calender-icon.png" />
              <h2>End Date :</h2>
            </div>
            <div className="end-date-content">
              <h2>02/02/2025</h2>
            </div>
          </div>
          <div className="course-class-time">
            <div className="class-time2">
              <img src="/batch-time-icon.png" />
              <h2>Class Time :</h2>
            </div>
            <div className="class-time-content">
              <h2>10:00 am <span>To</span> 12:00 pm</h2>
            </div>
          </div>
          <div className="course-content">
            <div className="enrolled-learner">
              Enrolled learner: <span>03</span>
            </div>
            <div className="course-id">
              Course ID :  <span>DM1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnerCourse;
