import React, { useState, useEffect } from "react";
import Topbar from "../../components/topbar/Topbar";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import Feed from "../../components/feed/Feed";
import "./home.css";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        "http://localhost:4000/api/users/64694ff8c33826d7e12dd47d"
      );
      setUser(response.data);
    };
    fetchUser();

    const fetchPosts = async () => {
      const response = await axios.get(
        "http://localhost:4000/api/posts/timeline/64694ff8c33826d7e12dd47d"
      );
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  // console.log("user: ", user);
  console.log("posts: ", posts);

  return (
    <>
      <Topbar user={user} />
      <div className="home-container">
        <LeftSidebar />
        <Feed posts={posts} />
        <RightSidebar />
      </div>
    </>
  );
};

export default Home;
