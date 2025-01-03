import React, { useState } from "react";
import "./Course.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; 

const CreateCoursePage1 = () => {
  // Navigation
  const navigate = useNavigate(); 

  const [trainerName, setTrainerName] = useState("");

  // Form Submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  // CreateCoursePage2 Navigation
  const handleNextPage = () => {
    navigate("/create-course-2"); 
  };

  return (
    // Main Section
    <div className="main-section">
      {/* Main Heading */}
      <div className="main-heading">
        <div className="usercontent-heading">
          <h3>Create Courses</h3>
          <p>Set up your courses and share your knowledge.</p>
        </div>
        <div className="user-add-btn nextcoursepage">
          <button type="button" onClick={handleNextPage}> {/* Updated to type="button" */}
            Next <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "10px" }} />
          </button>
        </div>
      </div>

      {/* Form Section */}
      <form onSubmit={handleFormSubmit} className="create-course-content">
        {/* Course Title */}
        <div className="course-title">
          <label>Title</label>
          <input type="text" placeholder="Enter Course Title" required />
        </div>
        {/* Course Trainer */}
        <div className="create-batch-trainer-name" style={{marginTop:"25px"}}>
          <label>Trainer Name :</label>
          <select value={trainerName} onChange={(e) => setTrainerName(e.target.value)} required>
            <option value="">Select Name</option>
            <option value="Subbarao Attada">Subbarao Attada</option>
            <option value="Mohammad Adnan">Mohammad Adnan</option>
            <option value="Mohan Kanakala">Mohan Kanakala</option>
          </select>
        </div>
        {/* Course Pricing */}
        <div className="course-pricing">
          <div className="total-price">
            <label>Total Price</label>
            <input type="number" placeholder="Enter Course Price" required />
          </div>
          <div className="discounted-price">
            <label>Discounted Price</label>
            <input type="number" placeholder="Enter Course Discounted Price" required />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateCoursePage1;
