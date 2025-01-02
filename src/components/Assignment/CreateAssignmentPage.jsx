import React, { useState } from "react";
import "./Assignment.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faCloudArrowUp, faImages } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const CreateAssignmentPage = () => {
  // Student Course
  const [studentcourse, SetStudentCourse] = useState('');
  // Navigation
  const navigate = useNavigate();
  // Trainer Role
  const [trainerRole, setTrainerRole] = useState(""); 
  // Cover Image
  const [coverImage, setCoverImage] = useState(null);

  // Course Change
  const handleCoursechange = (event) => {
    SetStudentCourse(event.target.value);
  };

  // Form Submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with Trainer Role:", trainerRole);
  };

  // Dropdown Change
  const handleDropdownChange = (event) => {
    setTrainerRole(event.target.value);
  };

  // Cover Image
  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  return (
    // Main Section
    <div className="main-section">
      {/* Main Heading */}
      <div className="main-heading">
        <div className="usercontent-heading">
          <h3>Create Assignment</h3>
          <p>Set up your assignment and share your knowledge.</p>
        </div>
        <div className="course-submit-btn">
          <div className="user-add-btn">
            <button type="submit">
              <FontAwesomeIcon icon={faUpload} style={{ width: '20px', marginRight: '10px' }} />
              Publish Assignment
            </button>
          </div>
          <div className="user-add-btn">
            <button type="submit">
              <FontAwesomeIcon icon={faCloudArrowUp} style={{ width: '25px', marginRight: '10px' }} />
              Save Assignment
            </button>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <form onSubmit={handleFormSubmit} className="create-batch-content">
        {/* Profile Image */}
        <div className="add-profile-image">
          <label htmlFor="coverImageInput" className="add-cover-placeholder">
            {coverImage ? (
              <img src={coverImage} alt="Course Cover" className="cover-preview" />
            ) : (
              <>
                <div className="icon-container">
                  <FontAwesomeIcon icon={faImages} style={{ fontSize: '24px', color: '#888' }} />
                </div>
                <p>Add Profile Image</p>
              </>
            )}
          </label>
          <input
            type="file"
            id="coverImageInput"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleCoverImageChange}
          />
        </div>
        {/* Assignment Number */}
        <div className="create-batch-number">
          <label>Assignment Number :</label>
          <input type="number" placeholder="Enter Assignment Number" required />
        </div>
        {/* Trainer Name */}
        <div className="create-batch-trainer-name">
          <label>Trainer Name :</label>
          <input type="text" placeholder="Enter Trainer Name" required />
        </div>
        {/* Trainer Role */}
        <div className="create-batch-trainer-role">
          <label>Trainer Role :</label>
          <select value={trainerRole} onChange={handleDropdownChange} required>
            <option value="">Select Role</option>
            <option value="yes">Sr. Trainer</option>
            <option value="no">Jr. Trainer</option>
          </select>
        </div>
        {/* Course Title */}
        <div className="course-title">
          <label>Course Title :</label>
          <input type="text" placeholder="Enter Course Title" required />
        </div>
        {/* Course Category */}
        <div className="course-category">
          <label>Assignment Topic :</label>
          <input type="text" placeholder="Enter Assignment Topic" required />
        </div>
        {/* Assignment Dates */}
        <div className="batch-dates">
          {/* Assignment Start Date */}
          <div className="create-batch-start-date">
            <label>Batch Start Date :</label>
            <div className="batch-start-date">
              <input
                type="datetime-local"
                id="availableFrom"
                name="availableFrom"
                required
              />
            </div>
          </div>
          {/* Assignment End Date */}
          <div className="create-batch-end-date">
            <label>Batch End Date :</label>
            <div className="batch-end-date">
              <input
                type="datetime-local"
                id="availableFrom"
                name="availableFrom"
                required
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAssignmentPage;
