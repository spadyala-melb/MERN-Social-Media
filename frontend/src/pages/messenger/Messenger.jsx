import React from "react";
import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";
import { useUserContext } from "../../hooks/useUserContext";
import { useFriendsContext } from "../../hooks/useFriendsContext";
import Friend from "../../components/friend/Friend";
import Online from "../../components/online/Online";

const Messenger = () => {
  const { user } = useUserContext();
  const { friends } = useFriendsContext();

  return (
    <>
      <Topbar />
      <div className="messenger-chat">
        <div className="chatMenu">
          <div className="chatmenu-search-input">
            <input type="text" placeholder="Search for friends..." />
          </div>
          <div className="friendsList ">
            {friends.map((friend) => (
              <Friend key={friend._id} friend={friend} />
            ))}
          </div>
        </div>
        <div className="chatBox">Chatbox</div>
        <div className="chatOnlineFriends">
          {friends.map((user) => (
            <Online user={user} key={user._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Messenger;
