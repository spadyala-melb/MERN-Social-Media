import React from "react";
import "./rightSidebar.css";

const RightSidebar = () => {
  return (
    <>
      <div className="right-sidebar">
        <div className="right-sidebar-container right-sidebar-wrapper ">
          <div className="gift">
            <img src="./assets/gift.png" alt="" />
            <p>
              <strong>Siva Padyala </strong>and{" "}
              <strong>3 other frineds </strong> have birthday's today.
            </p>
          </div>
          <div className="ad">
            <img src="./assets/ad.png" alt="" />
          </div>
          <div className="online-friends-text">
            <p>
              <strong>Online friends</strong>
            </p>
          </div>
          <div className="online-friends">
            <div className="friend-pic">
              <img src="./assets/person/1.jpeg" alt="" />
              <div className="friend-green-mark"></div>
            </div>
            <span>
              <strong>Siva Padyala</strong>
            </span>
          </div>
          <div className="online-friends">
            <div className="friend-pic">
              <img src="./assets/person/1.jpeg" alt="" />
              <div className="friend-green-mark"></div>
            </div>
            <span>
              <strong>Siva Padyala</strong>
            </span>
          </div>
          <div className="online-friends">
            <div className="friend-pic">
              <img src="./assets/person/1.jpeg" alt="" />
              <div className="friend-green-mark"></div>
            </div>
            <span>
              <strong>Siva Padyala</strong>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
