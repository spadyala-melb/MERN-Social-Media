import React, { useState, useEffect } from "react";
import Topbar from "../../components/topbar/Topbar";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import Feed from "../../components/feed/Feed";
import "./home.css";
import axios from "axios";
import { API_BASE_URL } from "../../utils/constants";
import useUserContext from "../../hooks/useUserContext";

const Home = () => {
  const { user } = useUserContext();
  // const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  // console.log("_id: ", _id);
  // console.log("token: ", token);

  console.log("userFromContext: ", user);

  useEffect(() => {
    // get user from database
    // const fetchUser = async () => {
    //   const response = await axios.get(`${API_BASE_URL}/users/${_id}`, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    //   setUser(response.data);
    // };
    // fetchUser();

    const fetchPosts = async () => {
      const response = await axios.get(
        `${API_BASE_URL}/posts/timeline/${user._id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  // console.log("user: ", user);
  // console.log("posts: ", posts);

  return (
    <>
      <Topbar />
      <div className="home-container">
        <LeftSidebar />
        <Feed posts={posts} />
        <RightSidebar />
      </div>
    </>
  );
};

export default Home;
