import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import NotFound from "../pages/notfound/NotFound";
import Profile from "../pages/profile/Profile";
import useUserContext from "../hooks/useUserContext";

const Routers = () => {
  const { user } = useUserContext();
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={user ? <Home /> : <Navigate to="/login" />}
      />
      <Route
        exact
        path="/login"
        element={!user ? <Login /> : <Navigate to="/" />}
      />
      <Route
        exact
        path="/register"
        element={!user ? <Register /> : <Navigate to="/" />}
      />
      <Route exact path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
