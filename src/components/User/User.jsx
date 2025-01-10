import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faFilter } from '@fortawesome/free-solid-svg-icons';
import './User.css';

const User = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectRole, setSelectRole] = useState('');
    const [selectMode, setSelectMode] = useState('');
    const [selectCategory, setSelectCategory] = useState('');
    const [selectCourse, setSelectCourse] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const roleChange = (event) => {
        setSelectRole(event.target.value);
    };

    const modeChange = (event) => {
        setSelectMode(event.target.value);
    };

    const categoryChange = (event) => {
        setSelectCategory(event.target.value);
    };

    const handleAddClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const users = [
        { name: 'John Doe', email: 'john.doe@gmail.com', mobilenumber: '7753245698', joined: '20/10/2024', category: "Student", course: "BIM Basic (ACS)", fee: 'Pending', mode: 'Online' },
        { name: 'Subbarao Attada', email: 'subbarao@gmail.com', mobilenumber: '7753245698', joined: '20/10/2024', category: "Admin", role: 'Super Admin' },
        { name: 'Jane Smith', email: 'jane.smith@gmail.com', mobilenumber: '7753245698', joined: '21/10/2024', category: "Student", course: "BIM Professional (MEP)", fee: 'Completed', mode: 'Offline' },
        { name: 'Alex Johnson', email: 'alex.johnson@gmail.com', mobilenumber: '7753245698', joined: '22/10/2024', category: "Student", course: "BIM Master (ACS)", fee: 'Pending', mode: 'Online' },
        { name: 'Mohan kanakala', email: 'mohan@gmail.com', mobilenumber: '7753245698', joined: '20/10/2024', category: "Trainer", role: 'Sr Trainer' },
        { name: 'Emily Davis', email: 'emily.davis@gmail.com', mobilenumber: '7753245698', joined: '23/10/2024', category: "Student", course: "Interior Design", fee: 'Completed', mode: 'Offline' },
        { name: 'Michael Brown', email: 'michael.brown@gmail.com', mobilenumber: '7753245698', joined: '24/10/2024', category: "Student", course: "Digital Marketing", fee: 'Pending', mode: 'Online' },
        { name: 'Mohammad Adnan', email: 'adnan@gmail.com', mobilenumber: '7753245698', joined: '20/10/2024', category: "Trainer", role: 'Jr Trainer' },
    ];

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

    const categories = [
        "Admin",
        "Student",
        "Trainer"
    ];

    // Filter users based on search term
    const filteredUsers = users.filter(user => {
        const search = searchTerm.toLowerCase();

        return (
            user.name.toLowerCase().includes(search) ||
            user.email.toLowerCase().includes(search) ||
            user.mobilenumber.includes(search) ||
            user.category.toLowerCase().includes(search) ||
            (user.course && user.course.toLowerCase().includes(search)) ||
            (user.role && user.role.toLowerCase().includes(search)) ||
            (user.joined && user.joined.includes(search)) ||
            (user.mode && user.mode.toLowerCase().includes(search)) ||
            (user.fee && user.fee.toLowerCase().includes(search))
        );
    });

    return (
        <div className='main-section'>
            <div className='main-heading'>
                <div className='usercontent-heading'>
                    <h3>Users</h3>
                    <p>Manage your users community</p>
                </div>
                <div className='user-add-btn'>
                    <button onClick={handleAddClick}>Add +</button>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="filter-bar">
                <FontAwesomeIcon className="filter-icon" icon={faFilter} />
                <input
                    type="text"
                    placeholder="Search users by name, email, etc..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Table Section */}
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Mobile No.</th>
                            <th>Joined On</th>
                            <th>Category</th>
                            <th>Role</th>
                            <th>Course</th>
                            <th>Mode</th>
                            <th>Fees</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.length === 0 ? (
                            <tr>
                                <td colSpan="9">No users found</td>
                            </tr>
                        ) : (
                            filteredUsers.map((user, index) => (
                                <tr key={index} className={`${user.fee === 'Pending' ? 'active-row' : ''} ${user.role === 'Super Admin' ? 'highlight-super-admin' : ''}`.trim()}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobilenumber}</td>
                                    <td>{user.joined}</td>
                                    <td>{user.category}</td>
                                    <td>{user.role || 'N/A'}</td>
                                    <td>{user.course || 'N/A'}</td>
                                    <td>{user.mode || 'N/A'}</td>
                                    <td>{user.fee || 'N/A'}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Popup */}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <div className="popup-header">
                            <div className="popup-left">
                                <FontAwesomeIcon icon={faUserPlus} style={{ color: "#670AC4" }} />
                                <div className="popup-left-heading">
                                    <h2>Add user</h2>
                                    <p>Enter details to create user account manually</p>
                                </div>
                            </div>
                            <button className="close-button" onClick={handleClosePopup}>
                                &times;
                            </button>
                        </div>
                        <form>
                            <div className="form-group">
                                <label>Name *</label>
                                <input type="text" placeholder="Enter user name" required />
                            </div>
                            <div className="form-group">
                                <label>Email *</label>
                                <input type="email" placeholder="Enter user email" required />
                            </div>
                            <div className="form-group">
                                <label>Mobile *</label>
                                <input type="tel" placeholder="+91" required />
                            </div>
                            <div className="form-group">
                                <div className="user-category" style={{ marginTop: "-10px" }}>
                                    <label>User Category :</label>
                                    <select value={selectCategory} onChange={categoryChange} required>
                                        <option value="">Select Users</option>
                                        {categories.map((category, index) => (
                                            <option key={index} value={category}>
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {selectCategory === "Admin" && (
                                <div className="form-group">
                                    <label>Admin Role *</label>
                                    <div className="select-role">
                                        <label style={{ fontWeight: "500" }}>
                                            <input
                                                type="radio"
                                                name="adminrole"
                                                value="Super Admin"
                                                onChange={roleChange}
                                                required
                                            />
                                            Super Admin
                                        </label>
                                        <label style={{ fontWeight: "500" }}>
                                            <input
                                                type="radio"
                                                name="adminrole"
                                                value="Sub Admin"
                                                onChange={roleChange}
                                                required
                                            />
                                            Sub Admin
                                        </label>
                                    </div>
                                </div>
                            )}

                            {selectCategory === "Trainer" && (
                                <div className="form-group">
                                    <label>Trainer Role *</label>
                                    <div className="select-role">
                                        <label style={{ fontWeight: "500" }}>
                                            <input
                                                type="radio"
                                                name="trainerrole"
                                                value="Sr Trainer"
                                                onChange={roleChange}
                                                required
                                            />
                                            Sr Trainer
                                        </label>
                                        <label style={{ fontWeight: "500" }}>
                                            <input
                                                type="radio"
                                                name="trainerrole"
                                                value="Jr Trainer"
                                                onChange={roleChange}
                                                required
                                            />
                                            Jr Trainer
                                        </label>
                                    </div>
                                </div>
                            )}

                            {selectCategory === "Student" && (
                                <>
                                    <div className="form-group">
                                        <div className="course-title" style={{ marginTop: "-10px" }}>
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
                                    </div>
                                    <div className="form-group">
                                        <label>Learning Mode *</label>
                                        <div className="select-role">
                                            <label style={{ fontWeight: "500" }}>
                                                <input
                                                    type="radio"
                                                    name="role"
                                                    value="Online"
                                                    onChange={modeChange}
                                                    required
                                                />
                                                Online
                                            </label>
                                            <label style={{ fontWeight: "500" }}>
                                                <input
                                                    type="radio"
                                                    name="role"
                                                    value="Offline"
                                                    onChange={modeChange}
                                                    required
                                                />
                                                Offline
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Fee Detail *</label>
                                        <input type="text" placeholder="Enter user fee detail" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Payment Mode *</label>
                                        <div className="select-role">
                                            <label style={{ fontWeight: "500" }}>
                                                <input
                                                    type="radio"
                                                    name="role"
                                                    value="Online"
                                                    onChange={modeChange}
                                                    required
                                                />
                                                Online
                                            </label>
                                            <label style={{ fontWeight: "500" }}>
                                                <input
                                                    type="radio"
                                                    name="role"
                                                    value="Cash"
                                                    onChange={modeChange}
                                                    required
                                                />
                                                Cash
                                            </label>
                                            <label style={{ fontWeight: "500" }}>
                                                <input
                                                    type="radio"
                                                    name="role"
                                                    value="Offline"
                                                    onChange={modeChange}
                                                    required
                                                />
                                                Bank Transfer
                                            </label>
                                        </div>
                                    </div>
                                </>
                            )}

                            <div className="form-actions">
                                <button type="button" onClick={handleClosePopup}>
                                    Cancel
                                </button>
                                <button type="submit">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default User;
