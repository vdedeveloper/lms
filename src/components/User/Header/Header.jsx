import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';
import './header.css';

const Header = () => {
    return (
        <header>
            <div className='main-header'>
                <div className='logo left-side-header'>
                    <img className='logo1' src='/favicon.png' alt='favicon' />
                    <img className='logo2' src='/vdei-logo.png' alt='vdei-logo' />
                </div>
                <div className='right-side-header'>
                    <div className='mid-header-section'>
                        <h2>Learner</h2>
                        <h2 className='main-box'>Admin</h2>
                        <h2>Trainer</h2>
                    </div>
                    <div className='right-panel'>
                        <div className='right-menu'>
                            <div className='search'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: '30px' }} />
                                <h3>Search</h3>
                            </div>
                            <div className='communication'>
                                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '30px' }} />
                                <h3>My Communication</h3>
                            </div>
                            <div className='announcement'>
                                <FontAwesomeIcon icon={faBell} style={{ fontSize: '30px' }} />
                                <h3>Announcement</h3>
                            </div>
                        </div>
                        <div className='profile'>
                            <div className='profile-img'>
                                <img src='/profile-img.jpg' alt='profile-img' />
                            </div>
                            <div className='profile-content'>
                                <h1 className='username'>Jagriti Mishra</h1>
                                <h2 className='portal'>Admin portal</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
