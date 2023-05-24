import React, { useRef, useState } from "react";
import { FaPhotoVideo } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";
import { MdLocationPin } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import "./share.css";
import { API_BASE_URL } from "../../utils/constants";
import axios from "axios";
import useUserContext from "../../hooks/useUserContext";

const Share = () => {
  const [file, setFile] = useState(null);
  const { user } = useUserContext();
  const desc = useRef();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
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
      await axios.post(`${API_BASE_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          // "Content-Type": "multipart/form-data",
        },
      });
      window.location.reload();
    } catch (err) {}
  };

  return (
    <>
      <div className="share-container">
        <div className="share-top">
          <div className="user-pic">
            <img src="./assets/person/1.jpeg" alt="" />
          </div>
          <div className="user-post-msg">
            <input type="text" ref={desc} placeholder="What's in your mind?" />
          </div>
        </div>
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
          <div className="tag-icon">
            <ImPriceTag className="tag" /> <span>Tag</span>
          </div>
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
