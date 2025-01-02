import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './User.css';

const AddAdmin = () => {
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

    // Admin Detail
    const admin = [
        { name: 'John Doe', email: 'john.doe@gmail.com', joined: '20/10/2024', role: 'Super Admin' },
        { name: 'Jane Smith', email: 'jane.smith@gmail.com', joined: '21/10/2024', role: 'Sub Admin' },
        { name: 'Alex Johnson', email: 'alex.johnson@gmail.com', joined: '22/10/2024', role: 'Sub Admin' },
        { name: 'Emily Davis', email: 'emily.davis@gmail.com', joined: '23/10/2024', role: 'Sub Admin' },
        { name: 'Michael Brown', email: 'michael.brown@gmail.com', joined: '24/10/2024', role: 'Sub Admin' },
    ];

    return (
        // Main Section
        <div className='main-section'>
            {/* Main Heading */}
            <div className='main-heading'>
                <div className='usercontent-heading'>
                    <h3>Admin</h3>
                    <p>Manage your Admin community</p>
                </div>
                <div className='user-add-btn'>
                    <button onClick={handleAddClick}>Add Admin +</button>
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
                            <th>Role</th>
                        </tr>
                    </thead>
                    <br />
                    <tbody>
                        {admin.map((adminItem, index) => (
                            <tr key={index} className={adminItem.role === 'Super Admin' ? 'active-row' : ''}>
                                <td>{adminItem.name}</td>
                                <td>{adminItem.email}</td>
                                <td>{adminItem.joined}</td>
                                <td>{adminItem.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Popup */}
            {showPopup && (
                <div className='popup-overlay'>
                    <div className='popup'>
                        <div className='popup-header'>
                            <div className='popup-left'>
                                <FontAwesomeIcon icon={faUserPlus} style={{ color: '#670AC4' }} />
                                <div className='popup-left-heading'>
                                    <h2>Add Admin</h2>
                                    <p>Enter details to create admin account manually</p>
                                </div>
                            </div>
                            <button className='close-button' onClick={handleClosePopup}>&times;</button>
                        </div>
                        <form>
                            <div className='form-group'>
                                <label>Name *</label>
                                <input type='text' placeholder='Enter admin name' required />
                            </div>
                            <div className='form-group'>
                                <label>Email *</label>
                                <input type='email' placeholder='Enter admin email' required />
                            </div>
                            <div className='form-group'>
                                <label>Mobile *</label>
                                <input type='tel' placeholder='+91' required />
                            </div>
                            <div className='form-group'>
                                <label>Admin Role *</label>
                                <div className="select-role">
                                    <label style={{fontWeight: "500"}}>
                                        <input
                                            type="radio"
                                            name="role"
                                            value="Super Admin"
                                            onChange={roleChange}
                                            required
                                        />
                                        Super Admin
                                    </label>
                                    <label style={{fontWeight: "500"}}>
                                        <input
                                            type="radio"
                                            name="role"
                                            value="Sub Admin"
                                            onChange={roleChange}
                                            required
                                        />
                                        Sub Admin
                                    </label>
                                </div>
                            </div>
                            <div className='form-actions'>
                                <button type='button' onClick={handleClosePopup}>Cancel</button>
                                <button type='submit'>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddAdmin;
