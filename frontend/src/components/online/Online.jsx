import React from "react";
import "./online.css";

const Online = ({ user }) => {
  return (
    <div className="online-friends" key={user.id}>
      <div className="friend-pic">
        <img src={user.profilePicture} alt="" />
        <div className="friend-green-mark"></div>
      </div>
      <span>
        <strong>{user.username}</strong>
      </span>
    </div>
  );
};

export default Online;
