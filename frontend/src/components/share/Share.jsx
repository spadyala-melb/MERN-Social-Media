import React, { useEffect, useRef, useState } from "react";
import { FaPhotoVideo } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";
import { MdLocationPin, MdOutlineCancel } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import "./share.css";
import { API_BASE_URL } from "../../utils/constants";
import axios from "axios";
import { useUserContext } from "../../hooks/useUserContext";
import { FaUserAlt } from "react-icons/fa";
import { usePostsContext } from "../../hooks/usePostsContext";
import { Link } from "react-router-dom";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Location from "../location/Location";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const Share = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [isVideo, setIsVideo] = useState(false);
  const [isFeelingButtonClicked, setIsFeelingButtonClicked] = useState(false);
  const [hideEmojiWindow, setHideEmojiWindow] = useState(false);
  const { user } = useUserContext();
  const desc = useRef();
  const { dispatch } = usePostsContext();
  const [currentLocation, setCurrentLocation] = useState({});
  const [feelings, setFeelings] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setHideEmojiWindow(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleShare = async () => {
    if (
      !desc.current.value &&
      !file &&
      !feelings &&
      Object.keys(currentLocation).length === 0
    ) {
      return setError("Provide the descripiton for the Post");
    }

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
      location: currentLocation,
      feelings: feelings,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;

      try {
        await axios.post(`${API_BASE_URL}/upload`, data, {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "multipart/form-data",
          },
        });
      } catch (err) {
        console.log(error);
      }
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      // window.location.reload();
      console.log("new post: ", response.data);
      dispatch({ type: "ADD_POST", payload: response.data });
      desc.current.value = null;
      setFile(null);
      setFeelings("");
      setCurrentLocation({});
      setError(null);
    } catch (err) {
      console.log(error);
    }
  };

  const handleLocation = async () => {
    // Use browser's geolocation API to get the current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.log("Error getting current location:", error);
      }
    );
  };

  // console.log(location);

  const handleEmoji = async (e) => {
    setFeelings(e.native);
    setIsFeelingButtonClicked(false);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleEmojiSelect = () => {
    setIsFeelingButtonClicked(true);
  };

  useEffect(() => {
    if (file) {
      const postImgFile = file.name;
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
  }, [file, isVideo]);

  // const handleUpload = async () => {
  //   if (!desc.current.value) {
  //     return setError("Provide the descripiton for the Post");
  //   }

  //   const newPost = {
  //     userId: user._id,
  //     desc: desc.current.value,
  //   };

  //   if (file) {
  //     const data = new FormData();
  //     const fileName = Date.now() + file.name;
  //     data.append("name", fileName);
  //     data.append("file", file);
  //     newPost.img = fileName;
  //     // console.log(newPost);
  //     try {
  //       await axios.post(`${API_BASE_URL}/upload`, data, {
  //         headers: {
  //           Authorization: `Bearer ${user.token}`,
  //           "Content-Type": "multipart/form-data",
  //         },
  //       });
  //     } catch (err) {}
  //   }

  //   try {
  //     const response = await axios.post(`${API_BASE_URL}/posts`, newPost, {
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     });
  //     // window.location.reload();
  //     dispatch({ type: "ADD_POST", payload: response.data });
  //     desc.current.value = null;
  //     setFile(null);
  //   } catch (err) {}
  // };

  return (
    <>
      <div className="share-container">
        <div className="share-top">
          <div className="user-pic">
            <Link to={`/profile/${user._id}`}>
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
              placeholder={`What's on your mind, ${user.username}?`}
            />
          </div>
        </div>

        {error && <div className="error-desc"> {error}</div>}

        <div className="share-center">
          <hr />
        </div>
        <div className="share-bottom">
          <div className="photo-icon">
            <FaPhotoVideo className="photo-video" />
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

          <div className="location-icon">
            <MdLocationPin className="location" onClick={handleLocation} />
            <span>Location</span>
          </div>
          <div className="emotions-icon">
            <BsEmojiSmile className="emotions" onClick={handleEmojiSelect} />
            <label className="emotions-icon-label">feelings</label>
          </div>
          <div className="share-button">
            {/* <button className="btn-share" onClick={handleUpload}>
             */}
            <button className="btn-share" onClick={handleShare}>
              Share
            </button>
          </div>
        </div>

        {isFeelingButtonClicked && (
          <div
            className={hideEmojiWindow ? "hide-emoji-picker" : "emoji-picker"}
          >
            <Picker data={data} onEmojiSelect={handleEmoji} />
          </div>
        )}

        {/* {location && <Location />} */}

        {/* priview photo or image */}

        {file && !isVideo && (
          <div className="share-img-preview-container">
            <img className="share-img" src={URL.createObjectURL(file)} alt="" />
            <MdOutlineCancel
              className="share-cancel-img"
              onClick={() => setFile(null)}
            />
          </div>
        )}
        {/* preview video */}

        {file && isVideo && (
          <div className="share-img-preview-container">
            <video
              className="share-img"
              src={URL.createObjectURL(file)}
              alt=""
            />
            <MdOutlineCancel
              className="share-cancel-img"
              onClick={() => setFile(null)}
            />
          </div>
        )}

        {/* preview Emoji */}

        {feelings && (
          <div className="share-emoji-preview-container">
            <div className="share-emoji-pic">{feelings}</div>
          </div>
        )}

        {/* preview map */}

        {Object.keys(currentLocation).length > 0 && (
          <Location currentLocation={currentLocation} />
        )}
      </div>
    </>
  );
};

export default Share;
