import React, { useRef } from "react";
import "./register.css";
import { useRegister } from "../../hooks/useRegister";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const { register, isLoading, error } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match");
    } else {
      await register(
        username.current.value,
        email.current.value,
        password.current.value
      );
    }
  };

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
              <form className="form" onSubmit={handleSubmit}>
                <h3>Register</h3>
                <input type="text" ref={username} placeholder="Username" />
                <input type="email" ref={email} placeholder="Email" />
                <input
                  type="password"
                  minLength="6"
                  ref={password}
                  placeholder="Password"
                />
                <input
                  type="password"
                  minLength="6"
                  ref={passwordAgain}
                  placeholder="Password"
                />
                <button className="btn-register">
                  {isLoading ? "Loading..." : "Sign Up"}
                </button>
              </form>
            </div>
            {error && <div>{error}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
