import React from "react";
import "./conversation.css";
import { FaUserAlt } from "react-icons/fa";
import { useFriendsContext } from "../../hooks/useFriendsContext";
import { useUserContext } from "../../hooks/useUserContext";

const Conversation = ({ conversation, onEvent }) => {
  // console.log("conversation: ", conversation);
  const { friends } = useFriendsContext();
  const { user } = useUserContext();

  const friendIdInConversation = conversation.members.find(
    (element) => element !== user._id
  );

  const friend = friends.find(
    (friend) => friend._id === friendIdInConversation
  );

  const handleClick = () => {
    onEvent(conversation);
  };

  // console.log("friend => ", friend);

  return (
    <>
      <div className="friends-list-item" onClick={handleClick}>
        <span className="friend-name">
          {friend?.profilePicture ? (
            <img src={friend?.profilePicture} alt="" />
          ) : (
            <FaUserAlt className="friend-empty-avatar" />
          )}
        </span>
        <span>
          <p className="friend-name">{friend?.username}</p>
        </span>
      </div>
    </>
  );
};

export default Conversation;
