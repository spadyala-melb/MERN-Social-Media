import React, { useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { RiCloseCircleLine } from "react-icons/ri";
import {
  BsPersonFill,
  BsChatLeftTextFill,
  BsBellFill,
  BsSearch,
} from "react-icons/bs";
import "./topbar.css";
import { FaUserAlt } from "react-icons/fa";
import { useUserContext } from "../../hooks/useUserContext";
import { usePostsContext } from "../../hooks/usePostsContext";
import { useLogout } from "../../hooks/useLogout";
import { API_BASE_URL } from "../../utils/constants";

const Topbar = () => {
  const { user } = useUserContext();
  const { posts, dispatch } = usePostsContext();
  const { logout } = useLogout();
  const search = useRef();

  console.log("user in topbar: ", user);

  const handleLogout = () => {
    logout();
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const newPosts = posts.filter((post) =>
      post.desc.includes(search.current.value)
    );
    dispatch({ type: "SEARCHED_POSTS", payload: newPosts });
  };

  const handleClearSearch = async () => {
    search.current.value = null;

    const response = await axios.get(
      `${API_BASE_URL}/posts/timeline/${user._id}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    // dispatch({ type: "SET_POSTS", payload: response.data });
    dispatch({ type: "CLEAR_SEARCHED_POSTS" });
    localStorage.setItem("posts", JSON.stringify(response.data));
  };

  return (
    <div className="topbar-container ">
      <div className="topbar-left">
        <div className="topbar-logo">
          <Link to="/" className="logo-text-link">
            <p className="logo-text">Padyala's Social Media</p>
          </Link>
        </div>
      </div>
      <div className="topbar-center">
        <div className="search-bar">
          <form className="search-form" onSubmit={handleSearch}>
            <span>
              <BsSearch className="search-bar-icon" />
            </span>
            <input
              type="text"
              ref={search}
              placeholder="Search for person, photo or videos"
              className="searchbar-input"
            />
          </form>
          <div className="search-close-btn">
            <RiCloseCircleLine
              className="search-close-btn-icon"
              onClick={handleClearSearch}
            />
          </div>
        </div>
      </div>
      <div className="topbar-right">
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
          <Link to="/profile">
            {user.profilePicture ? (
              <img src={user.profilePicture} alt="" />
            ) : (
              <FaUserAlt />
            )}
          </Link>
        </div>
        <div className="logout-link">
          <Link to="/login" onClick={handleLogout}>
            Logout
          </Link>
          <Link to="/messenger">Messenger</Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
