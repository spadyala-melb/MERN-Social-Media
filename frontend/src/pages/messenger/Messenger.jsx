import React from "react";
import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";
import { useUserContext } from "../../hooks/useUserContext";
import { useFriendsContext } from "../../hooks/useFriendsContext";
import Friend from "../../components/friend/Friend";
import Online from "../../components/online/Online";
import Message from "../../components/message/Message";

const Messenger = () => {
  const { user } = useUserContext();
  const { friends } = useFriendsContext();
  const isMessageOwn = true;
  return (
    <>
      <Topbar />
      <div className="messenger-chat">
        <div className="navbar-space"></div>
        <div className="conversations">
          <div className="navbar-space"></div>
          <div className="conversations-search-input">
            <input type="text" placeholder="Search for friends..." />
          </div>
          <div className="conversationsList">
            {friends.map((friend) => (
              <div className="conversation-item" key={friend._id}>
                <Friend key={friend._id} friend={friend} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="message-container">
            <div className="navbar-space"></div>
            <Message isMessageOwn={false} />
            <Message isMessageOwn={true} />
            <Message isMessageOwn={false} />
            <Message isMessageOwn={true} />
            <Message isMessageOwn={false} />
            <Message isMessageOwn={true} />
            <Message isMessageOwn={false} />
            <Message isMessageOwn={true} />
            <Message isMessageOwn={false} />
            <Message isMessageOwn={true} />
            <Message isMessageOwn={false} />
            <Message isMessageOwn={true} />
            <Message isMessageOwn={false} />
            <Message isMessageOwn={true} />
            <Message isMessageOwn={false} />
            <Message isMessageOwn={true} />
          </div>
          <div className="message-submit-section">
            <textarea
              className="message-textarea"
              placeholder="Write something..."
              // cols="100"
              // rows="8"
            ></textarea>
            <button className="btn-send">Send</button>
          </div>
        </div>
        <div className="chatOnlineFriends">
          <div className="navbar-space"></div>
          {friends.map((user) => (
            <Online user={user} key={user._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Messenger;
