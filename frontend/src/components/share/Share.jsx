import React, { useRef, useState } from "react";
import { FaPhotoVideo } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";
import { MdLocationPin } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import "./share.css";
import { API_BASE_URL } from "../../utils/constants";
import axios from "axios";
import { useUserContext } from "../../hooks/useUserContext";
import { FaUserAlt } from "react-icons/fa";
import { usePostsContext } from "../../hooks/usePostsContext";
import { Link } from "react-router-dom";

const Share = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const { user } = useUserContext();
  const desc = useRef();
  const { dispatch } = usePostsContext();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!desc.current.value) {
      return setError("Provide the descripiton for the Post");
    }

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post(`${API_BASE_URL}/upload`, data, {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "multipart/form-data",
          },
        });
      } catch (err) {}
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      // window.location.reload();
      dispatch({ type: "ADD_POST", payload: response.data });
      desc.current.value = null;
      setFile(null);
    } catch (err) {}
  };

  return (
    <>
      <div className="share-container">
        <div className="share-top">
          <div className="user-pic">
            <Link to="/profile">
              {user.profilePicture ? (
                <img src={user.profilePicture} alt="" />
              ) : (
                <FaUserAlt />
              )}
            </Link>
          </div>
          <div className="user-post-msg">
            <input
              type="text"
              ref={desc}
              placeholder={`What's in your mind, ${user.username}?`}
            />
          </div>
        </div>

        {error && <div className="error-desc"> {error}</div>}

        <div className="share-center">
          <hr />
        </div>
        <div className="share-bottom">
          <div className="photo-icon">
            <FaPhotoVideo className="photo-video" />{" "}
            <span>
              <label htmlFor="upload">Photo or Video</label>
            </span>
            <input
              type="file"
              id="upload"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
          {/* <div className="tag-icon">
            <ImPriceTag className="tag" /> <span>Tag</span>
          </div> */}
          <div className="location-icon">
            <MdLocationPin className="location" /> <span>Location</span>
          </div>
          <div className="emotions-icon">
            <BsEmojiSmile className="emotions" /> <span>feelings</span>
          </div>
          <div className="share-button">
            <button className="btn-share" onClick={handleUpload}>
              Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
