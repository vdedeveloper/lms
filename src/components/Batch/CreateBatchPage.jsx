import React, { useState } from "react";
import "./Batch.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faCloudArrowUp, faImages } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const CreateBatchPage1 = () => {
  const [trainerRole, setTrainerRole] = useState("");
  const [trainerName, setTrainerName] = useState("");
  const [studyMaterial, setStudyMaterial] = useState("");
  const [selectCourse, setSelectCourse] = useState("");
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const courses = [
    "BIM Basic (ACS)",
    "BIM Basic (MEP)",
    "BIM Professional (ACS)",
    "BIM Professional (MEP)",
    "BIM Master (ACS)",
    "BIM Master (MEP)",
    "Interior Design",
    "Digital Marketing"
  ];

  const students = [
    "John Doe",
    "Jane Smith",
    "Alex Johnson",
    "Emily Davis",
    "Michael Brown",
    "Harry Potter",
    "Hermione Granger",
  ];

  // Toggle dropdown
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Handle student selection
  const handleStudentSelection = (student) => {
    if (selectedStudents.includes(student)) {
      setSelectedStudents(selectedStudents.filter((s) => s !== student));
    } else {
      setSelectedStudents([...selectedStudents, student]);
    }
  };

  // Filter students based on search term
  const filteredStudents = students.filter((student) =>
    student.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCoverImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="main-section">
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

      <form className="create-batch-content">
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

        <div className="create-batch-number">
          <label>Batch Number :</label>
          <input type="number" placeholder="Enter Batch Number" required />
        </div>

        <div className="create-batch-trainer-name">
          <label>Trainer Name :</label>
          <select value={trainerName} onChange={(e) => setTrainerName(e.target.value)} required>
            <option value="">Select Name</option>
            <option value="Subbarao Attada">Subbarao Attada</option>
            <option value="Mohammad Adnan">Mohammad Adnan</option>
            <option value="Mohan Kanakala">Mohan Kanakala</option>
          </select>
        </div>

        <div className="create-batch-trainer-role">
          <label>Trainer Role :</label>
          <select value={trainerRole} onChange={(e) => setTrainerRole(e.target.value)} required>
            <option value="">Select Role</option>
            <option value="Sr. Trainer">Sr. Trainer</option>
            <option value="Jr. Trainer">Jr. Trainer</option>
          </select>
        </div>

        <div className="course-title course-title-dropdown" style={{ marginTop: "-10px" }}>
          <label>Course Title :</label>
          <select value={selectCourse} onChange={(e) => setSelectCourse(e.target.value)} required>
            <option value="">Select Course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        {/* Searchable Multi-Select Dropdown for Students */}
        <div className="select-student course-title-dropdown">
          <label>Select Students :</label>
          <div className="custom-dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
              {selectedStudents.length > 0
                ? selectedStudents.join(", ")
                : "Select Students"}
              <span className="dropdown-arrow">{isDropdownOpen ? "▲" : "▼"}</span>
            </div>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <input
                  type="text"
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {filteredStudents.map((student, index) => (
                  <div key={index} className="dropdown-item">
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedStudents.includes(student)}
                        onChange={() => handleStudentSelection(student)}
                      />
                      {student}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="create-batch-study-material">
          <label>Study Material :</label>
          <select value={studyMaterial} onChange={(e) => setStudyMaterial(e.target.value)} required>
            <option value="">Select Material</option>
            <option value="Lumion Reference Notes">Lumion Reference Notes</option>
            <option value="Revit Architecture Material">Revit Architecture Material</option>
            <option value="Revit Structure Material">Revit Structure Material</option>
          </select>
        </div>

        <div className="batch-dates">
          <div className="create-batch-start-date">
            <label>Batch Start Date :</label>
            <input type="datetime-local" required />
          </div>
          <div className="create-batch-end-date">
            <label>Batch End Date :</label>
            <input type="datetime-local" required />
          </div>
          <div className="create-batch-class-time">
            <label>Batch Class Time :</label>
            <input type="time" required />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateBatchPage1;
