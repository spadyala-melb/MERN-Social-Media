import React from "react";
import "./friend.css";
import { FaUserAlt } from "react-icons/fa";

const Friend = ({ friend }) => {
  return (
    <div className="friends-list-item">
      <span className="friend-name">
        {friend.profilePicture ? (
          <img src={friend.profilePicture} alt="" />
        ) : (
          <FaUserAlt className="friend-empty-avatar" />
        )}
      </span>
      <span>
        <p className="friend-name">{friend.username}</p>
      </span>
    </div>
  );
};

export default Friend;
