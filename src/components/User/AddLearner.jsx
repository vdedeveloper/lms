import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './User.css';

const AddLearner = () => {
    // State management
    const [showPopup, setShowPopup] = useState(false);
    // State for selected role
    const [selectrole, setSelectRole] = useState('');

    // Update selected role
    const roleChange = (event) => {
        setSelectRole(event.target.value);
    };

    // Show popup
    const handleAddClick = () => {
        setShowPopup(true);
    };

    // Close popup
    const handleClosePopup = () => {
        setShowPopup(false);
    };

    // Learner Detail
    const learners = [
        { name: 'John Doe', email: 'john.doe@gmail.com', joined: '20/10/2024', fee: 'Pending', mode: 'Online' },
        { name: 'Jane Smith', email: 'jane.smith@gmail.com', joined: '21/10/2024', fee: 'Completed', mode: 'Offline' },
        { name: 'Alex Johnson', email: 'alex.johnson@gmail.com', joined: '22/10/2024', fee: 'Pending', mode: 'Online' },
        { name: 'Emily Davis', email: 'emily.davis@gmail.com', joined: '23/10/2024', fee: 'Completed', mode: 'Offline' },
        { name: 'Michael Brown', email: 'michael.brown@gmail.com', joined: '24/10/2024', fee: 'Pending', mode: 'Online' },
    ];

    return (
        // Main Section
        <div className='main-section'>
            {/* Main Heading */}
            <div className='main-heading'>
                <div className='usercontent-heading'>
                    <h3>Learners</h3>
                    <p>Manage your learning community</p>
                </div>
                <div className='user-add-btn'>
                    <button onClick={handleAddClick}>Add Learner +</button>
                </div>
            </div>

            {/* Table Section */}
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Joined On</th>
                            <th>Fee Detail</th>
                            <th>Mode</th>
                        </tr>
                    </thead>
                    <br />
                    <tbody>
                        {learners.map((learner, index) => (
                            <tr key={index} className={learner.fee === 'Pending' ? 'active-row' : ''}>
                                <td>{learner.name}</td>
                                <td>{learner.email}</td>
                                <td>{learner.joined}</td>
                                <td>{learner.fee}</td>
                                <td>{learner.mode}</td>
                            </tr>
                        ))}
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
                                    <h2>Add Learner</h2>
                                    <p>Enter details to create learner account manually</p>
                                </div>
                            </div>
                            <button className="close-button" onClick={handleClosePopup}>
                                &times;
                            </button>
                        </div>
                        <form>
                            <div className="form-group">
                                <label>Name *</label>
                                <input type="text" placeholder="Enter learner name" required />
                            </div>
                            <div className="form-group">
                                <label>Email *</label>
                                <input type="email" placeholder="Enter learner email" required />
                            </div>
                            <div className="form-group">
                                <label>Mobile *</label>
                                <input type="tel" placeholder="+91" required />
                            </div>
                            <div className="form-group">
                                <label>Fee Detail *</label>
                                <input type="text" placeholder="Enter learner fee detail" required />
                            </div>
                            <div className="form-group">
                                <label>Learning Mode *</label>
                                <div className="select-role">
                                    <label style={{ fontWeight: "500" }}>
                                        <input
                                            type="radio"
                                            name="role"
                                            value="Online"
                                            onChange={roleChange}
                                            required
                                        />
                                        Online
                                    </label>
                                    <label style={{ fontWeight: "500" }}>
                                        <input
                                            type="radio"
                                            name="role"
                                            value="Offline"
                                            onChange={roleChange}
                                            required
                                        />
                                        Offline
                                    </label>
                                </div>
                            </div>
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

export default AddLearner;
