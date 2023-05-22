import React from "react";
import "./rightSidebar.css";
import Online from "../online/Online";
import { Users } from "../../dummyData";

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
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
