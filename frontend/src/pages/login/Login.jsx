import React, { useRef } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const email = useRef();
  const password = useRef();

  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const user = localStorage.getItem("user");
    await login(email.current.value, password.current.value);
  };

  return (
    <>
      <div className="login">
        <div className="login-container">
          <div className="login-container-left">
            <div className="login-title">
              <h2>Padyala's Social App</h2>
              <p>
                Connect with friends and world around you on Padyala's Social
                App.
              </p>
            </div>
          </div>
          <div className="login-container-right">
            <div className="login-form">
              <form className="form" onSubmit={handleSubmit}>
                <h3>Login</h3>
                <input type="email" ref={email} placeholder="Email" />
                <input
                  type="password"
                  minLength="6"
                  ref={password}
                  placeholder="Password"
                />
                <button className="btn-login">
                  {isLoading ? "Logging in..." : "Log In"}
                </button>
              </form>
            </div>
            <div className="forgot-password">
              <Link to="#">Forgot Password?</Link>
            </div>
            <div className="create-new-account">
              <Link to="/register" className="btn">
                Create New Account
              </Link>
            </div>
            {error && <div>{error}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
