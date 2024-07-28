import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
 
  return (
    
    <>

      <div className="wrapper">
        <h2>Registration</h2>
        <form action="databaseconnection" method="post">
          <div className="input-box">
            <input type="text" name="getun" placeholder="Enter your name" required/>
          </div>
          <div className="input-box">
            <input type="text" name="getem" placeholder="Enter your email" required/>
          </div>
          <div className="input-box">
            <input type="text" name="getcon" placeholder="Enter your contact" required/>
          </div>
          <div className="input-box">
            <input type="password" name="getpas" placeholder="Create password" required/>
          </div>
          <div className="policy">
            <input type="checkbox"/>
            <h3>I accept all terms & conditions</h3>
          </div>
          <div className="input-box button">
            <input type="Submit" value="Register Now"/>
          </div>
          <div className="text">
          <h3>Already have an account? <Link to="/login">Login now</Link></h3>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup