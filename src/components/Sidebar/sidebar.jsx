import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './sidebar.css';

const Sidebar = ({ onSelect }) => {
    // Users Dropdown
    const [isUsersDropdownOpen, setIsUsersDropdownOpen] = useState(false);
    // Assignment Dropdown
    const [isAssignmentDropdownOpen, setIsAssignmentDropdownOpen] = useState(false);
    // Location
    const location = useLocation();
    // Navigation
    const navigate = useNavigate();

    // Toggle User Dropdown
    const toggleUsersDropdown = () => {
        setIsUsersDropdownOpen(!isUsersDropdownOpen);
    };

    // Toggle Assignment Dropdown
    const toggleAssignmentDropdown = () => {
        setIsAssignmentDropdownOpen(!isAssignmentDropdownOpen);
    };

    // Dropdown Click
    const handleDropdownClick = (route) => {
        navigate(route);
        onSelect(route);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <aside className="sidebar">
            <div className="sidebar-menu">
                {/* Dashboards */}

                {/* Admin Dashboard */}
                <div className={`menu-item ${isActive('/admindashboard') ? 'active' : ''}`}>
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/dashboard-icon.png" alt="Dashboard Icon" />
                    </div>
                    <NavLink to="/admindashboard" className="link">
                        <span>ADMIN DASHBOARD</span>
                    </NavLink>
                </div>

                {/* Learner Dashboard */}
                {/* <div className={`menu-item ${isActive('/learnerdashboard') ? 'active' : ''}`}>
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/dashboard-icon.png" alt="Dashboard Icon" />
                    </div>
                    <NavLink to="/learnerdashboard" className="link">
                        <span>DASHBOARD</span>
                    </NavLink>
                </div> */}

                {/* Trainer Dashboard */}
                {/* <div className={`menu-item ${isActive('/trainerdashboard') ? 'active' : ''}`}>
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/dashboard-icon.png" alt="Dashboard Icon" />
                    </div>
                    <NavLink to="/trainerdashboard" className="link">
                        <span>TRAINER DASHBOARD</span>
                    </NavLink>
                </div> */}

                {/* Users (Admin) */}
                <div className={`menu-item ${isActive('/user') ? 'active' : ''}`}>
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/users-icon.png" alt="Course Icon" />
                    </div>
                    <NavLink to="/user" className="link">
                        <span>USERS</span>
                    </NavLink>
                </div>

                {/* Batches */}
                {/* Batches (admin) */}
                <div className={`menu-item ${isActive('/batch') ? 'active' : ''}`}>
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/batches-icon.png" alt="Course Icon" />
                    </div>
                    <NavLink to="/batch" className="link">
                        <span>BATCHES</span>
                    </NavLink>
                </div>

                {/* Batches (Trainer) */}
                {/* <div className={`menu-item ${isActive('/batch-page-trainer') ? 'active' : ''}`}>
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/batches-icon.png" alt="Course Icon" />
                    </div>
                    <NavLink to="/batch-page-trainer" className="link">
                        <span>BATCHES</span>
                    </NavLink>
                </div> */}

                {/* Courses (admin) */}
                <div className={`menu-item ${isActive('/admincourse') ? 'active' : ''}`}>
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/course-icon.png" alt="Course Icon" />
                    </div>
                    <NavLink to="/admincourse" className="link">
                        <span>COURSE</span>
                    </NavLink>
                </div>

                {/* Courses (learner) */}
                {/* <div className={`menu-item ${isActive('/learnercourse') ? 'active' : ''}`}>
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/course-icon.png" alt="Course Icon" />
                    </div>
                    <NavLink to="/learnercourse" className="link">
                        <span>MY COURSE</span>
                    </NavLink>
                </div> */}

                {/* Session Video (learner) */}
                {/* <div className={`menu-item ${isActive('/sessionvideo') ? 'active' : ''}`}>
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/video-icon.png" alt="Material Icon" />
                    </div>
                    <NavLink to="/sessionvideo" className="link">
                        <span>SESSION VIDEO</span>
                    </NavLink>
                </div> */}

                {/* Study Materials */}

                {/* Materials (Admin, Trainer) */}
                <div className={`menu-item ${isActive('/materials') ? 'active' : ''}`}>
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/material-icon.png" alt="Material Icon" />
                    </div>
                    <NavLink to="/materials" className="link">
                        <span>STUDY MATERIALS</span>
                    </NavLink>
                </div>

                {/* Materials (Learner) */}
                {/* <div className={`menu-item ${isActive('/materials-learner') ? 'active' : ''}`}>
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/material-icon.png" alt="Material Icon" />
                    </div>
                    <NavLink to="/materials-learner" className="link">
                        <span>STUDY MATERIALS</span>
                    </NavLink>
                </div> */}

                {/* Assignment (Trainer) */}

                {/* <div
                    className={`menu-item ${isActive('/assignment') ? 'active' : ''}`}
                    onClick={toggleAssignmentDropdown}
                >
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/submission-icon.png" alt="Users Icon" />
                    </div>
                    <NavLink to="/assignment" className="link">
                        ASSIGNMENT
                    </NavLink>
                    <span className="arrow-icon">{isAssignmentDropdownOpen ? '▲' : '▼'}</span>
                </div> */}
                {/* {isAssignmentDropdownOpen && (
                    <div className="dropdown">
                        <div
                            className="dropdown-item"
                            onClick={() => handleDropdownClick('/trainer-assignment')}
                        >
                            <div className="icon">
                                <img src="/assignment-submit.png" alt="Admin Icon" />
                            </div>
                            ASSIGNMENTS
                        </div>
                        <div
                            className="dropdown-item"
                            onClick={() => handleDropdownClick('/trainer-project')}
                        >
                            <div className="icon">
                                <img src="/project-submit.png" alt="Admin Icon" />
                            </div>
                            PROJECTS
                        </div>
                    </div>
                )} */}

                {/* Assignment (Learner) */}

                {/* <div
                    className={`menu-item ${isActive('/student-assignment') ? 'active' : ''}`}
                    onClick={toggleAssignmentDropdown}
                >
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/submission-icon.png" alt="Users Icon" />
                    </div>
                    <NavLink to="/student-assignment" className="link">
                        ASSIGNMENT
                    </NavLink>
                    <span className="arrow-icon">{isAssignmentDropdownOpen ? '▲' : '▼'}</span>
                </div> */}
                {/* {isAssignmentDropdownOpen && (
                    <div className="dropdown">
                        <div
                            className="dropdown-item"
                            onClick={() => handleDropdownClick('/student-assignment')}
                        >
                            <div className="icon">
                                <img src="/assignment-submit.png" alt="Admin Icon" />
                            </div>
                            ASSIGNMENTS
                        </div>
                        <div
                            className="dropdown-item"
                            onClick={() => handleDropdownClick('/student-project')}
                        >
                            <div className="icon">
                                <img src="/project-submit.png" alt="Admin Icon" />
                            </div>
                            PROJECTS
                        </div>
                    </div>
                )} */}

                {/* Fee Structure (Admin) */}
                <div className={`menu-item ${isActive('/feestructure') ? 'active' : ''}`}>
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/fee-icon.png" alt="Fee Icon" />
                    </div>
                    <NavLink to="/feestructure" className="link">
                        <span>FEE DETAILS</span>
                    </NavLink>
                </div>

                {/* Fee Structure (Learner) */}
                {/* <div className={`menu-item ${isActive('/learnerfeestructure') ? 'active' : ''}`}>
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/fee-icon.png" alt="Fee Icon" />
                    </div>
                    <NavLink to="/learnerfeestructure" className="link">
                        <span>FEE DETAILS</span>
                    </NavLink>
                </div> */}

                {/* Support (admin) */}
                <div className={`menu-item ${isActive('/support') ? 'active' : ''}`}>
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/support-icon.png" alt="Support Icon" />
                    </div>
                    <NavLink to="/support" className="link">
                        <span>ISSUES</span>
                    </NavLink>
                </div>

                {/* Support (Learner, Trainer) */}
                {/* <div className={`menu-item ${isActive('/support-learner') ? 'active' : ''}`}>
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/support-icon.png" alt="Support Icon" />
                    </div>
                    <NavLink to="/support-learner" className="link">
                        <span>SUPPORT</span>
                    </NavLink>
                </div> */}
            </div>

            {/* Logout */}
            <div className="logout">
                <div className="icon">
                    <img src="/logout-icon.png" alt="Logout Icon" />
                </div>
                <span>LOGOUT</span>
            </div>
        </aside>
    );
};

export default Sidebar;