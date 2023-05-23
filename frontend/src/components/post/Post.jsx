import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import "./post.css";
import axios from "axios";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        `http://localhost:4000/api/users/${post.userId}`
      );
      setUser(response.data);
    };
    fetchUser();
  }, []);

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
            <img src={post.img} alt="" />
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
            <div className="no-of-people-liked">{like} people like it</div>
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
