import React from 'react';
import "../styles.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const Header = ({onLogin, onSignup, onHome }) => {
    return (
      <header>
        <div className="header-content">
          <div className="project-name">Project Name</div>
          <div className="welcome-message">Welcome, User</div>
          <div className="logout-container">
            <div className="notification-icon">
              <i className="fas fa-bell"></i>
              <span className="notification-count">3</span>
            </div>
            <Link to="/" className="home-button" onClick={onHome}>
              Home
            </Link>
            <Link to="/login" className="login-button" onClick={onLogin}>
              Login
            </Link>
            <Link to="/signup" className="signup-button" onClick={onSignup}>
              Signup
            </Link>
            <Link onClick={() => toast.info('Logging Out !')} className="logout-button">
              Logout
            </Link>
          </div>
        </div>
        <ToastContainer /> 
      </header>
    );
};

export default Header;
