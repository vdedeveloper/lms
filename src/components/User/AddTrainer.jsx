import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './User.css';

const AddTrainer = () => {
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

    // Trainer Detail
    const trainer = [
        { name: 'John Doe', email: 'john.doe@gmail.com', joined: '20/10/2024', role: 'Sr Trainer' },
        { name: 'Jane Smith', email: 'jane.smith@gmail.com', joined: '21/10/2024', role: 'Jr Trainer' },
        { name: 'Alex Johnson', email: 'alex.johnson@gmail.com', joined: '22/10/2024', role: 'Jr Trainer' },
        { name: 'Emily Davis', email: 'emily.davis@gmail.com', joined: '23/10/2024', role: 'Jr Trainer' },
        { name: 'Michael Brown', email: 'michael.brown@gmail.com', joined: '24/10/2024', role: 'Jr Trainer' },
    ];

    return (
        // Main Section
        <div className='main-section'>
            {/* Main Heading */}
            <div className='main-heading'>
                <div className='usercontent-heading'>
                    <h3>Trainer</h3>
                    <p>Manage your Trainer community</p>
                </div>
                <div className='user-add-btn'>
                    <button onClick={handleAddClick}>Add Trainer +</button>
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
                        {trainer.map((trainer, index) => (
                            <tr key={index} className={trainer.role === 'Sr Trainer' ? 'active-row' : ''}>
                                <td>{trainer.name}</td>
                                <td>{trainer.email}</td>
                                <td>{trainer.joined}</td>
                                <td>{trainer.role}</td>
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
                                    <h2>Add Trainer</h2>
                                    <p>Enter details to create trainer account manually</p>
                                </div>
                            </div>
                            <button className='close-button' onClick={handleClosePopup}>&times;</button>
                        </div>
                        <form>
                            <div className='form-group'>
                                <label>Name *</label>
                                <input type='text' placeholder='Enter trainer name' required />
                            </div>
                            <div className='form-group'>
                                <label>Email *</label>
                                <input type='email' placeholder='Enter trainer email' required />
                            </div>
                            <div className='form-group'>
                                <label>Mobile *</label>
                                <input type='tel' placeholder='+91' required />
                            </div>
                            <div className='form-group'>
                                <label>Trainer Role *</label>
                                <div className="select-role">
                                    <label style={{ fontWeight: "500" }}>
                                        <input
                                            type="radio"
                                            name="role"
                                            value="Super Trainer"
                                            onChange={roleChange}
                                            required
                                        />
                                        Sr. Trainer
                                    </label>
                                    <label style={{ fontWeight: "500" }}>
                                        <input
                                            type="radio"
                                            name="role"
                                            value="Sub Trainer"
                                            onChange={roleChange}
                                            required
                                        />
                                        Jr. Trainer
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

export default AddTrainer;
