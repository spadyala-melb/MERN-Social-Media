import React, { useEffect, useState } from "react";
import "./leftSidebar.css";
import {
  MdRssFeed,
  MdGroups,
  MdVideoLibrary,
  MdExpandMore,
} from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { FaUserAlt, FaUserFriends } from "react-icons/fa";
import axios from "axios";
import { API_BASE_URL } from "../../utils/constants";
import { useUserContext } from "../../hooks/useUserContext";
import { useFriendsContext } from "../../hooks/useFriendsContext";
import { usePostsContext } from "../../hooks/usePostsContext";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  // const [friends, setFriends] = useState([]);
  const { user } = useUserContext();
  const { dispatch } = useFriendsContext();
  const { posts, dispatch: postsDispatch } = usePostsContext();

  useEffect(() => {
    const fetchFriends = async () => {
      const response = await axios.get(`${API_BASE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      // setFriends(response.data);
      // delete response.data.user;
      dispatch({ type: "SET_FRIENDS", payload: response.data });
      localStorage.setItem("friends", JSON.stringify(response.data));
    };
    fetchFriends();
  }, [user, dispatch]);

  const handleFeeds = async () => {
    const response = await axios.get(
      `${API_BASE_URL}/posts/timeline/${user._id}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    postsDispatch({ type: "SET_POSTS", payload: response.data });
  };

  return (
    <>
      <div className="left-sidebar">
        <div className="navbar-space"></div>
        <div className="left-sidebar-container">
          <div className="rss-feed">
            <Link
              to={`/profile/${user._id}`}
              className="left-sidebar-profile-link"
            >
              {user.profilePicture ? (
                <img
                  className="left-sidebar-profile-pic"
                  src={user.profilePicture}
                  alt=""
                />
              ) : (
                <FaUserAlt className="rss-feed-icon" />
              )}
              <span>{user.username}</span>
            </Link>
          </div>
          <div className="rss-feed">
            <FaUserFriends className="rss-feed-icon" />
            <span>Friends</span>
          </div>
          <div className="rss-feed" onClick={handleFeeds}>
            <MdRssFeed className="rss-feed-icon" />
            <span>Feeds (Most Recent)</span>
          </div>
          <div className="left-sidebar-messenger">
            <Link className="left-sidebar-messenger-link" to="/messenger">
              <BsMessenger className="messenger-icon" />
              <span>Messenger</span>
            </Link>
          </div>
          <div className="groups">
            <MdGroups className="groups-icon" />
            <span>Groups</span>
          </div>
          <div className="videos">
            <MdVideoLibrary className="videos-icon" />
            <span>Videos</span>
          </div>
          <div className="showmore-btn">
            <MdExpandMore className="show-more-btn" /> <span>See More</span>
          </div>
          <div className="leftsidebar-hr">
            <hr />
          </div>
          <div className="shortcuts">Your Shortcuts</div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
