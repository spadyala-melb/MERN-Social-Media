import React from "react";
import { Link } from "react-router-dom";
import {
  BsPersonFill,
  BsChatLeftTextFill,
  BsBellFill,
  BsSearch,
} from "react-icons/bs";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-container ">
        <div className="topbar-left">
          <div className="topbar-logo">
            <p className="logo-text">Padyala's Social Media</p>
          </div>
        </div>
        <div className="topbar-center">
          <div className="search-bar">
            <span className="search-bar-icon">
              <BsSearch />
            </span>
            <input
              type="text"
              placeholder="Search for person, photo or videos"
            />
          </div>
        </div>
        <div className="topbar-right">
          <div className="topbar-links">
            <div className="topbar-link">
              <Link to="/">Homepage</Link>
            </div>
            <div className="topbar-link">
              <Link to="/">Timeline</Link>
            </div>
          </div>
          <div className="topbar-icons">
            <div className="person">
              <BsPersonFill className="person-icon" />
              <span className="person-icon-notification-number">1</span>
            </div>
            <div className="chat">
              <BsChatLeftTextFill className="chat-icon" />
              <span className="chat-icon-notification-number">1</span>
            </div>
            <div className="bell">
              <BsBellFill className="bell-icon" />
              <span className="bell-icon-notification-number">1</span>
            </div>
          </div>
          <div className="profile-pic">
            <Link to="#">
              <img src="./assets/person/1.jpeg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
