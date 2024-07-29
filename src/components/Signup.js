import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Signup.css';

const Signup = () => {
    const navigate = useNavigate();
    const [action, setAction] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        // Perform signup logic here (e.g., API call)
        // If signup is successful, navigate to the login page
        navigate('/login');
    };
    const homeLink = () => {
      setAction('active');
  };

    return (
        <>
            <div className="signup-wrapper">
                <form onSubmit={handleSignup}>
                    <div className="signup-header">
                        <h2>Registration</h2>
                    </div>
                    <div className="signup-input-box">
                        <input type="text" name="getun" placeholder="Enter your name" required />
                    </div>
                    <div className="signup-input-box">
                        <input type="text" name="getem" placeholder="Enter your email" required />
                    </div>
                    <div className="signup-input-box">
                        <input type="password" name="getpas" placeholder="Create password" required />
                    </div>
                    <div className="signup-policy">
                        <input type="checkbox" required />
                        <h3>I accept all terms & conditions</h3>
                    </div>
                    <div className="signup-input-box button">
                        <input type="submit" value="Register Now" />
                    </div>
                    <div className="signup-text">
                        <h3>Already have an account? <Link to="/login">Login now</Link></h3>
                        <p>Want To Get Back? <Link to="/" onClick={homeLink}>Home</Link></p>
                    </div>
                    <div className="home-link">
                        <button type="button" onClick={() => navigate('/')}>Home</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Signup;
