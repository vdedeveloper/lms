import React from 'react';
import { useNavigate } from 'react-router-dom';

const TrainerLogin = () => {
  const navigate = useNavigate();

  const handleBackToAppClick = () => {
    navigate('/');
  };

  const handleAdminLoginClick = () => {
    navigate('/admin-login');
  };

  return (
    <div className='login-form'>
      <div className='left-side'>
        <div className='logo'>
          <img src='./vdei-logo.png' alt='logo'></img>
        </div>
        <div className='contact-form'>
          <form>
            <div className='login-id'>
              <label>
                Login ID<br></br>
                <input type="text" name="login-id" placeholder="Enter Your Id...." />
              </label>
            </div>
            <div className='login-password'>
              <label>
                Login Password<br></br>
                <input type="text" name="login-password" placeholder="Enter Your Password...." />
              </label>
            </div>
            <div className='forget-password'>
              <span>Forget Password?</span>
            </div>
            <div className='submit-btn'>
              <input type="submit" value="Submit" />
              <img src='./arrow.png' alt='arrow'></img>
            </div>
            <div className='help'>
              <span>Need Any help?? Contact Us...</span>
            </div>
            <div className='social-logo'>
              <img src='./mail.png' alt='mail'></img>
              <img src='./whatsapp.png' alt='whatsapp'></img>
              <img src='./call.png' alt='call'></img>
            </div>
          </form>
          <div className='optional-btn'>
            <button className="admin-login-btn" onClick={handleBackToAppClick}>Student Login</button>
            <button className="trainer-login-btn" onClick={handleAdminLoginClick}>Admin Login</button>
          </div>
        </div>
      </div>
      <div className='right-side'>
        <div className='banner-img'>
          <img src='./trainer-login-banner-img.png' alt='banner-img'></img>
        </div>
      </div>
    </div>
  );
};

export default TrainerLogin;
