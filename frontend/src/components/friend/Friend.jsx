import React from "react";
import "./friend.css";

const Friend = ({ user }) => {
  return (
    <li className="friends-list-item">
      <span className="friend-name">
        <img src={user.profilePicture} alt="" />
      </span>
      <span>
        <p className="frined-name">{user.username}</p>
      </span>
    </li>
  );
};

export default Friend;
