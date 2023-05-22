import React from "react";
import Topbar from "../../components/topbar/Topbar";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import Feed from "../../components/feed/Feed";
import "./home.css";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="home-container">
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </div>
    </>
  );
};

export default Home;
