import React from 'react';
import './sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-menu">
                <div className="menu-item">
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src='/dashboard-icon.png'></img>
                    </div>
                    <span>DASHBOARD</span>
                </div>
                <div className="menu-item active">
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src='/users-icon.png'></img>
                    </div>
                    <span>USERS</span>
                </div>
                <div className="menu-item">
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src='/course-icon.png'></img>
                    </div>
                    <span>MY COURSES</span>
                </div>
                <div className="menu-item">
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src='/video-icon.png'></img>
                    </div>
                    <span>SESSION VIDEO</span>
                </div>
                <div className="menu-item">
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src='/material-icon.png'></img>
                    </div>
                    <span>MATERIALS</span>
                </div>
                <div className="menu-item">
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src='/submission-icon.png'></img>
                    </div>
                    <span>SUBMISSIONS</span>
                </div>
                <div className="menu-item">
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src='/fee-icon.png'></img>
                    </div>
                    <span>FEE STRUCTURE</span>
                </div>
                <div className="menu-item">
                    <div className="icon-strip"></div>
                    <div className="icon">
                        <img src='/support-icon.png'></img>
                    </div>
                    <span>SUPPORT</span>
                </div>
            </div>
            <div className="logout">
                <div className="icon">
                    <img src='/logout-icon.png'></img>
                </div>
                <span>LOGOUT</span>
            </div>
        </aside>
    );
};

export default Sidebar;
