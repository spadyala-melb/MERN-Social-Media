import React, { useEffect, useRef, useState } from "react";
import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";
import { useUserContext } from "../../hooks/useUserContext";
import { useFriendsContext } from "../../hooks/useFriendsContext";
import { useMessagesContext } from "../../hooks/useMessagesContext";
import Online from "../../components/online/Online";
import Message from "../../components/message/Message";
import Conversation from "../../components/conversations/Conversation";
import axios from "axios";
import { API_BASE_URL } from "../../utils/constants";

const Messenger = () => {
  const [conversation, setConversation] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const { user } = useUserContext();
  const { friends } = useFriendsContext();
  const { dispatch } = useMessagesContext();
  const [newMessageText, setNewMessageText] = useState("");

  useEffect(() => {
    const fetchConversations = async () => {
      const response = await axios.get(
        `${API_BASE_URL}/conversations/user/${user._id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setConversations(response.data);
      // dispatch({ type: "SET_FRIENDS", payload: response.data });
    };
    fetchConversations();
  }, [user]);

  const handleOnClickFromChild = async (conversation) => {
    const response = await axios.get(
      `${API_BASE_URL}/messages/conversations/${conversation._id}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    setMessages(response.data);
    dispatch({ type: "SET_MESSAGES", payload: response.data });
    setConversation(conversation);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      conversationId: conversation._id,
      senderId: user._id,
      text: newMessageText,
    };

    const response = await axios.post(`${API_BASE_URL}/messages`, data, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    dispatch({ type: "ADD_MESSAGE", payload: data });
    setMessages([...messages, data]);
    setNewMessageText("");
    // console.log("messages: ", messages);
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <Topbar />
      <div className="messenger-chat">
        <div className="conversations">
          <div className="navbar-space"></div>
          <div className="conversations-search-input">
            <input type="text" placeholder="Search for friends..." />
          </div>
          <div className="conversationsList">
            {conversations.map((conversation) => (
              <div className="conversation-item" key={conversation._id}>
                <Conversation
                  conversation={conversation}
                  onEvent={handleOnClickFromChild}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="navbar-space"></div>
          <div className="message-container">
            {messages?.length === 0 && (
              <div className="start-new-conversation">
                Start a new conversation
              </div>
            )}

            {messages?.map((message) => (
              <div ref={scrollRef}>
                <Message message={message} key={message._id} />
              </div>
            ))}
          </div>
          <div>
            <form onSubmit={handleSubmit} className="message-submit-section">
              <textarea
                className="message-textarea"
                placeholder="Write something..."
                onChange={(e) => setNewMessageText(e.target.value)}
                value={newMessageText}
              ></textarea>
              <button className="btn-send">Send</button>
            </form>
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
