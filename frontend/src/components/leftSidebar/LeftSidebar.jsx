import React, { useEffect, useState } from "react";
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
import Friend from "../friend/Friend";
import axios from "axios";
import { API_BASE_URL } from "../../utils/constants";
import useUserContext from "../../hooks/useUserContext";

const LeftSidebar = () => {
  const [users, setUsers] = useState([]);
  const { user } = useUserContext();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`${API_BASE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

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
          {users.map((user) => (
            <Friend key={user._id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
