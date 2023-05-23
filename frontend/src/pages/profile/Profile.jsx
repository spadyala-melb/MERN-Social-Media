import React from "react";
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import Feed from "../../components/feed/Feed";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile-container">
        <LeftSidebar className="left-sidebar" />
        {/* <Feed /> */}
        <RightSidebar className="right-sidebar" />
      </div>
    </>
  );
};

export default Profile;
