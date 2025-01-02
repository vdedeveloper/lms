import React, { useState } from "react";
import "./Batch.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faCloudArrowUp, faImages } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const CreateBatchPage1 = () => {
  // Student Course
  const [studentcourse, SetStudentCourse] = useState('');
  // Navigation
  const navigate = useNavigate();
  // Select Trainer Role
  const [trainerRole, setTrainerRole] = useState(""); 
  // Cover Image 
  const [coverImage, setCoverImage] = useState(null);

  // Handle Menu
  const handleCoursechange = (event) => {
    SetStudentCourse(event.target.value);
  };

  // Form Submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with Trainer Role:", trainerRole);
  };

  // Trainer Role
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
          <h3>Create Batches</h3>
          <p>Set up your batches and share your knowledge.</p>
        </div>
        <div className="course-submit-btn">
          <div className="user-add-btn">
            <button type="submit">
              <FontAwesomeIcon icon={faUpload} style={{ width: '20px', marginRight: '10px' }} />
              Publish Batch
            </button>
          </div>
          <div className="user-add-btn">
            <button type="submit">
              <FontAwesomeIcon icon={faCloudArrowUp} style={{ width: '25px', marginRight: '10px' }} />
              Save Batch
            </button>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <form onSubmit={handleFormSubmit} className="create-batch-content">
        {/* Add Profile */}
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
        {/* Batch Number */}
        <div className="create-batch-number">
          <label>Batch Number :</label>
          <input type="number" placeholder="Enter Batch Number" required />
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
          <label>Course Category :</label>
          <input type="text" placeholder="Enter Category Title" required />
        </div>
        {/* Select Student */}
        <div className="select-student">
          <div className="select-student-content">
            <label>Select Students :</label>
            <div className="student-select-option">
              <label>
                <input type="radio" name="availability" value="BIM Basic (ACS)" onChange={handleCoursechange} required />
                BIM Basic (ACS)
              </label>
              <label>
                <input
                  type="radio"
                  name="availability"
                  value="BIM Basic (MEP)"
                  onChange={handleCoursechange}
                  required
                />
                BIM Basic (MEP)
              </label>
              <label>
                <input
                  type="radio"
                  name="availability"
                  value="BIM Professional (ACS)"
                  onChange={handleCoursechange}
                  required
                />
                BIM Professional (ACS)
              </label>
              <label>
                <input
                  type="radio"
                  name="availability"
                  value="BIM Professional (MEP)"
                  onChange={handleCoursechange}
                  required
                />
                BIM Professional (MEP)
              </label>
              <label>
                <input
                  type="radio"
                  name="availability"
                  value="BIM Master (ACS)"
                  onChange={handleCoursechange}
                  required
                />
                BIM Master (ACS)
              </label>
              <label>
                <input
                  type="radio"
                  name="availability"
                  value="BIM Master (MEP)"
                  onChange={handleCoursechange}
                  required
                />
                BIM Master (MEP)
              </label>
            </div>
          </div>
          {studentcourse === 'BIM Basic (ACS)' && (
            <div className="student-checkbox">
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>John Doe (ACS)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Jane Smith (ACS)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Alex Johnson (ACS)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Emily Davis (ACS)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Michael Brown (ACS)</h2>
              </div>
            </div>
          )}
          {studentcourse === 'BIM Basic (MEP)' && (
            <div className="student-checkbox">
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>John Doe (MEP)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Jane Smith (MEP)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Alex Johnson (MEP)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Emily Davis (MEP)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Michael Brown (MEP)</h2>
              </div>
            </div>
          )}
          {studentcourse === 'BIM Professional (ACS)' && (
            <div className="student-checkbox">
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>John Doe (ACS)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Jane Smith (ACS)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Alex Johnson (ACS)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Emily Davis (ACS)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Michael Brown (ACS)</h2>
              </div>
            </div>
          )}
          {studentcourse === 'BIM Professional (MEP)' && (
            <div className="student-checkbox">
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>John Doe (MEP)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Jane Smith (MEP)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Alex Johnson (MEP)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Emily Davis (MEP)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Michael Brown (MEP)</h2>
              </div>
            </div>
          )}
          {studentcourse === 'BIM Master (ACS)' && (
            <div className="student-checkbox">
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>John Doe (ACS)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Jane Smith (ACS)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Alex Johnson (ACS)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Emily Davis (ACS)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Michael Brown (ACS)</h2>
              </div>
            </div>
          )}
          {studentcourse === 'BIM Master (MEP)' && (
            <div className="student-checkbox">
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>John Doe (MEP)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Jane Smith (MEP)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Alex Johnson (MEP)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Emily Davis (MEP)</h2>
              </div>
              <div className="student-selection">
                <label>
                  <input
                    type="checkbox" required
                  />
                </label>
                <h2>Michael Brown (MEP)</h2>
              </div>
            </div>
          )}
        </div>
        {/* Batch Dates */}
        <div className="batch-dates">
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
          <div className="create-batch-class-time">
            <label>Batch Class Time :</label>
            <div className="batch-class-time">
              <input
                type="time"
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

export default CreateBatchPage1;
