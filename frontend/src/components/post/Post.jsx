import React, { useEffect, useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import "./post.css";
import axios from "axios";
import { API_BASE_URL } from "../../utils/constants";
import { useUserContext } from "../../hooks/useUserContext";
import { usePostsContext } from "../../hooks/usePostsContext";
import { Link } from "react-router-dom";
import TimeAgo from "timeago-react";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const { user } = useUserContext();
  const { dispatch } = usePostsContext();
  const [isVideo, setIsVideo] = useState(false);

  // console.log("posts in Post.jsx: ", posts);

  const handleDelete = async () => {
    await axios.delete(
      `${API_BASE_URL}/posts/${post._id}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
      {
        userId: user._id, //send the logged in userId here
      }
    );
    dispatch({ type: "DELETE_POST", payload: post._id });
  };

  const handleLike = async () => {
    await axios.put(
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
    dispatch({
      type: "UPDATE_POST",
      payload: { post: post, userId: user._id },
    });
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const PF = "http://localhost:4000/images/";

  useEffect(() => {
    if (post.img) {
      const postImgFile = post.img;
      const videoFileFromats = [
        "mp4",
        "mp3",
        "mkv",
        "mov",
        "avi",
        "wmv",
        "flv",
        "mpeg",
      ];
      const fileNameSplitStr = postImgFile.split(".");
      const fileExtension = fileNameSplitStr[1];
      const isVideo = videoFileFromats.includes(fileExtension);
      if (isVideo) {
        setIsVideo(true);
      }
    }
  }, []);

  return (
    <>
      <div className="post-container" key={post.id}>
        <div className="post-details">
          <div className="post-details-left">
            <div className="post-user-pic">
              <Link to="/profile">
                {user.profilePicture ? (
                  <img src={user.profilePicture} alt="" />
                ) : (
                  <FaUserAlt />
                )}
              </Link>
            </div>
            <div className="post-username">{user.username}</div>
            <div className="post-timestamp">
              <TimeAgo datetime={post.createdAt} />
            </div>
          </div>
          <div className="post-details-right">
            <div>
              <RiCloseCircleFill
                className="three-dots-icon"
                onClick={handleDelete}
              />
            </div>
          </div>
        </div>
        <div className="post-content">
          <span className="post-text">{post.desc}</span>
          {isVideo && (
            <div className="post-photo">
              {post.img && <video src={PF + post?.img} controls loop />}
            </div>
          )}
          <div className="post-photo">
            {post.img && <img src={PF + post?.img} alt="" />}
          </div>
          {post?.feelings && (
            <div className="post-feelings">{post.feelings}</div>
          )}
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
