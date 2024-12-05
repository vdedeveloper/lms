import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../lib/actions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Login.css';

function TrainerLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, user } = useSelector((state) => state.data);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements["login-id"].value.trim();
    const password = e.target.elements["login-password"].value.trim();

    if (!email || !password) {
      toast.error("Both fields are required!");
      return;
    }
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (user) {
      toast.success("Trainer logged in successfully!");
      navigate("/trainer-dashboard"); // Redirect to trainer dashboard upon successful login
    }
    if (error) {
      toast.error(error);
    }
  }, [user, error, navigate]);

  const handleBackToAppClick = () => {
    navigate("/");
  };

  const handleAdminLoginClick = () => {
    navigate("/admin-login");
  };

  return (
    <div className="login-form">
      <ToastContainer />
      <div className="left-side">
        <div className="logo">
          <img src="./vdei-logo.png" alt="logo" />
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="login-id">
              <label>
                Login ID<br />
                <input type="text" name="login-id" placeholder="Enter Your ID..." required />
              </label>
            </div>
            <div className="login-password">
              <label>
                Login Password<br />
                <input type="password" name="login-password" placeholder="Enter Your Password..." required />
              </label>
            </div>
            <div className="forget-password">
              <span>Forgot Password?</span>
            </div>
            <div className="submit-btn">
              <input type="submit" value="Submit" />
              <img src="./arrow.png" alt="arrow" />
            </div>
            <div className="help">
              <span>Need Any Help? Contact Us...</span>
            </div>
            <div className="social-logo">
              <img src="./mail.png" alt="mail" />
              <img src="./whatsapp.png" alt="whatsapp" />
              <img src="./call.png" alt="call" />
            </div>
          </form>
          <div className="optional-btn">
            <button type="button" className="admin-login-btn" onClick={handleAdminLoginClick}>
              Admin Login
            </button>
            <button className="admin-login-btn" onClick={handleBackToAppClick}>
              Student Login
            </button>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="banner-img">
          <img src="./trainer-login-banner-img.png" alt="banner-img" />
        </div>
      </div>
    </div>
  );
}

export default TrainerLogin;
