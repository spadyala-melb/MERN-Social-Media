import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import "./post.css";
import axios from "axios";
import { API_BASE_URL } from "../../utils/constants";
import useUserContext from "../../hooks/useUserContext";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const { user } = useUserContext();

  const handleLike = async () => {
    await axios.post(
      `${API_BASE_URL}/posts/like/${post._id}`,
      {
        userId: user._id, //send the logged in userId here
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const PF = "http://localhost:4000/images/";

  return (
    <>
      <div className="post-container" key={post.id}>
        <div className="post-details">
          <div className="post-details-left">
            <div className="post-user-pic">
              {user.profilePicture ? (
                <img src={user.profilePicture} alt="" />
              ) : (
                <FaUserAlt className="empty-avatar" />
              )}
            </div>
            <div className="post-username">{user.username}</div>
            <div className="post-timestamp">{post.date}</div>
          </div>
          <div className="post-details-right">
            <div>
              <BsThreeDotsVertical className="three-dots-icon" />
            </div>
          </div>
        </div>
        <div className="post-content">
          <span className="post-text">{post.desc}</span>
          <div className="post-photo">
            <img src={PF + post.img} alt={post.img} />
          </div>
        </div>
        <div className="comments-section">
          <div className="comments-section-left">
            <div className="like-icon">
              <img src="./assets/like.png" alt="" onClick={handleLike} />
            </div>
            <div className="heart-icon">
              <img src="./assets/heart.png" alt="" onClick={handleLike} />
            </div>
            <div className="no-of-people-liked">
              {post.likes.length} people like it
            </div>
          </div>
          <div className="comments-section-right">
            <div className="no-of-comments">
              <span>{post.comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
