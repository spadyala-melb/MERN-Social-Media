import React from "react";
import "./friend.css";
import { FaUserAlt } from "react-icons/fa";

const Friend = ({ user }) => {
  return (
    <div className="friends-list-item">
      <span className="friend-name">
        {user.profilePicture ? (
          <img src={user.profilePicture} alt="" />
        ) : (
          <FaUserAlt className="empty-avatar" />
        )}
      </span>
      <span>
        <p className="frined-name">{user.username}</p>
      </span>
    </div>
  );
};

export default Friend;
