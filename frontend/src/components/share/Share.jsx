import React from "react";
import { FaPhotoVideo } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";
import { MdLocationPin } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import "./share.css";

const Share = () => {
  return (
    <>
      <div className="share-container">
        <div className="share-top">
          <div className="user-pic">
            <img src="./assets/person/1.jpeg" alt="" />
          </div>
          <div className="user-post-msg">
            <input type="text" placeholder="What's in your mind?" />
          </div>
        </div>
        <div className="share-center">
          <hr />
        </div>
        <div className="share-bottom">
          <div className="photo-icon">
            <FaPhotoVideo className="photo-video" /> <span>Photo or Video</span>
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
            <button className="btn-share">Share</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
