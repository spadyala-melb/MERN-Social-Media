import React from "react";
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import ProfileRightSidebar from "../../components/profileRightSidebar/ProfileRightSidebar";
import Feed from "../../components/feed/Feed";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile-container">
        {/* <LeftSidebar className="profile-left-sidebar" /> */}
        <ProfileRightSidebar />
      </div>
    </>
  );
};

export default Profile;
