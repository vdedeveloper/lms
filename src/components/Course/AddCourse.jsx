import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import '../User/AddAdmin/AddAdmin.css';

const AddCourse = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleAddClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className='main-section'>
            <div className='main-heading'>
                <div className='usercontent-heading'>
                    <h3>Courses</h3>
                    <p>Set up your courses and share your knowledge.</p>
                </div>
                <div className='user-add-btn'>
                    <button onClick={handleAddClick}>Add +</button>
                </div>
            </div>

            {/* {showPopup && (
                <div className='popup-overlay'>
                    <div className='popup'>
                        <div className='popup-header'>
                            <div className='popup-left'>
                                <FontAwesomeIcon icon={faUserPlus} style={{ color: '#670AC4' }} />
                                <div className='popup-left-heading'>
                                    <h2>Add Learner</h2>
                                    <p>Enter details to create learner account manually</p>
                                </div>
                            </div>
                            <button className='close-button' onClick={handleClosePopup}>&times;</button>
                        </div>
                        <form>
                            <div className='form-group'>
                                <label>Name *</label>
                                <input type='text' placeholder='Enter learner name' required />
                            </div>
                            <div className='form-group'>
                                <label>Email *</label>
                                <input type='email' placeholder='Enter learner email' required />
                            </div>
                            <div className='form-group'>
                                <label>Mobile *</label>
                                <input type='tel' placeholder='+91' required />
                            </div>
                            <div className='form-actions'>
                                <button type='button' onClick={handleClosePopup}>Cancel</button>
                                <button type='submit'>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            )} */}
        </div>
    );
};

export default AddCourse;
