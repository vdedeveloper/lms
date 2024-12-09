import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './sidebar.css';

const Sidebar = ({ onSelect }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation(); // Get current route

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const openDropdown = () => {
        setIsDropdownOpen(true);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <aside className="sidebar">
            <div className="sidebar-menu">
                {/* Dashboard */}
                <div className={`menu-item ${isActive('/admindashboard') ? 'active' : ''}`}>
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/dashboard-icon.png" alt="Dashboard Icon" />
                    </div>
                    <NavLink to="/admindashboard" className="link">
                        <span>DASHBOARD</span>
                    </NavLink>
                </div>

                {/* Users */}
                <div
                    className={`menu-item ${isActive('/user') ? 'active' : ''}`}
                    onClick={toggleDropdown}
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                >
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/users-icon.png" alt="Users Icon" />
                    </div>
                    <NavLink to="/user" className="link">
                        <span>USERS</span>
                    </NavLink>
                    <span className="arrow-icon">{isDropdownOpen ? '▲' : '▼'}</span>
                </div>

                {/* Dropdown */}
                {isDropdownOpen && (
                    <div
                        className="dropdown"
                        onMouseEnter={openDropdown}
                        onMouseLeave={closeDropdown}
                    >
                        <div
                            className="dropdown-item"
                            onClick={() => onSelect('AddAdmin')}
                        >
                            <div className="icon">
                                <img src="/admin-user.png" alt="Admin Icon" />
                            </div>
                            ADD ADMIN
                        </div>
                        <div
                            className="dropdown-item"
                            onClick={() => onSelect('AddLearner')}
                        >
                            <div className="icon">
                                <img src="/learner-user.png" alt="Learner Icon" />
                            </div>
                            ADD LEARNER
                        </div>
                        <div
                            className="dropdown-item"
                            onClick={() => onSelect('AddTrainer')}
                        >
                            <div className="icon">
                                <img src="/trainer-user.png" alt="Trainer Icon" />
                            </div>
                            ADD TRAINER
                        </div>
                    </div>
                )}

                {/* My Courses */}
                <div className={`menu-item ${isActive('/course') ? 'active' : ''}`}>
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/course-icon.png" alt="Course Icon" />
                    </div>
                    <NavLink to="/course" className="link">
                        <span>MY COURSES</span>
                    </NavLink>
                </div>

                {/* Session Videos */}
                <div className={`menu-item ${isActive('/sessionvideo') ? 'active' : ''}`}>
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/video-icon.png" alt="Video Icon" />
                    </div>
                    <NavLink to="/sessionvideo" className="link">
                        <span>SESSION VIDEOS</span>
                    </NavLink>
                </div>

                {/* Materials */}
                <div className={`menu-item ${isActive('/materials') ? 'active' : ''}`}>
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/material-icon.png" alt="Material Icon" />
                    </div>
                    <NavLink to="/materials" className="link">
                        <span>MATERIALS</span>
                    </NavLink>
                </div>

                {/* Submissions */}
                <div className={`menu-item ${isActive('/submissions') ? 'active' : ''}`}>
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/submission-icon.png" alt="Submission Icon" />
                    </div>
                    <NavLink to="/submissions" className="link">
                        <span>SUBMISSIONS</span>
                    </NavLink>
                </div>

                {/* Fee Structure */}
                <div className={`menu-item ${isActive('/feestructure') ? 'active' : ''}`}>
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/fee-icon.png" alt="Fee Icon" />
                    </div>
                    <NavLink to="/feestructure" className="link">
                        <span>FEE STRUCTURE</span>
                    </NavLink>
                </div>

                {/* Support */}
                <div className={`menu-item ${isActive('/support') ? 'active' : ''}`}>
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/support-icon.png" alt="Support Icon" />
                    </div>
                    <NavLink to="/support" className="link">
                        <span>SUPPORT</span>
                    </NavLink>
                </div>
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
