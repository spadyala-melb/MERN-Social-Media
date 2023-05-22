import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="login-container">
          <div className="login-container-left">
            <div className="login-title">
              <h2>Padyala's Social App</h2>
              <p>
                Connect with friends and world around you on Padyala's Social.
              </p>
            </div>
          </div>
          <div className="login-container-right">
            <div className="login-form">
              <form className="form">
                <h3>Login</h3>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <button className="btn-login">Log In</button>
              </form>
            </div>
            <div className="forgot-password">
              <Link to="#">Forgot Password?</Link>
            </div>
            <div className="create-new-account">
              <button className="btn">Create New Account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
