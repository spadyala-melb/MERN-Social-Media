import React, { useState, useEffect } from "react";
import "./rightSidebar.css";
import axios from "axios";
import Online from "../online/Online";
import { API_BASE_URL } from "../../utils/constants";
import { useUserContext } from "../../hooks/useUserContext";
import { useFriendsContext } from "../../hooks/useFriendsContext";

const RightSidebar = () => {
  // const [users, setUsers] = useState([]);
  const { user } = useUserContext();
  const { friends } = useFriendsContext();

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const response = await axios.get(`${API_BASE_URL}/users`, {
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     });
  //     setUsers(response.data);
  //   };
  //   fetchUsers();
  // }, []);

  return (
    <>
      <div className="right-sidebar">
        <div className="navbar-space"></div>
        <div className="right-sidebar-container right-sidebar-wrapper ">
          <div className="gift">
            <img src="./assets/gift.png" alt="" />
            <p>
              <strong>Siva Padyala </strong>and{" "}
              <strong>3 other frineds </strong> have birthday's today.
            </p>
          </div>
          <div className="ad">
            <img src="./assets/ad1.png" alt="" />
          </div>
          <div className="online-friends-text">
            <p>
              <strong>Online friends</strong>
            </p>
          </div>
          {friends.map((user) => (
            <Online user={user} key={user._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
