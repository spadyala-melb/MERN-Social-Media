import React, { useState, useEffect } from "react";
import "./rightSidebar.css";
import axios from "axios";
import Online from "../online/Online";

const RightSidebar = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("http://localhost:4000/api/users");
      const onlineUsers = response.data.filter(
        (user) => user.isOnline === true
      );
      setUsers(onlineUsers);
    };
    fetchUsers();
  }, []);

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
            <img src="./assets/ad1.png" alt="" />
          </div>
          <div className="online-friends-text">
            <p>
              <strong>Online friends</strong>
            </p>
          </div>
          {users.map((user) => (
            <Online user={user} key={user._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
