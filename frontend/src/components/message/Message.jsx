import React, { useEffect, useState } from "react";
import "./message.css";
import { useUserContext } from "../../hooks/useUserContext";
import TimeAgo from "timeago-react";
import { useFriendsContext } from "../../hooks/useFriendsContext";

const Message = ({ message }) => {
  const [isMessageOwn, setIsMessageOwn] = useState(false);
  const [friend, setFriend] = useState(null);
  const { user } = useUserContext();
  const { friends } = useFriendsContext();

  // console.log("message => ", message);

  useEffect(() => {
    user._id === message.senderId
      ? setIsMessageOwn(true)
      : setIsMessageOwn(false);
  }, [message.senderId, user._id]);

  useEffect(() => {
    const newFriends = friends.filter((fr) => fr._id !== user._id);
    // console.log("nwFriends: ", newFriends);
    const friend = newFriends.find((friend) => friend._id === message.senderId);
    setFriend(friend);
  }, [friends, message.senderId, user._id]);

  // console.log("friends: ", friends);

  // console.log("friend => ", friend);

  return (
    <>
      <div className="message-box">
        <div
          className={isMessageOwn ? "message-content own" : "message-content"}
        >
          <div className="message-owner-pic">
            <img
              src={isMessageOwn ? user?.profilePicture : friend?.profilePicture}
              alt=""
            />
          </div>
          <div className={isMessageOwn ? "message-text own" : "message-text"}>
            {message?.text}
          </div>
        </div>
        <div
          className={
            isMessageOwn ? "message-timestamp own" : "message-timestamp"
          }
        >
          <TimeAgo datetime={message?.createdAt} />
        </div>
      </div>
    </>
  );
};

export default Message;
