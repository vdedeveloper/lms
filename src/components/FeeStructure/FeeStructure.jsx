import React from 'react'
import './FeeStructure.css'

const FeeStructure = () => {
  return (
    <div className="main-section">
      {/* Main Heading */}
      <div className="main-heading">
        <div className="usercontent-heading">
          <h3>Fee Structure</h3>
          <p>Here is your fee structure</p>
        </div>
      </div>

      {/* Fee Structure */}
      <div className="fees-structure">
        <div className="fees-structure-card">
          {/* Student ID */}
          <div className="student-id">
            <h2>Student ID : <span>1</span></h2>
          </div>
          {/* Student Profile */}
          <div className="student-profile">
            <div className="trainer-profile-img">
              <img src="/trainer-profile-img.jpg" alt="trainer-profile-img" />
            </div>
            <div className="student-profile-detail">
              <h2>Jagriti Mishra</h2>
              <h3>Online</h3>
            </div>
          </div>
          {/* Student Profile Details */}
          <div className="student-profile-details">
            <div className="student-profile-course-detail">
              <div className="student-profile-title">
                {/* Course Heading */}
                <div className="course-heading">
                  <img src="/batch-course-icon.png" />
                  <h2>Course :</h2>
                </div>
                {/* Course Name */}
                <div className="student-profile-heading-content">
                  <h2>BIM Basic <span>(ACS)</span></h2>
                </div>
              </div>
              {/* Course Start Date */}
              <div className="student-profile-start-date">
                <div className="student-profile-date">
                  <img src="/batch-calender-icon.png" />
                  <h2>Start Date :</h2>
                </div>
                <div className="student-profile-start-date-content">
                  <h2>16/12/2024</h2>
                </div>
              </div>
              {/* Course End Date */}
              <div className="student-profile-end-date">
                <div className="student-profile-date">
                  <img src="/batch-calender-icon.png" />
                  <h2>End Date :</h2>
                </div>
                <div className="student-profile-end-date-content">
                  <h2>30/12/2024</h2>
                </div>
              </div>
              {/* Course Class Time */}
              <div className="student-profile-class-time">
                <div className="student-profile-date">
                  <img src="/batch-time-icon.png" />
                  <h2>Class Time :</h2>
                </div>
                <div className="student-profile-class-time-content">
                  <h2>10:00 am <span>To</span> 12:00 pm</h2>
                </div>
              </div>
            </div>
            {/* Fee Details */}
            <div className="student-profile-fees-detail">
              {/* Fees Count */}
              <div className="student-fees-title">
                <div className="fees">
                  <img src="/fees-icon.png" />
                  <h2>Fees :</h2>
                </div>
                <div className="student-fees-content">
                  <h2>34,000 <span>₹</span></h2>
                </div>
              </div>
              {/* Pending Payment */}
              <div className="student-payment-mode">
                <div className="student-profile-date">
                  <img src="/fees-icon.png" />
                  <h2>Payment mode :</h2>
                </div>
                <div className="student-payment-mode-content">
                  <h2>Partial / Installment</h2>
                </div>
              </div>
              {/* Fee Status */}
              <div className="student-profile-fee-status">
                <div className="student-fees-status-content">
                  <img src="/fees-icon.png" />
                  <h2>Fee Status :</h2>
                </div>
                <div className="student-fee-status">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: "50%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeeStructure
