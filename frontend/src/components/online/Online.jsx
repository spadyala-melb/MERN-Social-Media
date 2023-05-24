import React from "react";
import "./online.css";
import { FaUserAlt } from "react-icons/fa";

const Online = ({ user }) => {
  return (
    <div className="online-friends" key={user.id}>
      <div className="friend-pic">
        {user.profilePicture ? (
          <img src={user.profilePicture} alt="" />
        ) : (
          <FaUserAlt className="empty-avatar" />
        )}
        <div className="friend-green-mark"></div>
      </div>
      <span>
        <strong>{user.username}</strong>
      </span>
    </div>
  );
};

export default Online;
