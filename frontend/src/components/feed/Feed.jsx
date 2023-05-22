import React from "react";
import "./feed.css";
import { FaPhotoVideo } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";
import { MdLocationPin } from "react-icons/md";
import { BsEmojiSmile, BsThreeDotsVertical } from "react-icons/bs";

const Feed = () => {
  return (
    <>
      <div className="feed">
        <div className="feed-container">
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
                <FaPhotoVideo className="photo-video" />{" "}
                <span>Photo or Video</span>
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
          <div className="post-container">
            <div className="post-details">
              <div className="post-details-left">
                <div className="post-user-pic">
                  <img src="./assets/person/1.jpeg" alt="" />
                </div>
                <div className="post-username">Siva Padyala</div>
                <div className="post-timestamp">5 mins ago</div>
              </div>
              <div className="post-details-right">
                <div>
                  <BsThreeDotsVertical className="three-dots-icon" />
                </div>
              </div>
            </div>
            <div className="post-content">
              <span className="post-text">This is my first post</span>
              <div className="post-photo">
                <img src="./assets/post/1.jpeg" alt="" />
              </div>
            </div>
            <div className="comments-section">
              <div className="comments-section-left">
                <div className="like-icon">
                  <img src="./assets/like.png" alt="" />
                </div>
                <div className="heart-icon">
                  <img src="./assets/heart.png" alt="" />
                </div>
                <div className="no-of-people-liked">50 people like it</div>
              </div>
              <div className="comments-section-right">
                <div className="no-of-comments">
                  <span>9 comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
