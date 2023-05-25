import React, { useEffect } from "react";
import axios from "axios";
import "./home.css";
import Topbar from "../../components/topbar/Topbar";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import Feed from "../../components/feed/Feed";
import { API_BASE_URL } from "../../utils/constants";
import { useUserContext } from "../../hooks/useUserContext";
import { usePostsContext } from "../../hooks/usePostsContext";

const Home = () => {
  const { user } = useUserContext();
  const { posts, dispatch } = usePostsContext();

  console.log("posts: ", posts);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        `${API_BASE_URL}/posts/timeline/${user._id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      dispatch({ type: "SET_POSTS", payload: response.data });
    };
    fetchPosts();
  }, [user, dispatch]);

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
