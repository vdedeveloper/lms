import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faUpload } from "@fortawesome/free-solid-svg-icons";

const StudentProject = () => {
    // State to manage popup visibility
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // State to manage uploaded file
    const [uploadedFile, setUploadedFile] = useState(null);

    // Function to open popup
    const openPopup = () => {
        setIsPopupOpen(true);
    };

    // Function to close popup
    const closePopup = () => {
        setIsPopupOpen(false);
    };

    // Function to handle file upload
    const handleFileUpload = (e) => {
        setUploadedFile(e.target.files[0]);
    };

    return (
        <div className="main-section">
            {/* Main Heading */}
            <div className="main-heading">
                <div className="usercontent-heading">
                    <h3>Project</h3>
                    <p>Complete all Projects and submit to your trainer</p>
                </div>
            </div>

            {/* Project Card */}
            <div className="batches">
                <div className="batch-card">
                    <div className="batch-number">
                        <h2>Project No : <span>1</span></h2>
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
                            <img src="/batch-course-icon.png" alt="course-icon" />
                            <h2>Course :</h2>
                        </div>
                        <div className="course-heading-content">
                            <h2>BIM Basic <span>(ACS)</span></h2>
                        </div>
                    </div>
                    <div className="batch-enrolled-students">
                        <div className="enrolled-students">
                            <img src="/batch-student-icon.png" alt="student-icon" />
                            <h2>Project :</h2>
                        </div>
                        <div className="enrolled-students-content">
                            <h2>Create a Wall</h2>
                        </div>
                    </div>
                    <div className="batch-start-date">
                        <div className="start-date">
                            <img src="/batch-calender-icon.png" alt="calendar-icon" />
                            <h2>Start Date :</h2>
                        </div>
                        <div className="start-date-content">
                            <h2>16/12/2024</h2>
                        </div>
                    </div>
                    <div className="batch-end-date">
                        <div className="end-date">
                            <img src="/batch-calender-icon.png" alt="calendar-icon" />
                            <h2>End Date :</h2>
                        </div>
                        <div className="end-date-content">
                            <h2>30/12/2024</h2>
                        </div>
                    </div>
                    <div className="start-class-btn">
                        <button type="button" className="startclass-btn" onClick={openPopup}>
                            Submit
                        </button>
                    </div>
                </div>
                <div className="batch-card">
                    <div className="batch-number">
                        <h2>Project No : <span>1</span></h2>
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
                            <img src="/batch-course-icon.png" alt="course-icon" />
                            <h2>Course :</h2>
                        </div>
                        <div className="course-heading-content">
                            <h2>BIM Basic <span>(ACS)</span></h2>
                        </div>
                    </div>
                    <div className="batch-enrolled-students">
                        <div className="enrolled-students">
                            <img src="/batch-student-icon.png" alt="student-icon" />
                            <h2>Project :</h2>
                        </div>
                        <div className="enrolled-students-content">
                            <h2>Create a Wall</h2>
                        </div>
                    </div>
                    <div className="batch-start-date">
                        <div className="start-date">
                            <img src="/batch-calender-icon.png" alt="calendar-icon" />
                            <h2>Start Date :</h2>
                        </div>
                        <div className="start-date-content">
                            <h2>16/12/2024</h2>
                        </div>
                    </div>
                    <div className="batch-end-date">
                        <div className="end-date">
                            <img src="/batch-calender-icon.png" alt="calendar-icon" />
                            <h2>End Date :</h2>
                        </div>
                        <div className="end-date-content">
                            <h2>30/12/2024</h2>
                        </div>
                    </div>
                    <div className="start-class-btn">
                        <button type="button" className="startclass-btn" onClick={openPopup}>
                            Submit
                        </button>
                    </div>
                </div>
                <div className="batch-card">
                    <div className="batch-number">
                        <h2>Project No : <span>1</span></h2>
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
                            <img src="/batch-course-icon.png" alt="course-icon" />
                            <h2>Course :</h2>
                        </div>
                        <div className="course-heading-content">
                            <h2>BIM Basic <span>(ACS)</span></h2>
                        </div>
                    </div>
                    <div className="batch-enrolled-students">
                        <div className="enrolled-students">
                            <img src="/batch-student-icon.png" alt="student-icon" />
                            <h2>Project :</h2>
                        </div>
                        <div className="enrolled-students-content">
                            <h2>Create a Wall</h2>
                        </div>
                    </div>
                    <div className="batch-start-date">
                        <div className="start-date">
                            <img src="/batch-calender-icon.png" alt="calendar-icon" />
                            <h2>Start Date :</h2>
                        </div>
                        <div className="start-date-content">
                            <h2>16/12/2024</h2>
                        </div>
                    </div>
                    <div className="batch-end-date">
                        <div className="end-date">
                            <img src="/batch-calender-icon.png" alt="calendar-icon" />
                            <h2>End Date :</h2>
                        </div>
                        <div className="end-date-content">
                            <h2>30/12/2024</h2>
                        </div>
                    </div>
                    <div className="start-class-btn">
                        <button type="button" className="startclass-btn" onClick={openPopup}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            {/* Popup Modal */}
            {isPopupOpen && (
                <div className="nested-popup-overlay">
                    <div className="nested-popup-content">
                        <div className="nested-popup-heading">
                            <h2>Upload Any File</h2>
                            <button className="close-icon" onClick={closePopup} style={{ background: "none", border: "none", outline: "none" }}>
                                <FontAwesomeIcon icon={faTimes} style={{ marginTop: "20px" }} />
                            </button>
                        </div>
                        <div className="nested-popup-body" style={{ marginTop: "20px" }}>
                            <input type="file" onChange={handleFileUpload} />
                            {uploadedFile && <p>Uploaded File: {uploadedFile.name}</p>}
                        </div>
                        <div className="pdf-upload-btn">
                            <button type="button" className="addmanual-btn">
                                <FontAwesomeIcon icon={faUpload} style={{ width: '20px', marginRight: '10px' }} />
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default StudentProject
