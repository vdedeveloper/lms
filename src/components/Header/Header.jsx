import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';
import './header.css';

const Header = () => {

    // Header
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    // Sidebar
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
        <>
            <header>
                {/* Main Header */}
                <div className='main-header'>
                    {/* Logo */}
                    <div className='logo left-side-header'>
                        <img className='logo1' src='/favicon.png' alt='favicon' />
                        <img className='logo2' src='/vdei-logo.png' alt='vdei-logo' />
                    </div>
                    {/* Right Side Header */}
                    <div className='right-side-header'>
                        {/* Mid */}
                        <div className='mid-header-section'>
                            <h2>Learner</h2>
                            <h2 className='main-box'>Admin</h2>
                            <h2>Trainer</h2>
                        </div>
                        {/* Right Panel */}
                        <div className='right-panel'>
                            {/* Right Menu */}
                            <div className='right-menu'>
                                {/* Search */}
                                {/* <div className='search'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: '25px' }} />
                                <h3>Search</h3>
                            </div> */}
                                {/* Communication */}
                                <div className='communication'>
                                    <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '25px' }} />
                                    <h3>My Communication</h3>
                                </div>
                                {/* Announcement */}
                                <div className='announcement'>
                                    <FontAwesomeIcon icon={faBell} style={{ fontSize: '25px' }} />
                                    <h3>Announcement</h3>
                                </div>
                            </div>
                            {/* Profile */}
                            <div className={`profile ${dropdownVisible ? 'dropdown-visible' : ''}`}>
                                <div className='profile-img' onClick={toggleDropdown}>
                                    <img src='/profile-img.jpg' alt='profile-img' />
                                </div>
                                <div className='profile-content'>
                                    <h1 className='username'>Jagriti Mishra</h1>
                                    <h2 className='portal'>Admin Portal</h2>
                                </div>
                                <div className='dropdown-wrapper'>
                                    <button className={`dropdown-button ${dropdownVisible ? 'active' : ''}`} onClick={toggleDropdown}>
                                        <span className='caret-icon'>▼</span>
                                    </button>
                                    <div className='dropdown'>
                                        <ul>
                                            <li><a href='#'>Mobile No : 9988553322</a></li>
                                            <li><a href='#'>Email ID : jagriti@gmail.com</a></li>
                                            <li><a href='#'>Validity End : 30/03/2024</a></li>
                                            <li><a href='#'>Logout</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <aside className="sidebar Responsive-Sidebar">
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
                    <div
                        className={`menu-item ${isActive('/user') ? 'active' : ''}`}
                        onClick={toggleUsersDropdown}
                    >
                        <div className="icon-strip"></div>
                        <div className="icon">
                            <img src="/users-icon.png" alt="Users Icon" />
                        </div>
                        <NavLink to="/user" className="link">
                            USERS
                        </NavLink>
                        <span className="arrow-icon">{isUsersDropdownOpen ? '▲' : '▼'}</span>
                    </div>
                    {isUsersDropdownOpen && (
                        <div className="dropdown">
                            <div
                                className="dropdown-item"
                                onClick={() => handleDropdownClick('/addadmin')}
                            >
                                <div className="icon">
                                    <img src="/admin-user.png" alt="Admin Icon" />
                                </div>
                                ADD ADMIN
                            </div>
                            <div
                                className="dropdown-item"
                                onClick={() => handleDropdownClick('/addlearner')}
                            >
                                <div className="icon">
                                    <img src="/learner-user.png" alt="Learner Icon" />
                                </div>
                                ADD LEARNER
                            </div>
                            <div
                                className="dropdown-item"
                                onClick={() => handleDropdownClick('/addtrainer')}
                            >
                                <div className="icon">
                                    <img src="/trainer-user.png" alt="Trainer Icon" />
                                </div>
                                ADD TRAINER
                            </div>
                        </div>
                    )}

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

                    {/* Batches (Learner) */}
                    {/* <div className={`menu-item ${isActive('/batch-page-learner') ? 'active' : ''}`}>
                                <div className="icon-strip"></div>
                                <div className="icon">
                                    <img src="/batches-icon.png" alt="Course Icon" />
                                </div>
                                <NavLink to="/batch-page-learner" className="link">
                                    <span>BATCHES</span>
                                </NavLink>
                            </div> */}

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

                    {/* Courses (learner) */}
                    {/* <div className={`menu-item ${isActive('/course') ? 'active' : ''}`}>
                                <div className="icon-strip"></div>
                                <div className="icon">
                                    <img src="/course-icon.png" alt="Course Icon" />
                                </div>
                                <NavLink to="/course" className="link">
                                    <span>COURSE</span>
                                </NavLink>
                            </div> */}

                    {/* Session Video (Trainer, learner) */}
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

                    {/* Assignment (Learner, Trainer) */}

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


                    {/* Fee Structure (Learner) */}
                    {/* <div className={`menu-item ${isActive('/feestructure') ? 'active' : ''}`}>
                                <div className="icon-strip"></div>
                                <div className="icon">
                                    <img src="/fee-icon.png" alt="Fee Icon" />
                                </div>
                                <NavLink to="/feestructure" className="link">
                                    <span>FEE STRUCTURE</span>
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
        </>
    );
};

export default Header;
