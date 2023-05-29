import React, { useState, useEffect } from "react";
import "./profileRightSidebar.css";
import axios from "axios";
import Online from "../online/Online";
import { API_BASE_URL } from "../../utils/constants";
import { useUserContext } from "../../hooks/useUserContext";
import { usePostsContext } from "../../hooks/usePostsContext";
import { useFriendsContext } from "../../hooks/useFriendsContext";
import Share from "../share/Share";
import Post from "../post/Post";
import Friend from "../friend/Friend";
import { FaUserAlt } from "react-icons/fa";

const ProfileRightSidebar = ({ profile }) => {
  const [users, setUsers] = useState([]);
  const { user } = useUserContext();
  const { posts } = usePostsContext();

  const friends = profile.followings;
  // const { friends } = useFriendsContext();
  // const [friends, setFriends] = useState([]);

  // console.log("user: ", user);
  // get profile user followings/friends
  // useEffect(() => {
  //   const fetchPostUserDetails = async () => {
  //     const response = await axios.get(`${API_BASE_URL}/users/${profile._id}`, {
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     });
  //     setFriends(response.data.followings);
  //   };
  //   fetchPostUserDetails();
  // }, [profile, user]);

  return (
    <>
      <div className="profile-right-sidebar">
        <div className="profile-right-sidebar-container">
          <div className="profile-right-sidebar-top">
            <div className="profile-right-sidebar-wrapper">
              <div className="profile-picture">
                <div className="profile-cover-pic">
                  <img src={profile?.coverPicture} alt="" />
                </div>
                <div className="profile-dp">
                  <img src={profile.profilePicture} alt="" />
                </div>
                <div className="profile-name">
                  <div className="profile-username">{profile.username}</div>
                  <div className="profile-tag-line">Hey friends !!</div>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-right-sidebar-bottom profile-right-sidebar-wrapper">
            <div className="profile-right-sidebar-bottom-left">
              <div className="share-comp">
                <Share className="profile-share-component" />
              </div>
              <div className="user-posts">
                {posts.map((post) => (
                  <div className="user-post" key={post._id}>
                    <Post key={post._id} post={post} />
                  </div>
                ))}
              </div>
            </div>
            <div className="profile-right-sidebar-bottom-right">
              <div className="user-information">
                <h3>User Information</h3>
                <div>
                  <label>City: </label> <span>Melbourne</span>
                </div>
                <div>
                  <label>From: </label> <span>India</span>
                </div>
                <div>
                  <label>Relationship: </label> <span>Married</span>
                </div>
              </div>
              <div className="user-friends-text">User Friends</div>
              <div className="user-friends">
                {friends.map((friend) => (
                  <div className="user-friend">
                    <span className="friend-name">
                      {friend.profilePicture ? (
                        <img src={friend.profilePicture} alt="" />
                      ) : (
                        <FaUserAlt className="profile-empty-avatar" />
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileRightSidebar;
