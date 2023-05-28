import React from "react";
import "./message.css";

const Message = ({ isMessageOwn }) => {
  console.log("isMessageOwn: ", isMessageOwn);

  return (
    <>
      <div className="message-box">
        <div
          className={isMessageOwn ? "message-content own" : "message-content"}
        >
          <div className="message-owner-pic">
            <img src="/assets/person/1.jpeg" alt="" />
          </div>
          <div className={isMessageOwn ? "message-text own" : "message-text"}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure neque
            voluptates?
          </div>
        </div>
        <div
          className={
            isMessageOwn ? "message-timestamp own" : "message-timestamp"
          }
        >
          10 mins ago
        </div>
      </div>
    </>
  );
};

export default Message;
