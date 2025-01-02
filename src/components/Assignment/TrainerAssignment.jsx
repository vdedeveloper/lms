import React from "react";
import { useNavigate } from "react-router-dom";

const SubmitAssignment = () => {
    const navigate = useNavigate();

    const handleAddClick = () => {
        navigate("/create-assignment");
    };

    return (
        // Main Section
        <div className='main-section'>
            {/* Main Heading */}
            <div className='main-heading'>
                <div className='usercontent-heading'>
                    <h3>Assignment</h3>
                    <p>Review assignments from your learners.</p>
                </div>
                <div className="user-add-btn addcourse">
                    <button onClick={handleAddClick}>Create Assignment +</button>
                </div>
            </div>
            {/* Assignment Card */}
            <div className="batches">
                {/* Assignment Card */}
                <div className="batch-card">
                    {/* Assignment Number */}
                    <div className="batch-number">
                        <h2>Student ID : <span>1</span></h2>
                    </div>
                    {/* Trainer Profile */}
                    <div className="trainer-profile">
                        <div className="trainer-profile-img">
                            <img src="/trainer-profile-img.jpg" alt="trainer-profile-img" />
                        </div>
                        <div className="trainer-profile-detail">
                            <h2>Jagriti Mishra</h2>
                            <h3>Online</h3>
                        </div>
                    </div>
                    {/* Course Name */}
                    <div className="batch-course-title">
                        <div className="course-heading">
                            <img src="/batch-course-icon.png" />
                            <h2>Course :</h2>
                        </div>
                        <div className="course-heading-content">
                            <h2>BIM Basic <span>(ACS)</span></h2>
                        </div>
                    </div>
                    {/* Assignment Title */}
                    <div className="batch-enrolled-students">
                        <div className="enrolled-students">
                            <img src="/batch-student-icon.png" />
                            <h2>Assignment :</h2>
                        </div>
                        <div className="enrolled-students-content">
                            <h2>create a wall</h2>
                        </div>
                    </div>
                    {/* Assignment Date */}
                    <div className="batch-start-date">
                        <div className="start-date">
                            <img src="/batch-calender-icon.png" />
                            <h2>Date :</h2>
                        </div>
                        <div className="start-date-content">
                            <h2>16/12/2024</h2>
                        </div>
                    </div>
                    {/* Assignment View */}
                    <div className="start-class-btn">
                        <button type="button" className="startclass-btn">
                            View Assignment
                        </button>
                    </div>
                </div>
                {/* Assignment Card */}
                <div className="batch-card">
                    {/* Assignment Number */}
                    <div className="batch-number">
                        <h2>Student ID : <span>2</span></h2>
                    </div>
                    {/* Trainer Profile */}
                    <div className="trainer-profile">
                        <div className="trainer-profile-img">
                            <img src="/trainer-profile-img.jpg" alt="trainer-profile-img" />
                        </div>
                        <div className="trainer-profile-detail">
                            <h2>Jagriti Mishra</h2>
                            <h3>Offline</h3>
                        </div>
                    </div>
                    {/* Course Name */}
                    <div className="batch-course-title">
                        <div className="course-heading">
                            <img src="/batch-course-icon.png" />
                            <h2>Course :</h2>
                        </div>
                        <div className="course-heading-content">
                            <h2>BIM Basic <span>(ACS)</span></h2>
                        </div>
                    </div>
                    {/* Assignment Title */}
                    <div className="batch-enrolled-students">
                        <div className="enrolled-students">
                            <img src="/batch-student-icon.png" />
                            <h2>Assignment :</h2>
                        </div>
                        <div className="enrolled-students-content">
                            <h2>create a wall</h2>
                        </div>
                    </div>
                    {/* Assignment Date */}
                    <div className="batch-start-date">
                        <div className="start-date">
                            <img src="/batch-calender-icon.png" />
                            <h2>Date :</h2>
                        </div>
                        <div className="start-date-content">
                            <h2>16/12/2024</h2>
                        </div>
                    </div>
                    {/* Assignment View */}
                    <div className="start-class-btn">
                        <button type="button" className="startclass-btn">
                            View Assignment
                        </button>
                    </div>
                </div>
                {/* Assignment Card */}
                <div className="batch-card">
                    {/* Assignment Number */}
                    <div className="batch-number">
                        <h2>Student ID : <span>3</span></h2>
                    </div>
                    {/* Trainer Profile */}
                    <div className="trainer-profile">
                        <div className="trainer-profile-img">
                            <img src="/trainer-profile-img.jpg" alt="trainer-profile-img" />
                        </div>
                        <div className="trainer-profile-detail">
                            <h2>Jagriti Mishra</h2>
                            <h3>Online</h3>
                        </div>
                    </div>
                    {/* Course Name */}
                    <div className="batch-course-title">
                        <div className="course-heading">
                            <img src="/batch-course-icon.png" />
                            <h2>Course :</h2>
                        </div>
                        <div className="course-heading-content">
                            <h2>BIM Basic <span>(ACS)</span></h2>
                        </div>
                    </div>
                    {/* Assignment Title */}
                    <div className="batch-enrolled-students">
                        <div className="enrolled-students">
                            <img src="/batch-student-icon.png" />
                            <h2>Assignment :</h2>
                        </div>
                        <div className="enrolled-students-content">
                            <h2>create a wall</h2>
                        </div>
                    </div>
                    {/* Assignment Date */}
                    <div className="batch-start-date">
                        <div className="start-date">
                            <img src="/batch-calender-icon.png" />
                            <h2>Date :</h2>
                        </div>
                        <div className="start-date-content">
                            <h2>16/12/2024</h2>
                        </div>
                    </div>
                    {/* Assignment View */}
                    <div className="start-class-btn">
                        <button type="button" className="startclass-btn">
                            View Assignment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubmitAssignment
