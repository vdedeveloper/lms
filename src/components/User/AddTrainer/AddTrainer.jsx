import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './AddTrainer.css';

const AddTrainer = () => {
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
                    <h3>Trainer</h3>
                    <p>Manage your Trainers community</p>
                </div>
                <div className='user-add-btn'>
                    <button onClick={handleAddClick}>Add +</button>
                </div>
            </div>
            <div className='user-content'>
                <div className='top-heading'>
                    <div className='name-content'>
                        <h3>Name</h3>
                    </div>
                    <div className='email-content'>
                        <h3>Email ID</h3>
                    </div>
                    <div className='last-login-content'>
                        <h3>Last Login</h3>
                    </div>
                    <div className='joined-content'>
                        <h3>Joined On</h3>
                    </div>
                </div>
                {/* Example content */}
                <div className='inside-content active'>
                    <div className='name'>xyz</div>
                    <div className='email'>xyz@gmail.com</div>
                    <div className='name'>26/11/2024</div>
                    <div className='name'>20/10/2024</div>
                </div>
                <div className='inside-content'>
                    <div className='name'>xyz</div>
                    <div className='email'>xyz@gmail.com</div>
                    <div className='name'>26/11/2024</div>
                    <div className='name'>20/10/2024</div>
                </div>
                <div className='inside-content'>
                    <div className='name'>xyz</div>
                    <div className='email'>xyz@gmail.com</div>
                    <div className='name'>26/11/2024</div>
                    <div className='name'>20/10/2024</div>
                </div>
                <div className='inside-content'>
                    <div className='name'>xyz</div>
                    <div className='email'>xyz@gmail.com</div>
                    <div className='name'>26/11/2024</div>
                    <div className='name'>20/10/2024</div>
                </div>
                <div className='inside-content'>
                    <div className='name'>xyz</div>
                    <div className='email'>xyz@gmail.com</div>
                    <div className='name'>26/11/2024</div>
                    <div className='name'>20/10/2024</div>
                </div>
            </div>

            {showPopup && (
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
            )}
        </div>
    );
};

export default AddTrainer;
