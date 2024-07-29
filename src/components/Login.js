import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import '../Login.css';


const Login = () => {
    const [action, setAction] = useState('');
    const navigate = useNavigate();

    const registerLink = () => {
        setAction('active');
    };
    const homeLink = () => {
        setAction('active');
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login logic here (e.g., API call)
        // If login is successful, navigate to the home page
        navigate('/');
    };

    return (
        <div className={`wrapper ${action}`}>
            <div className="form-box login">
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a style={{color:"black"}} href="#">Forgot password?</a> 
                    </div>

                    <button type="submit">Login</button>
                    

                    <div className="register-link">
                        <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
