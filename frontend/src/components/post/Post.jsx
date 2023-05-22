import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./post.css";
import { Users } from "../../dummyData";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className="post-container">
        <div className="post-details">
          <div className="post-details-left">
            <div className="post-user-pic">
              <img
                src={
                  Users.filter((user) => user.id === post.userId)[0]
                    .profilePicture
                }
                alt=""
              />
            </div>
            <div className="post-username">
              {Users.filter((user) => user.id === post.userId)[0].username}
            </div>
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
            <img src={post.photo} alt="" />
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
