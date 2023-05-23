import React from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";

const Feed = ({ posts }) => {
  return (
    <>
      <div className="feed">
        <div className="feed-container">
          <Share />
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Feed;
