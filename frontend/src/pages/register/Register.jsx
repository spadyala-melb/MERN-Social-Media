import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="register">
        <div className="register-container">
          <div className="register-container-left">
            <div className="register-title">
              <h2>Padyala's Social App</h2>
              <p>
                Connect with friends and world around you on Padyala's Social.
              </p>
            </div>
          </div>
          <div className="register-container-right">
            <div className="register-form">
              <form className="form">
                <h3>Register</h3>
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <input type="text" placeholder="Password" />
                <button className="btn-register">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
