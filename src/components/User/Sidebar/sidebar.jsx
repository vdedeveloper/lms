import React, { useState } from 'react';
import './sidebar.css';

const Sidebar = ({ onSelect }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const openDropdown = () => {
        setIsDropdownOpen(true);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-menu">
                <div className="menu-item">
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/dashboard-icon.png" alt="Dashboard Icon" />
                    </div>
                    <span>DASHBOARD</span>
                </div>

                <div
                    className={`menu-item active ${isDropdownOpen ? 'active' : ''}`}
                    onClick={toggleDropdown}
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                >
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src="/users-icon.png" alt="Users Icon" />
                    </div>
                    <span>USERS</span>
                    <span className="arrow-icon">{isDropdownOpen ? '▲' : '▼'}</span>
                </div>

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
                                <img src="/admin-user.png" alt="Users Icon" />
                            </div>
                            ADD ADMIN
                        </div>
                        <div
                            className="dropdown-item"
                            onClick={() => onSelect('AddLearner')}
                        >
                            <div className="icon">
                                <img src="/learner-user.png" alt="Users Icon" />
                            </div>
                            ADD LEARNER
                        </div>
                        <div
                            className="dropdown-item"
                            onClick={() => onSelect('AddTrainer')}
                        >
                            <div className="icon">
                                <img src="/trainer-user.png" alt="Users Icon" />
                            </div>
                            ADD TRAINER
                        </div>
                    </div>
                )}
            </div>

            <div className="menu-item">
                <div className="icon-strip"></div>
                <div className="icon">
                    <img src="/course-icon.png" alt="Course Icon" />
                </div>
                <span>MY COURSES</span>
            </div>
            <div className="menu-item">
                <div className="icon-strip"></div>
                <div className="icon">
                    <img src="/video-icon.png" alt="Video Icon" />
                </div>
                <span>SESSION VIDEO</span>
            </div>
            <div className="menu-item">
                <div className="icon-strip"></div>
                <div className="icon">
                    <img src="/material-icon.png" alt="Material Icon" />
                </div>
                <span>MATERIALS</span>
            </div>
            <div className="menu-item">
                <div className="icon-strip"></div>
                <div className="icon">
                    <img src="/submission-icon.png" alt="Submission Icon" />
                </div>
                <span>SUBMISSIONS</span>
            </div>
            <div className="menu-item">
                <div className="icon-strip"></div>
                <div className="icon">
                    <img src="/fee-icon.png" alt="Fee Icon" />
                </div>
                <span>FEE STRUCTURE</span>
            </div>
            <div className="menu-item">
                <div className="icon-strip"></div>
                <div className="icon">
                    <img src="/support-icon.png" alt="Support Icon" />
                </div>
                <span>SUPPORT</span>
            </div>

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
