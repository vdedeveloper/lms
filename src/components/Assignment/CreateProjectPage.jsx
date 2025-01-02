import React, { useState } from "react";
import "./Assignment.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faCloudArrowUp, faImages } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const CreateProjectPage = () => {
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
          <h3>Create Project</h3>
          <p>Set up your project and share your knowledge.</p>
        </div>
        <div className="course-submit-btn">
          {/* Publish Project */}
          <div className="user-add-btn">
            <button type="submit">
              <FontAwesomeIcon icon={faUpload} style={{ width: '20px', marginRight: '10px' }} />
              Publish Project
            </button>
          </div>
          {/* Save Project */}
          <div className="user-add-btn">
            <button type="submit">
              <FontAwesomeIcon icon={faCloudArrowUp} style={{ width: '25px', marginRight: '10px' }} />
              Save Project
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
        {/* Project Number */}
        <div className="create-batch-number">
          <label>Project Number :</label>
          <input type="number" placeholder="Enter Project Number" required />
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
        {/* Project Topic */}
        <div className="course-category">
          <label>Project Topic :</label>
          <input type="text" placeholder="Enter Project Topic" required />
        </div>
        {/* Project Date */}
        <div className="batch-dates">
          {/* Project Start Date */}
          <div className="create-batch-start-date">
            <label>Project Start Date :</label>
            <div className="batch-start-date">
              <input
                type="datetime-local"
                id="availableFrom"
                name="availableFrom"
                required
              />
            </div>
          </div>
          {/* Project End Date */}
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

export default CreateProjectPage;
