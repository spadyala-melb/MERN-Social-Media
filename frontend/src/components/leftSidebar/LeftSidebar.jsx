import React from "react";
import "./leftSidebar.css";
import { MdRssFeed, MdGroups, MdOutlineWorkOutline } from "react-icons/md";
import {
  BsChatLeftTextFill,
  BsFillBookmarksFill,
  BsQuestionCircle,
  BsCalendar2Event,
} from "react-icons/bs";
import { RiVideoFill } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";

const LeftSidebar = () => {
  return (
    <>
      <div className="left-sidebar-container left-sidebar-wrapper">
        <div className="rss-feed">
          <MdRssFeed className="rss-feed-icon" />
          <span>Feed</span>
        </div>
        <div className="chats">
          <BsChatLeftTextFill className="chats-icon" />
          <span>Chats</span>
        </div>
        <div className="videos">
          <RiVideoFill className="videos-icon" />
          <span>Videos</span>
        </div>
        <div className="groups">
          <MdGroups className="groups-icon" />
          <span>Groups</span>
        </div>
        <div className="bookmarks">
          <BsFillBookmarksFill className="bookmarks-icon" />
          <span>Bookmarks</span>
        </div>
        <div className="questions">
          <BsQuestionCircle className="questions-icon" />
          <span>Questions</span>
        </div>
        <div className="jobs">
          <MdOutlineWorkOutline className="jobs-icon" />
          <span>Jobs</span>
        </div>
        <div className="events">
          <BsCalendar2Event className="events-icon" />
          <span>Events</span>
        </div>
        <div className="courses">
          <FaGraduationCap className="courses-icon" />
          <span>Courses</span>
        </div>
        <div className="showmore-btn">
          <button className="btn-showmore">Show More</button>
        </div>
        <div className="leftsidebar-hr">
          <hr />
        </div>
        <div className="friendsList">
          <ul>
            <li className="friends-list-item">
              <span className="friend-name">
                <img src="./assets/person/1.jpeg" alt="" />
              </span>
              <span>
                <p className="frined-name">friend name</p>
              </span>
            </li>
            <li className="friends-list-item">
              <span className="friend-name">
                <img src="./assets/person/1.jpeg" alt="" />
              </span>
              <span>
                <p className="frined-name">friend name</p>
              </span>
            </li>
            <li className="friends-list-item">
              <span className="friend-name">
                <img src="./assets/person/1.jpeg" alt="" />
              </span>
              <span>
                <p className="frined-name">friend name</p>
              </span>
            </li>
            <li className="friends-list-item">
              <span className="friend-name">
                <img src="./assets/person/1.jpeg" alt="" />
              </span>
              <span>
                <p className="frined-name">friend name</p>
              </span>
            </li>
            <li className="friends-list-item">
              <span className="friend-name">
                <img src="./assets/person/1.jpeg" alt="" />
              </span>
              <span>
                <p className="frined-name">friend name</p>
              </span>
            </li>
            <li className="friends-list-item">
              <span className="friend-name">
                <img src="./assets/person/1.jpeg" alt="" />
              </span>
              <span>
                <p className="frined-name">friend name</p>
              </span>
            </li>
            <li className="friends-list-item">
              <span className="friend-name">
                <img src="./assets/person/1.jpeg" alt="" />
              </span>
              <span>
                <p className="frined-name">friend name</p>
              </span>
            </li>
            <li className="friends-list-item">
              <span className="friend-name">
                <img src="./assets/person/1.jpeg" alt="" />
              </span>
              <span>
                <p className="frined-name">friend name</p>
              </span>
            </li>
            <li className="friends-list-item">
              <span className="friend-name">
                <img src="./assets/person/1.jpeg" alt="" />
              </span>
              <span>
                <p className="frined-name">friend name</p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
